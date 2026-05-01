import React, { useState } from 'react';
import './workingwithus.css';
import { workingWithUsData } from './workingwithusdata';

function WorkingWithUs() {
  const [expandedRole, setExpandedRole] = useState(null);

  const toggleRole = (index) => {
    setExpandedRole(expandedRole === index ? null : index);
  };
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
      <span className="section-badge">Youth Outreach</span>
    </div>
    <div className="section-content">
      <p className="intro-text">{workingWithUsData.k12.intro}</p>
      
      <div className="info-card" style={{ marginBottom: '1.5rem' }}>
        <h3>Lab Environment & Expectations</h3>
        <p>{workingWithUsData.k12.labEnvironment}</p>
        <ul className="feature-list" style={{ marginTop: '1rem' }}>
          {workingWithUsData.k12.expectations.map((item, idx) => (
            <li key={idx}><span className="checkmark">✓</span>{item}</li>
          ))}
        </ul>
      </div>

      <h3>Available Position Types</h3>
      <div className="accordion-container">
        {workingWithUsData.k12.roles.map((role, idx) => (
          <div key={idx} className={`accordion-item ${expandedRole === idx ? 'active' : ''}`}>
            <button className="accordion-header" onClick={() => toggleRole(idx)}>
              {role.title}
              <span className="arrow">{expandedRole === idx ? '−' : '+'}</span>
            </button>
            
            {expandedRole === idx && (
              <div className="accordion-body">
                <div className="role-grid">
                  <div>
                    <h4>Desired Skills</h4>
                    <ul>{role.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
                  </div>
                  <div>
                    <h4>What You'll Do</h4>
                    <ul>{role.tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
                  </div>
                  <div>
                    <h4>What You'll Gain</h4>
                    <ul>{role.gains.map((g, i) => <li key={i}>{g}</li>)}</ul>
                  </div>
                  <div>
                    <h4>Expectations for this Role</h4>
                    <ul>{role.specificExpectations.map((e, i) => <li key={i}>{e}</li>)}</ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* General Notes styled nicely */}
      <div className="info-card" style={{ marginTop: '2rem', backgroundColor: '#fffaf0', border: '1px solid #feebc8' }}>
        <h3>General Notes for Families and Counselors</h3>
        <p style={{ fontSize: '0.95rem', color: '#744210', lineHeight: '1.6' }}>
          {workingWithUsData.k12.generalNotes}
        </p>
      </div>

      <div className="contact-card" style={{ marginTop: '2rem' }}>
        <div className="contact-info">
          <h3>Ready to explore?</h3>
          <p>Email us to discuss these youth opportunities or for general lab tours.</p>
          <a href="mailto:subramoni.1@osu.edu" className="email-button">Contact Us</a>
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