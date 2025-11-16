# Flash Cards - Mini Limo Driver

## Overview

A mobile-first flashcard viewer designed to help mini limo drivers study and memorize important information for their profession. This is a single-page web application with no dependencies, frameworks, or build tools required.

## Features

- **Mobile-Optimized**: Responsive design that works seamlessly on smartphones and tablets
- **Interactive Flashcards**: Tap to flip cards and reveal answers
- **Navigation Controls**: Previous/Next buttons and swipe gestures for easy navigation
- **Shuffle Function**: Randomize card order for varied study sessions
- **Progress Tracking**: Visual progress bar and card counter
- **Keyboard Support**: Arrow keys for navigation, Space/Enter to flip cards
- **Touch Gestures**: Swipe left/right to navigate between cards
- **Offline-Ready**: No internet connection required after initial load

## Card Topics

The flashcards cover essential topics for mini limo drivers:
- Required documentation and permits
- Vehicle capacity and regulations
- Pre-shift safety checks
- Passenger management and safety
- Defensive driving techniques
- Emergency procedures
- Trip documentation
- Accident protocols

## Usage

### Opening the App

Simply open `index.html` in any modern web browser. No installation or setup required.

### Navigation

- **Flip Card**: Tap/click on the card or press Space/Enter
- **Next Card**: Click "Next →" button, swipe left, or press Right arrow key
- **Previous Card**: Click "← Previous" button, swipe right, or press Left arrow key
- **Shuffle**: Click "🔀 Shuffle Cards" button to randomize order

### Mobile Usage

The app is optimized for mobile devices:
- Pinch-to-zoom is disabled for a native app feel
- Touch-friendly button sizes
- Swipe gestures for natural navigation
- Can be added to home screen on iOS/Android

## Technical Details

- **File Type**: Single HTML file
- **Technologies**: HTML5, CSS3, JavaScript (ES6+)
- **Dependencies**: None - completely self-contained
- **File Size**: ~13KB (well under 200KB limit)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## Customization

To add or modify flashcards, edit the `flashCardsData` array in the JavaScript section:

```javascript
const flashCardsData = [
    {
        question: "Your question here",
        answer: "Your answer here"
    },
    // Add more cards...
];
```

## Deployment

Deploy by:
1. Uploading `index.html` to any web server
2. Opening the file directly in a browser
3. Hosting on platforms like GitHub Pages, Netlify, or Vercel

No build process or compilation required.

## License

This project is open source and available for use and modification.
