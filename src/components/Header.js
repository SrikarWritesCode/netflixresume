import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-info">
        <h1>Guhan Balaji</h1>
        <p>Software Engineer</p>
        <div className="buttons">
          <button className="hire-me">Hire me</button>
          <button className="view-projects">View Projects</button>
        </div>
        <div className="scroll-arrow" onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}>
          ↓
        </div>
      </div>
    </header>
  );
};

export default Header;
