# Flash-Cards — Performance Metrics

**Last Updated**: 2025-11-20

## Performance Goals

- **Lighthouse Score**: > 90 (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds on 3G
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1

## Implemented Optimizations

### Code Splitting
- ✅ Lazy loading for modals (ReviewPrompt, InstallPrompt, ShareModal)
- ✅ Webpack code splitting with separate chunks for React, common code, and lib utilities
- ✅ Runtime chunk optimization

### Bundle Optimization
- ✅ Deterministic module IDs for better caching
- ✅ Optimized chunk sizes (minSize: 20000, maxInitialRequests: 25)
- ✅ Separate vendor chunks for React

### Asset Optimization
- ✅ Image optimization (AVIF/WebP formats)
- ✅ Audio files cached with long-term cache headers (1 year)
- ✅ Service worker for offline caching
- ✅ Resource hints (preconnect, dns-prefetch, preload)

### Performance Features
- ✅ Loading skeletons for perceived performance
- ✅ Lazy loading of audio files
- ✅ Compressed responses (gzip/brotli)
- ✅ Optimized CSS (experimental.optimizeCss ready when critters is added)

## Monitoring

### Manual Lighthouse Audit
Run Lighthouse audit manually:
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Performance", "Accessibility", "Best Practices", "SEO"
4. Run audit on production build

### Build Analysis
```bash
# Analyze bundle size
pnpm analyze

# Build and check output
pnpm build
```

## Next Steps

- [ ] Set up automated Lighthouse CI
- [ ] Add performance monitoring (Web Vitals)
- [ ] Optimize font loading (currently using Inter)
- [ ] Consider adding critters for CSS optimization
- [ ] Monitor bundle size over time

## Current Bundle Sizes

*Note: Run `pnpm build` and check `.next/analyze/` for detailed bundle analysis*

### Main Chunks
- `_app.js`: Main application bundle
- `index.js`: Home page bundle
- `react.js`: React vendor chunk
- `common.js`: Shared code chunk
- `lib.js`: Library utilities chunk

### Estimated Sizes (from last build)
- Total initial JS: ~150-200KB (gzipped)
- Total CSS: ~20-30KB (gzipped)
- Audio files: ~2-5MB total (cached, loaded on demand)

## Performance Budget

- **Initial JS**: < 200KB (gzipped)
- **Initial CSS**: < 30KB (gzipped)
- **Total Page Weight**: < 300KB (gzipped, excluding audio)
- **Lighthouse Performance**: > 90

