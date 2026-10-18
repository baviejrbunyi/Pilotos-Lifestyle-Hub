import React from 'react';
import { Coffee, Scissors, MapPin, Award, ArrowRight } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 lg:min-h-[calc(100vh-100px)] lg:flex lg:flex-col lg:justify-center space-y-12">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[1.1]">
            PILOTOS <br />
            <span className="text-[#D8CBB9]">LIFESTYLE HUB</span>
          </h1>

          <p className="text-[#9CA3AF] text-base sm:text-lg max-w-xl leading-relaxed">
            Where daytime artisanal coffee, late-night specialty cravings, and precision barbercraft meet. Strategically located at high-traffic Petron stations.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onNavigate('cafe')}
              className="px-6 py-3.5 angst-button text-sm flex items-center space-x-2 shadow-lg"
            >
              <Coffee className="w-4 h-4" />
              <span>Explore Cafe Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('branches')}
              className="px-6 py-3.5 angst-button-outline text-sm flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4 text-[#D8CBB9]" />
              <span>View Branches</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="angst-card p-3 bg-[#141414] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800"
              alt="Pilotos Hub Experience"
              className="w-full h-[340px] lg:h-[380px] object-cover rounded-md contrast-110"
            />
          </div>
        </div>
      </div>
      

    </div>
  );
};
