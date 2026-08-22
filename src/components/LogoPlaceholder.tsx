import React, { useState } from 'react';
import { LogoType } from '../types';

interface LogoPlaceholderProps {
  type: LogoType;
  className?: string;
  subtext?: string;
}

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({
  type,
  className = '',
  subtext,
}) => {
  const [imageError, setImageError] = useState(false);

  // Direct CDN link + local cached copy
  const logoSrc = '/etora-logo.png';
  const remoteFallback = 'https://i.postimg.cc/KvBF7JwY/ETORA-Studio.png';

  if (type === 'primary') {
    return (
      <div className={`flex items-center ${className}`}>
        {!imageError ? (
          <img
            src={logoSrc}
            onError={(e) => {
              // Try remote fallback before showing text fallback
              const target = e.currentTarget;
              if (target.src !== remoteFallback) {
                target.src = remoteFallback;
              } else {
                setImageError(true);
              }
            }}
            alt="ETORA Studio Logo"
            referrerPolicy="no-referrer"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] object-contain object-left transition-transform duration-200 group-hover:scale-[1.02] filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          />
        ) : (
          <div className="flex items-center gap-3 px-3.5 py-2 rounded-lg bg-[#161A22] border border-white/10">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#7C5CFC]/25 border border-[#7C5CFC]/50 flex items-center justify-center shadow-[0_0_15px_rgba(124,92,252,0.4)]">
              <span className="text-sm sm:text-base font-black text-[#A78BFA]">E</span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#F5F7FA]">
              ETORA <span className="text-[#A78BFA] font-light">Studio</span>
            </span>
          </div>
        )}
      </div>
    );
  }

  if (type === 'wordmark') {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        {!imageError ? (
          <img
            src={logoSrc}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== remoteFallback) {
                target.src = remoteFallback;
              } else {
                setImageError(true);
              }
            }}
            alt="ETORA Studio Logo"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-11 md:h-13 lg:h-14 w-auto max-w-[190px] sm:max-w-[250px] md:max-w-[300px] object-contain object-left filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          />
        ) : (
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F7FA]">
            ETORA <span className="text-[#A78BFA] font-light">Studio</span>
          </span>
        )}
      </div>
    );
  }

  const monogramSrc = '/etora-monogram.png';
  const remoteMonogramFallback = 'https://i.postimg.cc/fRNcMcF4/Monogram-2-Photoroom.png';

  if (type === 'monogram') {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/15 hover:border-[#7C5CFC]/50 transition-all overflow-hidden p-0.5 shadow-md group ${className || 'w-10 h-10'}`}
        title="ETORA Studio Monogram"
      >
        <img
          src={monogramSrc}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== remoteMonogramFallback) {
              target.src = remoteMonogramFallback;
            }
          }}
          alt="ETORA Studio Monogram"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain scale-[1.75] transition-transform duration-300 group-hover:scale-[1.85] filter drop-shadow-[0_1px_6px_rgba(124,92,252,0.35)]"
        />
      </div>
    );
  }

  const verticalSrc = '/etora-vertical.png';
  const remoteVerticalFallback = 'https://i.postimg.cc/2j4kWn6t/verticle-Photoroom.png';

  if (type === 'vertical') {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#0B0D10]/95 border border-white/10 text-center w-full max-w-sm sm:max-w-md shadow-2xl ${className}`}
      >
        <div className="w-full flex justify-center mb-4 sm:mb-5">
          <img
            src={verticalSrc}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== remoteVerticalFallback) {
                target.src = remoteVerticalFallback;
              } else {
                setImageError(true);
              }
            }}
            alt="ETORA Studio Vertical Logo"
            referrerPolicy="no-referrer"
            className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] h-auto object-contain filter drop-shadow-[0_4px_24px_rgba(124,92,252,0.35)]"
          />
        </div>
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A78BFA]">
          {subtext || 'Official Studio Brandmark'}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== remoteFallback) {
            target.src = remoteFallback;
          }
        }}
        alt="ETORA Studio"
        referrerPolicy="no-referrer"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

