import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router';
import { newsItems } from '../data/newsItems';
import { projects } from '../data/projects';
import { useMobileMenu } from '../context/MobileMenuContext';
import { ScrollReveal } from '../components/ScrollReveal';

type NewsCategory = 'Planung' | 'Baustart' | 'Baufortschritt' | 'Fertigstellung';

const categories: NewsCategory[] = ['Planung', 'Baustart', 'Baufortschritt', 'Fertigstellung'];

export function News() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { mobileMenuOpen } = useMobileMenu();

  const handleCategoryChange = (category: NewsCategory | 'all') => {
    setSelectedCategory(category);
    setFiltersOpen(false); // Close filters after selection on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredNews = useMemo(() => {
    return newsItems.filter(item => {
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
      return categoryMatch;
    });
  }, [selectedCategory]);

  return (
    <div>
      {/* Sub-Header with Filters - Hidden when mobile menu is open */}
      {!mobileMenuOpen && (
        <div className="fixed top-[57px] md:top-[73px] left-0 right-0 z-40 bg-black border-b border-[#333333]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            {/* Filter nach Kategorie */}
            <nav className="pt-5 pb-3 md:pt-9 md:pb-7 text-sm md:text-base">
              {/* Mobile: Filter Layout */}
              <div className="flex items-center gap-3 md:hidden overflow-x-auto scrollbar-hide text-sm">
                <button
                  onClick={() => {
                    if (filtersOpen) {
                      setFiltersOpen(false);
                      setSelectedCategory('all');
                    }
                  }}
                  className={`whitespace-nowrap bg-transparent border-none cursor-pointer p-0 flex-shrink-0 font-heading ${
                    !filtersOpen && selectedCategory === 'all' ? 'text-white' : 'text-[#999999]'
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
                
                {/* Show selected filter when filters are closed and a category is selected */}
                {!filtersOpen && selectedCategory !== 'all' && (
                  <span className="text-white whitespace-nowrap flex-shrink-0 font-heading">
                    {selectedCategory}
                  </span>
                )}
                
                {/* Show all filter options when filters are open */}
                {filtersOpen && (
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`whitespace-nowrap bg-transparent border-none cursor-pointer p-0 font-heading ${
                          selectedCategory === category ? 'text-white' : 'text-[#999999]'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop: Always visible */}
              <div className="hidden md:flex md:items-center md:gap-12">
                <span className="text-white whitespace-nowrap font-heading">Kategorie</span>
                <div className="flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`no-underline transition-colors duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 font-heading ${
                      selectedCategory === 'all' ? 'text-white' : 'text-[#999999] hover:text-white'
                    }`}
                  >
                    Alle
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`no-underline transition-colors duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 font-heading ${
                        selectedCategory === category ? 'text-white' : 'text-[#999999] hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* News Grid - adjusted padding for single-row filter */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 pt-[80px] md:pt-[118px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredNews.map(item => {
            const relatedProject = item.projectId ? projects.find(p => p.id === item.projectId) : null;
            return (
              <ScrollReveal key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="block no-underline group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="mb-2 text-base text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300 font-heading">
                    {item.title}
                  </h3>
                  <div className="text-sm text-[#999999] space-y-1">
                    {relatedProject && <div>{relatedProject.title} {relatedProject.location}</div>}
                    <div>{item.date}</div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}