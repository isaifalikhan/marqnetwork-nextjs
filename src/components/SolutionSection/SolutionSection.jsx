"use client";
import React from 'react';
import './SolutionSection.css';

const SolutionSection = () => {
  return (
    <section 
      className="solution-section" 
      style={{ backgroundImage: `url(/images/solutionbg.png)` }}
    >
      <div className="solution-container">
        {/* Tag */}
        <div className="solution-tag">
          <span className="solution-year">2025</span>
          <span className="solution-tag-text">Our Solution</span>
        </div>

        {/* Headings */}
        <h1 className="solution-heading">
          Discover <span>marQ Solutions</span><br />
          Where Challenges <span>Meet Clarity.</span>
        </h1>

        {/* Subtext */}
        <p className="solution-subtext">
          Dive deep into our approach to transforming growth challenges into clear, effective solutions—<br className="solution-break" />
          guided by innovation, strategy, and speed.
        </p>

        {/* Buttons */}
        <div className="solution-buttons">
          <button className="solution-btn primary">Get In Touch</button>
          <button className="solution-btn secondary">See How We Solve</button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
