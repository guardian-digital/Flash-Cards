/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Favorites management utilities.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import type { Card } from './data';

const STORAGE_KEY = 'flashcards-favorites';

/**
 * Get a unique key for a card (based on front text)
 */
export function getCardKey(card: Card): string {
  return card.front;
}

/**
 * Get all favorited card keys from localStorage
 */
export function getFavorites(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return new Set();
    const keys = JSON.parse(stored) as string[];
    return new Set(keys);
  } catch {
    return new Set();
  }
}

/**
 * Check if a card is favorited
 */
export function isFavorited(card: Card): boolean {
  const favorites = getFavorites();
  return favorites.has(getCardKey(card));
}

/**
 * Toggle favorite status for a card
 */
export function toggleFavorite(card: Card): boolean {
  const favorites = getFavorites();
  const key = getCardKey(card);
  
  if (favorites.has(key)) {
    favorites.delete(key);
  } else {
    favorites.add(key);
  }
  
  saveFavorites(favorites);
  return favorites.has(key);
}

/**
 * Save favorites to localStorage
 */
function saveFavorites(favorites: Set<string>): void {
  if (typeof window === 'undefined') return;
  
  try {
    const keys = Array.from(favorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
  } catch (error) {
    console.error('Failed to save favorites:', error);
  }
}

/**
 * Get all favorited cards from a list of cards
 */
export function getFavoritedCards(cards: Card[]): Card[] {
  const favorites = getFavorites();
  return cards.filter(card => favorites.has(getCardKey(card)));
}

