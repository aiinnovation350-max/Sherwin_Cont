import React from 'react';
import { HERO_INFOGRAPHICS, COMPANY_DETAILS } from '../data/companyData';
import { 
  ShieldCheck, 
  SlidersHorizontal, 
  Zap, 
  UserCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  MapPin,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case 'SlidersHorizontal': return <SlidersHorizontal className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-emerald-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-sky-400" />;
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#services');
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
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
      {/* Subtle modern geometric background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl"></div>
        
        {/* Subtle architectural grid lines */}
        <svg className="w-full h-full stroke-slate-800/60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Hero Left Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-sky-400 mb-6 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Doha, Qatar</span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="text-slate-300 font-normal">Commercial & Specialist Solutions</span>
            </div>

            {/* Exact Headline from brief */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Professional Cleaning & Facility Services in{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                Qatar
              </span>
            </h1>

            {/* Exact Supporting Text from brief */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mb-8">
              Reliable, flexible and professional cleaning and support services designed around your business needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-primary-cta"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base rounded-xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Fast reassurance points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero rigid lock-in contracts</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>On-site supervision on every job</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Vetted & trained workforce</span>
              </span>
            </div>
          </div>

          {/* Hero Right Visual: High-End Commercial Facility Care Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900">
              {/* Primary realistic visual */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern commercial facility maintained to pristine standards in Qatar"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Inset Badge Overlay */}
              <div className="p-5 bg-slate-900/95 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Comprehensive Facility Partner
                    </div>
                    <p className="text-xs text-slate-400">
                      Corporate offices, commercial towers, retail & specialist venues
                    </p>
                  </div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                    className="p-3 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/30 transition-colors shrink-0"
                    title="Direct Helpline"
                    aria-label="Call Sharwin Helpline"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative subtle accent frame */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 border-r-2 border-b-2 border-amber-400/40 rounded-br-2xl pointer-events-none hidden sm:block"></div>
          </div>
        </div>

        {/* Section 5: Hero Infographic (4 Modern Icons with Short Descriptions) */}
        <div className="pt-6 border-t border-slate-800/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              Operational Strengths
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HERO_INFOGRAPHICS.map((item) => (
              <div
                key={item.title}
                className="group p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center mb-3.5 border border-slate-700/60 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h2 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
