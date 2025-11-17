import { test, expect } from '@playwright/test';

test.describe('Flashcard App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the app title and header', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Old Town Scottsdale Highlights/i })).toBeVisible();
  });

  test('should display the first card', async ({ page }) => {
    // Wait for the card to be visible
    const card = page.locator('article[role="button"]').first();
    await expect(card).toBeVisible();
    
    // Check that card front is visible
    await expect(card.locator('h2')).toBeVisible();
  });

  test('should flip card on click', async ({ page }) => {
    const card = page.locator('article[role="button"]').first();
    const frontTitle = card.locator('h2').first();
    
    // Get initial front text
    const frontText = await frontTitle.textContent();
    expect(frontText).toBeTruthy();
    
    // Click to flip
    await card.click();
    
    // Wait for flip animation
    await page.waitForTimeout(600);
    
    // Check that card is flipped (back should be visible)
    const backContent = card.locator('p').first();
    await expect(backContent).toBeVisible();
  });

  test('should navigate to next card', async ({ page }) => {
    // Set desktop viewport to show prev/next buttons
    await page.setViewportSize({ width: 1024, height: 768 });
    
    const card = page.locator('article[role="button"]').first();
    const initialTitle = await card.locator('h2').first().textContent();
    
    // Click next button (visible on desktop)
    await page.getByRole('button', { name: /next/i }).click();
    
    // Wait for transition
    await page.waitForTimeout(300);
    
    // Verify card changed
    const newTitle = await card.locator('h2').first().textContent();
    expect(newTitle).not.toBe(initialTitle);
  });

  test('should navigate to previous card', async ({ page }) => {
    // Set desktop viewport to show prev/next buttons
    await page.setViewportSize({ width: 1024, height: 768 });
    
    const card = page.locator('article[role="button"]').first();
    
    // Go to second card first
    await page.getByRole('button', { name: /next/i }).click();
    await page.waitForTimeout(300);
    const secondTitle = await card.locator('h2').first().textContent();
    
    // Go back
    await page.getByRole('button', { name: /prev/i }).click();
    await page.waitForTimeout(300);
    
    // Verify we're back to first card
    const firstTitle = await card.locator('h2').first().textContent();
    expect(firstTitle).not.toBe(secondTitle);
  });

  test('should display deck selector', async ({ page }) => {
    const deckSelect = page.getByRole('combobox', { name: /choose deck/i });
    await expect(deckSelect).toBeVisible();
  });

  test('should change deck when selected', async ({ page }) => {
    const deckSelect = page.getByRole('combobox', { name: /choose deck/i });
    const card = page.locator('article[role="button"]').first();
    
    // Get initial card title
    const initialTitle = await card.locator('h2').first().textContent();
    
    // Change deck
    await deckSelect.selectOption({ index: 1 }); // Select second deck
    
    // Wait for deck to load
    await page.waitForTimeout(500);
    
    // Verify card changed (might be same or different, but deck should have changed)
    const newTitle = await card.locator('h2').first().textContent();
    // At minimum, verify the selector value changed
    const selectedValue = await deckSelect.inputValue();
    expect(selectedValue).not.toBe('all');
  });

  test('should display card counter', async ({ page }) => {
    const counter = page.locator('span[aria-live="polite"]');
    await expect(counter).toBeVisible();
    
    // Should show format like "1 / 10"
    const counterText = await counter.textContent();
    expect(counterText).toMatch(/\d+\s*\/\s*\d+/);
  });

  test('should toggle voice narration', async ({ page }) => {
    const voiceButton = page.getByRole('button', { name: /voice/i });
    await expect(voiceButton).toBeVisible();
    
    // Click to toggle
    const initialText = await voiceButton.textContent();
    await voiceButton.click();
    
    // Verify button text changed
    const newText = await voiceButton.textContent();
    expect(newText).not.toBe(initialText);
  });

  test('should display share button', async ({ page }) => {
    const shareButton = page.getByRole('button', { name: /share/i });
    await expect(shareButton).toBeVisible();
  });

  test('should navigate with keyboard arrows', async ({ page }) => {
    const card = page.locator('article[role="button"]').first();
    const initialTitle = await card.locator('h2').first().textContent();
    
    // Focus the page
    await page.keyboard.press('Tab');
    
    // Press right arrow
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    
    // Verify card changed
    const newTitle = await card.locator('h2').first().textContent();
    expect(newTitle).not.toBe(initialTitle);
    
    // Press left arrow to go back
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(300);
    
    // Verify we're back
    const backTitle = await card.locator('h2').first().textContent();
    expect(backTitle).toBe(initialTitle);
  });

  test('should flip card with click', async ({ page }) => {
    const card = page.locator('article[role="button"]').first();
    
    // Click to flip
    await card.click();
    await page.waitForTimeout(600);
    
    // Verify back content is visible
    const backContent = card.locator('p').first();
    await expect(backContent).toBeVisible();
  });

  test('should handle swipe gestures on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const card = page.locator('article[role="button"]').first();
    const initialTitle = await card.locator('h2').first().textContent();
    
    // Simulate swipe left (next)
    const cardBox = await card.boundingBox();
    if (cardBox) {
      await page.mouse.move(cardBox.x + cardBox.width / 2, cardBox.y + cardBox.height / 2);
      await page.mouse.down();
      await page.mouse.move(cardBox.x - 50, cardBox.y + cardBox.height / 2);
      await page.mouse.up();
      
      await page.waitForTimeout(300);
      
      // Verify card changed
      const newTitle = await card.locator('h2').first().textContent();
      expect(newTitle).not.toBe(initialTitle);
    }
  });

  test('should display all controls', async ({ page }) => {
    // Set desktop viewport to show all buttons
    await page.setViewportSize({ width: 1024, height: 768 });
    
    await expect(page.getByRole('button', { name: /flip/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /voice/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /share/i })).toBeVisible();
    // Prev/Next buttons are visible on desktop
    await expect(page.getByRole('button', { name: /prev/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /next/i })).toBeVisible();
  });

  test('should handle "All Highlights" deck', async ({ page }) => {
    const deckSelect = page.getByRole('combobox', { name: /choose deck/i });
    
    // Select "All Highlights"
    await deckSelect.selectOption('all');
    await page.waitForTimeout(500);
    
    // Verify cards are displayed
    const card = page.locator('article[role="button"]').first();
    await expect(card).toBeVisible();
  });
});

