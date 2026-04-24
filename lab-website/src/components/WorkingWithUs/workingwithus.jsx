import React from 'react';
import './workingwithus.css';
import { workingWithUsData } from './workingwithusdata';

function WorkingWithUs() {
  return (
    <div className="working-with-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Working With Us</h1>
          <p className="hero-subtitle">
            Join our research team and contribute to cutting-edge work in Systems and AI
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="content-container">
        {/* K-12 Section */}
        <section className="opportunity-section">
          <div className="section-header">
            <h2>K-12 Students</h2>
            <span className="section-badge">Outreach</span>
          </div>
          <div className="section-content">
            <p className="intro-text">
              We welcome opportunities to engage with K-12 students through outreach programs, 
              lab tours, and educational workshops.
            </p>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Interested in learning more?</h3>
                <p>Please email us to discuss potential opportunities and programs.</p>
                <a href="mailto:subramoni.1@osu.edu" className="email-button">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Undergraduate Section */}
        <section className="opportunity-section">
          <div className="section-header">
            <h2>Undergraduate Students</h2>
            <span className="section-badge">Research Opportunities</span>
          </div>
          <div className="section-content">
            <p className="intro-text">{workingWithUsData.undergraduate.intro}</p>
            {/* Lab Structure-new */}
            <div className="info-card" style={{ marginBottom: '1.5rem' }}>
              <h3>Working With the Lab</h3>
              <p>{workingWithUsData.undergraduate.labStructure.overview}</p> 
              <p>{workingWithUsData.undergraduate.labStructure.continuation}</p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                {workingWithUsData.undergraduate.labStructure.points.map((point, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="info-grid">
              {/* Prerequisites */}
              <div className="info-card">
                <h3>Prerequisites</h3>
                <ul className="feature-list">
                  {workingWithUsData.undergraduate.prerequisites.map((prereq, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expectations */}
              <div className="info-card">
                <h3>Expectations</h3>
                <ul className="feature-list">
                  {workingWithUsData.undergraduate.expectations.map((exp, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Process */}
            <div className="apply-section">
              <h3>Application Process</h3>
              <ul className="feature-list">
                {workingWithUsData.undergraduate.applicationProcess.map((step, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MS Students Section */}
        <section className="opportunity-section">
          <div className="section-header">
            <h2>Master's Students</h2>
            <span className="section-badge">Graduate Research</span>
          </div>
          <div className="section-content">
            <p className="intro-text">{workingWithUsData.masters.intro}</p>
            
            <div className="info-grid">
              {/* Prerequisites */}
              <div className="info-card">
                <h3>Prerequisites</h3>
                <ul className="feature-list">
                  {workingWithUsData.masters.prerequisites.map((prereq, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expectations */}
              <div className="info-card">
                <h3>Expectations</h3>
                <ul className="feature-list">
                  {workingWithUsData.masters.expectations.map((exp, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Process */}
            <div className="apply-section">
              <h3>Application Process</h3>
              <ul className="feature-list">
                {workingWithUsData.masters.applicationProcess.map((step, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Funding Requirements */}
            <div className="funding-notice">
              <h3>Funding Discussions</h3>
              <ul className="feature-list">
                {workingWithUsData.masters.fundingRequirements.map((req, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PhD Section */}
        <section className="opportunity-section">
          <div className="section-header">
            <h2>PhD Students</h2>
            <span className="section-badge">Doctoral Research</span>
          </div>
          <div className="section-content">
            <p className="intro-text">
              We are always looking for motivated PhD students to join our research group 
              and work on challenging problems in high-performance computing, distributed systems, 
              and AI infrastructure.
            </p>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Interested in pursuing a PhD?</h3>
                <p>
                  Please email Dr. Subramoni with your CV, research interests, and a brief 
                  statement about why you'd like to join our lab.
                </p>
                <a href="mailto:subramoni.1@osu.edu" className="email-button">
                  Email Dr. Subramoni
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkingWithUs;