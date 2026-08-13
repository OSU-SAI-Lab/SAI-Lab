import React, { useEffect, useState } from 'react';
import './workingwithus.css';
import { workingWithUsData } from './workingwithusdata';

function WorkingWithUs() {
  const [expandedRole, setExpandedRole] = useState(null);
  const [activeSection, setActiveSection] = useState('start');

  const [openSections, setOpenSections] = useState({
    k12: false,
    undergrad: false,
    masters: false,
    phd: false,
  });

  /*
   * Applicant-facing information required by Issue 15.
   *
   * We intentionally use "Varies by project" where the repository does
   * not establish a guaranteed funding/credit arrangement.
   */
  const pathwayDetails = {
    k12: {
      eligibility:
        'K-12 students, families, teachers, and counselors interested in learning about Systems and AI research.',
      expectations:
        'Participate in age-appropriate outreach, demonstrations, lab visits, or exploratory activities when available.',
      timeline:
        'Outreach opportunities are scheduled based on lab availability. Contact the lab before planning a visit or activity.',
      opportunityType: 'Exploratory / Outreach',
      firstStep:
        'Contact the lab with your school, grade level, area of interest, and the type of outreach experience you are looking for.',
      contactName: 'Dr. Hari Subramoni',
      contactEmail: 'subramoni.1@osu.edu',
    },

    undergrad: {
      eligibility:
        'Current undergraduate students interested in Systems, AI, high-performance computing, distributed systems, or related research.',
      expectations:
        'Meet the listed prerequisites, participate consistently in research activities, communicate progress, and work with lab mentors.',
      timeline:
        'Research opportunities depend on active projects and mentor availability. Students should reach out before the semester in which they hope to participate.',
      opportunityType:
        'Research — volunteer, course-credit, or funded arrangements may vary by project',
      firstStep:
        'Review the lab research areas and prepare a short description of the research area or project that interests you.',
      contactName: 'Dr. Hari Subramoni',
      contactEmail: 'subramoni.1@osu.edu',
    },

    masters: {
      eligibility:
        "Master's students with relevant technical preparation and an interest in contributing to Systems and AI research.",
      expectations:
        'Meet the listed prerequisites, contribute consistently to a research project, communicate progress, and work toward defined research outcomes.',
      timeline:
        'Availability depends on active research projects, advisor capacity, and funding. Contact the lab before the semester in which you want to begin.',
      opportunityType:
        'Graduate Research — funding and appointment type vary by project',
      firstStep:
        'Review current research areas and contact the lab with your CV, technical background, and research interests.',
      contactName: 'Dr. Hari Subramoni',
      contactEmail: 'subramoni.1@osu.edu',
    },

    phd: {
      eligibility:
        'Prospective or current PhD students interested in high-performance computing, distributed systems, AI infrastructure, and related research.',
      expectations:
        'Pursue sustained research, develop independent research skills, collaborate with the group, and contribute to publications and research outcomes.',
      timeline:
        'PhD opportunities depend on admissions, advisor availability, active projects, and funding.',
      opportunityType:
        'Doctoral Research — funding depends on available projects and appointments',
      firstStep:
        'Email Dr. Subramoni with your CV, research interests, and a brief statement explaining why you are interested in joining the lab.',
      contactName: 'Dr. Hari Subramoni',
      contactEmail: 'subramoni.1@osu.edu',
    },
  };

  const navItems = [
    { id: 'start', label: 'Start Here' },
    { id: 'k12', label: 'K-12 Outreach' },
    { id: 'undergrad', label: 'Undergraduate' },
    { id: 'masters', label: "Master's Students" },
    { id: 'phd', label: 'PhD Opportunities' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMajorSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleRole = (index) => {
    setExpandedRole((current) => (current === index ? null : index));
  };

  const scrollToSection = (id) => {
    if (id !== 'start') {
      setOpenSections((prev) => ({
        ...prev,
        [id]: true,
      }));
    }

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  const renderDecisionSummary = (sectionId) => {
    const details = pathwayDetails[sectionId];

    return (
      <div className="decision-summary">
        <div className="decision-item">
          <span className="decision-label">Eligibility</span>
          <p>{details.eligibility}</p>
        </div>

        <div className="decision-item">
          <span className="decision-label">Expectations</span>
          <p>{details.expectations}</p>
        </div>

        <div className="decision-item">
          <span className="decision-label">Timeline</span>
          <p>{details.timeline}</p>
        </div>

        <div className="decision-item">
          <span className="decision-label">Opportunity Type</span>
          <p>{details.opportunityType}</p>
        </div>

        <div className="decision-item decision-item-wide first-step-item">
          <span className="decision-label">Recommended First Step</span>
          <p>{details.firstStep}</p>
        </div>

        <div className="decision-item decision-item-wide contact-decision-item">
          <span className="decision-label">Contact</span>

          <p>
            {details.contactName}
            {' · '}
            <a href={`mailto:${details.contactEmail}`}>
              {details.contactEmail}
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="working-with-us-page">
      {/* HERO */}
      <div className="working-with-us-hero-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Working With Us</h1>

            <p className="hero-subtitle">
              Join our research team and contribute to cutting-edge work in
              Systems and AI
            </p>
          </div>
        </section>
      </div>

      <div className="working-with-us-layout">
        {/* MAIN CONTENT */}
        <main className="working-with-us">
          <div className="content-container">

            {/* ========================================================= */}
            {/* START HERE */}
            {/* ========================================================= */}

            <section
              id="start"
              className="opportunity-section start-here-section"
            >
              <div className="section-header static-header">
                <div className="header-left">
                  <h2>Where Should I Start?</h2>
                </div>
              </div>

              <p className="intro-text">
                Choose the pathway that best describes what you are looking
                for. Outreach opportunities are separated from research
                positions so you can quickly understand whether you are
                eligible and what to do next.
              </p>

              <div className="pathway-groups">

                {/* OUTREACH */}
                <div className="pathway-group">
                  <div className="pathway-group-heading">
                    <span className="pathway-eyebrow">Outreach</span>
                    <h3>Explore Systems & AI</h3>

                    <p>
                      For students, schools, families, and counselors looking
                      for an introduction to the lab rather than a formal
                      research position.
                    </p>
                  </div>

                  <button
                    className="pathway-card"
                    onClick={() => scrollToSection('k12')}
                  >
                    <span className="pathway-card-type">
                      Exploratory / Outreach
                    </span>

                    <strong>K-12 Students</strong>

                    <span>
                      Learn about lab outreach, demonstrations, visits, and
                      exploratory opportunities.
                    </span>

                    <span className="pathway-link">
                      View K-12 opportunities →
                    </span>
                  </button>
                </div>

                {/* RESEARCH */}
                <div className="pathway-group">
                  <div className="pathway-group-heading">
                    <span className="pathway-eyebrow">
                      Research Positions
                    </span>

                    <h3>Join the Research Team</h3>

                    <p>
                      For students seeking sustained research experience with
                      the lab.
                    </p>
                  </div>

                  <div className="research-pathway-list">
                    <button
                      className="pathway-card"
                      onClick={() => scrollToSection('undergrad')}
                    >
                      <span className="pathway-card-type">
                        Research Opportunity
                      </span>

                      <strong>Undergraduate Students</strong>

                      <span>
                        Contribute to active research while developing
                        technical and research skills.
                      </span>

                      <span className="pathway-link">
                        View undergraduate pathway →
                      </span>
                    </button>

                    <button
                      className="pathway-card"
                      onClick={() => scrollToSection('masters')}
                    >
                      <span className="pathway-card-type">
                        Graduate Research
                      </span>

                      <strong>Master&apos;s Students</strong>

                      <span>
                        Work on research projects aligned with your technical
                        background and interests.
                      </span>

                      <span className="pathway-link">
                        View master&apos;s pathway →
                      </span>
                    </button>

                    <button
                      className="pathway-card"
                      onClick={() => scrollToSection('phd')}
                    >
                      <span className="pathway-card-type">
                        Doctoral Research
                      </span>

                      <strong>PhD Students</strong>

                      <span>
                        Pursue long-term research in Systems, AI, HPC, and
                        related areas.
                      </span>

                      <span className="pathway-link">
                        View PhD pathway →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================= */}
            {/* OUTREACH HEADING */}
            {/* ========================================================= */}

            <div className="category-divider">
              <span>Outreach & Exploration</span>
              <h2>Learn About the Lab</h2>
              <p>
                These opportunities are intended for exploration and outreach
                rather than formal research appointments.
              </p>
            </div>

            {/* ========================================================= */}
            {/* K-12 */}
            {/* ========================================================= */}

            <section
              id="k12"
              className={`opportunity-section ${
                openSections.k12 ? 'is-open' : 'is-closed'
              }`}
            >
              <button
                type="button"
                id="k12-button"
                className="section-header collapsible"
                onClick={() => toggleMajorSection('k12')}
                aria-expanded={openSections.k12}
                aria-controls="k12-panel"
              >
                <div className="header-left">
                  <span
                    className={`section-toggle-icon ${
                      openSections.k12 ? 'open' : ''
                    }`}
                  >
                    ▶
                  </span>

                  <h2>K-12 Students</h2>
                </div>

                <span className="section-badge outreach-badge">
                  Youth Outreach
                </span>
              </button>

              <div hidden={!openSections.k12}>
                <div className="section-content animate-fade-in" id="k12-panel" role="region" aria-labelledby="k12-button">
                  {renderDecisionSummary('k12')}

                  <p className="intro-text">
                    {workingWithUsData.k12.intro}
                  </p>

                  <div className="info-card section-spacing">
                    <h3>Lab Environment & Expectations</h3>

                    <p>{workingWithUsData.k12.labEnvironment}</p>

                    <ul className="feature-list">
                      {workingWithUsData.k12.expectations.map(
                        (item, idx) => (
                          <li key={idx}>
                            <span className="checkmark">✓</span>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <h3 className="subsection-title">
                    Available Outreach Activities
                  </h3>

                  <div className="accordion-container">
                    {workingWithUsData.k12.roles.map((role, idx) => (
                      <div
                        key={idx}
                        className={`accordion-item ${
                          expandedRole === idx ? 'active' : ''
                        }`}
                      >
                        <button
                          type="button"
                          className="accordion-header"
                          id={`k12-role-${idx}-button`}
                          onClick={() => toggleRole(idx)}
                          aria-expanded={expandedRole === idx}
                          aria-controls={`k12-role-${idx}-panel`}
                        >
                          {role.title}

                          <span className="arrow">
                            {expandedRole === idx ? '−' : '+'}
                          </span>
                        </button>

                        {expandedRole === idx && (
                          <div className="accordion-body" id={`k12-role-${idx}-panel`} role="region" aria-labelledby={`k12-role-${idx}-button`}>
                            <div className="role-grid">
                              <div>
                                <h4>Desired Skills</h4>

                                <ul>
                                  {role.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4>What You&apos;ll Do</h4>

                                <ul>
                                  {role.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4>What You&apos;ll Gain</h4>

                                <ul>
                                  {role.gains.map((gain, i) => (
                                    <li key={i}>{gain}</li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4>Expectations for this Role</h4>

                                <ul>
                                  {role.specificExpectations.map(
                                    (expectation, i) => (
                                      <li key={i}>{expectation}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="info-card family-note">
                    <h3>General Notes for Families and Counselors</h3>
                    <p>{workingWithUsData.k12.generalNotes}</p>
                  </div>

                  <div className="contact-card">
                    <div className="contact-info">
                      <h3>Ready to explore?</h3>

                      <p>
                        Contact Dr. Hari Subramoni to discuss youth outreach,
                        exploratory opportunities, or lab visits.
                      </p>

                      <a
                        href="mailto:subramoni.1@osu.edu"
                        className="email-button"
                      >
                        Email Dr. Subramoni
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================= */}
            {/* RESEARCH PATHWAY HEADING */}
            {/* ========================================================= */}

            <div className="category-divider research-divider">
              <span>Research Positions</span>

              <h2>Join the Research Team</h2>

              <p>
                Undergraduate, master&apos;s, and PhD pathways are intended
                for students seeking sustained research experience.
              </p>
            </div>

            {/* ========================================================= */}
            {/* UNDERGRADUATE */}
            {/* ========================================================= */}

            <section
              id="undergrad"
              className={`opportunity-section ${
                openSections.undergrad ? 'is-open' : 'is-closed'
              }`}
            >
              <button
                type="button"
                id="undergrad-button"
                className="section-header collapsible"
                onClick={() => toggleMajorSection('undergrad')}
                aria-expanded={openSections.undergrad}
                aria-controls="undergrad-panel"
              >
                <div className="header-left">
                  <span
                    className={`section-toggle-icon ${
                      openSections.undergrad ? 'open' : ''
                    }`}
                  >
                    ▶
                  </span>

                  <h2>Undergraduate Students</h2>
                </div>

                <span className="section-badge">
                  Research Opportunities
                </span>
              </button>

              <div hidden={!openSections.undergrad}>
                <div className="section-content animate-fade-in" id="undergrad-panel" role="region" aria-labelledby="undergrad-button">
                  {renderDecisionSummary('undergrad')}

                  <p className="intro-text">
                    {workingWithUsData.undergraduate.intro}
                  </p>

                  <div className="info-card section-spacing">
                    <h3>Working With the Lab</h3>

                    <p>
                      {
                        workingWithUsData.undergraduate.labStructure
                          .overview
                      }
                    </p>

                    <p>
                      {
                        workingWithUsData.undergraduate.labStructure
                          .continuation
                      }
                    </p>

                    <ul className="feature-list">
                      {workingWithUsData.undergraduate.labStructure.points.map(
                        (point, idx) => (
                          <li key={idx}>
                            <span className="checkmark">✓</span>
                            {point}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="info-grid">
                    <div className="info-card">
                      <h3>Prerequisites</h3>

                      <ul className="feature-list">
                        {workingWithUsData.undergraduate.prerequisites.map(
                          (prereq, idx) => (
                            <li key={idx}>
                              <span className="checkmark">✓</span>
                              {prereq}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="info-card">
                      <h3>Expectations</h3>

                      <ul className="feature-list">
                        {workingWithUsData.undergraduate.expectations.map(
                          (expectation, idx) => (
                            <li key={idx}>
                              <span className="checkmark">✓</span>
                              {expectation}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="apply-section">
                    <h3>Application Process</h3>

                    <ul className="feature-list">
                      {workingWithUsData.undergraduate.applicationProcess.map(
                        (step, idx) => (
                          <li key={idx}>
                            <span className="checkmark">✓</span>
                            {step}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="contact-card">
                    <div className="contact-info">
                      <h3>Interested in undergraduate research?</h3>

                      <p>
                        Contact Dr. Hari Subramoni with your research
                        interests and relevant background.
                      </p>

                      <a
                        href="mailto:subramoni.1@osu.edu"
                        className="email-button"
                      >
                        Email Dr. Subramoni
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================= */}
            {/* MASTER'S */}
            {/* ========================================================= */}

            <section
              id="masters"
              className={`opportunity-section ${
                openSections.masters ? 'is-open' : 'is-closed'
              }`}
            >
              <button
                type="button"
                id="masters-button"
                className="section-header collapsible"
                onClick={() => toggleMajorSection('masters')}
                aria-expanded={openSections.masters}
                aria-controls="masters-panel"
              >
                <div className="header-left">
                  <span
                    className={`section-toggle-icon ${
                      openSections.masters ? 'open' : ''
                    }`}
                  >
                    ▶
                  </span>

                  <h2>Master&apos;s Students</h2>
                </div>

                <span className="section-badge">
                  Graduate Research
                </span>
              </button>

              <div hidden={!openSections.masters}>
                <div className="section-content animate-fade-in" id="masters-panel" role="region" aria-labelledby="masters-button">
                  {renderDecisionSummary('masters')}

                  <p className="intro-text">
                    {workingWithUsData.masters.intro}
                  </p>

                  <div className="info-grid">
                    <div className="info-card">
                      <h3>Prerequisites</h3>

                      <ul className="feature-list">
                        {workingWithUsData.masters.prerequisites.map(
                          (prereq, idx) => (
                            <li key={idx}>
                              <span className="checkmark">✓</span>
                              {prereq}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="info-card">
                      <h3>Expectations</h3>

                      <ul className="feature-list">
                        {workingWithUsData.masters.expectations.map(
                          (expectation, idx) => (
                            <li key={idx}>
                              <span className="checkmark">✓</span>
                              {expectation}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="apply-section">
                    <h3>Application Process</h3>

                    <ul className="feature-list">
                      {workingWithUsData.masters.applicationProcess.map(
                        (step, idx) => (
                          <li key={idx}>
                            <span className="checkmark">✓</span>
                            {step}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="funding-notice">
                    <h3>Funding Discussions</h3>

                    <ul className="feature-list">
                      {workingWithUsData.masters.fundingRequirements.map(
                        (requirement, idx) => (
                          <li key={idx}>
                            <span className="checkmark">✓</span>
                            {requirement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="contact-card">
                    <div className="contact-info">
                      <h3>Interested in graduate research?</h3>

                      <p>
                        Email Dr. Hari Subramoni with your CV, technical
                        background, and research interests.
                      </p>

                      <a
                        href="mailto:subramoni.1@osu.edu"
                        className="email-button"
                      >
                        Email Dr. Subramoni
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========================================================= */}
            {/* PHD */}
            {/* ========================================================= */}

            <section
              id="phd"
              className={`opportunity-section ${
                openSections.phd ? 'is-open' : 'is-closed'
              }`}
            >
              <button
                type="button"
                id="phd-button"
                className="section-header collapsible"
                onClick={() => toggleMajorSection('phd')}
                aria-expanded={openSections.phd}
                aria-controls="phd-panel"
              >
                <div className="header-left">
                  <span
                    className={`section-toggle-icon ${
                      openSections.phd ? 'open' : ''
                    }`}
                  >
                    ▶
                  </span>

                  <h2>PhD Students</h2>
                </div>

                <span className="section-badge">
                  Doctoral Research
                </span>
              </button>

              <div hidden={!openSections.phd}>
                <div className="section-content animate-fade-in" id="phd-panel" role="region" aria-labelledby="phd-button">
                  {renderDecisionSummary('phd')}

                  <p className="intro-text">
                    We are always looking for motivated PhD students to join
                    our research group and work on challenging problems in
                    high-performance computing, distributed systems, and AI
                    infrastructure.
                  </p>

                  <div className="contact-card">
                    <div className="contact-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                        />

                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>

                    <div className="contact-info">
                      <h3>Interested in pursuing a PhD?</h3>

                      <p>
                        Please email Dr. Subramoni with your CV, research
                        interests, and a brief statement about why you would
                        like to join our lab.
                      </p>

                      <a
                        href="mailto:subramoni.1@osu.edu"
                        className="email-button"
                      >
                        Email Dr. Subramoni
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* SIDE NAV */}
        <nav className="side-nav">
          <p className="side-nav-title">On This Page</p>

          <ul>
            {navItems.map(({ id, label }) => (
              <li
                key={id}
                className={activeSection === id ? 'active' : ''}
              >
                <button onClick={() => scrollToSection(id)}>
                  <span className="side-nav-indicator" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default WorkingWithUs;
