import React, { useState, useMemo, useId } from 'react';
import { Link } from 'react-router-dom';
import './PeoplesPage.css';
import { labMembers } from './data.js';
import { projects as researchProjects } from '../ResearchPage/data.js';
import FilterDropdown, { FilterOption } from '../FilterDropdown';
import EmptyState from '../EmptyState';
import PageHero from '../PageHero';

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

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedInterests([]);
    setSelectedRoles([]);
  };

  const hasActiveFilters = searchTerm !== '' || selectedRoles.length > 0 || selectedInterests.length > 0;
  const hasDropdownFilters = selectedRoles.length > 0 || selectedInterests.length > 0;
  // Group by role
  const groupedMembers = useMemo(() => ({
    faculty: filteredMembers.filter(m => m.role === 'faculty'),
    phd: filteredMembers.filter(m => m.role === 'phd'),
    staff: filteredMembers.filter(m => m.role === 'staff'),
    masters: filteredMembers.filter(m => m.role === 'masters'),
    undergraduate: filteredMembers.filter(m => m.role === 'undergraduate'),
    past: filteredMembers.filter(m => m.role === 'past'),
  }), [filteredMembers]);

  const roleLabels = {
    faculty: 'Faculty',
    phd: 'PhD Students',
    staff: 'Staff',
    masters: 'Graduate Students',
    undergraduate: 'Undergraduate Students',
    past: 'Alumni and Former Students',
  };
  return (
    <div className="people-page">
      <PageHero title="People">Members of the Systems and AI Lab</PageHero>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-container">
          <div className="search-box">
            <input
              type="text"
              aria-label="Search people by name or expertise"
              placeholder="Search by name or expertise..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            {/* Role Filter */}
            <FilterDropdown label="Roles" selectedCount={selectedRoles.length}>
              {Object.keys(roleLabels).map(role => (
                <FilterOption
                  key={role}
                  checked={selectedRoles.includes(role)}
                  onToggle={() => toggleRole(role)}
                >
                  {roleLabels[role]}
                </FilterOption>
              ))}
            </FilterDropdown>

            {/* Interest Filter */}
            <FilterDropdown label="Interests" selectedCount={selectedInterests.length}>
              {allInterests.map(interest => (
                <FilterOption
                  key={interest}
                  checked={selectedInterests.includes(interest)}
                  onToggle={() => toggleInterest(interest)}
                >
                  {interest}
                </FilterOption>
              ))}
            </FilterDropdown>

            {hasActiveFilters && (
              <button
                type="button"
                className="clear-filters-button"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {hasDropdownFilters && (
        <div className="active-filters" aria-label="Active filters">
          <span className="active-filters-label">Active filters:</span>
          {selectedRoles.map(role => (
            <button
              key={role}
              type="button"
              className="filter-pill"
              onClick={() => toggleRole(role)}
              aria-label={`Remove ${roleLabels[role] || role} filter`}
            >
              {roleLabels[role] || role}
              <span className="filter-pill-close" aria-hidden="true">×</span>
            </button>
          ))}
          {selectedInterests.map(interest => (
            <button
              key={interest}
              type="button"
              className="filter-pill"
              onClick={() => toggleInterest(interest)}
              aria-label={`Remove ${interest} filter`}
            >
              {interest}
              <span className="filter-pill-close" aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}


      {/* Main Content */}
      <main className="main-content">
        {hasActiveFilters && (
          <div className="people-results-header">
            <div className="people-results-count" aria-live="polite">
              Showing {filteredMembers.length} of {labMembers.length} {labMembers.length === 1 ? 'person' : 'people'}
            </div>
          </div>
        )}

        {filteredMembers.length === 0 ? (
          <EmptyState onClear={hasActiveFilters ? clearFilters : undefined} />
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
    </div>
  );
}

/* ---------------- Person Card ---------------- */

// memberId -> research projects they belong to, so cards can link to /research/:id.
const projectsByMember = researchProjects.reduce((map, project) => {
  project.memberIds.forEach(id => {
    if (!map.has(id)) map.set(id, []);
    map.get(id).push(project);
  });
  return map;
}, new Map());

function PersonCard({ member }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  const linkedProjects = projectsByMember.get(member.id) ?? [];
  const otherProjects = member.projects ?? [];
  const hasProjects = linkedProjects.length > 0 || otherProjects.length > 0;
  const hasLinks = Boolean(member.website || member.email || member.publications);
  const isCurrent = member.role !== 'past';
  // The toggle (shown on mobile only) is needed only when some details are collapsible.
  const hasDetails = hasLinks || (isCurrent && (hasProjects || member.interests?.length > 0));

  const toggle = () => setIsExpanded(open => !open);

  // Tapping anywhere on the card is a pointer shortcut for the toggle button;
  // keyboard and screen-reader users use the button itself.
  const handleCardClick = (e) => {
    if (!hasDetails || e.target.closest('a, button')) {
      return;
    }
    toggle();
  };

  return (
    <article
      className={`card person-card ${isExpanded ? 'expanded' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card-media">
        <img
          src={member.photo}
          alt={member.name}
          className="card-image"
        />
      </div>

      <div className="card-body" id={detailsId}>
        <div className="card-header">
          <h3 className="card-title person-name">{member.name}</h3>
        </div>
        <p className="card-subtitle person-title">{member.title}</p>

        {isCurrent && (
          <>
            {/* Interests */}
            {member.interests?.length > 0 && (
              <div className="interests-section">
                <div className="card-tags interests-tags">
                  {member.interests.map((i, idx) => (
                    <span key={idx} className="card-tag interest-tag">{i}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Section */}
            {hasProjects && (
              <div className="projects-section">
                <h4 className="section-label">Current Projects</h4>
                <ul className="projects-list">
                  {linkedProjects.map(project => (
                    <li key={project.id}>
                      <Link to={`/research/${project.id}`} className="project-link">
                        {project.title}
                      </Link>
                    </li>
                  ))}
                  {otherProjects.map((project, idx) => (
                    <li key={`text-${idx}`}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* Links */}
        {hasLinks && (
          <div className="card-footer card-links">
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cta-link card-link"
              >
                Website
              </a>
            )}

            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="card-cta-link card-link"
              >
                Email
              </a>
            )}

            {member.publications && (
              <a
                href={member.publications}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cta-link card-link"
              >
                Publications
              </a>
            )}
          </div>
        )}
      </div>

      {hasDetails && (
        <button
          type="button"
          className="person-card-toggle"
          onClick={toggle}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          aria-label={`Details for ${member.name}`}
        >
          <span aria-hidden="true">▼</span>
        </button>
      )}
    </article>
  );
}
