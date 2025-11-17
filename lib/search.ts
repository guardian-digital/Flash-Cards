/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 *
 * Search utilities for Flash-Cards.
 * Implements fuzzy search across card content.
 *
 * PROPRIETARY - Unauthorized use prohibited.
 */

import type { Card } from './data';

/**
 * Simple fuzzy search - checks if query matches any part of card text (case-insensitive)
 */
export function fuzzySearch(cards: Card[], query: string): Card[] {
  if (!query.trim()) {
    return cards;
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);

  return cards.filter((card) => {
    const frontText = card.front.toLowerCase();
    const backText = card.back.toLowerCase();
    const fullText = `${frontText} ${backText}`;

    // Check if all query words appear in the card text
    return queryWords.every((word) => fullText.includes(word));
  });
}

/**
 * Highlight search matches in text
 * Returns an array of text segments with match information
 */
export function highlightMatches(text: string, query: string): Array<{ text: string; isMatch: boolean }> {
  if (!query.trim()) {
    return [{ text, isMatch: false }];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const normalizedText = text.toLowerCase();
  const segments: Array<{ text: string; isMatch: boolean }> = [];
  let lastIndex = 0;

  // Find all matches
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  const matches: Array<{ start: number; end: number }> = [];

  for (const word of queryWords) {
    let searchIndex = 0;
    while ((searchIndex = normalizedText.indexOf(word, searchIndex)) !== -1) {
      matches.push({ start: searchIndex, end: searchIndex + word.length });
      searchIndex += word.length;
    }
  }

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  // Merge overlapping matches
  const mergedMatches: Array<{ start: number; end: number }> = [];
  for (const match of matches) {
    if (mergedMatches.length === 0) {
      mergedMatches.push(match);
    } else {
      const last = mergedMatches[mergedMatches.length - 1];
      if (match.start <= last.end) {
        last.end = Math.max(last.end, match.end);
      } else {
        mergedMatches.push(match);
      }
    }
  }

  // Build segments
  for (const match of mergedMatches) {
    if (match.start > lastIndex) {
      segments.push({ text: text.substring(lastIndex, match.start), isMatch: false });
    }
    segments.push({ text: text.substring(match.start, match.end), isMatch: true });
    lastIndex = match.end;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.substring(lastIndex), isMatch: false });
  }

  return segments.length > 0 ? segments : [{ text, isMatch: false }];
}

