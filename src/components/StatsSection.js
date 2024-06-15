import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat">
        <h3>10+</h3>
        <p>Years Experience</p>
      </div>
      <div className="stat">
        <h3>143</h3>
        <p>Completed Projects</p>
      </div>
      <div className="stat">
        <h3>114</h3>
        <p>Happy Customers</p>
      </div>
      <div className="stat">
        <h3>20+</h3>
        <p>Honors and Awards</p>
      </div>
    </section>
  );
};

export default StatsSection;
