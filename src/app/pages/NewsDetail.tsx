import { useParams, Navigate, Link } from 'react-router';
import { newsItems } from '../data/newsItems';
import { homeEntries } from '../data/homeEntries';
import { projects } from '../data/projects';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowLeft } from 'lucide-react';

export function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Find in newsItems first
  let newsItem = newsItems.find(n => n.id === id);
  let isFromHome = false;
  
  // If not found, search in homeEntries
  if (!newsItem) {
    const homeEntry = homeEntries.find(h => h.id === id);
    if (homeEntry) {
      isFromHome = true;
      // Map homeEntry to newsItem format
      newsItem = {
        id: homeEntry.id,
        category: homeEntry.category as any,
        title: homeEntry.title,
        location: homeEntry.location,
        source: homeEntry.source,
        description: homeEntry.description,
        image: homeEntry.images[0],
        images: homeEntry.images,
        year: new Date().getFullYear().toString(),
        linkUrl: `/news/${homeEntry.id}`
      };
    }
  }

  if (!newsItem) {
    return <Navigate to="/news" replace />;
  }

  // Find related project if projectId exists
  const relatedProject = newsItem.projectId 
    ? projects.find(p => p.id === newsItem!.projectId)
    : null;

  // Get news about the same project (excluding current)
  const relatedProjectNews = newsItem.projectId
    ? newsItems.filter(n => n.projectId === newsItem!.projectId && n.id !== id)
    : [];

  // Use images array if available, otherwise fall back to single image
  const postImages = newsItem.images || [newsItem.image];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 md:pb-24 pt-8 md:pt-12">
      {/* Back Button */}
      <Link 
        to="/news" 
        className="inline-flex items-center gap-2 mb-8 md:mb-12 text-[#999999] md:hover:text-white transition-colors duration-300 no-underline"
      >
        <ArrowLeft size={20} strokeWidth={2} />
        <span className="text-sm">Zurück zu News</span>
      </Link>

      {/* News Title */}
      <ScrollReveal>
        <div className="mb-8 md:mb-12">
          <h1 className="mb-8 md:mb-12 text-2xl md:text-4xl leading-tight text-white font-heading">
            {newsItem.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:grid md:grid-cols-12 md:gap-8 text-sm">
            <div className="w-auto md:col-span-3">
              <div className="text-white mb-2">Kategorie</div>
              <div className="text-[#999999]">{newsItem.category}</div>
            </div>
            {newsItem.location && (
              <div className="w-auto md:col-span-3">
                <div className="text-white mb-2">Ort</div>
                <div className="text-[#999999]">{newsItem.location}</div>
              </div>
            )}
            {newsItem.year && (
              <div className="w-auto md:col-span-3">
                <div className="text-white mb-2">Jahr</div>
                <div className="text-[#999999]">{newsItem.year}</div>
              </div>
            )}
            {newsItem.source && (
              <div className="w-auto md:col-span-3">
                <div className="text-white mb-2">Quelle</div>
                <div className="text-[#999999]">{newsItem.source}</div>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Images Section - Horizontal Slideshow */}
      {postImages.length > 0 && (
        <ScrollReveal>
          <div className="mb-8 md:mb-10">
            <ImageSlideshow images={postImages} title={newsItem.title} />
          </div>
        </ScrollReveal>
      )}

      {/* Description */}
      <ScrollReveal>
        <div className="mb-12 md:mb-16">
          <div>
            <p className="text-base leading-loose text-[#999999]">
              {newsItem.description}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Related Project */}
      {relatedProject && (
        <ScrollReveal>
          <div className={`${ 
            relatedProjectNews.length > 0 
              ? 'mb-12 md:mb-16' 
              : 'mb-0'
          }`}>
            <h2 className="text-xl mb-8 md:mb-12 text-white font-heading">Zugehöriges Projekt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                to={`/projekte/${relatedProject.id}`}
                className="block no-underline group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                  <img 
                    src={relatedProject.images[0]} 
                    alt={relatedProject.title}
                    className="w-full h-full object-cover opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="mb-2 text-base text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300 font-heading">
                  {relatedProject.title} {relatedProject.location}
                </h3>
                <div className="text-sm text-[#999999] space-y-1">
                  <div>{relatedProject.type}</div>
                  <div>{relatedProject.year}</div>
                </div>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Related News from same Project */}
      {relatedProjectNews.length > 0 && (
        <ScrollReveal>
          <div>
            <h2 className="text-xl mb-8 md:mb-12 text-white font-heading">Weitere Beiträge zum Projekt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjectNews.map(relatedItem => (
                <Link
                  key={relatedItem.id}
                  to={`/news/${relatedItem.id}`}
                  className="block no-underline group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                    <img 
                      src={relatedItem.image} 
                      alt={relatedItem.title}
                      className="w-full h-full object-cover opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="mb-2 text-base text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300 font-heading">
                    {relatedItem.title}
                  </h3>
                  <div className="text-sm text-[#999999] space-y-1">
                    <div>{relatedItem.category}</div>
                    <div>{relatedItem.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}