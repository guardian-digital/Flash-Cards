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
    <div className="flex gap-2 mt-2" aria-label="Card controls">
      <button
        type="button"
        aria-label="Previous card"
        className="flex-1 min-h-[60px] rounded-full border border-white/20 bg-transparent text-base md:text-lg text-white"
        onClick={onPrev}
      >
        ◀ Prev
      </button>
      <button
        type="button"
        aria-label="Toggle voice narration"
        className={[
          'flex-1 min-h-[60px] rounded-full border border-white/20 text-base md:text-lg',
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
            'flex-1 min-h-[60px] rounded-full border border-white/20 text-base md:text-lg',
            shuffleEnabled ? 'bg-accent text-black border-accent' : 'bg-transparent text-white',
          ].join(' ')}
          onClick={onToggleShuffle}
        >
          {shuffleEnabled ? 'Shuffle: On' : 'Shuffle: Off'}
        </button>
      )}
      {onToggleAuto && (
        <button
          type="button"
          aria-label="Toggle auto advance"
          aria-pressed={autoEnabled ? 'true' : 'false'}
          className={[
            'flex-1 min-h-[60px] rounded-full border border-white/20 text-base md:text-lg',
            autoEnabled ? 'bg-accent text-black border-accent' : 'bg-transparent text-white',
          ].join(' ')}
          onClick={onToggleAuto}
        >
          {autoEnabled ? 'Auto: On' : 'Auto: Off'}
        </button>
      )}
      <button
        type="button"
        aria-label="Flip card"
        className="flex-1 min-h-[60px] rounded-full border-0 font-semibold text-base md:text-lg bg-accent text-black shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
        onClick={onFlip}
      >
        Flip
      </button>
      <button
        type="button"
        aria-label="Next card"
        className="flex-1 min-h-[60px] rounded-full border border-white/20 bg-transparent text-base md:text-lg text-white"
        onClick={onNext}
      >
        Next ▶
      </button>
    </div>
  );
}


