import React, { useState } from 'react';
import { INDUSTRIES } from '../data/companyData';
import { 
  Building, 
  Layers, 
  Coffee, 
  ShoppingBag, 
  Landmark, 
  Boxes, 
  Utensils, 
  Shield, 
  Check, 
  ArrowRight
} from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustryForQuote?: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustryForQuote }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES[0].id);

  const getIndustryIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-sky-600' };
    switch (iconName) {
      case 'Building': return <Building {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Shield': return <Shield {...props} />;
      default: return <Building {...props} />;
    }
  };

  const active = INDUSTRIES.find(i => i.id === selectedIndustry) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" /> Sector Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Facilities We Support
          </h2>
          <p className="text-base text-slate-600 mt-3">
            From premier West Bay corporate towers to industrial warehouses and food service venues in Doha, Qatar.
          </p>
        </div>

        {/* 8 Sector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {INDUSTRIES.map((ind) => {
            const isSelected = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`p-6 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-sky-400 ring-2 ring-sky-500/20 shadow-md -translate-y-1'
                    : 'bg-white/80 border-slate-200 hover:border-sky-300 hover:bg-white shadow-2xs'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-sky-700' : 'text-slate-400'}>
                    {isSelected ? 'Viewing Plan' : 'Explore Scope'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-300'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Panel for Selected Sector */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                Customized Protocol for
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                {active.name}
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                {active.description}
              </p>
            </div>

            {onSelectIndustryForQuote && (
              <button
                onClick={() => onSelectIndustryForQuote(active.name)}
                className="shrink-0 px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request {active.name} Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="mt-6">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Standard Cleaning & Facility Deliverables:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {active.keySolutions.map((sol, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-slate-800 font-semibold">{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
