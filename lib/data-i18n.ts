/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Helper functions to integrate multilingual card data with existing data structure.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import type { Card, Deck } from './data';
import type { Language } from './i18n';
import { getCardTranslation, createFrontToIdMap } from './cards-i18n';

// Cache the front-to-ID map
let frontToIdMap: Map<string, string> | null = null;

function getFrontToIdMap(): Map<string, string> {
  if (!frontToIdMap) {
    frontToIdMap = createFrontToIdMap();
  }
  return frontToIdMap;
}

/**
 * Get translated version of a card
 */
export function getTranslatedCard(card: Card, language: Language): Card {
  // If English, return as-is
  if (language === 'en') {
    return card;
  }

  // Try to find translation by matching front text
  const frontKey = card.front.toLowerCase().trim();
  const cardId = getFrontToIdMap().get(frontKey);
  
  if (cardId) {
    const translation = getCardTranslation(cardId, language);
    if (translation) {
      return {
        front: translation.front,
        back: translation.back,
      };
    }
  }

  // Fallback to English if translation not found
  return card;
}

/**
 * Get translated deck
 */
export function getTranslatedDeck(deck: Deck, language: Language): Deck {
  if (language === 'en') {
    return deck;
  }

  return {
    ...deck,
    cards: deck.cards.map(card => getTranslatedCard(card, language)),
  };
}

