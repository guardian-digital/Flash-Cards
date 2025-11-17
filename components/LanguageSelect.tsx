/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Language selector component for multi-language support.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import { LANGUAGES, type Language } from '@/lib/i18n';

type LanguageSelectProps = {
  value: Language;
  onChange: (lang: Language) => void;
};

export function LanguageSelect({ value, onChange }: LanguageSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Language)}
      aria-label="Select language"
      className={[
        'flex-1 sm:flex-none min-w-[140px]',
        'bg-surface border border-white/20 rounded-xl sm:rounded-lg',
        'px-3 sm:px-4 py-2 sm:py-2.5',
        'text-sm sm:text-base text-white',
        'cursor-pointer appearance-none',
        'focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent',
        'transition-all duration-200',
        'touch-manipulation',
      ].join(' ')}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23f5f5f7' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 12px center',
        paddingRight: '36px',
      }}
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code} className="bg-surface text-white">
          {lang.flag} {lang.nativeName}
        </option>
      ))}
    </select>
  );
}

