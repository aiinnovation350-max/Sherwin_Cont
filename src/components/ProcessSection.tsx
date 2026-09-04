import React from 'react';
import { CLEANING_PROCESS } from '../data/companyData';
import { 
  Ear, 
  SearchCheck, 
  ClipboardList, 
  Truck, 
  Award,
  CheckCircle,
  Clock
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear': return <Ear className="w-5 h-5 text-sky-600" />;
      case 'SearchCheck': return <SearchCheck className="w-5 h-5 text-blue-600" />;
      case 'ClipboardList': return <ClipboardList className="w-5 h-5 text-indigo-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-amber-500" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-600" />;
      default: return <CheckCircle className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-sky-600" /> Operational Discipline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work
          </h2>
          <p className="text-base text-slate-600 mt-3">
            A verified 5-stage deployment cycle ensuring every property receives tailored attention and reliable supervision.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-slate-200 -z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {CLEANING_PROCESS.map((step, idx) => (
              <div 
                key={step.number}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                      {getProcessIcon(step.icon)}
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 font-mono">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>

                  {/* Exact summary from brief */}
                  <p className="text-xs font-semibold text-sky-800 mb-3">
                    {step.description}
                  </p>

                  {/* Detailed operational action */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Verified Step {idx + 1} of 5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
