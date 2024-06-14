// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  { title: 'HIV-1 Research', img: require('../assets/images/project1.png') },
  { title: 'Car Price Analysis', img: require('../assets/images/project2.png') },
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
