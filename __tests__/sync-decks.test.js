const fs = require('fs');
const path = require('path');
const vm = require('vm');

describe('sync-decks.js - Data Parsing', () => {
  test('should parse TypeScript DECKS array correctly', () => {
    const testData = `export const DECKS: Deck[] = [
  {
    id: 'test',
    label: 'Test Deck',
    cards: [
      { front: 'Test Card', back: 'Test content' }
    ]
  }
];`;

    // Extract array using same logic as sync script
    const decksDeclMatch = testData.match(/export const DECKS[^=]*=\s*\[/);
    expect(decksDeclMatch).toBeTruthy();
    
    const startPos = decksDeclMatch.index + decksDeclMatch[0].length - 1;
    const functionMatch = testData.match(/\n\s*export function/);
    const beforeFunction = functionMatch 
      ? testData.substring(startPos, functionMatch.index)
      : testData.substring(startPos);
    const endMatch = beforeFunction.match(/\]\s*;[\s\n]*$/);
    
    if (endMatch) {
      const endPos = startPos + endMatch.index;
      const arrayContent = testData.substring(startPos, endPos + 1);
      
      // Parse like sync script does
      const DECKS = vm.runInNewContext(`(${arrayContent})`, {}, { timeout: 5000 });
      
      expect(DECKS).toHaveLength(1);
      expect(DECKS[0].id).toBe('test');
      expect(DECKS[0].label).toBe('Test Deck');
      expect(DECKS[0].cards).toHaveLength(1);
    }
  });

  test('should handle apostrophes in card front text', () => {
    const testData = `export const DECKS: Deck[] = [
  {
    id: 'test',
    label: 'Test',
    cards: [
      { front: "Berdena's", back: 'Test content' }
    ]
  }
];`;

    const decksDeclMatch = testData.match(/export const DECKS[^=]*=\s*\[/);
    const startPos = decksDeclMatch.index + decksDeclMatch[0].length - 1;
    const beforeFunction = testData.substring(startPos);
    const endMatch = beforeFunction.match(/\]\s*;[\s\n]*$/);
    
    if (endMatch) {
      const endPos = startPos + endMatch.index;
      const arrayContent = testData.substring(startPos, endPos + 1);
      
      // Should parse without errors
      expect(() => {
        vm.runInNewContext(`(${arrayContent})`, {}, { timeout: 5000 });
      }).not.toThrow();
    }
  });

  test('should convert DECKS to valid JSON', () => {
    const testDecks = [
      {
        id: 'test',
        label: 'Test Deck',
        cards: [
          { front: 'Card 1', back: 'Content 1' },
          { front: "Card with 'apostrophe'", back: 'Content 2' }
        ]
      }
    ];

    // JSON.stringify should handle apostrophes correctly
    const jsonString = JSON.stringify(testDecks, null, 2);
    expect(jsonString).toContain('Test Deck');
    expect(jsonString).toContain("Card with 'apostrophe'");
    
    // Should be valid JSON
    const parsed = JSON.parse(jsonString);
    expect(parsed).toHaveLength(1);
    expect(parsed[0].cards[1].front).toBe("Card with 'apostrophe'");
  });

  test('should preserve all deck structure properties', () => {
    const testDeck = {
      id: 'test',
      label: 'Test Deck',
      cards: [
        { front: 'Front', back: 'Back' }
      ]
    };

    const jsonString = JSON.stringify([testDeck], null, 2);
    const parsed = JSON.parse(jsonString);
    const deck = parsed[0];

    expect(deck).toHaveProperty('id');
    expect(deck).toHaveProperty('label');
    expect(deck).toHaveProperty('cards');
    expect(deck.id).toBe('test');
    expect(deck.label).toBe('Test Deck');
    expect(Array.isArray(deck.cards)).toBe(true);
    expect(deck.cards[0]).toHaveProperty('front');
    expect(deck.cards[0]).toHaveProperty('back');
  });
});

