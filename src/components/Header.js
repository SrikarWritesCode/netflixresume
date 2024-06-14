// src/components/Header.js
import React from 'react';
import './Header.css';
import profilePicture from '../assets/images/profile.png';

const Header = () => {
  return (
    <header className="header">
      <img src={profilePicture} alt="Jeffy Jeffy" className="profile-photo" />
      <h1>Jeffy Jeffy</h1>
    </header>
  );
};

export default Header;
