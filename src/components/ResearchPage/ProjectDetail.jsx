import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import './ProjectDetail.css';
import { projects } from './data.js';
import { labMembers } from '../PeoplesPage/data.js';
import Footer from '../Footer';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.id === slug);

  if (!project) {
    return <Navigate to="/research" replace />;
  }

  const teamMembers = project.memberIds
    .map(id => labMembers.find(m => m.id === id))
    .filter(Boolean);

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const [year, month] = dateString.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="project-detail">
      <nav className="project-breadcrumb">
        <Link to="/research">Research</Link>
        <span className="project-breadcrumb-separator">›</span>
        <span>{project.title}</span>
      </nav>

      <header className="project-header">
        <Link to="/research" className="project-back-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Research
        </Link>

        <div className="project-title-section">
          <h1 className="project-title">{project.title}</h1>
          
          <div className="project-meta">
            <span className={`project-status-badge project-status-${project.status}`}>
              {project.status}
            </span>
            
                        
            {project.startDate && (
              <div className="project-dates">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  {formatDate(project.startDate)}
                  {project.endDate ? ` - ${formatDate(project.endDate)}` : ' - Present'}
                </span>
              </div>
            )}
          </div>

          <div className="project-header-tags">
            {project.researchAreas.map((area, idx) => (
              <Link 
                key={`area-${idx}`} 
                to={`/research?area=${encodeURIComponent(area)}`}
                className="project-tag project-tag-area"
              >
                {area}
              </Link>
            ))}
            {project.domains.map((domain, idx) => (
              <Link 
                key={`domain-${idx}`} 
                to={`/research?domain=${encodeURIComponent(domain)}`}
                className="project-tag project-tag-domain"
              >
                {domain}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {project.thumbnail && (
        <div className="project-hero-image">
          <img src={project.thumbnail} alt={project.title} />
        </div>
      )}

      <main className="project-content">
        <section className="project-description-section">
          <p className="project-short-description">{project.shortDescription}</p>
          <div className="project-long-description">
            {project.longDescription}
          </div>
        </section>

        {teamMembers.length > 0 && (
          <section className="project-team-section">
            <h2 className="project-section-title">Team Members</h2>
            <div className="project-team-grid">
              {teamMembers.map(member => (
                // <a 
                //   key={member.id} 
                //   href={`/people#member-${member.id}`}
                //   className="project-team-member"
                // >
                <Link 
                  key={member.id} 
                  to="/people"
                  className="project-team-member"
                >
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="project-team-member-avatar"
                  />
                  <div className="project-team-member-name">{member.name}</div>
                  <div className="project-team-member-title">{member.title}</div>
                </Link>
                // </a>
              ))}
            </div>
          </section>
        )}

        {project.externalLinks && project.externalLinks.length > 0 && (
          <section className="project-links-section">
            <h2 className="project-section-title">Links & Resources</h2>
            <div className="project-links-list">
              {project.externalLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-external-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
