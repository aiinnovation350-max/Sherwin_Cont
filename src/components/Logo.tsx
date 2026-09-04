import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  compact = false 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Ribbon 'S' Monogram matching the official Sharwin brand emblem */}
      <div className="relative shrink-0 w-10 h-10 md:w-11 md:h-11">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Top Loop Gradient: Gold to Cyan/Teal */}
            <linearGradient id="sharwinGoldToCyan" x1="15%" y1="10%" x2="85%" y2="50%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="35%" stopColor="#FB923C" />
              <stop offset="70%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* Middle Fold Gradient: Deep Blue / Purple */}
            <linearGradient id="sharwinMidFold" x1="0%" y1="30%" x2="100%" y2="70%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>

            {/* Bottom Loop Gradient: Cyan to Amber */}
            <linearGradient id="sharwinCyanToAmber" x1="10%" y1="50%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="45%" stopColor="#0284C7" />
              <stop offset="80%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>

            {/* Title Text Gradient */}
            <linearGradient id="sharwinTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>

          {/* Upper ribbon loop of S */}
          <path 
            d="M26 36 L48 10 C53 4 63 4 68 10 L88 34 C92 39 90 46 84 50 L48 64 L30 52 L62 40 L70 34 L58 20 L40 34 Z" 
            fill="url(#sharwinGoldToCyan)" 
          />

          {/* Central intersecting ribbon fold */}
          <path 
            d="M30 46 L76 34 C82 32 88 36 88 42 L88 56 C88 62 82 66 76 68 L26 78 C20 80 14 76 14 70 L14 56 C14 50 20 46 26 44 Z" 
            fill="url(#sharwinMidFold)" 
            opacity="0.95"
          />

          {/* Lower ribbon loop of S */}
          <path 
            d="M74 64 L52 90 C47 96 37 96 32 90 L12 66 C8 61 10 54 16 50 L52 36 L70 48 L38 60 L30 66 L42 80 L60 66 Z" 
            fill="url(#sharwinCyanToAmber)" 
          />

          {/* Inner negative space diamond highlight */}
          <polygon points="50,28 66,48 50,72 34,48" fill="#ffffff" opacity="0.15" />
        </svg>
      </div>

      {/* Brand Typography (English & Arabic) */}
      {!compact && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline gap-1.5">
            <span 
              className={`text-xl md:text-2xl font-black tracking-tight ${
                variant === 'white' 
                  ? 'text-white' 
                  : 'bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-900 bg-clip-text text-transparent'
              }`}
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              SHARWIN
            </span>
          </div>

          <span 
            className={`text-[9px] md:text-[10px] font-bold tracking-[0.14em] uppercase mt-0.5 ${
              variant === 'white' 
                ? 'text-sky-300' 
                : 'text-sky-600'
            }`}
          >
            CONTRACTING AND CLEANING
          </span>

          <span 
            className={`text-[10px] md:text-[11px] font-semibold tracking-normal mt-0.5 ${
              variant === 'white' 
                ? 'text-amber-400' 
                : 'text-amber-600'
            }`}
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
            dir="rtl"
          >
            شاروين للمقاولات والتنظيفات
          </span>
        </div>
      )}
    </div>
  );
};
