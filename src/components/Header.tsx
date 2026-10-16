import React, { useState } from 'react';
import { Scissors, Coffee, MapPin, Award, Settings, ShoppingBag, Menu, X, Users, PhoneCall } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenAccessibility: () => void;
  loyaltyPoints: number;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenBooking,
  onOpenAccessibility,
  loyaltyPoints
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-[#D8CBB9] text-[#0B0B0B] flex items-center justify-center font-black text-xl tracking-tighter">
            P
          </div>
          <div>
            <span className="font-['Syne'] font-extrabold text-lg sm:text-xl tracking-tighter block leading-tight">
              PILOTOS
            </span>
            <span className="text-[10px] tracking-widest text-[#8E8E93] uppercase block">
              Lifestyle Hub &bull; Batangas
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <button onClick={() => scrollToSection('branches')} className="hover:text-[#D8CBB9] transition-colors">
            Branches (4)
          </button>
          <button onClick={() => scrollToSection('cafe')} className="hover:text-[#D8CBB9] transition-colors flex items-center gap-1.5">
            <Coffee className="w-4 h-4 text-[#D8CBB9]" /> Cafe Menu
          </button>
          <button onClick={() => scrollToSection('barbershop')} className="hover:text-[#D8CBB9] transition-colors flex items-center gap-1.5">
            <Scissors className="w-4 h-4 text-[#D8CBB9]" /> Barbershop
          </button>
          <button onClick={() => scrollToSection('loyalty')} className="hover:text-[#D8CBB9] transition-colors flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#D8CBB9]" /> Loyalty Pass
          </button>
          <button onClick={() => scrollToSection('crm-strategy')} className="hover:text-[#D8CBB9] transition-colors">
            CRM Integration
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Loyalty badge */}
          <button 
            onClick={() => scrollToSection('loyalty')}
            className="hidden lg:flex items-center space-x-2 px-3 py-1.5 bg-[#141414] border border-[#242424] text-xs font-mono"
            title="Your Pilotos Points"
          >
            <Award className="w-3.5 h-3.5 text-[#D8CBB9]" />
            <span className="text-[#D8CBB9] font-bold">{loyaltyPoints} PTS</span>
          </button>

          {/* Cart button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 bg-[#141414] border border-[#242424] hover:border-[#D8CBB9] transition-colors"
            aria-label="View Cafe Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#FFFFFF]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#D8CBB9] text-[#0B0B0B] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Accessibility toggle */}
          <button
            onClick={onOpenAccessibility}
            className="p-2.5 bg-[#141414] border border-[#242424] hover:border-[#D8CBB9] transition-colors"
            aria-label="Accessibility Settings"
            title="Accessibility settings"
          >
            <Settings className="w-5 h-5 text-[#FFFFFF]" />
          </button>

          {/* Book Barber Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 angst-button text-xs tracking-wider"
          >
            Book Barber
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-[#141414] border border-[#242424]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-[#242424] px-6 py-6 space-y-4">
          <button
            onClick={() => scrollToSection('branches')}
            className="block w-full text-left py-2 font-medium border-b border-[#242424]"
          >
            Branches (4 Locations)
          </button>
          <button
            onClick={() => scrollToSection('cafe')}
            className="block w-full text-left py-2 font-medium border-b border-[#242424]"
          >
            Café Menu & Ordering
          </button>
          <button
            onClick={() => scrollToSection('barbershop')}
            className="block w-full text-left py-2 font-medium border-b border-[#242424]"
          >
            Barbershop Services & Booking
          </button>
          <button
            onClick={() => scrollToSection('loyalty')}
            className="block w-full text-left py-2 font-medium border-b border-[#242424]"
          >
            Unified Loyalty Pass ({loyaltyPoints} PTS)
          </button>
          <button
            onClick={() => scrollToSection('crm-strategy')}
            className="block w-full text-left py-2 font-medium border-b border-[#242424]"
          >
            CRM Integration Strategy
          </button>
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 angst-button text-center text-sm"
            >
              Book Barber Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
