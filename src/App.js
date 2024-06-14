// src/App.js
import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import './App.css'; // Create a CSS file for global styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <Showcase />
    </div>
  );
};

export default App;
