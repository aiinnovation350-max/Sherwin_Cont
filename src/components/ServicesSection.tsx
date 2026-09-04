import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { 
  Sparkles, 
  Building2, 
  Layers, 
  Maximize2, 
  TrendingUp, 
  Compass, 
  UtensilsCrossed, 
  CheckCircle2, 
  Users, 
  Fan, 
  Briefcase, 
  CalendarCheck,
  ArrowUpRight,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-sky-600' };
    switch (iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Maximize2': return <Maximize2 {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Fan': return <Fan {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'CalendarCheck': return <CalendarCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const filteredServices = activeFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Professional solutions designed around your facility and operational requirements.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Services (12)' },
              { id: 'cleaning', label: 'Cleaning' },
              { id: 'specialist', label: 'Specialist' },
              { id: 'facility', label: 'Facility' },
              { id: 'support', label: 'Support & Staff' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-white text-sky-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-sky-400/80 transition-all duration-200 shadow-2xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon and Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-200 flex items-center justify-center shadow-2xs transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-600 uppercase tracking-wider group-hover:bg-sky-100 group-hover:text-sky-700 transition-colors">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-800 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Bullet Feature */}
                <div className="pt-3 border-t border-slate-200/60 mb-4">
                  <ul className="space-y-1.5">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1 cursor-pointer transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-800 border border-slate-200 hover:border-sky-300 text-xs font-semibold shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Quote</span>
                  <ArrowUpRight className="w-3 h-3 text-sky-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForQuote={onSelectServiceForQuote}
      />
    </section>
  );
};
