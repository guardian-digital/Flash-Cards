import type { Config } from 'tailwindcss';
import { BRAND } from './config/brand';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: BRAND.colors.background,
        surface: BRAND.colors.surface,
        muted: BRAND.colors.muted,
        border: BRAND.colors.border,
        text: BRAND.colors.text.primary,
        accent: {
          DEFAULT: BRAND.colors.accent.primary,
          hover: BRAND.colors.accent.hover,
          subtle: BRAND.colors.accent.subtle,
        },
      },
      fontFamily: {
        sans: [BRAND.typography.fontFamily.sans],
        display: [BRAND.typography.fontFamily.display],
        mono: [BRAND.typography.fontFamily.mono],
      },
      borderRadius: {
        sm: BRAND.radii.sm,
        md: BRAND.radii.md,
        lg: BRAND.radii.lg,
        full: BRAND.radii.pill,
      },
      boxShadow: {
        subtle: BRAND.shadows.subtle,
        overlay: BRAND.shadows.overlay,
      },
    },
  },
  plugins: [],
};

export default config;


