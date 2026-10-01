import React from 'react';

interface LogoProps {
  variant?: 'gestao' | 'connector' | 'standard';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'gestao',
  size = 'md',
  theme = 'dark',
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const subSizes = {
    sm: 'text-[9px] -mt-1 tracking-wider',
    md: 'text-[11px] -mt-1 tracking-wider',
    lg: 'text-xs -mt-1 tracking-widest',
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      {/* Stylized M Ribbon Icon */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
        >
          <defs>
            <linearGradient id="mGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="mGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="mGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Left Wing Ribbon */}
          <path
            d="M6 36L14 10C14.8 7.5 17.5 6 20.2 6.5C22.6 7 24 9.2 23.5 11.8L18.5 36C18.2 37.5 16.8 38.5 15.2 38.5C13.5 38.5 12 37.2 11.5 35.5L6 36Z"
            fill="url(#mGrad1)"
          />
          {/* Right Wing Ribbon */}
          <path
            d="M20 36L28 10C28.8 7.5 31.5 6 34.2 6.5C36.6 7 38 9.2 37.5 11.8L32.5 36C32.2 37.5 30.8 38.5 29.2 38.5C27.5 38.5 26 37.2 25.5 35.5L20 36Z"
            fill="url(#mGrad2)"
          />
          {/* Subtle Connector Arc / Overlap Highlight */}
          <path
            d="M12.5 22L17.5 36L23 36L27.5 22C24.5 20.5 15.5 20.5 12.5 22Z"
            fill="url(#mGrad3)"
            fillOpacity="0.85"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight ${textSizes[size]} ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          Mee<span className="text-blue-500">Ato</span>
        </span>
        {variant === 'gestao' && (
          <span
            className={`font-semibold uppercase ${subSizes[size]} ${
              isLight ? 'text-blue-600' : 'text-sky-400'
            }`}
          >
            Gestão
          </span>
        )}
        {variant === 'connector' && (
          <span
            className={`font-semibold uppercase ${subSizes[size]} ${
              isLight ? 'text-blue-600' : 'text-sky-400'
            }`}
          >
            Connector
          </span>
        )}
      </div>
    </div>
  );
};
