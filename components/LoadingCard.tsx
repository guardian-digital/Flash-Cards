/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 *
 * Loading skeleton component for flashcard.
 * Provides better perceived performance while content loads.
 *
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { BRAND } from '@/config/brand';

export function LoadingCard() {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10]"
      style={{ perspective: '1000px' }}
    >
      <div className="w-full h-full bg-surface rounded-xl sm:rounded-2xl shadow-overlay animate-pulse flex flex-col items-center justify-center p-6 sm:p-8">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white/10 rounded-lg mb-6"></div>
        <div className="w-3/4 h-6 bg-white/10 rounded mb-4"></div>
        <div className="w-full h-4 bg-white/10 rounded mb-2"></div>
        <div className="w-5/6 h-4 bg-white/10 rounded"></div>
      </div>
    </div>
  );
}

