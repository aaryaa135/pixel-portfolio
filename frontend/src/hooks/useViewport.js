import { useState, useEffect } from 'react';

// Tracks viewport width and exposes simple breakpoint flags so components
// can switch behavior (not just styling) between mobile, tablet, and desktop —
// e.g. windows become full-screen and undraggable on mobile.
export default function useViewport() {
  const [width, setWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1280));

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return {
    width,
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
  };
}
