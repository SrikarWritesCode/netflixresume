import React, { useState } from 'react';
import './Header.css';
import resume from '../assets/resume.pdf'; // Ensure this path is correct

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleHireMeClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className="header">
      <div className="profile-info">
        <h1>Guhan Balaji</h1>
        <p>Software Engineer</p>
        <p2>Choose one option here</p2>
        <div className="buttons">
          <button className="hire-me" onClick={handleHireMeClick}>Hire me</button>
          <button className="view-projects">View Projects</button>
        </div>
        <div className="scroll-arrow" onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}>
          ↓
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-popup" onClick={handleClosePopup}>X</button>
            <h2>Contact Me</h2>
            <p><a href={resume} download>Download Resume</a></p>
            <p>Email: <a href="guhanbalaji7@asu.edu">guhanbalaji7@asu.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/guhan-balaji" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p>GitHub: <a href="https://github.com/guhan-balaji" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
