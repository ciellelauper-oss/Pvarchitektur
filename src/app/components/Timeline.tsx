import { timelineEvents } from '../data/timeline';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface TimelineProps {
  activeSection: string;
}

export function Timeline({ activeSection }: TimelineProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>(
    timelineEvents.map(event => event.id)
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleItem = (id: number) => {
    if (isMobile) {
      setExpandedItems(prev => 
        prev.includes(id) 
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    }
  };

  return (
    <section className="mb-24">
      <ScrollReveal>
        <h2 className="text-lg md:text-xl font-normal mb-6 text-white font-heading">
          Langjährige Praxis in unterschiedlichen Bauaufgaben
        </h2>
      </ScrollReveal>

      {/* Timeline List */}
      <div className="max-w-none relative">
        {/* Durchgehende vertikale Linie */}
        <div className="absolute left-[60px] md:left-[150px] top-0 bottom-0 w-px bg-[#333333]" />
        
        {timelineEvents.map((event, index) => {
          const isExpanded = expandedItems.includes(event.id);
          
          return (
            <ScrollReveal key={event.id}>
              <div 
                className="grid grid-cols-[60px_1fr] md:grid-cols-[150px_1fr] gap-4 md:gap-12 pb-64 last:pb-0 relative"
              >
                {/* Year - Left Column */}
                <div className="text-left">
                  <button
                    onClick={() => toggleItem(event.id)}
                    className="text-sm md:text-lg font-normal bg-transparent border-none p-0 cursor-default transition-colors duration-300"
                    disabled={!isMobile}
                  >
                    <span className="text-white">
                      {event.year}
                    </span>
                  </button>
                </div>
                
                {/* Content - Right Column with Line */}
                <div className="relative pl-4 md:pl-8">
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-[-16px] md:left-[-48px] top-1.5 w-2 h-2 rounded-full bg-white z-10"
                    style={{ transform: 'translateX(-50%)' }}
                  />
                  
                  {/* Title and Description */}
                  <div className="max-w-[700px]">
                    {/* Title - clickable on mobile */}
                    <button
                      onClick={() => toggleItem(event.id)}
                      className="w-full text-left bg-transparent border-none p-0 cursor-default group"
                      disabled={!isMobile}
                    >
                      <div className="md:flex md:items-center md:justify-between mb-2">
                        <h3 className="text-sm md:text-lg font-normal transition-colors duration-300 text-white hyphens-auto font-heading" style={{ hyphenate: 'auto' }}>
                          {event.title}
                        </h3>
                      </div>
                    </button>
                    
                    {/* Description - expandable on mobile, always visible on desktop */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 ${'max-h-[500px] opacity-100'}`}
                    >
                      <p className="text-sm md:text-base text-[#999999] leading-relaxed pb-6 md:pb-12">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}