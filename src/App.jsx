import './App.css';
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

// subjects //

function App() {
  return (
    <>
      <header className="header">
        <Header />
        <Navigation />
      </header>

      <div className="bucket-app">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;