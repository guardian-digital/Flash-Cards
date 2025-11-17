/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 *
 * Share utilities for Flash-Cards.
 * Generates shareable URLs and handles deep linking.
 *
 * PROPRIETARY - Unauthorized use prohibited.
 */

/**
 * Generate a shareable URL for a specific card
 */
export function generateShareUrl(deckId: string, cardIndex: number, language?: string): string {
  if (typeof window === 'undefined') {
    return '';
  }
  
  const baseUrl = window.location.origin + window.location.pathname;
  const params = new URLSearchParams();
  params.set('deck', deckId);
  params.set('card', String(cardIndex));
  if (language) {
    params.set('lang', language);
  }
  
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Parse share URL parameters
 */
export function parseShareUrl(): { deckId: string | null; cardIndex: number | null; language: string | null } {
  if (typeof window === 'undefined') {
    return { deckId: null, cardIndex: null, language: null };
  }
  
  const params = new URLSearchParams(window.location.search);
  const deckId = params.get('deck');
  const cardIndexParam = params.get('card');
  const language = params.get('lang');
  
  const cardIndex = cardIndexParam ? parseInt(cardIndexParam, 10) : null;
  
  return {
    deckId,
    cardIndex: cardIndex !== null && !isNaN(cardIndex) ? cardIndex : null,
    language,
  };
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined' || !navigator.clipboard) {
    // Fallback for older browsers
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    } catch {
      return false;
    }
  }
  
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

