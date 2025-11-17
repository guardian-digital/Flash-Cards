/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Review/Feedback prompt component with QR code.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { BRAND } from '@/config/brand';

const GOOGLE_REVIEWS_URL = 'https://g.page/r/CXN08ldPlfATEBM/review';

type ReviewPromptProps = {
  onClose?: () => void;
};

export function ReviewPrompt({ onClose }: ReviewPromptProps) {
  // Generate QR code using QR Server API
  // For production, consider using a library like 'qrcode.react' or 'react-qr-code'
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(GOOGLE_REVIEWS_URL)}`;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Review prompt"
    >
      <div
        className="bg-surface rounded-xl sm:rounded-lg p-6 sm:p-8 max-w-md w-full shadow-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white m-0">Love Your Tour?</h3>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-muted hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>

        <p className="text-text/90 mb-6 text-sm sm:text-base">
          Help us improve! Scan the QR code or tap the link below to leave a review on Google.
        </p>

        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={qrCodeUrl}
              alt="QR code for Google reviews"
              className="w-48 h-48"
              onError={(e) => {
                // Fallback if QR code fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'px-6 py-3 rounded-full font-semibold text-sm sm:text-base',
              'bg-accent text-black hover:bg-accent-hover',
              'transition-colors touch-manipulation',
              'shadow-[0_4px_12px_rgba(0,0,0,0.25)]',
            ].join(' ')}
          >
            Leave a Review on Google
          </a>
        </div>

        <p className="text-xs text-muted text-center">
          Your feedback helps us provide better tours!
        </p>
      </div>
    </div>
  );
}

