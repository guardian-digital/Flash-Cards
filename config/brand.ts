/**
 * BRAND constants used across the Flash-Cards UI.
 * Keep this the single source of truth for colors, typography, and spacing tokens.
 */
export const BRAND = {
  name: 'Flash-Cards',
  colors: {
    background: '#0B0B0C', // near-black
    surface: '#121214',
    muted: '#1C1D20',
    border: '#2A2B2F',
    text: {
      primary: '#FFFFFF',
      secondary: '#C7C9CC',
      muted: '#8A8D91',
      inverse: '#0B0B0C',
    },
    accent: {
      primary: '#B5E3FF', // cool luxury accent
      hover: '#9FD4F7',
      subtle: '#213245',
    },
    danger: '#E5484D',
    success: '#2ECC71',
    warning: '#F4BF50',
  },
  typography: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      display: 'GeneralSans, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
      mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New"',
    },
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    pill: '9999px',
  },
  shadows: {
    subtle: '0 1px 2px rgba(0,0,0,0.2)',
    overlay: '0 8px 24px rgba(0,0,0,0.45)',
  },
} as const;

export type Brand = typeof BRAND;


