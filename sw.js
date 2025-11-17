/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Service Worker for Progressive Web App functionality.
 * Handles offline caching and asset management.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

const CACHE_NAME = 'scottsdale-tours-v1';
const RUNTIME_CACHE = 'scottsdale-tours-runtime-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/logo.svg',
  '/manifest.json',
  '/index.html',
  '/app.js',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Service Worker: Some static assets failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map((name) => caches.delete(name))
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests (except for audio files we control)
  if (url.origin !== location.origin && !url.pathname.startsWith('/audio/')) {
    return;
  }

  // Strategy: Cache First for static assets, Network First for audio
  if (request.destination === 'audio' || url.pathname.startsWith('/audio/')) {
    // Audio files: Network first, then cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Return a placeholder or error response
            return new Response('Audio unavailable offline', {
              status: 503,
              statusText: 'Service Unavailable',
            });
          });
        })
    );
  } else {
    // Static assets: Cache first, then network
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
  }
});

// Message handler for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_AUDIO') {
    const audioUrl = event.data.url;
    if (audioUrl) {
      caches.open(RUNTIME_CACHE).then((cache) => {
        fetch(audioUrl)
          .then((response) => {
            if (response.ok) {
              cache.put(audioUrl, response);
            }
          })
          .catch((err) => {
            console.warn('Failed to cache audio:', audioUrl, err);
          });
      });
    }
  }
});

