/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 *
 * Search input component for Flash-Cards.
 *
 * PROPRIETARY - Unauthorized use prohibited.
 */

import React from 'react';
import { t, type Language } from '@/lib/i18n';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  language?: Language;
  placeholder?: string;
};

export function SearchInput({ value, onChange, onClear, language = 'en', placeholder }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <input
        type="search"
        aria-label={t('search.label', language) || 'Search cards'}
        placeholder={placeholder || t('search.placeholder', language) || 'Search...'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surface text-white border border-white/20 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base md:text-lg appearance-none touch-manipulation min-h-[44px] placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label={t('search.clear', language) || 'Clear search'}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors touch-manipulation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
      {!value && (
        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
      )}
    </div>
  );
}

