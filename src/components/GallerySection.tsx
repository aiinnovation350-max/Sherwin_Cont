import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';
import { 
  Camera, 
  X, 
  Maximize2, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  MapPin
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Commercial Cleaning',
    'Specialist Cleaning',
    'High-Level Cleaning',
    'Hospitality',
    'Facility Management',
    'Professional Teams',
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" /> Operational Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Work & Facilities
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Operational cleanliness, specialist equipment and commercial premises maintained across Doha and wider Qatar.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-sky-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/40 text-white backdrop-blur-xs group-hover:bg-sky-600 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-xs text-[10px] font-bold text-sky-300 border border-slate-700/60 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-amber-400 font-semibold block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate">{item.description}</span>
                <span className="text-sky-600 font-bold ml-2 shrink-0">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {activeImage.category}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-400">
                    {activeImage.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {activeImage.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 text-xs text-sky-400 font-semibold bg-sky-950/60 px-3 py-1.5 rounded-lg border border-sky-800/60">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Qatar Operations</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
