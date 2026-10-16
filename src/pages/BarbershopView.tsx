import React from 'react';
import { Scissors, Clock, MapPin, Phone } from 'lucide-react';
import { BARBER_SERVICES } from '../data/pilotosData';

interface BarbershopViewProps {
  onOpenBooking: () => void;
}

export const BarbershopView: React.FC<BarbershopViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-12">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs uppercase tracking-wider text-[#D8CBB9] font-mono">Pilotos Barbershop 2.0</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase">UPGRADED GROOMING LOUNGE</h1>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Located right beside Afterhours at the Petron Gas Station, Sampaga Bypass Road, Batangas City. We handle standard and premium hair services for men, women, and children.
          </p>

          <div className="space-y-2.5 text-xs sm:text-sm text-[#9CA3AF]">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#D8CBB9] shrink-0" />
              <span>Petron Gas Station, Sampaga Bypass Road, Batangas City (Beside Afterhours)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#D8CBB9] shrink-0" />
              <span>Open Daily: 9:00 AM &ndash; 8:00 PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#D8CBB9] shrink-0" />
              <span>Contact Number: 0920-559-6600</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 angst-button text-xs uppercase flex items-center space-x-2"
            >
              <Scissors className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="angst-card p-3 bg-[#141414] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
              alt="Pilotos Barbershop 2.0"
              className="w-full h-72 lg:h-80 object-cover rounded-md contrast-110"
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-6 pt-6 border-t border-[#262626]">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase">Services & Specialty Treatments</h2>
          <p className="text-sm text-[#9CA3AF]">Includes Fades, Korean Down Perms, ear cleaning, post-haircut massages, and retail grooming pomades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BARBER_SERVICES.map((srv) => (
            <div key={srv.id} className="angst-card p-6 bg-[#141414] flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold uppercase">{srv.name}</h3>
                  <span className="font-mono font-bold text-[#D8CBB9] text-base">₱{srv.price}</span>
                </div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{srv.description}</p>
              </div>

              <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                <span className="text-[#9CA3AF]">Duration: {srv.duration}</span>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 angst-button text-xs uppercase"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
