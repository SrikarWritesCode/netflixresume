// src/components/Experience.js
import React from 'react';
import './Experience.css';

const experiences = [
  { title: 'PhD Student', img: require('../assets/images/experience1.png').default },
  { title: 'Research Assistant', img: require('../assets/images/experience2.png').default },
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
