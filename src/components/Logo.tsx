import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  theme = 'dark',
  size = 'md',
}) => {
  // Dimensions
  const sizes = {
    sm: { svg: 'h-10 w-auto', text: 'text-lg', motto: 'text-[7px]' },
    md: { svg: 'h-16 w-auto', text: 'text-2xl', motto: 'text-[9px]' },
    lg: { svg: 'h-24 w-auto', text: 'text-3xl', motto: 'text-[11px]' },
    xl: { svg: 'h-36 w-auto', text: 'text-5xl', motto: 'text-[14px]' },
  };

  const selectedSize = sizes[size];
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-Fidelity Custom SVG Logo */}
      <svg
        className={`${selectedSize.svg} transition-transform duration-300 hover:scale-105`}
        viewBox="0 0 350 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="blueSwooshGrad" x1="0" y1="200" x2="330" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E40AF" /> {/* Deep blue */}
            <stop offset="50%" stopColor="#3B82F6" /> {/* Electric blue */}
            <stop offset="100%" stopColor="#60A5FA" /> {/* Light electric blue */}
          </linearGradient>

          <linearGradient id="kLetterGrad" x1="150" y1="140" x2="210" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          {/* Glow filter for the star */}
          <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComponentTransfer in="blur" result="glow1">
              <feFuncA type="linear" slope="0.8" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="glow1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- STYLIZED MONOGRAM "EK" --- */}

        {/* E Letter Outline Layout */}
        <path
          d="M 170,140 H 110 V 70 H 170 M 110,105 H 155"
          stroke={isDark ? '#E2E8F0' : '#475569'}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* K Letter Fills Layout */}
        <path
          d="M 180,70 V 140"
          stroke="url(#kLetterGrad)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 230,70 L 185,105 L 235,140"
          stroke="url(#kLetterGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* --- STYLIZED DYNAMIC SWOOSH & SPARK STAR --- */}
        {/* Curved Swoosh starting from bottom left of E, sweeping up and right */}
        <path
          d="M 100,145 C 100,165 170,170 215,130 C 250,100 290,65 330,40"
          stroke="url(#blueSwooshGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
        {/* Under-shadow of swoosh to give layered depth */}
        <path
          d="M 102,148 C 105,168 172,173 214,134"
          stroke="#1E3A8A"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* The Sparkle / Star at top right */}
        <g transform="translate(330, 40)" filter="url(#starGlow)">
          {/* 4-point Star paths */}
          <path
            d="M 0,-15 L 3,-3 L 15,0 L 3,3 L 0,15 L -3,3 L -15,0 L -3,-3 Z"
            fill="#60A5FA"
          />
          <path
            d="M 0,-8 L 1,-1 L 8,0 L 1,1 L 0,8 L -1,1 L -8,0 L -1,-1 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>

      {/* --- BRAND TYPOGRAPHY BLOCK --- */}
      {showText && (
        <div className="flex flex-col select-none">
          <div className="flex items-center tracking-wide font-sans leading-none">
            <span
              className={`font-semibold uppercase tracking-[0.05em] ${selectedSize.text} ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              EL KEXAS
            </span>
            <span
              className={`font-black uppercase tracking-[0.05em] ml-1.5 ${selectedSize.text} text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent`}
            >
              TECH
            </span>
          </div>

          <div
            className={`font-mono font-medium tracking-[0.38em] uppercase ${selectedSize.motto} leading-none mt-1.5 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            INNOVATE • SOLVE • EMPOWER
          </div>
        </div>
      )}
    </div>
  );
};
