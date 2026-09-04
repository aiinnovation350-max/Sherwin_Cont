import React from 'react';
import { PERFORMANCE_BENEFITS } from '../data/companyData';
import { 
  Clock, 
  TrendingDown, 
  Building2, 
  SlidersHorizontal,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-8 h-8 text-sky-600" />;
      case 'TrendingDown': return <TrendingDown className="w-8 h-8 text-amber-500" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-emerald-600" />;
      case 'SlidersHorizontal': return <SlidersHorizontal className="w-8 h-8 text-indigo-600" />;
      default: return <ShieldCheck className="w-8 h-8 text-sky-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Return on Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Benefits of Professional Commercial Cleaning
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Real operational efficiencies that empower management teams across Qatar to focus strictly on business growth.
          </p>
        </div>

        {/* 4 Large Visual Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PERFORMANCE_BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                    {getBenefitIcon(benefit.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 tracking-wide uppercase">
                    {benefit.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-sky-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Operational Outcome Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
