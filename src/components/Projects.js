// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Create a CSS file for styling

const projects = [
  { title: 'HIV-1 Research', img: '/path-to-image.jpg' },
  { title: 'Car Price Analysis', img: '/path-to-image.jpg' },
  // Add more projects
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div className="project" key={project.title}>
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
