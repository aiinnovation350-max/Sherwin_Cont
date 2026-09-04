import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
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
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Architectural Vector Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full stroke-slate-700" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100%" x2="100%" y2="0" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="0.5" />
          <line x1="20%" y1="0" x2="20%" y2="100%" strokeWidth="0.5" />
          <line x1="80%" y1="0" x2="80%" y2="100%" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6 border border-sky-400/30">
          <Sparkles className="w-3.5 h-3.5" /> Qatar Commercial Facility Solutions
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          Need a Reliable Cleaning & Facility Services Partner?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us about your requirements and our team can help identify a suitable service solution tailored around your facility schedule.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base rounded-xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
          >
            <span>Contact Us</span>
          </a>
        </div>

        {/* Quick Contact Indicators */}
        <div className="pt-8 border-t border-slate-800/80 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <a 
            href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
            className="flex items-center gap-2 hover:text-sky-400 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-sky-400" />
            <span>Direct: {COMPANY_DETAILS.phones[0].display}</span>
          </a>
          <span className="text-slate-600">•</span>
          <a 
            href={`https://wa.me/97450371648?text=${encodeURIComponent('Hello Sharwin team, I would like to enquire about your commercial cleaning services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Quick Enquiries</span>
          </a>
        </div>
      </div>
    </section>
  );
};
