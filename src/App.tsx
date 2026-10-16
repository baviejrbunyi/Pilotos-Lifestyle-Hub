import React, { useState } from 'react';
import { HomeView } from './pages/HomeView';
import { BranchesView } from './pages/BranchesView';
import { CafeView } from './pages/CafeView';
import { BarbershopView } from './pages/BarbershopView';
import { LoyaltyView } from './pages/LoyaltyView';
import { CrmView } from './pages/CrmView';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { BarberBookingModal } from './components/BarberBookingModal';
import { AccessibilityModal } from './components/AccessibilityModal';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { MenuItem } from './data/pilotosData';
import { ShoppingBag, Settings, Award, Coffee, Scissors, MapPin, Menu, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [loyaltyPoints, setLoyaltyPoints] = useState(240);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAddToCart = (item: MenuItem, quantity: number) => {
    setCartItems(prev => [...prev, { item, quantity }]);
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddPoints = (pts: number) => {
    setLoyaltyPoints(prev => Math.max(0, prev + pts));
  };

  const switchView = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FFFFFF] flex flex-col justify-between">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => switchView('home')}>
            <Logo className="w-10 h-10" />
            <div>
              <span className="font-['Outfit'] font-extrabold text-lg sm:text-xl tracking-tight block leading-tight">
                PILOTOS
              </span>
              <span className="text-[10px] tracking-wider text-[#9CA3AF] uppercase block font-mono">
                Lifestyle Hub &bull; 3 Branches
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => switchView('home')}
              className={`transition-colors ${currentView === 'home' ? 'text-[#D8CBB9] font-bold' : 'text-[#9CA3AF] hover:text-[#FFFFFF]'}`}
            >
              Overview
            </button>
            <button
              onClick={() => switchView('branches')}
              className={`transition-colors ${currentView === 'branches' ? 'text-[#D8CBB9] font-bold' : 'text-[#9CA3AF] hover:text-[#FFFFFF]'}`}
            >
              Branches (3)
            </button>
            <button
              onClick={() => switchView('cafe')}
              className={`transition-colors ${currentView === 'cafe' ? 'text-[#D8CBB9] font-bold' : 'text-[#9CA3AF] hover:text-[#FFFFFF]'}`}
            >
              3D Café Menu
            </button>
            <button
              onClick={() => switchView('barbershop')}
              className={`transition-colors ${currentView === 'barbershop' ? 'text-[#D8CBB9] font-bold' : 'text-[#9CA3AF] hover:text-[#FFFFFF]'}`}
            >
              Barbershop 2.0
            </button>
            <button
              onClick={() => switchView('loyalty')}
              className={`transition-colors ${currentView === 'loyalty' ? 'text-[#D8CBB9] font-bold' : 'text-[#9CA3AF] hover:text-[#FFFFFF]'}`}
            >
              Pilotos Pass
            </button>

          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Points badge */}
            <button
              onClick={() => switchView('loyalty')}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-[#141414] border border-[#262626] text-xs font-mono rounded-md"
            >
              <Award className="w-3.5 h-3.5 text-[#D8CBB9]" />
              <span className="text-[#D8CBB9] font-bold">{loyaltyPoints} PTS</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#141414] border border-[#262626] hover:border-[#D8CBB9] rounded-md transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#FFFFFF]" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D8CBB9] text-[#0B0B0B] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </button>

            {/* Accessibility Settings */}
            <button
              onClick={() => setIsAccessibilityOpen(true)}
              className="p-2.5 bg-[#141414] border border-[#262626] hover:border-[#D8CBB9] rounded-md transition-colors"
              aria-label="Accessibility Settings"
            >
              <Settings className="w-5 h-5 text-[#FFFFFF]" />
            </button>

            {/* Book Barber Primary CTA */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 angst-button text-xs"
            >
              Book Barber
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-[#141414] border border-[#262626] rounded-md"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141414] border-b border-[#262626] px-6 py-6 space-y-3 font-medium">
            <button onClick={() => switchView('home')} className="block w-full text-left py-2 border-b border-[#262626]">Overview</button>
            <button onClick={() => switchView('branches')} className="block w-full text-left py-2 border-b border-[#262626]">Branches (3)</button>
            <button onClick={() => switchView('cafe')} className="block w-full text-left py-2 border-b border-[#262626]">3D Café Menu</button>
            <button onClick={() => switchView('barbershop')} className="block w-full text-left py-2 border-b border-[#262626]">Barbershop 2.0</button>
            <button onClick={() => switchView('loyalty')} className="block w-full text-left py-2 border-b border-[#262626]">Pilotos Pass ({loyaltyPoints} PTS)</button>

            <div className="pt-2">
              <button onClick={() => { setMobileMenuOpen(false); setIsBookingOpen(true); }} className="w-full py-3 angst-button text-center text-xs">
                Book Barbershop Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && <HomeView onNavigate={switchView} onOpenBooking={() => setIsBookingOpen(true)} />}
        {currentView === 'branches' && <BranchesView onOpenBooking={() => setIsBookingOpen(true)} />}
        {currentView === 'cafe' && <CafeView onAddToCart={handleAddToCart} />}
        {currentView === 'barbershop' && <BarbershopView onOpenBooking={() => setIsBookingOpen(true)} />}
        {currentView === 'loyalty' && <LoyaltyView points={loyaltyPoints} onAddPoints={handleAddPoints} />}
        {currentView === 'crm' && <CrmView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart, Booking & Accessibility Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onAddPoints={handleAddPoints}
      />

      <BarberBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialBranchId="barbershop-2"
      />

      <AccessibilityModal
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
      />

    </div>
  );
}
