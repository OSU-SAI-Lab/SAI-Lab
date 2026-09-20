import React, { useState, useMemo } from 'react';
import './ResearchPage.css';
import { projects } from './data.js';
import ProjectCard from './ProjectCard';
import Footer from '../Footer';
import FilterDropdown, { FilterOption } from '../FilterDropdown';

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedDomains, setSelectedDomains] = useState([]);

  const allAreas = useMemo(() => {
    const areas = new Set();
    projects.forEach(project => {
      project.researchAreas.forEach(area => areas.add(area));
    });
    return Array.from(areas).sort();
  }, []);

  const allDomains = useMemo(() => {
    const domains = new Set();
    projects.forEach(project => {
      project.domains.forEach(domain => domains.add(domain));
    });
    return Array.from(domains).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.researchAreas.some(area =>
          area.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.domains.some(domain =>
          domain.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesArea =
        selectedAreas.length === 0 ||
        project.researchAreas.some(area => selectedAreas.includes(area));

      const matchesDomain =
        selectedDomains.length === 0 ||
        project.domains.some(domain => selectedDomains.includes(domain));

      return matchesSearch && matchesArea && matchesDomain;
    });
  }, [searchTerm, selectedAreas, selectedDomains]);

  const toggleArea = area => {
    setSelectedAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  const toggleDomain = domain => {
    setSelectedDomains(prev =>
      prev.includes(domain)
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedAreas([]);
    setSelectedDomains([]);
  };

  const removeFilter = (type, value) => {
    if (type === 'area') {
      setSelectedAreas(prev => prev.filter(a => a !== value));
    } else if (type === 'domain') {
      setSelectedDomains(prev => prev.filter(d => d !== value));
    }
  };

  const hasActiveFilters = searchTerm !== '' || selectedAreas.length > 0 || selectedDomains.length > 0;
  const hasDropdownFilters = selectedAreas.length > 0 || selectedDomains.length > 0;

  return (
    <div className="research-page">
      <section className="research-hero">
        <h1>Research</h1>
        <p>Advancing machine learning, distributed systems, and intelligent computation for real-world impact</p>
      </section>

      <div className="research-filters-section">
        <div className="research-filters-container">
          <div className="search-box">
            <input
              type="text"
              aria-label="Search projects"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            <FilterDropdown label="Research Areas" selectedCount={selectedAreas.length}>
              {allAreas.map(area => (
                <FilterOption
                  key={area}
                  checked={selectedAreas.includes(area)}
                  onToggle={() => toggleArea(area)}
                >
                  {area}
                </FilterOption>
              ))}
            </FilterDropdown>

            <FilterDropdown label="Domains" selectedCount={selectedDomains.length}>
              {allDomains.map(domain => (
                <FilterOption
                  key={domain}
                  checked={selectedDomains.includes(domain)}
                  onToggle={() => toggleDomain(domain)}
                >
                  {domain}
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
          {selectedAreas.map(area => (
            <button
              key={area}
              type="button"
              className="filter-pill"
              onClick={() => removeFilter('area', area)}
              aria-label={`Remove ${area} filter`}
            >
              {area}
              <span className="filter-pill-close" aria-hidden="true">×</span>
            </button>
          ))}
          {selectedDomains.map(domain => (
            <button
              key={domain}
              type="button"
              className="filter-pill"
              onClick={() => removeFilter('domain', domain)}
              aria-label={`Remove ${domain} filter`}
            >
              {domain}
              <span className="filter-pill-close" aria-hidden="true">×</span>
            </button>
          ))}
        </div>
      )}

      <main className="research-main-content">
        {hasActiveFilters && (
          <div className="research-results-header">
            <div className="research-results-count" aria-live="polite">
              Showing {filteredProjects.length} of {projects.length} {projects.length === 1 ? 'project' : 'projects'}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div className="research-no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your filters or search terms.</p>
            {hasActiveFilters && (
              <button type="button" className="clear-filters-button" onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
