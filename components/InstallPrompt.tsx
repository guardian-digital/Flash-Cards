/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Install prompt component for Progressive Web App.
 * Shows a banner prompting users to install the app to their home screen.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { useEffect, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (typeof window !== 'undefined') {
      // Check if running as standalone (installed)
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstalled(true);
        return;
      }

      // Check if on iOS (different install flow)
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator as any).standalone;

      if (isIOS && !isInStandaloneMode) {
        // Show iOS-specific install instructions
        setShowPrompt(true);
        return;
      }

      // Listen for beforeinstallprompt event (Android/Chrome)
      const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setShowPrompt(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // iOS - show instructions
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setShowPrompt(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Store dismissal in localStorage to avoid showing again for a while
    if (typeof window !== 'undefined') {
      localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    }
  };

  // Don't show if already installed or dismissed recently
  useEffect(() => {
    if (typeof window !== 'undefined' && showPrompt) {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (dismissed) {
        const dismissedTime = parseInt(dismissed, 10);
        const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
        if (daysSinceDismissed < 7) {
          // Don't show again for 7 days
          setShowPrompt(false);
        }
      }
    }
  }, [showPrompt]);

  if (isInstalled || !showPrompt) {
    return null;
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent || '');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-surface border-t border-white/20 shadow-overlay">
      <div className="max-w-[600px] mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-white mb-1">
            Install Scottsdale Tours
          </p>
          <p className="text-xs text-muted">
            {isIOS
              ? 'Tap Share, then "Add to Home Screen"'
              : 'Add to your home screen for offline access'}
          </p>
        </div>
        <div className="flex gap-2">
          {!isIOS && deferredPrompt && (
            <button
              type="button"
              onClick={handleInstallClick}
              className="px-4 py-2 rounded-full bg-accent text-black font-semibold text-sm touch-manipulation active:opacity-80"
            >
              Install
            </button>
          )}
          <button
            type="button"
            onClick={handleDismiss}
            className="px-4 py-2 rounded-full border border-white/20 text-white text-sm touch-manipulation active:opacity-70"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}

