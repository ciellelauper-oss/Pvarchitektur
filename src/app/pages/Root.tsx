import { Outlet, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MobileMenuProvider } from '../context/MobileMenuContext';

export function Root() {
  const location = useLocation();
  const isPracticePage = location.pathname.startsWith('/ueber-uns');
  const isNewsPage = location.pathname.startsWith('/news');
  const isProjectsPage = location.pathname.startsWith('/projekte');
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  
  // Pages with sub-headers (News, Projects, Practice) don't need pt from Root
  const hasSubHeader = isNewsPage || isProjectsPage || isPracticePage;

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  // Smooth page transitions
  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setDisplayLocation(location);
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 20);
      }, 150);
    }
  }, [location, displayLocation]);

  return (
    <MobileMenuProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <main className={`${isHomePage ? 'pt-[57px] md:pt-[73px]' : hasSubHeader ? 'pt-[73px]' : 'pt-[73px] md:pt-32'} transition-opacity duration-150 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </MobileMenuProvider>
  );
}