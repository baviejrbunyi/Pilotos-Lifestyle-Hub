import React, { useState } from 'react';
import { Scissors, Calendar, Clock, User, MapPin, Check, X, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { PILOTOS_BRANCHES, BARBER_SERVICES, BARBERS, BarberService } from '../data/pilotosData';

interface BarberBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranchId?: string;
}

export const BarberBookingModal: React.FC<BarberBookingModalProps> = ({
  isOpen,
  onClose,
  initialBranchId = 'pallocan'
}) => {
  const [step, setStep] = useState(1);
  const [selectedBranch, setSelectedBranch] = useState(initialBranchId);
  const [selectedService, setSelectedService] = useState<BarberService>(BARBER_SERVICES[0]);
  const [selectedBarber, setSelectedBarber] = useState(BARBERS[0]);
  const [selectedDate, setSelectedDate] = useState('2026-10-18');
  const [selectedTime, setSelectedTime] = useState('14:00');
  
  // Customer info
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setBookingConfirmed(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setBookingConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="angst-card max-w-2xl w-full bg-[#141414] p-6 sm:p-8 relative border border-[#242424] my-8">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 bg-[#0B0B0B] border border-[#242424] text-[#8E8E93] hover:text-[#FFFFFF]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!bookingConfirmed ? (
          <div>
            {/* Header Steps */}
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-widest text-[#D8CBB9] font-mono block">
                // Pilotos Barbershop Appointment System
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mt-1">
                BOOK YOUR GROOMING SESSION
              </h2>

              <div className="flex items-center space-x-2 mt-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 ${
                      step >= s ? 'bg-[#D8CBB9]' : 'bg-[#242424]'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase font-mono text-[#8E8E93] mt-2">
                <span>1. Branch</span>
                <span>2. Service</span>
                <span>3. Barber</span>
                <span>4. Schedule</span>
                <span>5. Details</span>
              </div>
            </div>

            {/* Step 1: Branch */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-['Syne'] font-bold text-lg text-[#FFFFFF]">Select Hub Branch</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PILOTOS_BRANCHES.map((branch) => (
                    <div
                      key={branch.id}
                      onClick={() => setSelectedBranch(branch.id)}
                      className={`p-4 border cursor-pointer transition-colors ${
                        selectedBranch === branch.id
                          ? 'border-[#D8CBB9] bg-[#D8CBB9]/10 text-[#FFFFFF]'
                          : 'border-[#242424] bg-[#0B0B0B] text-[#8E8E93] hover:border-[#8E8E93]'
                      }`}
                    >
                      <h4 className="font-['Syne'] font-bold text-sm text-[#FFFFFF]">{branch.name}</h4>
                      <p className="text-xs mt-1 text-[#8E8E93]">{branch.address}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-6">
                  <button onClick={() => setStep(2)} className="px-6 py-3 angst-button text-xs flex items-center space-x-2">
                    <span>Next: Choose Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Service */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-['Syne'] font-bold text-lg text-[#FFFFFF]">Select Grooming Service</h3>
                <div className="space-y-3">
                  {BARBER_SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-4 border cursor-pointer flex items-center justify-between transition-colors ${
                        selectedService.id === srv.id
                          ? 'border-[#D8CBB9] bg-[#D8CBB9]/10 text-[#FFFFFF]'
                          : 'border-[#242424] bg-[#0B0B0B] text-[#8E8E93] hover:border-[#8E8E93]'
                      }`}
                    >
                      <div>
                        <h4 className="font-['Syne'] font-bold text-sm text-[#FFFFFF]">{srv.name}</h4>
                        <p className="text-xs mt-1 text-[#8E8E93]">{srv.description}</p>
                        <span className="inline-block mt-2 text-[10px] text-[#D8CBB9] font-mono">&bull; {srv.duration}</span>
                      </div>
                      <div className="text-right shrink-0 pl-4">
                        <span className="font-mono font-bold text-base text-[#D8CBB9]">₱{srv.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={() => setStep(1)} className="px-6 py-3 angst-button-outline text-xs flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button onClick={() => setStep(3)} className="px-6 py-3 angst-button text-xs flex items-center space-x-2">
                    <span>Next: Choose Barber</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Barber */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-['Syne'] font-bold text-lg text-[#FFFFFF]">Select Master Barber</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BARBERS.map((barber) => (
                    <div
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber)}
                      className={`p-4 border cursor-pointer flex items-center space-x-4 transition-colors ${
                        selectedBarber.id === barber.id
                          ? 'border-[#D8CBB9] bg-[#D8CBB9]/10 text-[#FFFFFF]'
                          : 'border-[#242424] bg-[#0B0B0B] text-[#8E8E93] hover:border-[#8E8E93]'
                      }`}
                    >
                      <img src={barber.image} alt={barber.name} className="w-14 h-14 object-cover grayscale" />
                      <div>
                        <h4 className="font-['Syne'] font-bold text-sm text-[#FFFFFF]">{barber.name}</h4>
                        <p className="text-[11px] text-[#8E8E93]">{barber.specialty}</p>
                        <span className="text-[10px] text-[#D8CBB9] font-mono">★ {barber.rating} rating</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={() => setStep(2)} className="px-6 py-3 angst-button-outline text-xs flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button onClick={() => setStep(4)} className="px-6 py-3 angst-button text-xs flex items-center space-x-2">
                    <span>Next: Schedule</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Schedule */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="font-['Syne'] font-bold text-lg text-[#FFFFFF]">Select Date & Time Slot</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#FFFFFF] mb-2">Appointment Date:</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-[#242424] px-4 py-3 text-xs font-mono text-[#FFFFFF] focus:outline-none focus:border-[#D8CBB9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#FFFFFF] mb-2">Available Time Slots:</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 text-xs font-mono border text-center transition-colors ${
                            selectedTime === time
                              ? 'bg-[#D8CBB9] text-[#0B0B0B] border-[#D8CBB9] font-bold'
                              : 'bg-[#0B0B0B] text-[#8E8E93] border-[#242424] hover:text-[#FFFFFF]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button onClick={() => setStep(3)} className="px-6 py-3 angst-button-outline text-xs flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button onClick={() => setStep(5)} className="px-6 py-3 angst-button text-xs flex items-center space-x-2">
                    <span>Next: Your Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Contact Details */}
            {step === 5 && (
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <h3 className="font-['Syne'] font-bold text-lg text-[#FFFFFF]">Confirm Your Details</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#FFFFFF] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Juan Dela Cruz"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-[#242424] px-4 py-2.5 text-xs font-mono text-[#FFFFFF] focus:outline-none focus:border-[#D8CBB9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#FFFFFF] mb-1">Mobile Number (SMS Reminder) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+63 917 000 0000"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-[#242424] px-4 py-2.5 text-xs font-mono text-[#FFFFFF] focus:outline-none focus:border-[#D8CBB9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#FFFFFF] mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="juan@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-[#0B0B0B] border border-[#242424] px-4 py-2.5 text-xs font-mono text-[#FFFFFF] focus:outline-none focus:border-[#D8CBB9]"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#0B0B0B] border border-[#242424] text-xs font-mono space-y-1">
                  <div className="text-[#D8CBB9] font-bold">Booking Summary:</div>
                  <div>Service: {selectedService.name} (₱{selectedService.price})</div>
                  <div>Barber: {selectedBarber.name}</div>
                  <div>Date & Time: {selectedDate} at {selectedTime}</div>
                </div>

                <div className="flex justify-between pt-4">
                  <button type="button" onClick={() => setStep(4)} className="px-6 py-3 angst-button-outline text-xs flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button type="submit" className="px-8 py-3 angst-button text-xs">
                    Confirm & Book Appointment
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 bg-[#D8CBB9] text-[#0B0B0B] mx-auto flex items-center justify-center font-bold text-2xl">
              ✓
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#D8CBB9] font-mono">Appointment Confirmed</span>
              <h2 className="font-['Syne'] font-extrabold text-3xl text-[#FFFFFF]">YOU'RE BOOKED, {customerName.toUpperCase()}!</h2>
              <p className="text-xs text-[#8E8E93] font-mono max-w-md mx-auto">
                An SMS confirmation and calendar invite have been dispatched to {customerPhone}. Present your digital pass upon arrival.
              </p>
            </div>

            <div className="p-6 bg-[#0B0B0B] border border-[#242424] text-left max-w-md mx-auto space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-[#242424] pb-2">
                <span className="text-[#8E8E93]">Booking Reference:</span>
                <span className="text-[#D8CBB9] font-bold">PLT-8849-PH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Branch:</span>
                <span className="text-[#FFFFFF]">Petron Pallocan West Main</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Service:</span>
                <span className="text-[#FFFFFF]">{selectedService.name} (₱{selectedService.price})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Master Barber:</span>
                <span className="text-[#FFFFFF]">{selectedBarber.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8E93]">Schedule:</span>
                <span className="text-[#FFFFFF]">{selectedDate} @ {selectedTime}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-8 py-3 angst-button text-xs"
              >
                Done & Return to Hub
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
