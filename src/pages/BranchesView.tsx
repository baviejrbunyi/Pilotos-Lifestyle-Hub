import React from 'react';
import { MapPin, Clock, Phone, Navigation, CheckCircle } from 'lucide-react';
import { PILOTOS_BRANCHES } from '../data/pilotosData';

interface BranchesViewProps {
  onOpenBooking: () => void;
}

export const BranchesView: React.FC<BranchesViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-wider text-[#D8CBB9] font-mono">Petron-Adjacent Hub Network</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase">OUR THREE BRANCHES</h1>
        <p className="text-sm text-[#9CA3AF]">
          Discover our flagship daytime café, late-night specialty spot, and upgraded grooming lounge in Batangas City.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {PILOTOS_BRANCHES.map((branch, index) => (
          <div key={branch.id} className="angst-card overflow-hidden bg-[#141414] grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
            
            <div className="lg:col-span-5 relative h-72 rounded-lg overflow-hidden border border-[#262626]">
              <img
                src={branch.image}
                alt={branch.name}
                className="w-full h-full object-cover contrast-110"
              />
              <span className="absolute top-3 left-3 px-3 py-1 bg-[#0B0B0B]/90 text-[#D8CBB9] text-xs font-bold uppercase border border-[#262626]">
                0{index + 1} &bull; {branch.tag}
              </span>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold uppercase">{branch.name}</h2>
                <p className="text-sm text-[#D8CBB9] mt-1 font-medium">{branch.subtitle}</p>
              </div>

              <div className="space-y-3 text-sm text-[#9CA3AF]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#D8CBB9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFFFFF] block">Address:</strong>
                    <span>{branch.address}</span>
                    <span className="block text-xs text-[#D8CBB9] italic mt-0.5">({branch.landmark})</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#D8CBB9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FFFFFF] block">Operating Hours:</strong>
                    <span>Sun &ndash; Thu: {branch.operatingHours.sunThu}</span>
                    <span className="block">Fri & Sat: {branch.operatingHours.friSat}</span>
                  </div>
                </div>

                {branch.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#D8CBB9] shrink-0" />
                    <div>
                      <strong className="text-[#FFFFFF]">Contact Number: </strong>
                      <span>{branch.phone}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Best For */}
              <div className="pt-4 border-t border-[#262626]">
                <span className="text-xs font-mono uppercase text-[#9CA3AF] block mb-2">Highlights & Best For:</span>
                <div className="flex flex-wrap gap-2">
                  {branch.bestFor.map((bf, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0B0B0B] border border-[#262626] text-xs font-mono text-[#D8CBB9]">
                      &bull; {bf}
                    </span>
                  ))}
                </div>
              </div>

              {branch.id === 'barbershop-2' && (
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 angst-button text-xs"
                  >
                    Book Barbershop Appointment
                  </button>
                </div>
              )}

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
