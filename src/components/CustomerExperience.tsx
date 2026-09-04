import React, { useState } from 'react';
import { CUSTOMER_EXPERIENCE_STEPS } from '../data/companyData';
import { 
  Ear, 
  Brain, 
  FileCheck2, 
  CheckCircle, 
  RefreshCw,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export const CustomerExperience: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear': return <Ear className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  const active = CUSTOMER_EXPERIENCE_STEPS.find(s => s.step === activeStep) || CUSTOMER_EXPERIENCE_STEPS[0];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3 border border-sky-500/30">
            <HeartHandshake className="w-3.5 h-3.5" /> Client-Centric DNA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built Around Our Clients
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            Service quality is not an accident; it is an ongoing closed-loop process of attentive listening, custom operational design, and continuous optimization.
          </p>
        </div>

        {/* Circular / Stepper Experience Loop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 5 Step Selectors */}
          <div className="lg:col-span-7 space-y-3">
            {CUSTOMER_EXPERIENCE_STEPS.map((step) => {
              const isSelected = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`w-full p-4 rounded-xl text-left transition-all cursor-pointer border flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-800 border-sky-400 text-white shadow-lg ring-1 ring-sky-400/40'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                      isSelected 
                        ? 'bg-sky-500 text-white shadow-xs' 
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {getStepIcon(step.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-sky-400 font-bold">0{step.step}</span>
                        <h3 className="text-base font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Focus Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl relative">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 text-sky-400 flex items-center justify-center mb-6">
                {getStepIcon(active.icon)}
              </div>

              <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
                Continuous Quality Loop • Stage 0{active.step}
              </div>

              <h4 className="text-2xl font-bold text-white mb-3">
                {active.title} Phase
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {active.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center justify-between text-slate-200 font-medium">
                  <span>Client Feedback Loop:</span>
                  <span className="text-emerald-400">Directly Integrated</span>
                </div>
                <div className="flex items-center justify-between text-slate-200 font-medium">
                  <span>Contract Lock-In:</span>
                  <span className="text-sky-400">None / Flexible Terms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
