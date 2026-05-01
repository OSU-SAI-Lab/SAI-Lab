import React, { useState, useMemo, useEffect } from 'react';
import './PeoplesPage.css';
import { labMembers } from './data.js';

export default function People() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  // Get all unique interests
  const allInterests = useMemo(() => {
    const interests = new Set();
    labMembers.forEach(member => {
      member.interests.forEach(i => interests.add(i));
    });
    return Array.from(interests).sort();
  }, []);

  // Filter members
  const filteredMembers = useMemo(() => {
    return labMembers.filter(member => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.interests.some(i =>
          i.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesRole =
        selectedRoles.length === 0 ||
        selectedRoles.includes(member.role);

      const matchesInterest =
        selectedInterests.length === 0 ||
        member.interests.some(i =>
          selectedInterests.includes(i)
        );

      return matchesSearch && matchesRole && matchesInterest;
    });
  }, [searchTerm, selectedRoles, selectedInterests]);

  // Toggle filters
  const toggleRole = role => {
    setSelectedRoles(prev =>
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const toggleInterest = interest => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  // Group by role
  const groupedMembers = useMemo(() => ({
    faculty: filteredMembers.filter(m => m.role === 'faculty'),
    phd: filteredMembers.filter(m => m.role === 'phd'),
    masters: filteredMembers.filter(m => m.role === 'masters'),
    undergraduate: filteredMembers.filter(m => m.role === 'undergraduate')
  }), [filteredMembers]);

  const roleLabels = {
    faculty: 'Faculty',
    phd: 'PhD Students',
    masters: 'Graduate Students',
    undergraduate: 'Undergraduate Students'
  };

  return (
    <div className="people-page">
      <section className="people-hero">
        <h1>People</h1>
        <p>Members of the Systems and AI Lab</p>
      </section>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name or expertise..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            {/* Role Filter */}
            <div className="filter-group">
              <button className="filter-dropdown-button">
                Roles {selectedRoles.length > 0 && `(${selectedRoles.length})`}
              </button>
              <div className="filter-dropdown-content">
                {Object.keys(roleLabels).map(role => (
                  <label key={role} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => toggleRole(role)}
                    />
                    <span>{roleLabels[role]}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Interest Filter */}
            <div className="filter-group">
              <button className="filter-dropdown-button">
                Interests {selectedInterests.length > 0 && `(${selectedInterests.length})`}
              </button>
              <div className="filter-dropdown-content">
                {allInterests.map(interest => (
                  <label key={interest} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedInterests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {(selectedRoles.length > 0 || selectedInterests.length > 0) && (
              <button
                className="clear-filters-button"
                onClick={() => {
                  setSelectedRoles([]);
                  setSelectedInterests([]);
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {filteredMembers.length === 0 ? (
          <p className="no-results">No members found.</p>
        ) : (
          Object.entries(groupedMembers).map(([role, members]) =>
            members.length > 0 && (
              <section key={role} className="role-section">
                <h2 className="role-heading">{roleLabels[role]}</h2>
                <div className="members-grid">
                  {members.map(member => (
                    <PersonCard key={member.id} member={member} />
                  ))}
                </div>
              </section>
            )
          )
        )}
      </main>

     <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Systems and AI Lab, The Ohio State University</p>
    </footer>
    </div>
  );
}

/* ---------------- Person Card ---------------- */

function PersonCard({ member }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if user is on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle card expansion (only on mobile)
  const handleCardClick = (e) => {
    // Don't toggle if clicking on a link
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      return;
    }
    
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <article 
      className={`person-card ${isExpanded ? 'expanded' : ''}`}
      onClick={handleCardClick}
    >
      <img
        src={member.photo}
        alt={member.name}
        className="card-image"
      />

      <h3 className="person-name">{member.name}</h3>
      <p className="person-title">{member.title}</p>

      {/* Interests */}
      <div className="interests-section">
        <div className="interests-tags">
          {member.interests.map((i, idx) => (
            <span key={idx} className="interest-tag">{i}</span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      {member.projects && member.projects.length > 0 && (
        <div className="projects-section">
          <h4 className="section-label">Current Projects</h4>
          <ul className="projects-list">
            {member.projects.map((project, idx) => (
              <li key={idx}>{project}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="card-links">
        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            onClick={(e) => e.stopPropagation()}
          >
            Website
          </a>
        )}

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="card-link"
            onClick={(e) => e.stopPropagation()}
          >
            Email
          </a>
        )}

        {member.publications && (
          <a
            href={member.publications}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            onClick={(e) => e.stopPropagation()}
          >
            Publications
          </a>
        )}
      </div>
    </article>
  );
}