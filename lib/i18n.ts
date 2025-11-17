/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Internationalization (i18n) system for multi-language support.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

export type Language = 'en' | 'es' | 'fr' | 'de';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
];

export const DEFAULT_LANGUAGE: Language = 'en';

// UI translations
export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    'app.title': 'Old Town Scottsdale Highlights',
    'deck.all': 'All Highlights',
    'deck.favorites': '⭐ Favorites',
    'button.prev': '◀ Prev',
    'button.next': 'Next ▶',
    'button.flip': 'Flip',
    'button.voice': 'Voice',
    'button.voice.on': 'Voice On',
    'button.review': 'Leave a Review',
    'hint.mobile': 'Tap to flip • Swipe left/right to change cards',
    'hint.desktop': 'Tap card to flip • Swipe or use arrows to change cards',
    'footer.company': 'Scottsdale Cart Tours',
    'review.title': 'Love Your Tour?',
    'review.description': 'Help us improve! Scan the QR code or tap the link below to leave a review on Google.',
    'review.scan': 'Scan with your phone camera',
    'review.button': 'Leave a Review on Google',
    'review.footer': 'Your feedback helps us provide better tours!',
    'install.title': 'Install Scottsdale Tours',
    'install.description.ios': 'Tap Share, then "Add to Home Screen"',
    'install.description.android': 'Add to your home screen for offline access',
    'install.button': 'Install',
    'install.later': 'Later',
    'search.label': 'Search cards',
    'search.placeholder': 'Search...',
    'search.clear': 'Clear search',
    'search.noResults': 'No cards found',
    'search.results': '{{count}} result(s)',
  },
  es: {
    'app.title': 'Destacados del Viejo Pueblo de Scottsdale',
    'deck.all': 'Todos los Destacados',
    'deck.favorites': '⭐ Favoritos',
    'button.prev': '◀ Anterior',
    'button.next': 'Siguiente ▶',
    'button.flip': 'Voltear',
    'button.voice': 'Voz',
    'button.voice.on': 'Voz Activada',
    'button.review': 'Dejar una Reseña',
    'hint.mobile': 'Toca para voltear • Desliza izquierda/derecha para cambiar tarjetas',
    'hint.desktop': 'Toca la tarjeta para voltear • Desliza o usa las flechas para cambiar tarjetas',
    'footer.company': 'Scottsdale Cart Tours',
    'review.title': '¿Te Encantó Tu Recorrido?',
    'review.description': '¡Ayúdanos a mejorar! Escanea el código QR o toca el enlace a continuación para dejar una reseña en Google.',
    'review.scan': 'Escanea con la cámara de tu teléfono',
    'review.button': 'Dejar una Reseña en Google',
    'review.footer': '¡Tus comentarios nos ayudan a ofrecer mejores recorridos!',
    'install.title': 'Instalar Scottsdale Tours',
    'install.description.ios': 'Toca Compartir, luego "Agregar a la Pantalla de Inicio"',
    'install.description.android': 'Agrega a tu pantalla de inicio para acceso sin conexión',
    'install.button': 'Instalar',
    'install.later': 'Después',
    'search.label': 'Buscar tarjetas',
    'search.placeholder': 'Buscar...',
    'search.clear': 'Limpiar búsqueda',
    'search.noResults': 'No se encontraron tarjetas',
    'search.results': '{{count}} resultado(s)',
  },
  fr: {
    'app.title': 'Points Forts du Vieux Scottsdale',
    'deck.all': 'Tous les Points Forts',
    'deck.favorites': '⭐ Favoris',
    'button.prev': '◀ Précédent',
    'button.next': 'Suivant ▶',
    'button.flip': 'Retourner',
    'button.voice': 'Voix',
    'button.voice.on': 'Voix Activée',
    'button.review': 'Laisser un Avis',
    'hint.mobile': 'Appuyez pour retourner • Balayez gauche/droite pour changer de cartes',
    'hint.desktop': 'Appuyez sur la carte pour retourner • Balayez ou utilisez les flèches pour changer de cartes',
    'footer.company': 'Scottsdale Cart Tours',
    'review.title': 'Vous Avez Aimé Votre Visite?',
    'review.description': 'Aidez-nous à nous améliorer! Scannez le code QR ou appuyez sur le lien ci-dessous pour laisser un avis sur Google.',
    'review.scan': 'Scannez avec l\'appareil photo de votre téléphone',
    'review.button': 'Laisser un Avis sur Google',
    'review.footer': 'Vos commentaires nous aident à offrir de meilleures visites!',
    'install.title': 'Installer Scottsdale Tours',
    'install.description.ios': 'Appuyez sur Partager, puis "Ajouter à l\'Écran d\'Accueil"',
    'install.description.android': 'Ajoutez à votre écran d\'accueil pour un accès hors ligne',
    'install.button': 'Installer',
    'install.later': 'Plus Tard',
    'search.label': 'Rechercher des cartes',
    'search.placeholder': 'Rechercher...',
    'search.clear': 'Effacer la recherche',
    'search.noResults': 'Aucune carte trouvée',
    'search.results': '{{count}} résultat(s)',
  },
  de: {
    'app.title': 'Highlights des Alten Scottsdale',
    'deck.all': 'Alle Highlights',
    'deck.favorites': '⭐ Favoriten',
    'button.prev': '◀ Zurück',
    'button.next': 'Weiter ▶',
    'button.flip': 'Umdrehen',
    'button.voice': 'Stimme',
    'button.voice.on': 'Stimme An',
    'button.review': 'Eine Bewertung Hinterlassen',
    'hint.mobile': 'Tippen zum Umdrehen • Wischen links/rechts zum Wechseln der Karten',
    'hint.desktop': 'Karte antippen zum Umdrehen • Wischen oder Pfeile zum Wechseln der Karten',
    'footer.company': 'Scottsdale Cart Tours',
    'review.title': 'Hat Ihnen Ihre Tour Gefallen?',
    'review.description': 'Helfen Sie uns, uns zu verbessern! Scannen Sie den QR-Code oder tippen Sie auf den Link unten, um eine Bewertung bei Google zu hinterlassen.',
    'review.scan': 'Mit der Kamera Ihres Telefons scannen',
    'review.button': 'Eine Bewertung bei Google Hinterlassen',
    'review.footer': 'Ihr Feedback hilft uns, bessere Touren anzubieten!',
    'install.title': 'Scottsdale Tours Installieren',
    'install.description.ios': 'Tippen Sie auf Teilen, dann "Zum Home-Bildschirm Hinzufügen"',
    'install.description.android': 'Zum Home-Bildschirm hinzufügen für Offline-Zugriff',
    'install.button': 'Installieren',
    'install.later': 'Später',
    'search.label': 'Karten durchsuchen',
    'search.placeholder': 'Suchen...',
    'search.clear': 'Suche löschen',
    'search.noResults': 'Keine Karten gefunden',
    'search.results': '{{count}} Ergebnis(se)',
  },
};

/**
 * Get translation for a key in the current language
 */
export function t(key: string, lang: Language = DEFAULT_LANGUAGE): string {
  return UI_TRANSLATIONS[lang]?.[key] || UI_TRANSLATIONS[DEFAULT_LANGUAGE][key] || key;
}

/**
 * Get language preference from localStorage
 */
export function getLanguagePreference(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  try {
    const stored = localStorage.getItem('flashcards-language');
    if (stored && LANGUAGES.some(l => l.code === stored)) {
      return stored as Language;
    }
  } catch {
    // Ignore errors
  }
  return DEFAULT_LANGUAGE;
}

/**
 * Save language preference to localStorage
 */
export function setLanguagePreference(lang: Language): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('flashcards-language', lang);
  } catch {
    // Ignore errors
  }
}

