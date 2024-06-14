// src/components/Experience.js
import React from 'react';
import './Experience.css'; // Create a CSS file for styling

const experiences = [
  { title: 'PhD Student', img: '/path-to-image.jpg' },
  { title: 'Research Assistant', img: '/path-to-image.jpg' },
  // Add more experiences
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map(experience => (
          <div className="experience-item" key={experience.title}>
            <img src={experience.img} alt={experience.title} className="experience-image" />
            <h3>{experience.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
