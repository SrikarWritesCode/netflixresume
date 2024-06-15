import React from 'react';
import './ServicesSection.css';

const services = [
  { title: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'UI/UX Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Sound Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Game Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Advertising', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Photography', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const ServicesSection = () => {
  return (
    <section id="services-section" className="services-section">
      <h2>My Services</h2>
      <div className="services-list">
        {services.map(service => (
          <div className="service" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>My Skill</button>
          </div>
        ))}
      </div>
      <div className="scroll-arrow" onClick={() => document.getElementById('main-section').scrollIntoView({ behavior: 'smooth' })}>
        ↓
      </div>
    </section>
  );
};

export default ServicesSection;
