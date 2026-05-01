import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const totalMembers = project.memberIds.length;

  return (
    <Link to={`/research/${project.id}`} className="project-card">
      <div className="project-card-thumbnail">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span>🔬</span>
        )}
      </div>
      
      <div className="project-card-content">
        <div className="project-card-header">
          <h3 className="project-card-title">{project.title}</h3>
          <span className={`project-status-badge project-status-${project.status}`}>
            {project.status}
          </span>
        </div>
        
        <p className="project-card-description">{project.shortDescription}</p>
        
        <div className="project-card-tags">
          {project.researchAreas.map((area, idx) => (
            <span key={`area-${idx}`} className="project-tag project-tag-area">
              {area}
            </span>
          ))}
          {project.domains.map((domain, idx) => (
            <span key={`domain-${idx}`} className="project-tag project-tag-domain">
              {domain}
            </span>
          ))}
        </div>
        
        <div className="project-card-footer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>{totalMembers} {totalMembers === 1 ? 'member' : 'members'}</span>
        </div>
      </div>
    </Link>
  );
}
