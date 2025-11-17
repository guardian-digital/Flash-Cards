# Flash-Cards — Product Roadmap

## Current Status (v0.1.0)

### ✅ Completed Core Features
- [x] Card flipping (tap/click)
- [x] Prev/Next navigation (buttons, keyboard, swipe gestures)
- [x] Deck selector (multiple curated decks + "All Highlights")
- [x] Voice narration (ElevenLabs MP3s + SpeechSynthesis fallback)
- [x] Dual deployment (Next.js app + single-file GitHub Pages)
- [x] Mobile optimization (responsive, touch-optimized)
- [x] Branding (Scottsdale Cart Tours logo and styling)
- [x] Security scanning (Dependabot, CodeQL, Gitleaks, TruffleHog)
- [x] Testing infrastructure (Jest unit tests, Playwright E2E tests)
- [x] Agent onboarding system

### ✅ Technical Infrastructure
- [x] TypeScript + React (Next.js) + Tailwind CSS
- [x] Brand token system (`config/brand.ts`)
- [x] Audio generation automation
- [x] Data synchronization (`lib/data.ts` ↔ `app.js`)
- [x] CI/CD workflows (GitHub Actions)
- [x] Documentation system

---

## Next Steps — Phase 1: Enhancement (v0.2.0)

### 1. Progressive Web App (PWA) ⭐ **High Priority**
**Goal**: Enable offline functionality and app-like experience

**Tasks**:
- [ ] Add service worker for offline caching
- [ ] Create `manifest.json` with app metadata
- [ ] Implement cache strategy for audio files
- [ ] Add "Add to Home Screen" prompt
- [ ] Test offline functionality on iOS/Android
- [ ] Update deployment to serve PWA assets

**Benefits**:
- Works offline (critical for tour guides)
- Faster load times (cached assets)
- App-like experience on mobile devices
- Better engagement metrics

**Estimated Effort**: 2-3 days

---

### 2. Favorites/Bookmarks System ⭐ **High Priority**
**Goal**: Allow users to save favorite cards for quick access

**Tasks**:
- [ ] Add "Favorite" button to card UI
- [ ] Implement localStorage for favorites persistence
- [ ] Create "Favorites" deck option
- [ ] Add visual indicator (star/icon) on favorited cards
- [ ] Sync favorites across sessions
- [ ] Update both Next.js and single-file versions

**Benefits**:
- Personalization for tour guides
- Quick access to frequently used cards
- Enhanced user experience

**Estimated Effort**: 1-2 days

---

### 3. Multi-Language Support 🌍 **Medium Priority**
**Goal**: Support multiple languages for international tourists

**Tasks**:
- [ ] Design language selector UI
- [ ] Create translation system (i18n)
- [ ] Translate all card content (Spanish, French, German, etc.)
- [ ] Update audio generation for multiple languages
- [ ] Store language preference in localStorage
- [ ] Test with different language scripts

**Benefits**:
- Broader audience reach
- Better experience for international tourists
- Competitive advantage

**Estimated Effort**: 3-5 days (depending on number of languages)

---

## Phase 2: Advanced Features (v0.3.0)

### 4. Analytics & Usage Tracking 📊
**Goal**: Understand how the app is being used

**Tasks**:
- [ ] Integrate privacy-friendly analytics (Plausible/Posthog)
- [ ] Track: deck selection, card views, narration usage
- [ ] Create dashboard for usage insights
- [ ] Respect user privacy (opt-in, no PII)

**Benefits**:
- Data-driven improvements
- Understand popular decks/cards
- Identify pain points

**Estimated Effort**: 1-2 days

---

### 5. Search Functionality 🔍
**Goal**: Allow users to search for specific cards

**Tasks**:
- [ ] Add search input to header
- [ ] Implement fuzzy search across card content
- [ ] Highlight search matches
- [ ] Navigate to search results
- [ ] Mobile-friendly search UI

**Benefits**:
- Quick access to specific information
- Better UX for large decks
- Professional feel

**Estimated Effort**: 1-2 days

---

### 6. Card Sharing 📤
**Goal**: Allow sharing individual cards via link/QR code

**Tasks**:
- [ ] Generate shareable URLs for cards
- [ ] Create QR code generation
- [ ] Deep linking to specific cards
- [ ] Social sharing buttons (optional)

**Benefits**:
- Viral growth potential
- Easy reference for tourists
- Marketing tool

**Estimated Effort**: 2-3 days

---

## Phase 3: Content & Expansion (v0.4.0)

### 7. Additional Decks 📚
**Goal**: Expand content coverage

**Tasks**:
- [ ] Research new locations/attractions
- [ ] Create new deck categories
- [ ] Generate audio for new cards
- [ ] Update data structure if needed

**Potential Decks**:
- Architecture & Design
- Nightlife & Entertainment
- Shopping & Markets
- Parks & Recreation
- Historical Timeline

**Estimated Effort**: Ongoing (content-dependent)

---

### 8. Image Support 🖼️
**Goal**: Add images to cards for visual context

**Tasks**:
- [ ] Design image display in card UI
- [ ] Optimize images (WebP, lazy loading)
- [ ] Add image sources to card data
- [ ] Handle image loading states
- [ ] Update audio generation to mention images

**Benefits**:
- Enhanced visual appeal
- Better context for locations
- More engaging experience

**Estimated Effort**: 2-3 days

---

## Phase 4: Performance & Polish (v0.5.0)

### 9. Performance Optimization ⚡
**Goal**: Improve load times and responsiveness

**Tasks**:
- [ ] Implement code splitting
- [ ] Optimize bundle size
- [ ] Lazy load audio files
- [ ] Add loading skeletons
- [ ] Optimize images (if added)
- [ ] Lighthouse score > 90

**Benefits**:
- Faster load times
- Better mobile experience
- Improved SEO

**Estimated Effort**: 2-3 days

---

### 10. Accessibility Enhancements ♿
**Goal**: Ensure WCAG 2.1 AA compliance

**Tasks**:
- [ ] Comprehensive screen reader testing
- [ ] Keyboard navigation improvements
- [ ] Color contrast verification
- [ ] Focus management enhancements
- [ ] ARIA label improvements
- [ ] Accessibility audit

**Benefits**:
- Legal compliance
- Broader user base
- Better UX for all users

**Estimated Effort**: 2-3 days

---

## Phase 5: Advanced Features (v1.0.0)

### 11. Spaced Repetition Algorithm 🧠
**Goal**: Help users learn and remember information

**Tasks**:
- [ ] Implement spaced repetition algorithm
- [ ] Track user performance
- [ ] Adjust card frequency based on recall
- [ ] Add "Study Mode" vs "Browse Mode"

**Benefits**:
- Educational value
- Better retention
- Unique feature

**Estimated Effort**: 3-5 days

---

### 12. User Accounts & Sync ☁️
**Goal**: Sync favorites and preferences across devices

**Tasks**:
- [ ] Design authentication system
- [ ] Backend API for sync (minimal)
- [ ] Cloud storage for favorites
- [ ] Multi-device sync

**Benefits**:
- Seamless experience
- Data persistence
- Professional feel

**Estimated Effort**: 5-7 days (requires backend)

---

## Priority Recommendations

### Immediate Next Steps (This Month)
1. **PWA Implementation** — Critical for offline use
2. **Favorites System** — High user value, low effort
3. **Performance Optimization** — Always valuable

### Short-Term (Next Quarter)
4. **Multi-Language Support** — Expands market
5. **Search Functionality** — Improves UX
6. **Analytics** — Data-driven decisions

### Long-Term (6+ Months)
7. **Spaced Repetition** — Unique educational feature
8. **User Accounts** — Advanced feature set
9. **Image Support** — Enhanced visual experience

---

## Success Metrics

### Key Performance Indicators (KPIs)
- **Load Time**: < 2 seconds on 3G
- **Lighthouse Score**: > 90 (Performance, Accessibility, Best Practices)
- **Offline Functionality**: 100% core features available offline
- **User Engagement**: Track card views, deck selections, narration usage
- **Error Rate**: < 0.1% JavaScript errors

### User Feedback
- Collect feedback from tour guides
- Monitor GitHub Issues
- Track analytics for pain points

---

## Notes

- **Dual Deployment**: All features must work in both Next.js and single-file versions
- **Mobile-First**: All features must be mobile-optimized
- **Accessibility**: All features must meet WCAG 2.1 AA standards
- **Brand Consistency**: All UI must use `BRAND` tokens from `config/brand.ts`
- **Testing**: All features must include unit and E2E tests

---

**Last Updated**: 2025-11-17  
**Next Review**: After Phase 1 completion

