/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Review/Feedback prompt component with QR code.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { BRAND } from '@/config/brand';
import { t, type Language } from '@/lib/i18n';

const GOOGLE_REVIEWS_URL = 'https://g.page/r/CXN08ldPlfATEBM/review';

type ReviewPromptProps = {
  onClose?: () => void;
  language?: Language;
};

export function ReviewPrompt({ onClose, language = 'en' }: ReviewPromptProps) {
  // Generate QR code using QR Server API
  // Size increased for better scanability on mobile devices
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=2&data=${encodeURIComponent(GOOGLE_REVIEWS_URL)}`;

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
          <h3 className="text-xl sm:text-2xl font-bold text-white m-0">{t('review.title', language)}</h3>
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
          {t('review.description', language)}
        </p>

        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <img
              src={qrCodeUrl}
              alt="QR code for Google reviews - Scan to leave a review"
              className="w-48 h-48 sm:w-56 sm:h-56"
              onError={(e) => {
                // Fallback if QR code fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<p class="text-sm text-muted">QR code unavailable. Please use the link below.</p>';
                }
              }}
            />
          </div>
          <p className="text-xs text-muted text-center -mt-2">
            {t('review.scan', language)}
          </p>

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
            {t('review.button', language)}
          </a>
        </div>

        <p className="text-xs text-muted text-center">
          {t('review.footer', language)}
        </p>
      </div>
    </div>
  );
}

