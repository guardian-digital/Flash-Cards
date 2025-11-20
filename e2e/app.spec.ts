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
    
    // Check that card front is visible (use first() to handle both front and back h2 elements)
    await expect(card.locator('h2').first()).toBeVisible();
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
    const initialTitle = await card.locator('h2').first().textContent();
    
    // Go to second card first
    await page.getByRole('button', { name: /next/i }).first().click();
    await page.waitForTimeout(300);
    const secondTitle = await card.locator('h2').first().textContent();
    expect(secondTitle).not.toBe(initialTitle);
    
    // Go back
    await page.getByRole('button', { name: /prev/i }).first().click();
    await page.waitForTimeout(300);
    
    // Verify we're back to first card
    const firstTitle = await card.locator('h2').first().textContent();
    expect(firstTitle).toBe(initialTitle);
  });

  test('should display deck selector', async ({ page }) => {
    const deckSelect = page.getByRole('combobox', { name: /choose deck/i });
    await expect(deckSelect).toBeVisible();
  });

  test('should change deck when selected', async ({ page }) => {
    const deckSelect = page.getByRole('combobox', { name: /choose deck/i });
    
    // Wait for initial deck to load
    await expect(page.locator('article[role="button"]').first()).toBeVisible();
    
    // Get all available options
    const options = await deckSelect.locator('option').all();
    if (options.length < 2) {
      test.skip(); // Skip if not enough decks
      return;
    }
    
    // Change deck - select by value instead of index for reliability
    const secondDeckValue = await deckSelect.locator('option').nth(1).getAttribute('value');
    if (secondDeckValue) {
      await deckSelect.selectOption(secondDeckValue);
      
      // Wait for deck to load - wait for card to be visible
      await expect(page.locator('article[role="button"]').first()).toBeVisible({ timeout: 10000 });
      
      // Verify the selector value changed
      const selectedValue = await deckSelect.inputValue();
      expect(selectedValue).not.toBe('all');
      expect(selectedValue).toBe(secondDeckValue);
    }
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
    
    // Focus the card or page
    await card.focus();
    
    // Press right arrow
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    
    // Verify card changed
    const newTitle = await card.locator('h2').first().textContent();
    expect(newTitle).not.toBe(initialTitle);
    
    // Press left arrow to go back
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(500);
    
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
    await expect(card).toBeVisible();
    const initialTitle = await card.locator('h2').first().textContent();
    
    // Simulate touch swipe left (next) using mouse events
    // Playwright mouse events simulate touch on mobile viewports
    const cardBox = await card.boundingBox();
    if (!cardBox) {
      test.skip();
      return;
    }
    
    const startX = cardBox.x + cardBox.width / 2;
    const startY = cardBox.y + cardBox.height / 2;
    const endX = startX - 100; // Swipe left 100px (exceeds 30px threshold)
    
    // Simulate touch swipe with mouse events (Playwright converts to touch on mobile)
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(endX, startY, { steps: 10 });
    await page.mouse.up();
    
    // Wait for navigation to complete
    await page.waitForTimeout(800);
    
    // Verify card changed - wait for the title to change
    await expect(card.locator('h2').first()).not.toHaveText(initialTitle!, { timeout: 5000 });
    const newTitle = await card.locator('h2').first().textContent();
    expect(newTitle).not.toBe(initialTitle);
  });

  test('should display all controls', async ({ page }) => {
    // Set desktop viewport to show all buttons
    await page.setViewportSize({ width: 1024, height: 768 });
    
    // Use more specific selectors to avoid conflicts with card flip button
    // The Flip button has aria-label "Flip card", so match that
    await expect(page.getByRole('button', { name: /flip card/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /voice/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /share/i })).toBeVisible();
    // Prev/Next buttons are visible on desktop
    await expect(page.getByRole('button', { name: /prev/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /next/i }).first()).toBeVisible();
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

