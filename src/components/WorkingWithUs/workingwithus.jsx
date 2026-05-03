import React, { useState, useEffect } from 'react';
import './workingwithus.css';
import { workingWithUsData } from './workingwithusdata';

function WorkingWithUs() {
  const [expandedRole, setExpandedRole] = useState(null);
  const [activeSection, setActiveSection] = useState('k12');

  const [openSections, setOpenSections] = useState({
    k12: true,
    undergrad: false,
    masters: false,
    phd: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleMajorSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleRole = (index) => {
    setExpandedRole(expandedRole === index ? null : index);
  };

  const scrollToSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { id: 'k12',       label: 'K-12 Students' },
    { id: 'undergrad', label: 'Undergraduate' },
    { id: 'masters',   label: "Master's Students" },
    { id: 'phd',       label: 'PhD Opportunities' },
  ];

  return (
    <div className="working-with-us-page">
      {/* Hero spans full width, outside the flex layout */}
      <div className="working-with-us-hero-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Working With Us</h1>
            <p className="hero-subtitle">
              Join our research team and contribute to cutting-edge work in Systems and AI
            </p>
          </div>
        </section>
      </div>

      {/* Flex layout: content left, nav right */}
      <div className="working-with-us-layout">

        {/* MAIN CONTENT */}
        <div className="working-with-us">
          <div className="content-container">

            {/* K-12 SECTION */}
            <section id="k12" className={`opportunity-section ${openSections.k12 ? 'is-open' : 'is-closed'}`}>
              <div className="section-header collapsible" onClick={() => toggleMajorSection('k12')}>
                <div className="header-left">
                  <span className={`section-toggle-icon ${openSections.k12 ? 'open' : ''}`}>▶</span>
                  <h2>K-12 Students</h2>
                </div>
                <span className="section-badge">Youth Outreach</span>
              </div>

              {openSections.k12 && (
                <div className="section-content animate-fade-in">
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
              )}
            </section>

            {/* UNDERGRADUATE SECTION */}
            <section id="undergrad" className={`opportunity-section ${openSections.undergrad ? 'is-open' : 'is-closed'}`}>
              <div className="section-header collapsible" onClick={() => toggleMajorSection('undergrad')}>
                <div className="header-left">
                  <span className={`section-toggle-icon ${openSections.undergrad ? 'open' : ''}`}>▶</span>
                  <h2>Undergraduate Students</h2>
                </div>
                <span className="section-badge">Research Opportunities</span>
              </div>

              {openSections.undergrad && (
                <div className="section-content animate-fade-in">
                  <p className="intro-text">{workingWithUsData.undergraduate.intro}</p>
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
                    <div className="info-card">
                      <h3>Prerequisites</h3>
                      <ul className="feature-list">
                        {workingWithUsData.undergraduate.prerequisites.map((prereq, idx) => (
                          <li key={idx}><span className="checkmark">✓</span>{prereq}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="info-card">
                      <h3>Expectations</h3>
                      <ul className="feature-list">
                        {workingWithUsData.undergraduate.expectations.map((exp, idx) => (
                          <li key={idx}><span className="checkmark">✓</span>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="apply-section">
                    <h3>Application Process</h3>
                    <ul className="feature-list">
                      {workingWithUsData.undergraduate.applicationProcess.map((step, idx) => (
                        <li key={idx}><span className="checkmark">✓</span>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* MASTERS SECTION */}
            <section id="masters" className={`opportunity-section ${openSections.masters ? 'is-open' : 'is-closed'}`}>
              <div className="section-header collapsible" onClick={() => toggleMajorSection('masters')}>
                <div className="header-left">
                  <span className={`section-toggle-icon ${openSections.masters ? 'open' : ''}`}>▶</span>
                  <h2>Master's Students</h2>
                </div>
                <span className="section-badge">Graduate Research</span>
              </div>

              {openSections.masters && (
                <div className="section-content animate-fade-in">
                  <p className="intro-text">{workingWithUsData.masters.intro}</p>

                  <div className="info-grid">
                    <div className="info-card">
                      <h3>Prerequisites</h3>
                      <ul className="feature-list">
                        {workingWithUsData.masters.prerequisites.map((prereq, idx) => (
                          <li key={idx}><span className="checkmark">✓</span>{prereq}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="info-card">
                      <h3>Expectations</h3>
                      <ul className="feature-list">
                        {workingWithUsData.masters.expectations.map((exp, idx) => (
                          <li key={idx}><span className="checkmark">✓</span>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="apply-section">
                    <h3>Application Process</h3>
                    <ul className="feature-list">
                      {workingWithUsData.masters.applicationProcess.map((step, idx) => (
                        <li key={idx}><span className="checkmark">✓</span>{step}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="funding-notice">
                    <h3>Funding Discussions</h3>
                    <ul className="feature-list">
                      {workingWithUsData.masters.fundingRequirements.map((req, idx) => (
                        <li key={idx}><span className="checkmark">✓</span>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>

            {/* PHD SECTION */}
            <section id="phd" className={`opportunity-section ${openSections.phd ? 'is-open' : 'is-closed'}`}>
              <div className="section-header collapsible" onClick={() => toggleMajorSection('phd')}>
                <div className="header-left">
                  <span className={`section-toggle-icon ${openSections.phd ? 'open' : ''}`}>▶</span>
                  <h2>PhD Students</h2>
                </div>
                <span className="section-badge">Doctoral Research</span>
              </div>

              {openSections.phd && (
                <div className="section-content animate-fade-in">
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
              )}
            </section>

          </div> {/* end content-container */}
        </div> {/* end working-with-us */}

        {/* SIDE NAV */}
        <nav className="side-nav">
          <p className="side-nav-title">On This Page</p>
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id} className={activeSection === id ? 'active' : ''}>
                <button onClick={() => scrollToSection(id)}>
                  <span className="side-nav-indicator" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

      </div> {/* end working-with-us-layout */}
    </div>
  );
}

export default WorkingWithUs;