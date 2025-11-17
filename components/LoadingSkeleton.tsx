/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Loading skeleton component for better perceived performance.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

export function LoadingSkeleton() {
  return (
    <div className="w-full min-h-[50vh] sm:min-h-[46vh] bg-surface rounded-xl sm:rounded-lg p-4 sm:p-5 md:p-6 shadow-overlay animate-pulse">
      <div className="flex flex-col gap-4 h-full">
        {/* Logo skeleton */}
        <div className="flex justify-center">
          <div className="h-10 sm:h-12 md:h-14 w-32 sm:w-40 md:w-48 bg-muted/30 rounded-lg"></div>
        </div>
        
        {/* Label skeleton */}
        <div className="h-4 sm:h-5 w-32 bg-muted/30 rounded mx-auto"></div>
        
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-8 sm:h-10 md:h-12 w-3/4 bg-muted/30 rounded mx-auto"></div>
          <div className="h-8 sm:h-10 md:h-12 w-1/2 bg-muted/30 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

