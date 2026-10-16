import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} bg-[#B8860B] rounded-md overflow-hidden flex items-center justify-center relative shadow-sm shrink-0 border border-[#D8CBB9]/30`}>
      <svg viewBox="0 0 100 100" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top left accent dashes */}
        <path d="M18 35 C22 28 28 22 30 20" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <path d="M26 38 C28 35 32 32 34 30" stroke="white" strokeWidth="5" strokeLinecap="round" />
        
        {/* Central continuous loop stroke */}
        <path d="M10 65 Q 35 55, 45 42 T 70 40 Q 85 40, 95 20" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <path d="M42 42 C 55 42, 70 52, 68 68 C 65 80, 40 75, 30 65 C 22 55, 30 45, 45 45" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
        
        {/* Bottom right accent dashes */}
        <path d="M72 65 C 75 70, 78 78, 80 82" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <path d="M78 60 C 80 65, 84 72, 88 78" stroke="white" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
