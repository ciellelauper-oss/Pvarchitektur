import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-in');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fade-out');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fade-out') {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fade-in');
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div
      style={{
        opacity: transitionStage === 'fade-in' ? 1 : 0,
        transition: 'opacity 250ms ease-out'
      }}
    >
      {children}
    </div>
  );
}
