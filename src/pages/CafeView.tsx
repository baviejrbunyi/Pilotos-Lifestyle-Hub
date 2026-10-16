import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Check, Sparkles, MapPin } from 'lucide-react';
import { CAFE_MENU, MenuItem } from '../data/pilotosData';

interface CafeViewProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const CafeView: React.FC<CafeViewProps> = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addedToast, setAddedToast] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredItems = CAFE_MENU.filter(
    item => categoryFilter === 'all' || item.category === categoryFilter
  );

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleAddCurrent = () => {
    onAddToCart(currentItem, 1);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-wider text-[#D8CBB9] font-mono">Pilotos Grounds & Afterhours Café</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase">3D CAFÉ MENU SLIDESHOW</h1>
        <p className="text-sm text-[#9CA3AF]">
          Experience our artisan specialty beverages, pastas, and power bowls one by one in high-definition 3D perspective view.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'coffee', label: 'Specialty Coffee' },
            { id: 'pasta', label: 'Artisanal Pasta' },
            { id: 'bowls', label: 'Power Bowls' },
            { id: 'pastries', label: 'Pastries' },
            { id: 'tapas', label: 'Tapas & Picas' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => { setCategoryFilter(cat.id); setCurrentIndex(0); }}
              className={`px-4 py-2 text-xs font-mono uppercase transition-colors ${
                categoryFilter === cat.id
                  ? 'bg-[#D8CBB9] text-[#0B0B0B] font-bold rounded-md'
                  : 'bg-[#141414] text-[#9CA3AF] border border-[#262626] rounded-md hover:text-[#FFFFFF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {addedToast && (
        <div className="max-w-md mx-auto p-4 bg-[#D8CBB9] text-[#0B0B0B] font-mono text-xs font-bold text-center rounded-md">
          ✓ Successfully added {currentItem.name} to your cafe order cart!
        </div>
      )}

      {/* 3D Slideshow Card Container */}
      <div className="relative max-w-4xl mx-auto py-8">
        
        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-20 p-3 bg-[#141414] border border-[#262626] hover:border-[#D8CBB9] rounded-full text-[#FFFFFF] shadow-xl transition-all"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-20 p-3 bg-[#141414] border border-[#262626] hover:border-[#D8CBB9] rounded-full text-[#FFFFFF] shadow-xl transition-all"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3D Card Display */}
        <div className="angst-card bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
          
          <div className="md:col-span-6 relative h-72 md:h-[450px] overflow-hidden">
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="w-full h-full object-cover contrast-110 transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#0B0B0B]/90 px-3 py-1 text-xs font-mono text-[#D8CBB9] border border-[#262626] rounded-md">
              Item {currentIndex + 1} of {filteredItems.length}
            </div>
            <div className="absolute bottom-4 right-4 bg-[#0B0B0B]/95 px-4 py-2 text-xl font-bold font-mono text-[#D8CBB9] border border-[#262626] rounded-md shadow-lg">
              ₱{currentItem.price}
            </div>
          </div>

          <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {currentItem.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-[#0B0B0B] text-[10px] font-mono text-[#D8CBB9] border border-[#262626] rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase">{currentItem.name}</h2>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{currentItem.description}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#262626]">
              <div className="flex items-center space-x-2 text-xs text-[#9CA3AF]">
                <MapPin className="w-4 h-4 text-[#D8CBB9]" />
                <span>Available at: {currentItem.branchAvailability.join(', ')}</span>
              </div>

              <button
                onClick={handleAddCurrent}
                className="w-full py-4 angst-button text-xs uppercase flex items-center justify-center space-x-2 shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Order (₱{currentItem.price})</span>
              </button>
            </div>
          </div>

        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {filteredItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all rounded-full ${
                currentIndex === idx ? 'w-8 bg-[#D8CBB9]' : 'w-2 bg-[#262626]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
};
