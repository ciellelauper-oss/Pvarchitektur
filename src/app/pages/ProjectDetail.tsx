import { useParams, Link } from 'react-router';
import { projects } from '../data/projects';
import { newsItems } from '../data/newsItems';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowLeft } from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Link to="/projekte" replace />;
  }

  // Get related projects (same type, excluding current)
  const relatedProjects = projects
    .filter(p => p.type === project.type && p.id !== project.id)
    .slice(0, 3);

  // Get news posts related to this project
  const relatedNewsPosts = newsItems.filter(n => n.projectId === project.id);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12 md:pb-24 pt-8 md:pt-12">
      {/* Back Button */}
      <Link 
        to="/projekte" 
        className="inline-flex items-center gap-2 mb-8 md:mb-12 text-[#999999] md:hover:text-white transition-colors duration-300 no-underline"
      >
        <ArrowLeft size={20} strokeWidth={2} />
        <span className="text-sm">Zurück zu Projekte</span>
      </Link>

      {/* Project Title */}
      <ScrollReveal>
        <div className="mb-8 md:mb-12">
          <h1 className="mb-8 md:mb-12 text-2xl md:text-4xl leading-tight text-white font-heading">
            {project.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:grid md:grid-cols-12 md:gap-8 text-sm">
            <div className="w-auto md:col-span-3">
              <div className="text-white mb-2">Ort</div>
              <div className="text-[#999999]">{project.location}</div>
            </div>
            <div className="w-auto md:col-span-3">
              <div className="text-white mb-2">Jahr</div>
              <div className="text-[#999999]">{project.year}</div>
            </div>
            <div className="w-auto md:col-span-3">
              <div className="text-white mb-2">Status</div>
              <div className="text-[#999999]">{project.status}</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Images Section - Horizontal Slideshow */}
      {project.images.length > 0 && (
        <ScrollReveal>
          <div className="mb-8 md:mb-10">
            <ImageSlideshow images={project.images} title={project.title} />
          </div>
        </ScrollReveal>
      )}

      {/* Description */}
      <ScrollReveal>
        <div className="mb-12 md:mb-16">
          <div>
            <p className="text-base leading-loose text-[#999999]">
              {project.description}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Credits */}
      {(project.team || project.collaborators) && (
        <ScrollReveal>
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl mb-8 md:mb-12 text-white font-heading">Projektbeteiligte</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4 md:grid md:grid-cols-12 md:gap-8 text-sm">
              {project.team && (
                <div className="w-full md:col-span-6">
                  <div className="text-white mb-2">Team</div>
                  <div className="text-[#999999]">{project.team}</div>
                </div>
              )}
              {project.collaborators && (
                <div className="w-full md:col-span-6">
                  <div className="text-white mb-2">Beteiligte Firmen</div>
                  <div className="text-[#999999]">{project.collaborators}</div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Related News Posts */}
      {relatedNewsPosts.length > 0 && (
        <ScrollReveal>
          <div className={relatedProjects.length > 0 ? "mb-12 md:mb-16" : "mb-0"}>
            <h2 className="text-xl mb-8 md:mb-12 text-white font-heading">Weitere Beiträge zum Projekt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNewsPosts.map(newsPost => (
                <Link
                  key={newsPost.id}
                  to={`/news/${newsPost.id}`}
                  className="block no-underline group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                    <img 
                      src={newsPost.image} 
                      alt={newsPost.title}
                      className="w-full h-full object-cover opacity-100 md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="mb-2 text-base text-white md:text-[#999999] md:group-hover:text-white transition-colors duration-300 font-heading">
                    {newsPost.title}
                  </h3>
                  <div className="text-sm text-[#999999] space-y-1">
                    <div>{newsPost.category}</div>
                    <div>{newsPost.year}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <ScrollReveal>
          <div>
            <h2 className="text-xl mb-8 md:mb-12 text-white font-heading">Ähnliche Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map(relatedProject => (
                <Link
                  key={relatedProject.id}
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
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}