import { t, type Language } from '@/lib/i18n';

type ControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  onFlip: () => void;
  onToggleVoice: () => void;
  onShare?: () => void;
  narrationEnabled: boolean;
  language?: Language;
};

export function Controls({
  onPrev,
  onNext,
  onFlip,
  onToggleVoice,
  onShare,
  narrationEnabled,
  language = 'en',
}: ControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 mt-2" aria-label="Card controls">
      {/* Primary navigation row */}
      <div className="flex gap-2">
        {/* Hide prev/next buttons on mobile - use swipe gestures instead */}
        <button
          type="button"
          aria-label="Previous card"
          className="hidden sm:flex flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 bg-transparent text-sm sm:text-base md:text-lg text-white touch-manipulation active:opacity-70"
          onClick={onPrev}
        >
            {t('button.prev', language)}
          </button>
          <button
            type="button"
            aria-label="Flip card"
            className="flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border-0 font-semibold text-sm sm:text-base md:text-lg bg-accent text-black shadow-[0_6px_18px_rgba(0,0,0,0.25)] touch-manipulation active:opacity-80"
            onClick={onFlip}
          >
            {t('button.flip', language)}
          </button>
          {/* Hide prev/next buttons on mobile - use swipe gestures instead */}
          <button
            type="button"
            aria-label="Next card"
            className="hidden sm:flex flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 bg-transparent text-sm sm:text-base md:text-lg text-white touch-manipulation active:opacity-70"
            onClick={onNext}
          >
            {t('button.next', language)}
          </button>
      </div>
      {/* Secondary controls row */}
      <div className="flex gap-2 flex-wrap">
        <button
          type="button"
          aria-label="Toggle voice narration"
          className={[
            'flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 text-xs sm:text-sm md:text-base touch-manipulation active:opacity-70',
            narrationEnabled ? 'bg-accent text-black border-accent' : 'bg-transparent text-white',
          ].join(' ')}
          onClick={onToggleVoice}
        >
            {narrationEnabled ? t('button.voice.on', language) : t('button.voice', language)}
          </button>
          {onShare && (
            <button
              type="button"
              aria-label={t('share.button', language)}
              className="flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 bg-transparent text-white text-xs sm:text-sm md:text-base touch-manipulation active:opacity-70 flex items-center justify-center gap-1.5"
              onClick={onShare}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              {t('share.button', language)}
            </button>
          )}
      </div>
    </div>
  );
}


