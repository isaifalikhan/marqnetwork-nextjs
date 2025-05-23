import React from 'react';
import './ToolsSection.css';

const ToolsSection = () => {
  return (
    <section className="tools">
      <div className="tools__content">
        <span className="tools__tag">• Tools</span>

        <h2 className="tools__headline">
         Our Proven Tech Arsenal<br />
          <span>Tailored to Every Business Stage</span>
        </h2>

        <p className="tools__description">
         From idea to enterprise rollout, marQ Networks selects the perfect stack <br />
         so your strategy, design, code, growth, and scale run on best-in-class tools.
        </p>

        <div className="tools__actions">
          <button className="tools__button">Book an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
