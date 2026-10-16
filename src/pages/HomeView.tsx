import React from 'react';
import { Coffee, Scissors, MapPin, Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#141414] border border-[#262626] text-xs font-mono text-[#D8CBB9] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#D8CBB9] animate-pulse" />
                <span>3 Specialty Hubs Across Batangas City</span>
              </div>

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
                  className="px-6 py-3.5 angst-button text-sm flex items-center space-x-2"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Explore 3D Café Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('branches')}
                  className="px-6 py-3.5 angst-button-outline text-sm flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4 text-[#D8CBB9]" />
                  <span>View 3 Branches</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="angst-card p-3 bg-[#141414] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800"
                  alt="Pilotos Hub Experience"
                  className="w-full h-[380px] object-cover rounded-md contrast-110"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase">Explore Pilotos Hub</h2>
          <p className="text-sm text-[#9CA3AF]">Select a dedicated section below to view specific features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div onClick={() => onNavigate('branches')} className="angst-card p-8 cursor-pointer group bg-[#141414]">
            <MapPin className="w-8 h-8 text-[#D8CBB9] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Our 3 Branches</h3>
            <p className="text-sm text-[#9CA3AF] mb-6">
              View precise operating hours, addresses, and maps for Pilotos Grounds, Afterhours, and Barbershop 2.0.
            </p>
            <span className="text-xs font-semibold text-[#D8CBB9] flex items-center gap-1">
              View Locations &rarr;
            </span>
          </div>

          <div onClick={() => onNavigate('cafe')} className="angst-card p-8 cursor-pointer group bg-[#141414]">
            <Coffee className="w-8 h-8 text-[#D8CBB9] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">3D Café Menu</h3>
            <p className="text-sm text-[#9CA3AF] mb-6">
              Browse our signature specialty coffee, pastas, pastries, and power bowls in an immersive slideshow format.
            </p>
            <span className="text-xs font-semibold text-[#D8CBB9] flex items-center gap-1">
              Explore 3D Menu &rarr;
            </span>
          </div>

          <div onClick={() => onNavigate('barbershop')} className="angst-card p-8 cursor-pointer group bg-[#141414]">
            <Scissors className="w-8 h-8 text-[#D8CBB9] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Barbershop 2.0</h3>
            <p className="text-sm text-[#9CA3AF] mb-6">
              Explore grooming services like Korean Down Perms and precision fades, and book your appointment online.
            </p>
            <span className="text-xs font-semibold text-[#D8CBB9] flex items-center gap-1">
              Book Barbershop &rarr;
            </span>
          </div>

        </div>
      </section>
    </div>
  );
};
