import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Scissors, Coffee } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#242424] text-[#8E8E93] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#242424]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="w-8 h-8" />
              <span className="font-['Outfit'] font-extrabold text-lg text-[#FFFFFF] tracking-tight">
                PILOTOS
              </span>
            </div>
            <p className="text-xs font-mono leading-relaxed">
              Unified lifestyle hub across four high-traffic Petron stations in Batangas City. Bridging artisanal specialty coffee and razor-sharp barbershop grooming.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#instagram" className="p-2 bg-[#141414] border border-[#242424] hover:text-[#FFFFFF]" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="p-2 bg-[#141414] border border-[#242424] hover:text-[#FFFFFF]" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          

          {/* Locations */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-['Syne'] font-bold text-sm text-[#FFFFFF] uppercase tracking-wider">Locations</h4>
            <div className="space-y-2 text-[#8E8E93]">
              <div>&bull; Pallocan West Petron Station</div>
              <div>&bull; Alangilan Highway Petron</div>
              <div>&bull; Kumintang Ibaba Petron</div>
              <div>&bull; Bolbok Diversion Petron</div>
              <div className="text-[#D8CBB9] pt-1">Batangas City, Philippines</div>
            </div>
          </div>

          {/* Contact / Inquiries */}
          <div className="space-y-3 font-mono text-xs">
            <h4 className="font-['Syne'] font-bold text-sm text-[#FFFFFF] uppercase tracking-wider">Inquiries & Support</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D8CBB9]" />
                <span>+63 917 555 0192</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#D8CBB9]" />
                <span>hello@pilotoshub.ph</span>
              </div>
              <div className="pt-2 text-[10px] text-[#8E8E93]">
                Open Daily: 6:30 AM – 10:00 PM
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8E8E93] space-y-4 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Pilotos Lifestyle Hub. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>WordPress / Elementor Architecture</span>
            <span>&bull;</span>
            <span>WCAG 2.1 AA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
