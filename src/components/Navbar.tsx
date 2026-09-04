import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  FileText, 
  ArrowRight,
  ChevronRight,
  Shield
} from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top micro-bar for verified corporate credentials in Qatar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Serving Doha & All Municipalities in Qatar
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              Commercial Cleaning • Facility Management • Specialist Support
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a 
              href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_DETAILS.phones[0].display}</span>
            </a>
            <span className="text-slate-600">/</span>
            <a 
              href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {COMPANY_DETAILS.phones[1].display}
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 text-[11px] font-semibold flex items-center gap-1">
              <Shield className="w-3 h-3" /> Licensed in Qatar
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' 
            : 'bg-white py-4 border-b border-slate-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with official emblem */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center group cursor-pointer focus:outline-hidden"
            aria-label="Sharwin Contracting and Cleaning Home"
          >
            <Logo compact={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/97450371648?text=${encodeURIComponent('Hello Sharwin team, I would like to enquire about your commercial cleaning services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-200 flex items-center justify-center title"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              id="nav-quote-btn"
            >
              <FileText className="w-4 h-4" />
              <span>Get a Free Quote</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Quote</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700 rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/97450371648?text=${encodeURIComponent('Hello Sharwin team, I would like to enquire about your commercial cleaning services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Sticky Mobile Quick Action Bar at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 shadow-lg flex items-center justify-between gap-2">
        <a
          href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-200 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-sky-600" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/97450371648?text=${encodeURIComponent('Hello Sharwin team, I would like to enquire about your commercial cleaning services.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuote}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
};
