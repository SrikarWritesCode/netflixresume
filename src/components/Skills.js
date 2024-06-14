// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Create a CSS file for styling

const skills = ['JavaScript', 'React', 'PySpark', 'Azure Databricks', 'RNNs'];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <div className="skill" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
