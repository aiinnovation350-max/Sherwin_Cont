import React from 'react';
import { SCHEDULE_MODELS } from '../data/companyData';
import { 
  Clock, 
  Calendar, 
  Repeat, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface ServiceModelsProps {
  onOpenQuote: (frequency?: string) => void;
}

export const ServiceModels: React.FC<ServiceModelsProps> = ({ onOpenQuote }) => {
  const getModelIcon = (type: string) => {
    switch (type) {
      case 'ONE-OFF': return <Clock className="w-6 h-6 text-sky-600" />;
      case 'PERIODIC': return <Calendar className="w-6 h-6 text-amber-500" />;
      case 'REGULAR': return <Repeat className="w-6 h-6 text-emerald-600" />;
      default: return <Clock className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-sky-600" /> Contract Agility
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Schedule, Your Requirements
          </h2>
          <p className="text-base text-slate-600 mt-3">
            We adapt completely to your operational timelines. Choose the frequency that fits your facility lifecycle without punitive commitments.
          </p>
        </div>

        {/* 3 Model Cards Connected by Stepper */}
        <div className="relative">
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-12 left-1/4 right-1/4 h-1 bg-gradient-to-r from-sky-400 via-amber-300 to-emerald-400 -z-0 opacity-40"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {SCHEDULE_MODELS.map((model) => (
              <div
                key={model.type}
                className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                      {getModelIcon(model.type)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-slate-200/80 text-slate-700">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    {model.title}
                  </h3>
                  <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-4">
                    {model.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200/80 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Inclusions:
                    </div>
                    <ul className="space-y-2.5">
                      {model.features.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200/60 mb-6 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-0.5">Best For:</strong>
                    {model.bestFor}
                  </div>

                  <button
                    onClick={() => onOpenQuote(model.type === 'ONE-OFF' ? 'One-Off' : model.type === 'PERIODIC' ? 'Periodic' : 'Regular')}
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-sky-600 text-sky-700 hover:text-white border border-sky-300 hover:border-sky-600 font-bold text-xs shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enquire About {model.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              Unsure which schedule fits your premises?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our site operations specialists in Doha conduct swift facility walk-throughs to recommend an optimal timetable.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Not Sure')}
            className="shrink-0 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-md cursor-pointer"
          >
            Discuss Your Cleaning Requirements
          </button>
        </div>
      </div>
    </section>
  );
};
