import React, { useState } from 'react';
import './MainSection.css';
import SnakeGame from './SnakeGame';

const MainSection = () => {
  const [showGame, setShowGame] = useState(false);

  const handleExploreClick = () => {
    setShowGame(true);
  };

  const handleCloseGame = () => {
    setShowGame(false);
  };

  return (
    <section id="main-section" className="main-section">
      <h2>Discover my Amazing Art Space!</h2>
      <p><code>I build web applications and simple games for fun.</code></p>
      <button onClick={handleExploreClick}>Explore Now</button>
      {showGame && (
        <div className="game-popup">
          <div className="game-popup-content">
            <button className="close-game" onClick={handleCloseGame}>X</button>
            <SnakeGame />
          </div>
        </div>
      )}
    </section>
  );
};

export default MainSection;
