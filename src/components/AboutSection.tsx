import React from 'react';
import { APPROACH_STEPS, COMPANY_DETAILS } from '../data/companyData';
import { 
  Building2, 
  CheckCircle, 
  MapPin, 
  Ear, 
  FileText, 
  Truck, 
  Sparkles, 
  RotateCw,
  Users,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const getApproachIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear': return <Ear className="w-5 h-5 text-sky-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'RotateCw': return <RotateCw className="w-5 h-5 text-cyan-600" />;
      default: return <CheckCircle className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column About */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Commercial Facility Imagery & Corporate Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern commercial corporate tower and facility in Doha, Qatar"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Fact Card */}
              <div className="p-6 bg-slate-900 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    Doha Headquartered
                  </div>
                  <span className="text-xs text-slate-400">Rwaq Business Centre</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialized operations across commercial, hospitality, retail, and corporate properties throughout the State of Qatar.
                </p>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-sky-600 rounded-tl-xl pointer-events-none hidden sm:block"></div>
          </div>

          {/* Right Column: About Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" /> Corporate Profile
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              About Sharwin Contracting and Cleaning
            </h2>

            {/* Core messaging based on verified public information */}
            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
              <p>
                <strong>Sharwin Contracting and Cleaning</strong> is a premier facilities-services and commercial-cleaning company based in <strong>Doha, Qatar</strong>. We provide flexible contract cleaning and specialist cleaning solutions engineered specifically for commercial clients, corporate offices, and institutional venues.
              </p>
              <p>
                Positioned as a comprehensive <strong>one-stop service provider</strong>, Sharwin integrates professional cleaning, skilled hospitality support, technical specialized cleans, and auxiliary facility-support solutions under one agile, accountable umbrella.
              </p>
              <p>
                Our philosophy centers on a client-first service structure: we reject restrictive long contracts in favor of genuine transparency, reliable communication, and flexible engagement models that scale effortlessly with your changing operational rhythm.
              </p>
            </div>

            {/* Core Emphasis Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { label: 'Flexibility', desc: 'Custom terms & rosters' },
                { label: 'Reliability', desc: 'Consistent benchmarks' },
                { label: 'Transparency', desc: 'Honest pricing & reporting' },
                { label: 'On-Site Oversight', desc: 'Direct supervision' },
              ].map((pill) => (
                <div key={pill.label} className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">{pill.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{pill.desc}</div>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-xs transition-colors"
              >
                Discuss Your Facility Needs
              </button>
              <a
                href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm rounded-xl border border-slate-300 transition-colors"
              >
                {COMPANY_DETAILS.emails[0]}
              </a>
            </div>
          </div>
        </div>

        {/* Infographic Underneath: "Our Approach" Connected Timeline */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
              Operational Framework
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Our Approach
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A structured, 5-stage lifecycle ensuring seamless onboarding and sustained cleanliness.
            </p>
          </div>

          {/* Desktop Connected Timeline / Mobile Responsive Grid */}
          <div className="relative">
            {/* Horizontal connecting line on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-5 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {APPROACH_STEPS.map((step) => (
                <div 
                  key={step.title}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-start"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {getApproachIcon(step.icon)}
                    </div>
                    <span className="text-xs font-black px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                      Step 0{step.step}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
