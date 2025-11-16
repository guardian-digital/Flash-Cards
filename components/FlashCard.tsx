import { useEffect, useMemo } from 'react';
import type { Card } from '@/lib/data';

type FlashCardProps = {
  card: Card;
  flipped: boolean;
  onFlip: () => void;
};

export function FlashCard({ card, flipped, onFlip }: FlashCardProps) {
  const label = useMemo(() => {
    const g = card.group || '';
    return g ? `Highlights – ${g.charAt(0).toUpperCase()}${g.slice(1)}` : 'All Highlights';
  }, [card.group]);

  useEffect(() => {
    // Cancel any text selection caused by double-tap/click
    const handler = (e: MouseEvent) => {
      if ((e.detail || 0) > 1) {
        e.preventDefault();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <article
      role="button"
      aria-pressed={flipped ? 'true' : 'false'}
      tabIndex={0}
      aria-label="Flashcard. Press to flip."
      onClick={onFlip}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onFlip();
        }
      }}
      className={[
        'w-full min-h-[46vh] max-h-[70vh] bg-surface rounded-lg p-5 shadow-overlay',
        'relative preserve-3d transition-transform duration-500 ease-out',
        'flex items-stretch justify-center select-none text-left',
        flipped ? '[transform:rotateY(180deg)]' : '',
      ].join(' ')}
    >
      <section className="absolute inset-0 p-4 md:p-5 backface-hidden flex flex-col gap-2 justify-center items-start">
        <div className="uppercase tracking-[0.14em] text-sm text-muted">{label}</div>
        <h2 className="text-2xl md:text-3xl font-bold m-0">{card.front}</h2>
      </section>
      <section className="absolute inset-0 p-4 md:p-5 [transform:rotateY(180deg)] backface-hidden flex flex-col gap-3 justify-start">
        <h2 className="text-2xl md:text-3xl font-bold m-0">{card.front}</h2>
        <p className="text-lg leading-relaxed m-0 text-text/90">{card.back}</p>
      </section>
    </article>
  );
}


