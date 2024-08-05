import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navigation() {
  const currentPage = useLocation().pathname;

  // Function to determine active class based on current page
  function isActive(path) {
    return currentPage === path ? 'nav-link active' : 'nav-link';
  }

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={isActive('/')}>
          Slots
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/music" className={isActive('/music')}>
          Music
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;