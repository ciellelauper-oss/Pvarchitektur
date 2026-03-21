import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { projects, ProjectType, ProjectService } from '../data/projects';
import { useMobileMenu } from '../context/MobileMenuContext';
import { ScrollReveal } from '../components/ScrollReveal';

const types: ProjectType[] = ['EFH', 'MFH', 'Wohnüberbauung', 'Gewerbe'];

export function Projects() {
  const [selectedType, setSelectedType] = useState<ProjectType | 'all'>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { mobileMenuOpen } = useMobileMenu();

  const handleFilterChange = (type: ProjectType | 'all') => {
    setSelectedType(type);
    setFiltersOpen(false); // Close filters after selection on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      return typeMatch;
    });
  }, [selectedType]);

  return (
    <div>
      {/* Sub-Header with Filters - Hidden when mobile menu is open */}
      {!mobileMenuOpen && (
        <div className="fixed top-[57px] md:top-[73px] left-0 right-0 z-40 bg-black border-b border-[#333333]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            {/* Filter nach Typ */}
            <nav className="pt-5 pb-3 md:pt-9 md:pb-7 text-sm md:text-base">
              {/* Mobile: Filter Layout */}
              <div className="flex items-center gap-3 md:hidden overflow-x-auto scrollbar-hide text-sm">
                <button
                  onClick={() => {
                    if (filtersOpen) {
                      setFiltersOpen(false);
                      setSelectedType('all');
                    }
                  }}
                  className={`whitespace-nowrap bg-transparent border-none cursor-pointer p-0 flex-shrink-0 font-heading ${
                    !filtersOpen && selectedType === 'all' ? 'text-white' : 'text-[#999999]'
                  }`}
                >
                  Alle
                </button>
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className={`whitespace-nowrap bg-transparent border-none cursor-pointer p-0 flex-shrink-0 font-heading ${
                    filtersOpen ? 'text-white' : 'text-[#999999]'
                  }`}
                >
                  Filter
                </button>
                
                {/* Show selected filter when filters are closed and a type is selected */}
                {!filtersOpen && selectedType !== 'all' && (
                  <span className="text-white whitespace-nowrap flex-shrink-0 font-heading">
                    {selectedType}
                  </span>
                )}
                
                {/* Show all filter options when filters are open */}
                {filtersOpen && (
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {types.map(type => (
                      <button
                        key={type}
                        onClick={() => handleFilterChange(type)}
                        className={`whitespace-nowrap bg-transparent border-none cursor-pointer p-0 font-heading ${
                          selectedType === type ? 'text-white' : 'text-[#999999]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop: Always visible */}
              <div className="hidden md:flex md:items-center md:gap-12">
                <span className="text-white whitespace-nowrap font-heading">Typ</span>
                <div className="flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`no-underline transition-colors duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 font-heading ${
                      selectedType === 'all' ? 'text-white' : 'text-[#999999] hover:text-white'
                    }`}
                  >
                    Alle
                  </button>
                  {types.map(type => (
                    <button
                      key={type}
                      onClick={() => handleFilterChange(type)}
                      className={`no-underline transition-colors duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 font-heading ${
                        selectedType === type ? 'text-white' : 'text-[#999999] hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Projects Grid - adjusted padding for single-row filter */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 pt-[80px] md:pt-[118px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredProjects.map(project => (
            <ScrollReveal key={project.id}>
              <Link
                to={`/projekte/${project.id}`}
                className="block no-underline group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="mb-2 text-base text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300 font-heading">
                  {project.title} {project.location}
                </h3>
                <div className="text-sm text-[#999999] space-y-1">
                  <div>{project.type}</div>
                  <div>{project.year}</div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}