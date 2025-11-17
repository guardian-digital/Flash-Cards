/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 *
 * Privacy-friendly analytics for Flash-Cards.
 * Tracks usage patterns without collecting PII.
 *
 * PROPRIETARY - Unauthorized use prohibited.
 */

const ANALYTICS_KEY = 'flashcards-analytics-enabled';
const ANALYTICS_CONSENT_KEY = 'flashcards-analytics-consent';

/**
 * Check if analytics is enabled (user has consented)
 */
export function isAnalyticsEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const consent = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return consent === 'true';
  } catch {
    return false;
  }
}

/**
 * Set analytics consent
 */
export function setAnalyticsConsent(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, String(enabled));
    localStorage.setItem(ANALYTICS_KEY, String(enabled));
  } catch {
    // Ignore errors
  }
}

/**
 * Track a deck selection
 */
export function trackDeckSelection(deckId: string): void {
  if (!isAnalyticsEnabled()) return;
  // In a real implementation, this would send to an analytics endpoint
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Deck selected:', deckId);
  }
}

/**
 * Track a card view
 */
export function trackCardView(deckId: string, cardIndex: number): void {
  if (!isAnalyticsEnabled()) return;
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Card viewed:', { deckId, cardIndex });
  }
}

/**
 * Track narration toggle
 */
export function trackNarrationToggle(enabled: boolean): void {
  if (!isAnalyticsEnabled()) return;
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Narration toggled:', enabled);
  }
}

/**
 * Track search usage
 */
export function trackSearch(query: string, resultCount: number): void {
  if (!isAnalyticsEnabled()) return;
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Search:', { query, resultCount });
  }
}

/**
 * Track favorite toggle
 */
export function trackFavoriteToggle(cardFront: string, isFavorited: boolean): void {
  if (!isAnalyticsEnabled()) return;
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Favorite toggled:', { cardFront, isFavorited });
  }
}

