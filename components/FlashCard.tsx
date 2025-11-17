/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * FlashCard component for displaying individual flashcards.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { useEffect, useMemo, useRef } from 'react';
import type { Card } from '@/lib/data';

type FlashCardProps = {
  card: Card;
  flipped: boolean;
  onFlip: () => void;
};

export function FlashCard({ card, flipped, onFlip }: FlashCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const frontRef = useRef<HTMLElement>(null);
  const backRef = useRef<HTMLElement>(null);
  
  // Label is now handled by deck selection, so we don't need it here
  // Keeping this for potential future use
  const label = useMemo(() => 'All Highlights', []);

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

  // Dynamically size card to fit all content without scrolling
  useEffect(() => {
    if (!cardRef.current || !frontRef.current || !backRef.current) return;
    
    const cardEl = cardRef.current;
    const frontEl = frontRef.current;
    const backEl = backRef.current;
    
    // scrollHeight works even with backface-visibility hidden
    const frontHeight = frontEl.scrollHeight;
    const backHeight = backEl.scrollHeight;
    const maxHeight = Math.max(frontHeight, backHeight);
    
    // Set card height to fit the taller content (add buffer for padding)
    if (maxHeight > 0) {
      const cardHeight = maxHeight + 40;
      cardEl.style.height = `${cardHeight}px`;
      cardEl.style.minHeight = `${cardHeight}px`;
    }
  }, [card]);

  return (
    <article
      ref={cardRef}
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
        'w-full min-h-[50vh] sm:min-h-[46vh] bg-surface rounded-xl sm:rounded-lg p-4 sm:p-5 md:p-6 shadow-overlay',
        'relative preserve-3d transition-transform duration-500 ease-out',
        'flex items-stretch justify-center select-none text-left touch-manipulation',
        flipped ? '[transform:rotateY(180deg)]' : '',
      ].join(' ')}
    >
      <section ref={frontRef} className="absolute inset-0 p-4 sm:p-5 md:p-6 backface-hidden flex flex-col gap-2 sm:gap-3 justify-center items-center overflow-visible">
        <div className="flex justify-center mb-2 sm:mb-3">
          <img src="/logo.svg" alt="Scottsdale Cart Tours" className="h-10 sm:h-12 md:h-14" />
        </div>
        <div className="uppercase tracking-[0.14em] text-sm sm:text-base md:text-lg text-muted">{label}</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold m-0 leading-tight text-center">{card.front}</h2>
      </section>
      <section ref={backRef} className="absolute inset-0 p-4 sm:p-5 md:p-6 [transform:rotateY(180deg)] backface-hidden flex flex-col gap-3 sm:gap-4 justify-start overflow-visible">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold m-0 leading-tight">{card.front}</h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed m-0 text-text/90">{card.back}</p>
      </section>
    </article>
  );
}


