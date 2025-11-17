/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 *
 * Share modal component for Flash-Cards.
 * Displays QR code and shareable link for individual cards.
 *
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { useState } from 'react';
import { BRAND } from '@/config/brand';
import { t, type Language } from '@/lib/i18n';
import { generateShareUrl, copyToClipboard } from '@/lib/share';

type ShareModalProps = {
  deckId: string;
  cardIndex: number;
  cardFront: string;
  onClose?: () => void;
  language?: Language;
};

export function ShareModal({ deckId, cardIndex, cardFront, onClose, language = 'en' }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = generateShareUrl(deckId, cardIndex, language);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=2&data=${encodeURIComponent(shareUrl)}`;

  const handleCopy = async () => {
    const success = await copyToClipboard(shareUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t('share.title', language)}
    >
      <div
        className="bg-surface rounded-xl sm:rounded-lg p-6 sm:p-8 max-w-md w-full shadow-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white m-0">{t('share.title', language)}</h3>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-muted hover:text-white transition-colors"
              aria-label={t('share.close', language)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>

        <p className="text-text/90 mb-2 text-sm sm:text-base">
          {t('share.description', language)}
        </p>
        <p className="text-xs text-muted mb-6 italic">
          "{cardFront}"
        </p>

        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <img
              src={qrCodeUrl}
              alt={t('share.qr.alt', language)}
              className="w-48 h-48 sm:w-56 sm:h-56"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<p class="text-sm text-muted">${t('share.qr.error', language)}</p>`;
                }
              }}
            />
          </div>
          <p className="text-xs text-muted text-center -mt-2">
            {t('share.qr.scan', language)}
          </p>

          <div className="w-full flex gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-card text-white border border-white/20 rounded-lg px-3 py-2 text-sm"
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
            <button
              type="button"
              onClick={handleCopy}
              className={[
                'px-4 py-2 rounded-lg font-semibold text-sm',
                copied
                  ? 'bg-green-600 text-white'
                  : 'bg-accent text-black hover:bg-accent-hover',
                'transition-colors touch-manipulation',
                'shadow-[0_2px_8px_rgba(0,0,0,0.25)]',
              ].join(' ')}
            >
              {copied ? t('share.copied', language) : t('share.copy', language)}
            </button>
          </div>
        </div>

        <p className="text-xs text-muted text-center">
          {t('share.footer', language)}
        </p>
      </div>
    </div>
  );
}

