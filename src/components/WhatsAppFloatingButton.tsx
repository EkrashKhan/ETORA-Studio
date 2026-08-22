import React from 'react';
import { ETORA_CONTACT } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = ETORA_CONTACT.whatsappUrl || 'https://api.whatsapp.com/send/?phone=923363882626';

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center group transition-transform duration-300 ease-out"
    >
      {/* Tooltip / Prompt for desktop */}
      <span className="hidden md:inline-flex mr-3 py-1.5 px-3 rounded-full bg-[#141820]/95 backdrop-blur-md border border-white/10 text-xs text-[#F5F7FA] font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
        Chat with us on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        id="whatsapp-floating-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ETORA Studio on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:bg-[#22c35e] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none -z-10" />

        {/* WhatsApp Official Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-sm"
        >
          <path d="M12.031 2c-5.502 0-9.98 4.478-9.98 9.98 0 1.76.459 3.473 1.332 4.985L2 22l5.204-1.365a9.936 9.936 0 0 0 4.827 1.245h.004c5.502 0 9.979-4.478 9.979-9.98 0-2.666-1.038-5.172-2.924-7.058C17.204 3.056 14.697 2 12.031 2zm5.82 14.184c-.244.686-1.42 1.258-1.956 1.341-.518.08-1.189.116-3.832-.977-3.376-1.396-5.553-4.838-5.722-5.062-.165-.224-1.36-1.81-1.36-3.453 0-1.643.858-2.453 1.162-2.784.305-.33.666-.413.888-.413.223 0 .445.002.639.012.207.01.484-.079.757.578.283.686.963 2.35 1.047 2.522.083.173.139.375.028.6-.111.224-.167.363-.332.556-.166.194-.349.432-.499.58-.166.164-.339.344-.146.674.193.33 86.133 1.408 1.942 2.378 1.396 1.243 2.572 1.628 2.937 1.81.366.182.58.152.793-.095.213-.247.913-1.062 1.157-1.425.244-.364.488-.303.824-.178.337.124 2.138 1.008 2.505 1.192.366.183.61.274.7.425.089.15.089.873-.155 1.559z" />
        </svg>
      </a>
    </div>
  );
};
