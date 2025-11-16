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

  // Dynamically size card to fit all content without scrolling
  useEffect(() => {
    if (!cardRef.current || !frontRef.current || !backRef.current) return;
    
    const cardEl = cardRef.current;
    const frontEl = frontRef.current;
    const backEl = backRef.current;
    
    // Create temporary elements to measure content height
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.width = cardEl.offsetWidth + 'px';
    tempDiv.style.padding = '20px 22px 24px';
    document.body.appendChild(tempDiv);
    
    // Measure front content
    const frontLabel = document.createElement('div');
    frontLabel.className = 'uppercase tracking-[0.14em] text-lg text-muted';
    frontLabel.textContent = label;
    tempDiv.appendChild(frontLabel);
    const frontTitle = document.createElement('h2');
    frontTitle.className = 'text-4xl md:text-5xl font-bold m-0';
    frontTitle.textContent = card.front;
    tempDiv.appendChild(frontTitle);
    const frontHeight = tempDiv.offsetHeight;
    tempDiv.innerHTML = '';
    
    // Measure back content (title + body)
    const backTitle = document.createElement('h2');
    backTitle.className = 'text-4xl md:text-5xl font-bold m-0';
    backTitle.textContent = card.front;
    tempDiv.appendChild(backTitle);
    const backBody = document.createElement('p');
    backBody.className = 'text-2xl md:text-3xl leading-relaxed m-0 text-text/90';
    backBody.textContent = card.back;
    tempDiv.appendChild(backBody);
    const backHeight = tempDiv.offsetHeight;
    
    document.body.removeChild(tempDiv);
    
    // Set card height to fit the taller content
    const maxHeight = Math.max(frontHeight, backHeight);
    if (maxHeight > 0) {
      cardEl.style.height = `${maxHeight + 60}px`;
      cardEl.style.minHeight = `${maxHeight + 60}px`;
    }
  }, [card, label]);

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
        'w-full min-h-[46vh] bg-surface rounded-lg p-5 shadow-overlay',
        'relative preserve-3d transition-transform duration-500 ease-out',
        'flex items-stretch justify-center select-none text-left',
        flipped ? '[transform:rotateY(180deg)]' : '',
      ].join(' ')}
    >
      <section ref={frontRef} className="absolute inset-0 p-5 md:p-6 backface-hidden flex flex-col gap-3 justify-center items-start overflow-visible">
        <div className="uppercase tracking-[0.14em] text-lg text-muted">{label}</div>
        <h2 className="text-4xl md:text-5xl font-bold m-0">{card.front}</h2>
      </section>
      <section ref={backRef} className="absolute inset-0 p-5 md:p-6 [transform:rotateY(180deg)] backface-hidden flex flex-col gap-4 justify-start overflow-visible">
        <h2 className="text-4xl md:text-5xl font-bold m-0">{card.front}</h2>
        <p className="text-2xl md:text-3xl leading-relaxed m-0 text-text/90">{card.back}</p>
      </section>
    </article>
  );
}


