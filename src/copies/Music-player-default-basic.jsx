// this is react player with the inbuilt music controls (volume play pause song progress)

// playback speed
// 0:00 / 0:00 (first progress, second song duration)
 

import { useState } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    { url: '../../public/sounds/thethingintroduces.mp3', title: '01 The Thing Introduces - Jaga Jazzist' },
    { url: '../../public/sounds/onearmedbandit.mp3', title: '02 One Armed Bandit - Jaga Jazzist' },
    { url: '../../public/sounds/banana.mp3', title: '03 Bananfluer Overalt - Jaga Jazzist' },
    { url: '../../public/sounds/spektral.mp3', title: '04 220 V Spektral (Final Mix) - Jaga Jazzist' },
    { url: '../../public/sounds/shrine.mp3', title: '05 The Shrine (OKIOK Remix) - Jaga Jazzist' },
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <div className="title-bar">
        <div className="title2">.ılılılllıılılıllllıılılllıllı</div>
        <div className="title2">Now Playing:</div>
        <div className="title">{songs[currentSongIndex].title}</div>
        <div className="title2">.ılılılllıılılıllllıılılllıllı</div>
      </div>
      <ReactPlayer
        url={songs[currentSongIndex].url}
        playing={isPlaying}
        controls
        onEnded={handleNextSong}
      />
      <div className="controls">
        <button className="control-button" onClick={handlePreviousSong}> ◁◁ </button>
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? ' ||  ' : '▷'}
        </button>
        <button className="control-button" onClick={handleNextSong}> ▷▷ </button>
      </div>
    </div>
  );
};

export default MusicPlayer;