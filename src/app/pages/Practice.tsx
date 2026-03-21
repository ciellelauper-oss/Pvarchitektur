import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { partners } from '../data/partners';
import { useMobileMenu } from '../context/MobileMenuContext';
import { ScrollReveal } from '../components/ScrollReveal';

export function Practice() {
  const { mobileMenuOpen } = useMobileMenu();
  const [activeSection, setActiveSection] = useState('profil');
  const [subHeaderHeight, setSubHeaderHeight] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const subHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Measure sub-header height
    const measureSubHeader = () => {
      if (subHeaderRef.current) {
        setSubHeaderHeight(subHeaderRef.current.offsetHeight);
      }
    };

    measureSubHeader();
    window.addEventListener('resize', measureSubHeader);

    return () => {
      window.removeEventListener('resize', measureSubHeader);
    };
  }, []);

  useEffect(() => {
    // Function to determine which section has the most visible area
    const updateActiveSection = () => {
      // If we're at the very top of the page, always show 'profil' as active
      if (window.scrollY < 50) {
        setActiveSection('profil');
        return;
      }

      const sections = ['profil', 'team', 'partnerfirmen'];
      const headerOffset = 180; // Header + Sub-Header height
      
      let maxVisibleArea = 0;
      let mostVisibleSection = 'profil';
      
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Calculate visible area of this section
          const visibleTop = Math.max(rect.top, headerOffset);
          const visibleBottom = Math.min(rect.bottom, window.innerHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            mostVisibleSection = id;
          }
        }
      });
      
      setActiveSection(mostVisibleSection);
    };

    // Initial check
    updateActiveSection();

    // Update on scroll
    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Sofort aktiven State setzen
    const element = document.getElementById(id);
    if (element) {
      // Dynamischer Offset: Header + Sub-Header Höhe + zusätzlicher Abstand
      const headerHeight = window.innerWidth >= 768 ? 73 : 57; // md breakpoint
      const offset = headerHeight + subHeaderHeight + 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Sub-Header with Section Navigation - Hidden when mobile menu is open */}
      {!mobileMenuOpen && (
        <div ref={subHeaderRef} className="fixed top-[57px] md:top-[73px] left-0 right-0 z-40 bg-black border-b border-[#333333]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8">
            <nav className="flex items-center gap-3 md:gap-12 pt-5 pb-3 md:pt-9 md:pb-7 text-xs md:text-base bg-transparent border-none font-normal flex-wrap">
              <button
                onClick={() => scrollToSection('profil')}
                className={`no-underline transition-colors duration-300 cursor-pointer whitespace-nowrap bg-transparent border-none p-0 font-heading ${
                  activeSection === 'profil' ? 'text-white' : 'text-[#999999] md:hover:text-white'
                }`}
              >
                Profil
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className={`no-underline transition-colors duration-300 cursor-pointer whitespace-nowrap bg-transparent border-none p-0 font-heading ${
                  activeSection === 'team' ? 'text-white' : 'text-[#999999] md:hover:text-white'
                }`}
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('partnerfirmen')}
                className={`no-underline transition-colors duration-300 cursor-pointer whitespace-nowrap bg-transparent border-none p-0 font-heading text-left ${
                  activeSection === 'partnerfirmen' ? 'text-white' : 'text-[#999999] md:hover:text-white'
                }`}
              >
                Partnerfirmen
              </button>
            </nav>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pb-12">
        {/* Profil */}
        <section 
          id="profil" 
          className="mb-24 scroll-mt-32 md:pt-[118px]"
          style={{ paddingTop: `${subHeaderHeight}px` }}
        >
          <ScrollReveal>
            <h2 className="text-lg md:text-xl font-normal mb-6 text-white md:mt-6 font-heading">
              Bauen mit Verantwortung
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-2">
            <ScrollReveal delay={0}>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Erfahrung</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Wir planen und realisieren Wohn und Gewerbebauten mit langjähriger Erfahrung. Jedes Projekt begleiten wir persönlich vom ersten Gespräch bis zur Fertigstellung.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Zusammenarbeit</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Der direkte Austausch mit unseren Bauherrschaften ist uns wichtig. Wir hören zu, stellen Fragen und entwickeln Lösungen, die zu Aufgabe, Ort und Budget passen.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-base mb-3 text-white font-heading">Haltung</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Unser Ziel ist Architektur, die im Alltag überzeugt und langfristig Bestand hat. Sorgfalt im Raum und im Detail ist für uns selbstverständlich.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mb-24 scroll-mt-32 -mt-8">
          <ScrollReveal>
            <h2 className="text-lg md:text-xl font-normal mb-6 text-white font-heading">
              Persönlicher Einsatz für jedes Projekt
            </h2>
          </ScrollReveal>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal delay={0}>
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1667996113308-b8fa553d4ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwYXJjaGl0ZWN0JTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzM0ODA3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Paride Visca"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base mb-3 text-white font-heading">Paride Visca</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Ich gründete das Büro und verfüge über langjährige Erfahrung in der Planung und Realisierung von Wohn und Gewerbebauten. In meiner Arbeit verbinde ich konzeptionelle Klarheit mit einer sorgfältigen und strukturierten Planung.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1584940121730-93ffb8aa88b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwbWF0dXJlJTIwbWFsZXxlbnwxfHx8fDE3NzM0ODA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Reto Seghers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base mb-3 text-white font-heading">Reto Seghers</h3>
                <p className="text-sm leading-loose text-[#999999]">
                  Ich bringe langjährige Erfahrung in Planung, Projektleitung und Ausführung von Bauvorhaben im Wohn und Gewerbebau mit. Wichtig ist mir eine präzise Ausarbeitung und eine verlässliche Begleitung der Projekte über alle Phasen hinweg.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Partnerfirmen */}
        <section id="partnerfirmen" className="mb-0 scroll-mt-32 -mt-8">
          <ScrollReveal>
            <h2 className="text-lg md:text-xl font-normal mb-6 text-white font-heading">
              Verlässliche Partner für jede Bauaufgabe
            </h2>
          </ScrollReveal>
          <div className="max-w-none text-sm leading-loose space-y-6 text-[#999999] mb-12">
            <ScrollReveal delay={0}>
              <p>
                Unsere Projekte realisieren wir in enger Zusammenarbeit mit ausgewählten Partnerunternehmen aus Planung und Ausführung.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p>
                Langjährige Kooperationen sichern Qualität, Verlässlichkeit und Kontinuität. Die Zusammenarbeit basiert auf gegenseitigem Vertrauen und fachlicher Kompetenz.
              </p>
            </ScrollReveal>
          </div>

          {/* Partners - Mobile Vertical Stack, Desktop Grid */}
          <div className="md:hidden space-y-8">
            {partners.map((partner) => (
              <ScrollReveal key={partner.id}>
                <Link 
                  to={`/partner/${partner.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base text-white transition-colors duration-300 mb-2 font-heading">
                    {partner.name}
                  </h3>
                  <div className="text-sm text-[#999999]">
                    {partner.category}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Partners Grid - Desktop Only */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {partners.map((partner) => (
              <ScrollReveal key={partner.id}>
                <Link 
                  to={`/partner/${partner.id}`}
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] mb-4">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-base text-[#999999] group-hover:text-white transition-colors duration-300 mb-2 font-heading">
                    {partner.name}
                  </h3>
                  <div className="text-sm text-[#999999]">
                    {partner.category}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}