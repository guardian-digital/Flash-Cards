import Head from 'next/head';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BRAND } from '@/config/brand';
import { CARDS, GROUPS, type Card } from '@/lib/data';
import { FlashCard } from '@/components/FlashCard';
import { TagStrip } from '@/components/TagStrip';
import { Controls } from '@/components/Controls';

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [narrationEnabled, setNarrationEnabled] = useState(false);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);

  const groupFirstIndex = useMemo(() => {
    const map: Record<string, number> = {};
    for (let i = 0; i < CARDS.length; i++) {
      const g = CARDS[i].group;
      if (g && map[g] === undefined) map[g] = i;
    }
    return map;
  }, []);

  const current: Card | null = CARDS.length ? CARDS[index] : null;
  const activeGroup = current?.group ?? null;

  const flip = useCallback(() => setFlipped((f) => !f), []);
  const next = useCallback(() => {
    if (!CARDS.length) return;
    setIndex((i) => (i + 1) % CARDS.length);
    setFlipped(false);
  }, []);
  const prev = useCallback(() => {
    if (!CARDS.length) return;
    setIndex((i) => (i - 1 + CARDS.length) % CARDS.length);
    setFlipped(false);
  }, []);
  const goToGroup = useCallback((groupId: string) => {
    const idx = groupFirstIndex[groupId];
    if (typeof idx === 'number') {
      setIndex(idx);
      setFlipped(false);
    }
  }, [groupFirstIndex]);

  // Voice synthesis
  const speakCurrent = useCallback(() => {
    if (!narrationEnabled) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const card = CARDS[index];
    if (!card) return;
    try {
      window.speechSynthesis.cancel();
      const text = `${card.front}. ${card.back}`;
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.95;
      utter.pitch = 1.0;
      utter.lang = 'en-US';
      window.speechSynthesis.speak(utter);
    } catch {
      // swallow
    }
  }, [index, narrationEnabled]);

  const toggleVoice = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setNarrationEnabled(false);
      return;
    }
    setNarrationEnabled((on) => {
      const nextOn = !on;
      if (!nextOn) window.speechSynthesis.cancel();
      return nextOn;
    });
  }, []);

  useEffect(() => {
    speakCurrent();
  }, [index, speakCurrent]);

  // Touch gestures for swipe and tap
  const onTouchStart = (x: number, y: number) => {
    startRef.current = { x, y };
    movedRef.current = false;
  };
  const onTouchMove = (x: number, _y: number) => {
    const start = startRef.current;
    if (!start) return;
    if (Math.abs(x - start.x) > 12) movedRef.current = true;
  };
  const onTouchEnd = (x: number, y: number) => {
    const start = startRef.current;
    if (!start) return;
    const dx = x - start.x;
    const dy = y - start.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    } else {
      if (!movedRef.current) flip();
    }
  };

  // Keyboard shortcuts on document
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const deckLabel = useMemo(() => {
    if (!current) return '0 / 0';
    return current.group
      ? `Highlights – ${current.group.charAt(0).toUpperCase()}${current.group.slice(1)}`
      : 'All Highlights';
  }, [current]);

  return (
    <>
      <Head>
        <title>Old Town Scottsdale – Tour Flashcards</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content={BRAND.colors.background} />
      </Head>
      <div
        className="min-h-full max-w-[600px] mx-auto px-4 pt-[env(safe-area-inset-top)] pb-[calc(10px+env(safe-area-inset-bottom))] flex flex-col gap-2"
        role="application"
        aria-label="Old Town Scottsdale Tour Flashcards"
      >
        <header className="flex flex-col gap-1 mb-1">
          <h1 className="text-2xl md:text-3xl font-bold m-0">Old Town Scottsdale Highlights</h1>
          <div className="flex gap-2 items-center justify-between text-base md:text-lg text-muted">
            <span className="font-semibold" aria-live="polite">{deckLabel}</span>
            <span className="text-muted" aria-live="polite">
              {CARDS.length ? `${index + 1} / ${CARDS.length}` : '0 / 0'}
            </span>
          </div>
          <TagStrip
            groups={GROUPS}
            activeGroupId={activeGroup}
            onSelect={goToGroup}
          />
        </header>

        <div className="flex-1 flex items-center justify-center">
          {current ? (
            <div
              className="w-full"
              onTouchStart={(e) => {
                const t = e.touches[0];
                onTouchStart(t.clientX, t.clientY);
              }}
              onTouchMove={(e) => {
                const t = e.touches[0];
                onTouchMove(t.clientX, t.clientY);
              }}
              onTouchEnd={(e) => {
                const t = e.changedTouches[0];
                onTouchEnd(t.clientX, t.clientY);
              }}
            >
              <FlashCard card={current} flipped={flipped} onFlip={flip} />
            </div>
          ) : (
            <div className="text-muted">No cards</div>
          )}
        </div>

        <Controls
          onPrev={prev}
          onNext={next}
          onFlip={flip}
          onToggleVoice={toggleVoice}
          narrationEnabled={narrationEnabled}
        />
        <div className="text-center text-muted text-sm mt-1">
          Tap card to flip • Swipe or use arrows to change cards
        </div>
      </div>
    </>
  );
}


