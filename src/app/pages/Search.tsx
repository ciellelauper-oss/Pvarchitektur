import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { projects } from '../data/projects';
import { newsItems } from '../data/newsItems';
import { homeEntries } from '../data/homeEntries';

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<{
    projects: typeof projects;
    news: typeof newsItems;
    home: typeof homeEntries;
  }>({ projects: [], news: [], home: [] });

  useEffect(() => {
    if (!query) {
      setResults({ projects: [], news: [], home: [] });
      return;
    }

    const searchTerm = query.toLowerCase();

    // Search in projects
    const projectResults = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.location.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.type.toLowerCase().includes(searchTerm)
    );

    // Search in news
    const newsResults = newsItems.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      (item.location && item.location.toLowerCase().includes(searchTerm)) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
    );

    // Search in home entries
    const homeResults = homeEntries.filter(entry =>
      entry.title.toLowerCase().includes(searchTerm) ||
      (entry.location && entry.location.toLowerCase().includes(searchTerm)) ||
      entry.description.toLowerCase().includes(searchTerm) ||
      entry.category.toLowerCase().includes(searchTerm)
    );

    setResults({
      projects: projectResults,
      news: newsResults,
      home: homeResults
    });
  }, [query]);

  const totalResults = results.projects.length + results.news.length + results.home.length;

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-24">
      {/* Search Header */}
      <div className="mb-16 pb-8">
        <h1 className="text-4xl mb-4 text-white font-heading">Suchergebnisse</h1>
        {query && (
          <p className="text-[#999999]">
            Gesucht nach: <span className="text-white">{query}</span>
          </p>
        )}
        <p className="text-sm text-[#999999] mt-2">
          {totalResults} {totalResults === 1 ? 'Ergebnis' : 'Ergebnisse'} gefunden
        </p>
      </div>

      {/* No Results Message */}
      {totalResults === 0 && (
        <div className="text-center py-16">
          <p className="text-[#999999]">Keine Ergebnisse gefunden.</p>
        </div>
      )}

      {/* Projects Results */}
      {results.projects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl mb-8 pb-4 text-white">
            Projekte ({results.projects.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {results.projects.map(project => (
              <Link
                key={project.id}
                to={`/projekte/${project.id}`}
                className="block no-underline group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="mb-2 text-base text-[#999999] group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="text-sm text-[#999999] space-y-1">
                  <div>{project.location}</div>
                  <div>{project.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* News Results */}
      {results.news.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl mb-8 pb-4 text-white">
            News ({results.news.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {results.news.map(item => {
              return (
                <Link
                  key={item.id}
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
                  <h3 className="mb-2 text-base text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="text-sm text-[#999999] space-y-1">
                    <div>{item.category}</div>
                    <div>{item.year}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Home Results */}
      {results.home.length > 0 && (
        <div>
          <h2 className="text-2xl mb-8 pb-4 text-white">
            Featured ({results.home.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {results.home.map(entry => (
              <Link
                key={entry.id}
                to={entry.linkUrl}
                className="block no-underline group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-6">
                  <img 
                    src={entry.images[0]} 
                    alt={entry.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-sm text-[#999999] mb-3">
                  {entry.category}
                </div>
                <h3 className="text-xl mb-2 text-[#999999] group-hover:text-white transition-colors duration-300">
                  {entry.title}
                </h3>
                {entry.location && (
                  <div className="text-sm text-[#999999] mb-4">
                    {entry.location}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}