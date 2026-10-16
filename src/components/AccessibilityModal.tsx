import React, { useState } from 'react';
import { Settings, X, Check, Eye, Type, Zap } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);

  if (!isOpen) return null;

  const handleApply = () => {
    // Apply classes to document root if needed
    if (highContrast) {
      document.documentElement.classList.add('contrast-125');
    } else {
      document.documentElement.classList.remove('contrast-125');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/85 backdrop-blur-md p-4">
      <div className="angst-card max-w-md w-full bg-[#141414] p-6 sm:p-8 relative border border-[#242424] space-y-6">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-[#D8CBB9]" />
            <h3 className="font-['Syne'] font-bold text-lg text-[#FFFFFF]">ACCESSIBILITY & PREFERENCES</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#0B0B0B] border border-[#242424] text-[#8E8E93] hover:text-[#FFFFFF]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#8E8E93] font-mono">
          Pilotos Lifestyle Hub is committed to WCAG 2.1 AA accessibility standards for all users across devices.
        </p>

        <div className="space-y-4">
          
          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#0B0B0B] border border-[#242424]">
            <div className="flex items-center space-x-3">
              <Eye className="w-4 h-4 text-[#D8CBB9]" />
              <span className="text-xs font-mono uppercase text-[#FFFFFF]">High Contrast Mode</span>
            </div>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-12 h-6 p-1 transition-colors ${highContrast ? 'bg-[#D8CBB9]' : 'bg-[#242424]'}`}
            >
              <div className={`w-4 h-4 bg-[#0B0B0B] transition-transform ${highContrast ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Font Size Selector */}
          <div className="p-3 bg-[#0B0B0B] border border-[#242424] space-y-2">
            <div className="flex items-center space-x-3">
              <Type className="w-4 h-4 text-[#D8CBB9]" />
              <span className="text-xs font-mono uppercase text-[#FFFFFF]">Font Size Scale</span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {['normal', 'large', 'xlarge'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size as any)}
                  className={`py-1.5 text-xs font-mono uppercase border transition-colors ${
                    fontSize === size
                      ? 'bg-[#D8CBB9] text-[#0B0B0B] border-[#D8CBB9] font-bold'
                      : 'bg-[#141414] text-[#8E8E93] border-[#242424]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#0B0B0B] border border-[#242424]">
            <div className="flex items-center space-x-3">
              <Zap className="w-4 h-4 text-[#D8CBB9]" />
              <span className="text-xs font-mono uppercase text-[#FFFFFF]">Reduce Motion</span>
            </div>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`w-12 h-6 p-1 transition-colors ${reducedMotion ? 'bg-[#D8CBB9]' : 'bg-[#242424]'}`}
            >
              <div className={`w-4 h-4 bg-[#0B0B0B] transition-transform ${reducedMotion ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

        </div>

        <div className="pt-4 border-t border-[#242424]">
          <button
            onClick={handleApply}
            className="w-full py-3 angst-button text-xs"
          >
            Apply & Save Preferences
          </button>
        </div>

      </div>
    </div>
  );
};
