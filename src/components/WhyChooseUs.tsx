import React from 'react';
import { WHY_CHOOSE_SHARWIN } from '../data/companyData';
import { 
  Sliders, 
  Zap, 
  ShieldCheck, 
  PhoneCall, 
  UserCheck, 
  TrendingUp,
  CheckCircle,
  Shield
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sliders': return <Sliders className="w-5 h-5 text-sky-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-cyan-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      default: return <CheckCircle className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            Strategic Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Sharwin Contracting & Cleaning
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            We reject the rigid, one-size-fits-all model. Every service level is engineered for agility, direct oversight, and measurable quality.
          </p>
        </div>

        {/* 6 Infographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_SHARWIN.map((card) => (
            <div
              key={card.number}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-sky-50 group-hover:border-sky-200 flex items-center justify-center transition-colors">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-sky-300 transition-colors">
                    {card.number}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[11px] font-bold tracking-wide uppercase mb-2">
                  {card.highlight}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Standard in Qatar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
