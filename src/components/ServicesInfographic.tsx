import React, { useState } from 'react';
import { 
  Sparkles, 
  Coffee, 
  Building2, 
  Briefcase, 
  Fan, 
  Users, 
  CheckCircle2, 
  Compass,
  ArrowRight
} from 'lucide-react';

interface SolutionNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface ServicesInfographicProps {
  onSelectSolution?: (title: string) => void;
}

export const ServicesInfographic: React.FC<ServicesInfographicProps> = ({ onSelectSolution }) => {
  const [activeNode, setActiveNode] = useState<string>('cleaning');

  const nodes: SolutionNode[] = [
    {
      id: 'cleaning',
      title: 'Commercial Cleaning',
      subtitle: 'Daily & Contract Upkeep',
      description: 'Systematic daily and periodic sanitation for corporate offices, retail spaces, and public buildings.',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-sky-500 to-blue-600',
    },
    {
      id: 'hospitality',
      title: 'Hospitality Support',
      subtitle: 'Trained Stewards & Hosts',
      description: 'Polite, uniformed front-of-house staff, tea boys, and meeting room hospitality stewards.',
      icon: <Coffee className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'facility-mgmt',
      title: 'Facility Management',
      subtitle: 'Integrated Operational Care',
      description: 'Single-source coordination of building hygiene, minor upkeep, and waste stream logistics.',
      icon: <Building2 className="w-5 h-5" />,
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'project-support',
      title: 'Project Support',
      subtitle: 'Fit-out & Event Handover',
      description: 'Rapid mobilization for corporate moves, post-construction turnovers, and temporary events.',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'ac-services',
      title: 'A/C Maintenance',
      subtitle: 'Cooling & Filter Care',
      description: 'Commercial AC coil deep washing, filter disinfection, and drainage upkeep for Qatar’s climate.',
      icon: <Fan className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'recruitment',
      title: 'Workforce Support',
      subtitle: 'Vetted Manpower Supply',
      description: 'Health-screened, legal, and professionally trained facility staff under verified local sponsorship.',
      icon: <Users className="w-5 h-5" />,
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 'washroom',
      title: 'Washroom Services',
      subtitle: 'Hygiene & Consumables',
      description: 'Scheduled replenishment of premium paper goods, automatic dispensers, and sanitary care.',
      icon: <CheckCircle2 className="w-5 h-5" />,
      color: 'from-teal-500 to-emerald-600',
    },
    {
      id: 'specialist',
      title: 'Specialist Cleaning',
      subtitle: 'Facades, Carpets & Kitchens',
      description: 'Telescopic facade reach, heavy degreasing, escalator grooving, and deep carpet extraction.',
      icon: <Compass className="w-5 h-5" />,
      color: 'from-rose-500 to-pink-600',
    },
  ];

  const selectedData = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3 border border-sky-400/30">
            Integrated Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            One Partner. Multiple Facility Solutions.
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Consolidate your facilities support under Sharwin. Streamlined communication, consistent standards, and zero coordination friction.
          </p>
        </div>

        {/* Dynamic Interactive Infographic Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Top: Interactive Radial Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {nodes.map((node) => {
                const isSelected = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between h-36 ${
                      isSelected
                        ? 'bg-slate-800 border-sky-400 ring-2 ring-sky-500/30 shadow-lg -translate-y-1'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${node.color} text-white shadow-xs`}>
                        {node.icon}
                      </div>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-sky-400 animate-ping' : 'bg-slate-700'}`}></span>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white leading-snug">
                        {node.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {node.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right / Center Spotlight: The Connected Hub Core */}
          <div className="lg:col-span-4">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-2xl relative">
              {/* Hub Indicator */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                  Selected Facility Domain
                </span>
                <span className="text-xs text-sky-400 font-mono">
                  Qatar Operations
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedData.color} text-white shadow-md`}>
                  {selectedData.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {selectedData.title}
                  </h4>
                  <span className="text-xs text-sky-300">
                    {selectedData.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedData.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-700/60 mb-6 text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Contract Flexibility:</span>
                  <span className="text-slate-200 font-semibold">One-Off or Regular</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Supervision:</span>
                  <span className="text-slate-200 font-semibold">Full On-Site Oversight</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Response Window:</span>
                  <span className="text-emerald-400 font-semibold">Swift Mobilisation</span>
                </div>
              </div>

              {onSelectSolution && (
                <button
                  onClick={() => onSelectSolution(selectedData.title)}
                  className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire About {selectedData.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
