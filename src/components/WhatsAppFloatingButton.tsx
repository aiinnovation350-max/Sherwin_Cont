import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Pre-filled greeting message for commercial cleaning inquiries in Qatar
  const defaultMessage = encodeURIComponent(
    'Hello Sharwin Contracting and Cleaning team, I would like to enquire about your commercial cleaning and facility services in Qatar.'
  );
  const whatsappUrl = `https://wa.me/97450371648?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp Contact Options" className="fixed bottom-20 right-4 sm:bottom-20 sm:right-6 lg:bottom-8 lg:right-8 z-40 flex items-center">
      {/* Expanding Tooltip / Badge on hover or desktop preview */}
      <div 
        className={`hidden md:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-700/80 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse shrink-0"></span>
        <span className="text-slate-200">Chat with us on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with Sharwin Contracting and Cleaning on WhatsApp (+974 5037 1648)"
        title="Chat on WhatsApp (+974 5037 1648)"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-[#25D366]/40 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Subtle animated status ping ring */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* WhatsApp Official Vector Glyph */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.12 7.42L2.5 29.5l6.3-1.62C10.84 29.12 13.34 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.76-2.76 1.98-.74.16-1.7.28-4.96-1.08-4.16-1.72-6.84-5.96-7.04-6.24-.22-.28-1.7-2.26-1.7-4.32s1.08-3.08 1.46-3.5c.38-.42.84-.52 1.12-.52.28 0 .56 0 .8.02.26.02.6.1.94.92.36.86 1.22 2.98 1.32 3.2.1.22.18.48.04.76-.14.28-.22.46-.44.72-.22.26-.46.58-.66.78-.22.22-.46.46-.2.9.26.44 1.16 1.92 2.5 3.1 1.72 1.54 3.18 2.02 3.62 2.24.44.22.7.18.96-.12.26-.3.1.12 1.48-1.72.38-.48.78-.4 1.3-.2.52.2 3.3 1.56 3.86 1.84.56.28.94.42 1.08.66.14.24.14 1.38-.2 2.34z" />
        </svg>
      </a>
    </aside>
  );
};
