import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSlideshowProps {
  images: string[];
  title: string;
  projectId?: string; // Optional project ID for linking
}

export function ImageSlideshow({ images, title, projectId }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  if (images.length === 0) return null;

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 1;

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = container.children;
    if (children[index]) {
      const child = children[index] as HTMLElement;
      isScrolling.current = true;
      container.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
      setTimeout(() => {
        isScrolling.current = false;
      }, 400);
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (canGoPrev) scrollToIndex(currentIndex - 1);
  }, [canGoPrev, currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    if (canGoNext) scrollToIndex(currentIndex + 1);
  }, [canGoNext, currentIndex, scrollToIndex]);

  // Update currentIndex on manual scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrolling.current) return;
      const children = Array.from(container.children) as HTMLElement[];
      let closestIndex = 0;
      let closestDistance = Infinity;
      children.forEach((child, index) => {
        const distance = Math.abs(child.offsetLeft - container.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setCurrentIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-full">
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
        style={{ 
          scrollbarWidth: 'none',
          scrollBehavior: 'smooth'
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[calc(70vw-36px)] md:w-[calc(50vw-48px)] max-w-[700px] snap-start relative"
          >
            <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
              {projectId ? (
                <Link to={`/projekte/${projectId}`} className="block w-full h-full">
                  <img 
                    src={image} 
                    alt={`${title} - Bild ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </Link>
              ) : (
                <img 
                  src={image} 
                  alt={`${title} - Bild ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - centered vertically on the image */}
      {images.length > 1 && (
        <>
          {canGoPrev && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-[calc(((70vw-36px)*5/4)/2)] md:top-[calc(((min(50vw-48px,700px))*3/4)/2)] -translate-y-1/2 text-white transition-opacity duration-300 cursor-pointer z-10 bg-transparent border-none p-0"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={36} className="md:hidden" strokeWidth={2} />
              <ChevronLeft size={48} className="hidden md:block" strokeWidth={2} />
            </button>
          )}
          {canGoNext && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-[calc(((70vw-36px)*5/4)/2)] md:top-[calc(((min(50vw-48px,700px))*3/4)/2)] -translate-y-1/2 text-white transition-opacity duration-300 cursor-pointer z-10 bg-transparent border-none p-0"
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={36} className="md:hidden" strokeWidth={2} />
              <ChevronRight size={48} className="hidden md:block" strokeWidth={2} />
            </button>
          )}
        </>
      )}
    </div>
  );
}