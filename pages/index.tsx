/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Main application page for Flash-Cards.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import Head from 'next/head';
import { useCallback, useEffect, useMemo, useRef, useState, lazy, Suspense } from 'react';
import { BRAND } from '@/config/brand';
import { DECKS, getAllDeck, type Card, type Deck } from '@/lib/data';
import { FlashCard } from '@/components/FlashCard';
import { DeckSelect } from '@/components/DeckSelect';
import { LanguageSelect } from '@/components/LanguageSelect';
import { Controls } from '@/components/Controls';
import { getFavoritedCards, isFavorited, toggleFavorite as toggleFavoriteUtil } from '@/lib/favorites';
import { getLanguagePreference, setLanguagePreference, t, type Language } from '@/lib/i18n';

// Lazy load modals for code splitting
const ReviewPrompt = lazy(() => import('@/components/ReviewPrompt').then((mod) => ({ default: mod.ReviewPrompt })));
const InstallPrompt = lazy(() => import('@/components/InstallPrompt').then((mod) => ({ default: mod.InstallPrompt })));

export default function HomePage() {
  const [currentDeck, setCurrentDeck] = useState<Deck>(getAllDeck());
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [narrationEnabled, setNarrationEnabled] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [language, setLanguage] = useState<Language>(getLanguagePreference());
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);

  const hasCards = currentDeck.cards.length > 0;
  const current: Card | null = hasCards ? currentDeck.cards[index] : null;

  const flip = useCallback(() => setFlipped((f) => !f), []);
  
  const next = useCallback(() => {
    if (!hasCards) return;
    setIndex((i) => (i + 1) % currentDeck.cards.length);
    setFlipped(false);
  }, [hasCards, currentDeck.cards.length]);
  const prev = useCallback(() => {
    if (!hasCards) return;
    setIndex((i) => (i - 1 + currentDeck.cards.length) % currentDeck.cards.length);
    setFlipped(false);
  }, [hasCards, currentDeck.cards.length]);

  const setDeckById = useCallback((id: string) => {
      if (id === 'favorites') {
        const allCards = getAllDeck().cards;
        const favoritedCards = getFavoritedCards(allCards);
        setCurrentDeck({ id: 'favorites', label: t('deck.favorites', language), cards: favoritedCards });
      } else {
        const found = id === 'all' ? getAllDeck() : DECKS.find((d) => d.id === id) || getAllDeck();
        setCurrentDeck(found);
      }
      setIndex(0);
      setFlipped(false);
    }, [language]);

  // Load favorites on mount and when they change
  useEffect(() => {
    const loadFavorites = () => {
      if (typeof window !== 'undefined') {
        try {
          const stored = localStorage.getItem('flashcards-favorites');
          if (stored) {
            const keys = JSON.parse(stored) as string[];
            setFavorites(new Set(keys));
          }
        } catch {
          // Ignore errors
        }
      }
    };
    
    loadFavorites();
    
    // Listen for storage changes (from other tabs)
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', loadFavorites);
      return () => window.removeEventListener('storage', loadFavorites);
    }
  }, []);

  const toggleFavorite = useCallback(() => {
    if (!current) return;
    const newFavorited = toggleFavoriteUtil(current);
    
    // Update favorites state
    const newFavorites = new Set(favorites);
    const key = current.front;
    if (newFavorited) {
      newFavorites.add(key);
    } else {
      newFavorites.delete(key);
    }
    setFavorites(newFavorites);
    
    // If we're on favorites deck and unfavorited, remove from current deck
    if (currentDeck.id === 'favorites' && !newFavorited) {
      const updatedCards = currentDeck.cards.filter(c => c.front !== key);
      setCurrentDeck({ ...currentDeck, cards: updatedCards });
      if (index >= updatedCards.length) {
        setIndex(Math.max(0, updatedCards.length - 1));
      }
    }
  }, [current, favorites, currentDeck, index]);

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

    // Stop any current audio/speech
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    // Try pre-generated MP3 first (lazy loaded on demand)
    const slug = slugify(card.front);
    const audio = new Audio(`/audio/${slug}.mp3`);
    // Audio is loaded on-demand, not preloaded to save bandwidth
    audio.preload = 'none';
    audio.onerror = () => {
      // Fallback to improved SpeechSynthesis
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
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
        };
        
        window.speechSynthesis.speak(utter);
      } catch {
        // SpeechSynthesis failed
      }
    };
    audio.onended = () => {
      audioRef.current = null;
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
    setNarrationEnabled((on) => !on);
  }, []);

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


  // Touch gestures for swipe and tap
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    startRef.current = { x: t.clientX, y: t.clientY };
    movedRef.current = false;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const start = startRef.current;
    if (!start) return;
    const t = e.touches[0];
    if (Math.abs(t.clientX - start.x) > 12) {
      movedRef.current = true;
      // Prevent scrolling when swiping horizontally
      if (Math.abs(t.clientX - start.x) > Math.abs(t.clientY - start.y)) {
        e.preventDefault();
      }
    }
  }, []);

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const start = startRef.current;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    } else {
      if (!movedRef.current) flip();
    }
    startRef.current = null;
  }, [next, prev, flip]);

  // Keyboard shortcuts on document
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [next, prev]);


  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    setLanguagePreference(lang);
  }, []);

  const deckOptions = useMemo(
    () => [
      { id: 'all', label: t('deck.all', language) },
      { id: 'favorites', label: t('deck.favorites', language) },
      ...DECKS.map((d) => ({ id: d.id, label: d.label })),
    ],
    [language]
  );

  return (
    <>
      <Head>
        <title>Old Town Scottsdale – Tour Flashcards</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content={BRAND.colors.background} />
        <meta name="description" content="Mobile-optimized flashcards for Old Town Scottsdale tours by Scottsdale Cart Tours" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Scottsdale Tours" />
      </Head>
      <div
        className="min-h-full max-w-[600px] mx-auto px-3 sm:px-4 pt-[max(env(safe-area-inset-top),8px)] pb-[max(calc(10px+env(safe-area-inset-bottom)),16px)] flex flex-col gap-2 sm:gap-3"
        role="application"
        aria-label="Old Town Scottsdale Tour Flashcards"
      >
        <header className="flex flex-col gap-1.5 sm:gap-2 mb-1 sm:mb-2">
          <div className="flex justify-center mb-2">
            <img src="/logo.svg" alt={BRAND.company} className="h-12 sm:h-14 md:h-16" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold m-0 leading-tight">{t('app.title', language)}</h1>
          <div className="flex gap-2 sm:gap-3 items-center justify-between">
            <DeckSelect options={deckOptions} value={currentDeck.id} onChange={setDeckById} />
            <div className="flex gap-2 items-center">
              <LanguageSelect value={language} onChange={handleLanguageChange} />
              <span className="text-sm sm:text-base md:text-lg text-muted whitespace-nowrap" aria-live="polite">
                {hasCards ? `${index + 1} / ${currentDeck.cards.length}` : '0 / 0'}
              </span>
            </div>
          </div>
        </header>

          <div className="flex-1 flex items-center justify-center">
            {current ? (
              <div
                className="w-full touch-pan-y"
                style={{ touchAction: 'pan-y pinch-zoom' }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <FlashCard
                  card={current}
                  flipped={flipped}
                  onFlip={flip}
                  isFavorited={isFavorited(current)}
                  onToggleFavorite={toggleFavorite}
                />
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
          language={language}
        />
          <div className="text-center text-muted text-xs sm:text-sm mt-1 sm:mt-2 px-2">
            <span className="sm:hidden">{t('hint.mobile', language)}</span>
            <span className="hidden sm:inline">{t('hint.desktop', language)}</span>
          </div>
          <footer className="text-center text-muted text-xs mt-2 sm:mt-3 flex flex-col gap-2">
            <div>{t('footer.company', language)}</div>
            <button
              type="button"
              onClick={() => setShowReviewPrompt(true)}
              className="text-accent hover:text-accent-hover transition-colors text-xs underline"
              aria-label={t('button.review', language)}
            >
              {t('button.review', language)}
            </button>
            </footer>
            {showReviewPrompt && (
              <Suspense fallback={null}>
                <ReviewPrompt onClose={() => setShowReviewPrompt(false)} language={language} />
              </Suspense>
            )}
            <Suspense fallback={null}>
              <InstallPrompt />
            </Suspense>
          </div>
        </>
      );
    }


