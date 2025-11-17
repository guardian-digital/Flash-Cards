import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // Register service worker for PWA
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration.scope);
          })
          .catch((error) => {
            console.warn('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return <Component {...pageProps} />;
}


