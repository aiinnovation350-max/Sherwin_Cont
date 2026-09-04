import React from 'react';
import { TRUST_BENEFITS } from '../data/companyData';
import { 
  CalendarSync, 
  Award, 
  Clock, 
  Headphones,
  Check
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarSync': return <CalendarSync className="w-6 h-6 text-sky-600" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-cyan-600" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-blue-600" />;
      default: return <Award className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section className="bg-white py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Check className="w-3.5 h-3.5" /> Proven Value In Qatar
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            A Cleaning Partner Built Around Your Requirements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Structured to eliminate the operational headaches of building maintenance through transparent accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BENEFITS.map((benefit, idx) => (
            <div 
              key={benefit.title}
              className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4">
                  {getIcon(benefit.icon)}
                </div>
                <div className="text-xs font-bold text-sky-700 tracking-wide uppercase mb-1">
                  {benefit.subtitle}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>0{idx + 1}</span>
                <span className="text-sky-600">Sharwin Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
