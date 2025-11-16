type ControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  onFlip: () => void;
  onToggleVoice: () => void;
  narrationEnabled: boolean;
  onToggleShuffle?: () => void;
  shuffleEnabled?: boolean;
  onToggleAuto?: () => void;
  autoEnabled?: boolean;
};

export function Controls({
  onPrev,
  onNext,
  onFlip,
  onToggleVoice,
  narrationEnabled,
  onToggleShuffle,
  shuffleEnabled = false,
  onToggleAuto,
  autoEnabled = false,
}: ControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 mt-2" aria-label="Card controls">
      {/* Primary navigation row */}
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Previous card"
          className="flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 bg-transparent text-sm sm:text-base md:text-lg text-white touch-manipulation active:opacity-70"
          onClick={onPrev}
        >
          ◀ Prev
        </button>
        <button
          type="button"
          aria-label="Flip card"
          className="flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border-0 font-semibold text-sm sm:text-base md:text-lg bg-accent text-black shadow-[0_6px_18px_rgba(0,0,0,0.25)] touch-manipulation active:opacity-80"
          onClick={onFlip}
        >
          Flip
        </button>
        <button
          type="button"
          aria-label="Next card"
          className="flex-1 min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 bg-transparent text-sm sm:text-base md:text-lg text-white touch-manipulation active:opacity-70"
          onClick={onNext}
        >
          Next ▶
        </button>
      </div>
      {/* Secondary controls row */}
      <div className="flex gap-2 flex-wrap">
        <button
          type="button"
          aria-label="Toggle voice narration"
          className={[
            'flex-1 min-w-[calc(33.333%-4px)] min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 text-xs sm:text-sm md:text-base touch-manipulation active:opacity-70',
            narrationEnabled ? 'bg-accent text-black border-accent' : 'bg-transparent text-white',
          ].join(' ')}
          onClick={onToggleVoice}
        >
          {narrationEnabled ? 'Voice On' : 'Voice'}
        </button>
        {onToggleShuffle && (
          <button
            type="button"
            aria-label="Toggle shuffle"
            aria-pressed={shuffleEnabled ? 'true' : 'false'}
            className={[
              'flex-1 min-w-[calc(33.333%-4px)] min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 text-xs sm:text-sm md:text-base touch-manipulation active:opacity-70',
              shuffleEnabled ? 'bg-accent text-black border-accent' : 'bg-transparent text-white',
            ].join(' ')}
            onClick={onToggleShuffle}
          >
            <span className="hidden sm:inline">{shuffleEnabled ? 'Shuffle: On' : 'Shuffle: Off'}</span>
            <span className="sm:hidden">{shuffleEnabled ? 'Shuffle ✓' : 'Shuffle'}</span>
          </button>
        )}
        {onToggleAuto && (
          <button
            type="button"
            aria-label="Toggle auto advance"
            aria-pressed={autoEnabled ? 'true' : 'false'}
            className={[
              'flex-1 min-w-[calc(33.333%-4px)] min-h-[48px] sm:min-h-[52px] md:min-h-[60px] rounded-full border border-white/20 text-xs sm:text-sm md:text-base touch-manipulation active:opacity-70',
              autoEnabled ? 'bg-accent text-black border-accent' : 'bg-transparent text-white',
            ].join(' ')}
            onClick={onToggleAuto}
          >
            <span className="hidden sm:inline">{autoEnabled ? 'Auto: On' : 'Auto: Off'}</span>
            <span className="sm:hidden">{autoEnabled ? 'Auto ✓' : 'Auto'}</span>
          </button>
        )}
      </div>
    </div>
  );
}


