import { Link } from 'react-router';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { newsItems } from '../data/newsItems';
import { projects } from '../data/projects';
import { ScrollReveal } from '../components/ScrollReveal';

export function Home() {
  // Select latest five news items
  const latestNews = newsItems.slice(0, 5);
  // Select first five projects
  const featuredProjects = projects.slice(0, 5);
  
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Track image height for arrow centering
  const imageRef = useRef<HTMLDivElement>(null);
  const newsImageRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [newsImageHeight, setNewsImageHeight] = useState(0);

  const updateImageHeights = useCallback(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }
    if (newsImageRef.current) {
      setNewsImageHeight(newsImageRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateImageHeights();
    const observer = new ResizeObserver(updateImageHeights);
    if (imageRef.current) observer.observe(imageRef.current);
    if (newsImageRef.current) observer.observe(newsImageRef.current);
    return () => observer.disconnect();
  }, [updateImageHeights]);

  // Mobile detection for carousel
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slidesVisible = isMobile ? 1 : 2;
  const slidePercent = isMobile ? 100 : 50;

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 50,
      behavior: 'smooth'
    });
  };

  const handleNext = () => {
    if (currentIndex < featuredProjects.length - slidesVisible) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(featuredProjects.length - slidesVisible);
    }
  };

  const handleNextNews = () => {
    if (currentNewsIndex < latestNews.length - slidesVisible) {
      setCurrentNewsIndex(currentNewsIndex + 1);
    } else {
      setCurrentNewsIndex(0);
    }
  };

  const handlePrevNews = () => {
    if (currentNewsIndex > 0) {
      setCurrentNewsIndex(currentNewsIndex - 1);
    } else {
      setCurrentNewsIndex(latestNews.length - slidesVisible);
    }
  };

  return (
    <>
      {/* Hero Section - Full Width Image with Text Overlay */}
      <section className="relative w-full -mt-[57px] md:-mt-[73px]">
        {/* Hero Image - Full width, starts directly under header */}
        <div className="w-full h-[100vh] overflow-hidden bg-[#1a1a1a]">
          <img 
            src="https://images.unsplash.com/photo-1770892410981-8a6650aa9ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvciUyMGJ1aWxkaW5nJTIwY29uY3JldGV8ZW58MXx8fHwxNzcxODg0NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Architektur"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Overlay - Positioned over the image */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-8">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl text-white leading-tight font-heading">
                <span className="text-5xl md:text-6xl">Planung</span><br className="md:hidden" />{' '}
                <span className="block md:inline">mit Erfahrung</span>
                <br />
                <span className="text-5xl md:text-6xl">Ausführung</span><br className="md:hidden" />{' '}
                <span className="block md:inline">mit Präzision</span>
              </h1>
            </ScrollReveal>
          </div>
          
          {/* Scroll Down Arrow - Bottom Right */}
          <button
            onClick={scrollToContent}
            className="absolute bottom-8 right-6 md:bottom-12 md:right-12 text-white transition-colors duration-300 cursor-pointer"
            aria-label="Nach unten scrollen"
          >
            <ChevronDown size={48} />
          </button>
        </div>
      </section>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-8">
        {/* About Section */}
        <section className="mb-16 pb-16 pt-16 md:pt-24">
          <ScrollReveal>
            <h2 className="text-xl text-white leading-tight mb-12 font-heading">
              Bauen mit Verantwortung
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 md:mb-20">
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Erfahrung</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Wir planen und realisieren Wohn und Gewerbebauten mit langjähriger Erfahrung. Jedes Projekt begleiten wir persönlich vom ersten Gespräch bis zur Fertigstellung.
                </p>
              </div>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Zusammenarbeit</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Der direkte Austausch mit unseren Bauherrschaften ist uns wichtig. Wir hören zu, stellen Fragen und entwickeln Lösungen, die zu Aufgabe, Ort und Budget passen.
                </p>
              </div>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Haltung</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Unser Ziel ist Architektur, die im Alltag überzeugt und langfristig Bestand hat. Sorgfalt im Raum und im Detail ist für uns selbstverständlich.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* Projects Section - Full Bleed */}
      <section className="mb-16 pb-16 -mt-32 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="text-xl text-white leading-tight mb-12 md:mb-16 md:mt-16 font-heading">
              Eine Auswahl realisierter Projekte
            </h2>
          </ScrollReveal>
        
          {/* Carousel Container */}
          <div className="relative w-full overflow-hidden -mx-3">
            {/* Projects Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slidePercent}%)`
              }}
            >
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="w-full md:w-1/2 flex-shrink-0 px-3"
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="block no-underline group"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4" ref={imageRef}>
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
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows - Fixed at edges */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-6 -translate-y-1/2 text-white transition-opacity duration-300 cursor-pointer z-10"
                style={{ top: `${(imageHeight || 0) / 2}px` }}
                aria-label="Vorheriges Projekt"
              >
                <ChevronLeft size={36} className="md:hidden" strokeWidth={2} />
                <ChevronLeft size={48} className="hidden md:block" strokeWidth={2} />
              </button>
            )}
            
            {currentIndex < featuredProjects.length - slidesVisible && (
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-6 -translate-y-1/2 text-white transition-opacity duration-300 cursor-pointer z-10"
                style={{ top: `${(imageHeight || 0) / 2}px` }}
                aria-label="Nächstes Projekt"
              >
                <ChevronRight size={36} className="md:hidden" strokeWidth={2} />
                <ChevronRight size={48} className="hidden md:block" strokeWidth={2} />
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Process Section */}
        <section className="mb-16 pb-16 -mt-20">
          <ScrollReveal>
            <h2 className="text-xl text-white leading-tight mb-12 font-heading">
              Klare Prozesse führen zu klarer Architektur
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <ScrollReveal delay={0}>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Analyse</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Am Anfang steht die genaue Auseinandersetzung mit Ort, Kontext und Nutzung. Eine sorgfältige Bestandsaufnahme bildet die Grundlage für alle weiteren Schritte.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Konzept</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Aus der Analyse entsteht eine räumliche Idee. Struktur, Materialität und Atmosphäre werden klar formuliert und auf die Aufgabe abgestimmt.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Planung</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Das Projekt wird technisch präzise ausgearbeitet. Kosten und Termine bleiben dabei stets im Blick.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Realisierung</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Während der Ausführung begleiten wir das Projekt vor Ort und koordinieren die Beteiligten. Sorgfalt in der Abstimmung und Kontrolle sichert die Qualität bis zur Fertigstellung.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 pb-16">
          <ScrollReveal>
            <div className="-mt-20 mb-12">
              <h2 className="text-xl mb-6 text-white font-heading">Architektur entsteht im Dialog</h2>
              <p className="text-sm leading-loose text-[#999999]">
                Jedes Projekt beginnt mit einem Gespräch, offen und auf Augenhöhe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 md:items-stretch">
              {/* Left Side - Image & Contact Info */}
              <div className="text-sm leading-loose text-[#999999]">
                {/* Mobile: landscape image */}
                <div className="md:hidden aspect-[16/9] overflow-hidden bg-[#1a1a1a] mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtZWV0aW5nJTIwaGFuZHNoYWtlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczNDc5NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Paride Visca & Reto Seghers"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Mobile: contact info below image */}
                <div className="space-y-4 md:hidden">
                  <div className="text-[#999999]">Paride Visca & Reto Seghers</div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kannenfeldstrasse+22,+4056+Basel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-[#999999] no-underline transition-colors duration-300 cursor-pointer"
                  >
                    <div>Kannenfeldstrasse 22</div>
                    <div>CH–4056 Basel</div>
                  </a>
                  <div className="space-y-1">
                    <div>
                      <a href="tel:+41619714435" className="text-[#999999] no-underline transition-colors duration-300 cursor-pointer">
                        T +41 61 971 44 35
                      </a>
                    </div>
                    <div>
                      <a href="mailto:info@pv-architektur.ch" className="text-[#999999] no-underline transition-colors duration-300 cursor-pointer">
                        info@pv-architektur.ch
                      </a>
                    </div>
                  </div>
                </div>
                {/* Desktop: image with contact info beside it */}
                <div className="hidden md:flex gap-8 h-full">
                  <div className="w-64 flex-shrink-0 overflow-hidden bg-[#1a1a1a]">
                    <img 
                      src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtZWV0aW5nJTIwaGFuZHNoYWtlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzczNDc5NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Paride Visca & Reto Seghers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start space-y-4">
                    <div className="text-[#999999]">Paride Visca & Reto Seghers</div>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Kannenfeldstrasse+22,+4056+Basel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-[#999999] no-underline md:hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      <div>Kannenfeldstrasse 22</div>
                      <div>CH–4056 Basel</div>
                    </a>
                    <div className="space-y-1">
                      <div>
                        <a href="tel:+41619714435" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300 cursor-pointer">
                          T +41 61 971 44 35
                        </a>
                      </div>
                      <div>
                        <a href="mailto:info@pv-architektur.ch" className="text-[#999999] no-underline md:hover:text-white transition-colors duration-300 cursor-pointer">
                          info@pv-architektur.ch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Vor- und Nachname"
                      className="w-full bg-transparent border-b border-[#333333] text-white text-sm py-3 placeholder-[#666666] focus:outline-none focus:border-[#999999] transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-Mail"
                      className="w-full bg-transparent border-b border-[#333333] text-white text-sm py-3 placeholder-[#666666] focus:outline-none focus:border-[#999999] transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Ihre Nachricht"
                      rows={6}
                      className="w-full bg-transparent border-b border-[#333333] text-white text-sm py-3 placeholder-[#666666] focus:outline-none focus:border-[#999999] transition-colors duration-300 resize-none"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="text-sm text-[#999999] md:hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      Nachricht senden
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* News Section */}
      <section className="mb-16 pb-16 -mt-20 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 md:pt-8">
          <ScrollReveal>
            <h2 className="text-xl text-white leading-tight mb-12 font-heading">
              Aktuell
            </h2>
          </ScrollReveal>
        
          {/* Carousel Container */}
          <div className="relative w-full overflow-hidden -mx-3">
            {/* News Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentNewsIndex * slidePercent}%)`
              }}
            >
              {latestNews.map((item) => {
                const relatedProject = item.projectId ? projects.find(p => p.id === item.projectId) : null;
                return (
                  <div 
                    key={item.id}
                    className="w-full md:w-1/2 flex-shrink-0 px-3"
                  >
                    <Link
                      to={`/news/${item.id}`}
                      className="block no-underline group"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4" ref={newsImageRef}>
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
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Arrows - Fixed at edges */}
            {currentNewsIndex > 0 && (
              <button
                onClick={handlePrevNews}
                className="absolute left-4 md:left-6 -translate-y-1/2 text-white transition-opacity duration-300 cursor-pointer z-10"
                style={{ top: `${(newsImageHeight || 0) / 2}px` }}
                aria-label="Vorherige News"
              >
                <ChevronLeft size={36} className="md:hidden" strokeWidth={2} />
                <ChevronLeft size={48} className="hidden md:block" strokeWidth={2} />
              </button>
            )}
            
            {currentNewsIndex < latestNews.length - slidesVisible && (
              <button
                onClick={handleNextNews}
                className="absolute right-4 md:right-6 -translate-y-1/2 text-white transition-opacity duration-300 cursor-pointer z-10"
                style={{ top: `${(newsImageHeight || 0) / 2}px` }}
                aria-label="Nächste News"
              >
                <ChevronRight size={36} className="md:hidden" strokeWidth={2} />
                <ChevronRight size={48} className="hidden md:block" strokeWidth={2} />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}