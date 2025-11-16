import Head from 'next/head';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BRAND } from '@/config/brand';
import { DECKS, getAllDeck, type Card, type Deck } from '@/lib/data';
import { FlashCard } from '@/components/FlashCard';
import { DeckSelect } from '@/components/DeckSelect';
import { Controls } from '@/components/Controls';

export default function HomePage() {
  const [currentDeck, setCurrentDeck] = useState<Deck>(getAllDeck());
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [narrationEnabled, setNarrationEnabled] = useState(false);
  const [shuffleEnabled, setShuffleEnabled] = useState(false);
  const [autoEnabled, setAutoEnabled] = useState(false);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const audioEndCallbackRef = useRef<(() => void) | null>(null);
  const audioTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);

  const hasCards = currentDeck.cards.length > 0;
  const current: Card | null = hasCards ? currentDeck.cards[index] : null;

  const flip = useCallback(() => setFlipped((f) => !f), []);
  const next = useCallback(() => {
    if (!hasCards) return;
    setIndex((i) => {
      if (shuffleEnabled) {
        if (currentDeck.cards.length === 1) return 0;
        let n = i;
        while (n === i) n = Math.floor(Math.random() * currentDeck.cards.length);
        return n;
      }
      return (i + 1) % currentDeck.cards.length;
    });
    setFlipped(false);
    
    // If auto is on and narration is enabled (using callback-based), set up callback for when audio finishes
    if (autoEnabled && narrationEnabled && !autoTimerRef.current) {
      audioEndCallbackRef.current = advanceAfterNarration;
    }
  }, [hasCards, shuffleEnabled, currentDeck.cards.length, autoEnabled, narrationEnabled, advanceAfterNarration]);
  const prev = useCallback(() => {
    if (!hasCards) return;
    setIndex((i) => (i - 1 + currentDeck.cards.length) % currentDeck.cards.length);
    setFlipped(false);
  }, [hasCards, currentDeck.cards.length]);

  const setDeckById = useCallback((id: string) => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    audioEndCallbackRef.current = null;
    if (audioTimeoutRef.current) {
      clearTimeout(audioTimeoutRef.current);
      audioTimeoutRef.current = null;
    }
    setAutoEnabled(false);
    const found = id === 'all' ? getAllDeck() : DECKS.find((d) => d.id === id) || getAllDeck();
    setCurrentDeck(found);
    setIndex(0);
    setFlipped(false);
  }, []);

  // Audio state
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Generate slug from card front text
  const slugify = useCallback((text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }, []);

  // Get best available voice for SpeechSynthesis
  const getBestVoice = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || !voices.length) return null;
    // Prefer natural-sounding voices (Google, Microsoft, Amazon)
    const preferred = voices.find((v) => /google|microsoft|amazon|samantha|alex/i.test(v.name));
    if (preferred) return preferred;
    // Fallback to first en-US voice
    return voices.find((v) => /en-us/i.test(v.lang)) || voices[0];
  }, []);

  // Voice synthesis with hybrid MP3 + SpeechSynthesis
  const speakCurrent = useCallback(() => {
    if (!narrationEnabled) return;
    const card = currentDeck.cards[index];
    if (!card) return;

    // Stop any current audio/speech and clear timeout
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (audioTimeoutRef.current) {
      clearTimeout(audioTimeoutRef.current);
      audioTimeoutRef.current = null;
    }

    // Safety timeout: if audio doesn't finish within 45 seconds, advance anyway
    if (audioEndCallbackRef.current) {
      audioTimeoutRef.current = setTimeout(() => {
        if (audioEndCallbackRef.current) {
          const cb = audioEndCallbackRef.current;
          audioEndCallbackRef.current = null;
          audioTimeoutRef.current = null;
          cb();
        }
      }, 45000);
    }

    // Try pre-generated MP3 first
    const slug = slugify(card.front);
    const audio = new Audio(`/audio/${slug}.mp3`);
    audio.onerror = () => {
      // Fallback to improved SpeechSynthesis
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        // No audio available - if we have a callback, trigger it after a short delay
        if (audioEndCallbackRef.current) {
          const cb = audioEndCallbackRef.current;
          audioEndCallbackRef.current = null;
          if (audioTimeoutRef.current) {
            clearTimeout(audioTimeoutRef.current);
            audioTimeoutRef.current = null;
          }
          setTimeout(cb, 2000);
        }
        return;
      }
      try {
        const utter = new SpeechSynthesisUtterance(`${card.front}. ${card.back}`);
        const voice = getBestVoice();
        if (voice) utter.voice = voice;
        utter.rate = 0.92;
        utter.pitch = 1.0;
        utter.lang = 'en-US';
        
        // Track when SpeechSynthesis finishes
        utter.onend = () => {
          audioRef.current = null;
          if (audioTimeoutRef.current) {
            clearTimeout(audioTimeoutRef.current);
            audioTimeoutRef.current = null;
          }
          if (audioEndCallbackRef.current) {
            const cb = audioEndCallbackRef.current;
            audioEndCallbackRef.current = null;
            // Add 1.5 second gap after audio finishes
            setTimeout(cb, 1500);
          }
        };
        
        window.speechSynthesis.speak(utter);
      } catch {
        // If SpeechSynthesis also fails, trigger callback after delay
        if (audioEndCallbackRef.current) {
          const cb = audioEndCallbackRef.current;
          audioEndCallbackRef.current = null;
          if (audioTimeoutRef.current) {
            clearTimeout(audioTimeoutRef.current);
            audioTimeoutRef.current = null;
          }
          setTimeout(cb, 2000);
        }
      }
    };
    audio.onended = () => {
      audioRef.current = null;
      if (audioTimeoutRef.current) {
        clearTimeout(audioTimeoutRef.current);
        audioTimeoutRef.current = null;
      }
      // If auto is on and we have a callback, trigger it after a short delay
      if (audioEndCallbackRef.current) {
        const cb = audioEndCallbackRef.current;
        audioEndCallbackRef.current = null;
        // Add 1.5 second gap after audio finishes
        setTimeout(cb, 1500);
      }
    };
    audioRef.current = audio;
    audio.play().catch(() => {
      audioRef.current = null;
      // If play fails, audio.onerror will handle it
    });
  }, [index, narrationEnabled, currentDeck.cards, slugify, getBestVoice]);

  const toggleVoice = useCallback(() => {
    // Stop any current audio/speech
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setNarrationEnabled(false);
      return;
    }
    setNarrationEnabled((on) => {
      const nextOn = !on;
      const wasEnabled = on;
      
      // If auto is on, switch between interval and callback-based
      if (autoTimerRef.current) {
        if (nextOn && !wasEnabled) {
          // Narration turned on while auto is on - switch to callback
          clearInterval(autoTimerRef.current);
          autoTimerRef.current = null;
          audioEndCallbackRef.current = advanceAfterNarration;
        } else if (!nextOn && wasEnabled) {
          // Narration turned off while auto is on - switch to interval
          clearInterval(autoTimerRef.current);
          audioEndCallbackRef.current = null;
          if (audioTimeoutRef.current) {
            clearTimeout(audioTimeoutRef.current);
            audioTimeoutRef.current = null;
          }
          autoTimerRef.current = setInterval(() => {
            next();
          }, 8000);
        }
      }
      
      return nextOn;
    });
  }, [advanceAfterNarration, next]);

  // Load voices when available (Chrome needs this)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices(); // Trigger load
      const onVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.onvoiceschanged = onVoicesChanged;
      return () => {
        if (window.speechSynthesis) {
          window.speechSynthesis.onvoiceschanged = null;
        }
      };
    }
  }, []);

  // Auto-speak when narration enabled and index changes
  useEffect(() => {
    if (narrationEnabled) {
      speakCurrent();
    }
  }, [index, narrationEnabled, speakCurrent]);

  const toggleShuffle = useCallback(() => {
    setShuffleEnabled((s) => !s);
  }, []);

  const advanceAfterNarration = useCallback(() => {
    // This will be called after audio finishes + delay
    // next() will set up the callback for the next card automatically
    next();
  }, [next]);

  const toggleAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
      audioEndCallbackRef.current = null;
      if (audioTimeoutRef.current) {
        clearTimeout(audioTimeoutRef.current);
        audioTimeoutRef.current = null;
      }
      setAutoEnabled(false);
      return;
    }
    setAutoEnabled(true);
    
    if (narrationEnabled) {
      // When narration is enabled, wait for audio to finish
      audioEndCallbackRef.current = advanceAfterNarration;
      // If audio is already playing, it will trigger the callback when done
      // If no audio is playing, start it
      if (!audioRef.current) {
        speakCurrent();
      }
    } else {
      // When narration is disabled, use fixed interval
      autoTimerRef.current = setInterval(() => {
        next();
      }, 8000);
    }
  }, [next, narrationEnabled, advanceAfterNarration, speakCurrent]);

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

  useEffect(() => {
    const onVis = () => {
      if (document.hidden && autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
        autoTimerRef.current = null;
        setAutoEnabled(false);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const deckOptions = useMemo(
    () => [{ id: 'all', label: 'All Highlights' }, ...DECKS.map((d) => ({ id: d.id, label: d.label }))],
    []
  );

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
            <span className="font-semibold" aria-live="polite">{currentDeck.label}</span>
            <span className="text-muted" aria-live="polite">
              {hasCards ? `${index + 1} / ${currentDeck.cards.length}` : '0 / 0'}
            </span>
          </div>
          <DeckSelect options={deckOptions} value={currentDeck.id} onChange={setDeckById} />
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
          onToggleShuffle={toggleShuffle}
          shuffleEnabled={shuffleEnabled}
          onToggleAuto={toggleAuto}
          autoEnabled={autoEnabled}
        />
        <div className="text-center text-muted text-sm mt-1">
          Tap card to flip • Swipe or use arrows to change cards
        </div>
      </div>
    </>
  );
}


