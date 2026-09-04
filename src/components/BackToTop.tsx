import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button after scrolling past hero section (approx 450px)
      const heroElement = document.getElementById('hero');
      const threshold = heroElement ? heroElement.offsetHeight * 0.75 : 400;
      
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      className={`fixed z-40 transition-all duration-300 ease-out flex items-center justify-center rounded-full shadow-lg border cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-sky-400 ${
        // Positioned cleanly above the floating WhatsApp button on both mobile and desktop
        'bottom-36 right-4 sm:bottom-36 sm:right-6 lg:bottom-24 lg:right-8 w-11 h-11 sm:w-12 sm:h-12'
      } ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto bg-slate-900/95 hover:bg-sky-600 text-white border-slate-700/80 hover:border-sky-500 shadow-sky-950/30'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none bg-slate-900/0 text-transparent border-transparent'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};
