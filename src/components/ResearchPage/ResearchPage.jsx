import React, { useState, useMemo } from 'react';
import './ResearchPage.css';
import { projects } from './data.js';
import ProjectCard from './ProjectCard';
import Footer from '../Footer';

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

  const hasActiveFilters = selectedAreas.length > 0 || selectedDomains.length > 0;

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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <button className="filter-dropdown-button">
                Research Areas {selectedAreas.length > 0 && `(${selectedAreas.length})`}
              </button>
              <div className="filter-dropdown-content">
                {allAreas.map(area => (
                  <label key={area} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedAreas.includes(area)}
                      onChange={() => toggleArea(area)}
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <button className="filter-dropdown-button">
                Domains {selectedDomains.length > 0 && `(${selectedDomains.length})`}
              </button>
              <div className="filter-dropdown-content">
                {allDomains.map(domain => (
                  <label key={domain} className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={selectedDomains.includes(domain)}
                      onChange={() => toggleDomain(domain)}
                    />
                    <span>{domain}</span>
                  </label>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                className="clear-filters-button"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="active-filters">
          {selectedAreas.map(area => (
            <span key={area} className="filter-pill" onClick={() => removeFilter('area', area)}>
              {area}
              <span className="filter-pill-close">×</span>
            </span>
          ))}
          {selectedDomains.map(domain => (
            <span key={domain} className="filter-pill" onClick={() => removeFilter('domain', domain)}>
              {domain}
              <span className="filter-pill-close">×</span>
            </span>
          ))}
        </div>
      )}

      <main className="research-main-content">
        <div className="research-results-header">
          <div className="research-results-count">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="research-no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your filters or search terms.</p>
            {hasActiveFilters && (
              <button className="clear-filters-button" onClick={clearFilters}>
                Clear All Filters
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
