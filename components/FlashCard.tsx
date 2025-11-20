/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * FlashCard component for displaying individual flashcards.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { useEffect, useMemo, useRef, useCallback } from 'react';
import type { Card } from '@/lib/data';

type FlashCardProps = {
  card: Card;
  flipped: boolean;
  onFlip: () => void;
  isFavorited?: boolean;
  onToggleFavorite?: () => void;
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchMove?: (e: React.TouchEvent) => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
};

export function FlashCard({ 
  card, 
  flipped, 
  onFlip, 
  isFavorited = false, 
  onToggleFavorite,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: FlashCardProps) {
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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onFlip();
    }
  }, [onFlip]);

  return (
    <article
      ref={cardRef}
      role="button"
      aria-pressed={flipped ? 'true' : 'false'}
      tabIndex={0}
      aria-label="Flashcard. Press to flip."
      onKeyDown={handleKeyDown}
      onClick={onFlip}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
        className={[
          'w-full min-h-[50vh] sm:min-h-[46vh] bg-surface rounded-xl sm:rounded-lg p-4 sm:p-5 md:p-6 shadow-overlay',
          'relative preserve-3d transition-transform duration-500 ease-out',
          'flex items-stretch justify-center select-none text-left',
          flipped ? '[transform:rotateY(180deg)]' : '',
        ].join(' ')}
        style={{ touchAction: 'pan-y' }}
    >
      {/* Favorite button - positioned absolutely, visible on both sides */}
      {onToggleFavorite && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          className={[
            'absolute top-3 right-3 sm:top-4 sm:right-4 z-10',
            'w-10 h-10 sm:w-12 sm:h-12 rounded-full',
            'flex items-center justify-center',
            'bg-surface/80 backdrop-blur-sm border border-white/20',
            'hover:bg-surface hover:border-white/30',
            'transition-all duration-200',
            'touch-manipulation',
            isFavorited ? 'text-accent' : 'text-muted hover:text-accent',
          ].join(' ')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavorited ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      )}
      <section ref={frontRef} className="absolute inset-0 p-4 sm:p-5 md:p-6 backface-hidden flex flex-col gap-2 sm:gap-3 justify-center items-center overflow-visible">
          <div className="flex flex-col items-center mb-2 sm:mb-3 gap-1 sm:gap-1.5">
                <img
                  src="/logo.svg"
                  alt="Scottsdale Cart Tours"
                  className="h-32 sm:h-40 md:h-48"
                  loading="eager"
                  decoding="async"
                />
                <a
                  href="https://scottsdalecarttours.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg md:text-xl text-muted hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  scottsdalecarttours.com
                </a>
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


