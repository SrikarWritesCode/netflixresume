// src/components/Showcase.js
import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import './Showcase.css';

const Showcase = () => {
  return (
    <div className="showcase">
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Showcase;
