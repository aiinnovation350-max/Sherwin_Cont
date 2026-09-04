import React from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS, SERVICES } from '../data/companyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  ChevronRight, 
  Shield, 
  CheckCircle2,
  Building2
} from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onSelectServiceForQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 relative z-20">
      {/* Top Footer Banner */}
      <div className="border-b border-slate-900 bg-slate-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo variant="white" compact={false} />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Request a Free Quote
            </button>
            <a
              href={`https://wa.me/97450371648?text=${encodeURIComponent('Hello Sharwin team, I would like to enquire about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: About Sharwin */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">
              About Sharwin
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Sharwin Contracting and Cleaning</strong> is a professional, flexible, and high-quality commercial cleaning and facilities-support company based in Doha, Qatar. We provide customized solutions designed strictly around your business schedule and hygiene standards.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Incorporated & Licensed in Qatar</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Serving Doha, Al Rayyan, Lusail, Al Wakrah & all Qatar municipalities.
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Why Choose Us', href: '#why-choose' },
                { label: 'Facilities We Serve', href: '#industries' },
                { label: 'How We Work', href: '#process' },
                { label: 'Gallery Portfolio', href: '#gallery' },
                { label: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">
              Core Services (12)
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectServiceForQuote(srv.title)}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-sky-400"></span>
                    <span className="truncate">{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DETAILS.address.line1}, {COMPANY_DETAILS.address.line2}, {COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.country}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${COMPANY_DETAILS.phones[0].raw}`} className="hover:text-white transition-colors">
                    {COMPANY_DETAILS.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_DETAILS.phones[1].raw}`} className="hover:text-white transition-colors">
                    {COMPANY_DETAILS.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_DETAILS.emails[0]}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.emails[0]}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p>
              © 2026 {COMPANY_DETAILS.name} ({COMPANY_DETAILS.nameArabic}). All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Official website: <span className="text-slate-400">{COMPANY_DETAILS.website}</span> • Doha, Qatar
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
