import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  offset?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, offset = 0 } = options;
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setParallaxOffset((scrolled - offset) * speed);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset]);

  return parallaxOffset;
};