/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * Multilingual card content translations.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 */

import type { Language } from './i18n';

export type MultilingualCard = {
  id: string;
  translations: Record<Language, { front: string; back: string }>;
};

// Card translations - organized by deck
export const CARDS_I18N: MultilingualCard[] = [
  // Cholla – Classic Highlights
  {
    id: 'old-adobe-mission',
    translations: {
      en: {
        front: 'Old Adobe Mission',
        back: "Hand-built by Mexican settlers from 1917 to 1933, this adobe church is one of Old Town's earliest landmarks. Step inside to see the quiet desert chapel.",
      },
      es: {
        front: 'Misión de Adobe Antigua',
        back: 'Construida a mano por colonos mexicanos desde 1917 hasta 1933, esta iglesia de adobe es uno de los hitos más antiguos del Viejo Pueblo. Entra para ver la tranquila capilla del desierto.',
      },
      fr: {
        front: 'Ancienne Mission d\'Adobe',
        back: 'Construite à la main par des colons mexicains de 1917 à 1933, cette église en adobe est l\'un des premiers monuments du Vieux Scottsdale. Entrez pour voir la chapelle tranquille du désert.',
      },
      de: {
        front: 'Alte Adobe-Mission',
        back: 'Von 1917 bis 1933 von mexikanischen Siedlern handgefertigt, ist diese Adobe-Kirche eines der frühesten Wahrzeichen des Alten Scottsdale. Treten Sie ein, um die ruhige Wüstenkapelle zu sehen.',
      },
    },
  },
  {
    id: 'soleri-bridge',
    translations: {
      en: {
        front: 'Soleri Bridge',
        back: "Designed by Italian architect Paolo Soleri and dedicated in 2010, this bridge marks the winter solstice through shadow and light. On December 21st, the sun aligns perfectly with its geometric patterns.",
      },
      es: {
        front: 'Puente Soleri',
        back: 'Diseñado por el arquitecto italiano Paolo Soleri e inaugurado en 2010, este puente marca el solsticio de invierno a través de sombras y luz. El 21 de diciembre, el sol se alinea perfectamente con sus patrones geométricos.',
      },
      fr: {
        front: 'Pont Soleri',
        back: 'Conçu par l\'architecte italien Paolo Soleri et inauguré en 2010, ce pont marque le solstice d\'hiver par l\'ombre et la lumière. Le 21 décembre, le soleil s\'aligne parfaitement avec ses motifs géométriques.',
      },
      de: {
        front: 'Soleri-Brücke',
        back: 'Entworfen vom italienischen Architekten Paolo Soleri und 2010 eingeweiht, markiert diese Brücke die Wintersonnenwende durch Schatten und Licht. Am 21. Dezember richtet sich die Sonne perfekt mit ihren geometrischen Mustern aus.',
      },
    },
  },
  {
    id: 'museum-of-the-west',
    translations: {
      en: {
        front: 'Museum of the West',
        back: "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits.",
      },
      es: {
        front: 'Museo del Oeste',
        back: 'Inaugurado en 2015, esta afiliada del Smithsonian celebra historias del Oeste, nativas y de la frontera. En su interior encontrarás artefactos raros, bronces originales de Frederic Remington y exposiciones rotativas.',
      },
      fr: {
        front: 'Musée de l\'Ouest',
        back: 'Ouvert en 2015, cette filiale du Smithsonian célèbre les histoires de l\'Ouest, autochtones et de la frontière. À l\'intérieur, vous trouverez des artefacts rares, des bronzes originaux de Frederic Remington et des expositions tournantes.',
      },
      de: {
        front: 'Museum des Westens',
        back: 'Eröffnet im Jahr 2015, feiert diese Smithsonian-Affiliate Geschichten des Westens, der Ureinwohner und der Grenze. Im Inneren finden Sie seltene Artefakte, originale Frederic Remington-Bronzen und wechselnde Ausstellungen.',
      },
    },
  },
  {
    id: 'bronze-horse-fountain',
    translations: {
      en: {
        front: 'Bronze Horse Fountain',
        back: "Five bronze Arabian horses, sculpted by Bob Parks in 1989, honor Scottsdale's Arabian horse-breeding heritage. The fountain is one of downtown's most photographed landmarks.",
      },
      es: {
        front: 'Fuente de Caballos de Bronce',
        back: 'Cinco caballos árabes de bronce, esculpidos por Bob Parks en 1989, honran la herencia de cría de caballos árabes de Scottsdale. La fuente es uno de los hitos más fotografiados del centro.',
      },
      fr: {
        front: 'Fontaine des Chevaux de Bronze',
        back: 'Cinq chevaux arabes en bronze, sculptés par Bob Parks en 1989, honorent l\'héritage de l\'élevage de chevaux arabes de Scottsdale. La fontaine est l\'un des monuments les plus photographiés du centre-ville.',
      },
      de: {
        front: 'Bronzepferde-Brunnen',
        back: 'Fünf bronzene arabische Pferde, 1989 von Bob Parks gefertigt, ehren das Erbe der arabischen Pferdezucht in Scottsdale. Der Brunnen ist eines der am meisten fotografierten Wahrzeichen der Innenstadt.',
      },
    },
  },
  {
    id: 'civic-center-park',
    translations: {
      en: {
        front: 'Civic Center Park',
        back: "This 'public backyard' park, opened in 1968, ties together Scottsdale's civic buildings, sculptures, and shaded paths. It hosts the annual Arts Festival and other cultural events.",
      },
      es: {
        front: 'Parque del Centro Cívico',
        back: 'Este parque "patio trasero público", inaugurado en 1968, une los edificios cívicos, esculturas y senderos sombreados de Scottsdale. Alberga el Festival de las Artes anual y otros eventos culturales.',
      },
      fr: {
        front: 'Parc du Centre Civique',
        back: 'Ce parc "arrière-cour publique", ouvert en 1968, relie les bâtiments civiques, sculptures et sentiers ombragés de Scottsdale. Il accueille le Festival des Arts annuel et d\'autres événements culturels.',
      },
      de: {
        front: 'Bürgerzentrum-Park',
        back: 'Dieser "öffentliche Hinterhof"-Park, eröffnet 1968, verbindet die öffentlichen Gebäude, Skulpturen und schattigen Wege von Scottsdale. Er beherbergt das jährliche Kunstfestival und andere kulturelle Veranstaltungen.',
      },
    },
  },
  {
    id: 'marshall-way-arts-district',
    translations: {
      en: {
        front: 'Marshall Way Arts District',
        back: "Home to Scottsdale's weekly ArtWalk, which began in 1975 and is now the longest-running in the country. Over 40 galleries participate in this vibrant art destination.",
      },
      es: {
        front: 'Distrito de las Artes Marshall Way',
        back: 'Hogar del ArtWalk semanal de Scottsdale, que comenzó en 1975 y ahora es el más longevo del país. Más de 40 galerías participan en este vibrante destino artístico.',
      },
      fr: {
        front: 'Quartier des Arts Marshall Way',
        back: 'Foyer de l\'ArtWalk hebdomadaire de Scottsdale, qui a commencé en 1975 et est maintenant le plus ancien du pays. Plus de 40 galeries participent à cette destination artistique animée.',
      },
      de: {
        front: 'Marshall Way Kunstviertel',
        back: 'Heimat des wöchentlichen ArtWalk von Scottsdale, der 1975 begann und heute der am längsten laufende des Landes ist. Über 40 Galerien nehmen an diesem lebendigen Kunstziel teil.',
      },
    },
  },
  {
    id: 'main-street-arts-district',
    translations: {
      en: {
        front: 'Main Street Arts District',
        back: "Dozens of galleries in two historic blocks from the 1960s–70s represent the heart of Scottsdale's art scene. A slow stroll reveals fine Western and Native art.",
      },
      es: {
        front: 'Distrito de las Artes de Main Street',
        back: 'Decenas de galerías en dos bloques históricos de los años 60-70 representan el corazón de la escena artística de Scottsdale. Un paseo lento revela arte occidental y nativo fino.',
      },
      fr: {
        front: 'Quartier des Arts de Main Street',
        back: 'Des dizaines de galeries dans deux blocs historiques des années 1960-1970 représentent le cœur de la scène artistique de Scottsdale. Une promenade lente révèle de l\'art occidental et autochtone raffiné.',
      },
      de: {
        front: 'Main Street Kunstviertel',
        back: 'Dutzende von Galerien in zwei historischen Blöcken aus den 1960er-70er Jahren repräsentieren das Herz der Kunstszene von Scottsdale. Ein langsamer Spaziergang enthüllt feine westliche und einheimische Kunst.',
      },
    },
  },
  // Ocotillo – Sunset & Romance
  {
    id: 'waterfront-arches',
    translations: {
      en: {
        front: 'Waterfront Arches',
        back: "These glowing arches frame Camelback Mountain at sunset, creating one of Old Town's most romantic photo spots. The arches were installed in 2009 as part of the Waterfront development.",
      },
      es: {
        front: 'Arcos del Paseo Marítimo',
        back: 'Estos arcos brillantes enmarcan la Montaña Camelback al atardecer, creando uno de los lugares más románticos para fotos del Viejo Pueblo. Los arcos se instalaron en 2009 como parte del desarrollo del Paseo Marítimo.',
      },
      fr: {
        front: 'Arches du Front de Mer',
        back: 'Ces arches lumineuses encadrent Camelback Mountain au coucher du soleil, créant l\'un des endroits les plus romantiques pour photos du Vieux Scottsdale. Les arches ont été installées en 2009 dans le cadre du développement du Front de Mer.',
      },
      de: {
        front: 'Waterfront-Bögen',
        back: 'Diese leuchtenden Bögen rahmen den Camelback Mountain bei Sonnenuntergang ein und schaffen einen der romantischsten Fotospots des Alten Scottsdale. Die Bögen wurden 2009 im Rahmen der Waterfront-Entwicklung installiert.',
      },
    },
  },
  {
    id: 'marshall-way-murals',
    translations: {
      en: {
        front: 'Marshall Way Murals',
        back: "A colorful corridor of modern desert art that transforms Marshall Way into an open-air gallery. Over 20 murals span multiple blocks, painted by internationally recognized street artists.",
      },
      es: {
        front: 'Murales de Marshall Way',
        back: 'Un corredor colorido de arte moderno del desierto que transforma Marshall Way en una galería al aire libre. Más de 20 murales abarcan múltiples bloques, pintados por artistas callejeros reconocidos internacionalmente.',
      },
      fr: {
        front: 'Muraux de Marshall Way',
        back: 'Un couloir coloré d\'art moderne du désert qui transforme Marshall Way en une galerie en plein air. Plus de 20 muraux s\'étendent sur plusieurs blocs, peints par des artistes de rue reconnus internationalement.',
      },
      de: {
        front: 'Marshall Way Wandgemälde',
        back: 'Ein farbenfroher Korridor moderner Wüstenkunst, der Marshall Way in eine Open-Air-Galerie verwandelt. Über 20 Wandgemälde erstrecken sich über mehrere Blöcke, gemalt von international anerkannten Straßenkünstlern.',
      },
    },
  },
  {
    id: 'soleri-plaza',
    translations: {
      en: {
        front: 'Soleri Plaza',
        back: "A peaceful space designed by architect Paolo Soleri as a meditation on desert time. The plaza features concrete forms that cast ever-changing shadows throughout the day.",
      },
      es: {
        front: 'Plaza Soleri',
        back: 'Un espacio pacífico diseñado por el arquitecto Paolo Soleri como una meditación sobre el tiempo del desierto. La plaza presenta formas de concreto que proyectan sombras siempre cambiantes durante el día.',
      },
      fr: {
        front: 'Place Soleri',
        back: 'Un espace paisible conçu par l\'architecte Paolo Soleri comme une méditation sur le temps du désert. La place présente des formes en béton qui projettent des ombres en constante évolution tout au long de la journée.',
      },
      de: {
        front: 'Soleri-Platz',
        back: 'Ein friedlicher Raum, entworfen vom Architekten Paolo Soleri als Meditation über die Wüstenzeit. Der Platz verfügt über Betonformen, die den ganzen Tag über sich ständig verändernde Schatten werfen.',
      },
    },
  },
  {
    id: 'scottsdale-waterfront',
    translations: {
      en: {
        front: 'Scottsdale Waterfront',
        back: "Soft lighting and canal reflections make this area shine at dusk, creating a sophisticated urban oasis in the desert. The Waterfront was developed in 2008.",
      },
      es: {
        front: 'Paseo Marítimo de Scottsdale',
        back: 'La iluminación suave y los reflejos del canal hacen que esta área brille al anochecer, creando un oasis urbano sofisticado en el desierto. El Paseo Marítimo se desarrolló en 2008.',
      },
      fr: {
        front: 'Front de Mer de Scottsdale',
        back: 'L\'éclairage doux et les reflets du canal font briller cette zone au crépuscule, créant une oasis urbaine sophistiquée dans le désert. Le Front de Mer a été développé en 2008.',
      },
      de: {
        front: 'Scottsdale Waterfront',
        back: 'Sanfte Beleuchtung und Kanalreflexionen lassen dieses Gebiet in der Dämmerung erstrahlen und schaffen eine anspruchsvolle urbane Oase in der Wüste. Das Waterfront wurde 2008 entwickelt.',
      },
    },
  },
  {
    id: 'love-story-lane',
    translations: {
      en: {
        front: 'Love Story Lane',
        back: "This tucked-away alley is a longtime favorite for engagement photos, hidden between two buildings. Easy to miss unless you know where to look.",
      },
      es: {
        front: 'Callejón de la Historia de Amor',
        back: 'Este callejón escondido es un favorito de larga data para fotos de compromiso, oculto entre dos edificios. Fácil de pasar por alto a menos que sepas dónde buscar.',
      },
      fr: {
        front: 'Ruelle de l\'Histoire d\'Amour',
        back: 'Cette ruelle cachée est un favori de longue date pour les photos de fiançailles, cachée entre deux bâtiments. Facile à manquer à moins de savoir où chercher.',
      },
      de: {
        front: 'Love Story Lane',
        back: 'Diese versteckte Gasse ist ein langjähriger Favorit für Verlobungsfotos, versteckt zwischen zwei Gebäuden. Leicht zu übersehen, es sei denn, man weiß, wo man suchen muss.',
      },
    },
  },
  // Prickly Pear – Sweets & Snacks
  {
    id: 'berdenas',
    translations: {
      en: {
        front: "Berdena's",
        back: "Known for small-batch coffee and handmade pastries, Berdena's has become a cult favorite among locals since opening in 2018. The honey lavender latte is a local obsession.",
      },
      es: {
        front: 'Berdena\'s',
        back: 'Conocido por su café de pequeños lotes y pasteles artesanales, Berdena\'s se ha convertido en un favorito de culto entre los locales desde su apertura en 2018. El latte de miel y lavanda es una obsesión local.',
      },
      fr: {
        front: 'Berdena\'s',
        back: 'Connu pour son café en petits lots et ses pâtisseries faites à la main, Berdena\'s est devenu un favori culte parmi les habitants depuis son ouverture en 2018. Le latte miel-lavande est une obsession locale.',
      },
      de: {
        front: 'Berdena\'s',
        back: 'Bekannt für Kaffee in kleinen Chargen und handgemachte Gebäck, ist Berdena\'s seit der Eröffnung 2018 zu einem Kultfavoriten unter den Einheimischen geworden. Der Honig-Lavendel-Latte ist eine lokale Obsession.',
      },
    },
  },
  {
    id: 'arcadia-farms-marketplace',
    translations: {
      en: {
        front: 'Arcadia Farms Marketplace',
        back: "A Scottsdale staple for 30+ years, Arcadia Farms has been serving baked goods and local gourmet items since 1993. The patio is a quiet escape in Old Town.",
      },
      es: {
        front: 'Mercado Arcadia Farms',
        back: 'Un elemento básico de Scottsdale durante más de 30 años, Arcadia Farms ha estado sirviendo productos horneados y artículos gourmet locales desde 1993. El patio es un escape tranquilo en el Viejo Pueblo.',
      },
      fr: {
        front: 'Marché Arcadia Farms',
        back: 'Un pilier de Scottsdale depuis plus de 30 ans, Arcadia Farms sert des produits de boulangerie et des articles gastronomiques locaux depuis 1993. Le patio est une évasion tranquille dans le Vieux Scottsdale.',
      },
      de: {
        front: 'Arcadia Farms Marktplatz',
        back: 'Ein Scottsdale-Grundnahrungsmittel seit über 30 Jahren, Arcadia Farms serviert seit 1993 Backwaren und lokale Gourmet-Artikel. Der Patio ist ein ruhiger Rückzugsort im Alten Scottsdale.',
      },
    },
  },
  {
    id: 'fry-bread-lounge',
    translations: {
      en: {
        front: 'Fry Bread Lounge',
        back: "Honors Indigenous culinary traditions with sweet and savory fry bread, serving a taste of Arizona history. The lounge is owned by a Navajo family with a five-generation recipe.",
      },
      es: {
        front: 'Salón de Pan Frito',
        back: 'Honra las tradiciones culinarias indígenas con pan frito dulce y salado, sirviendo un sabor de la historia de Arizona. El salón es propiedad de una familia navajo con una receta de cinco generaciones.',
      },
      fr: {
        front: 'Salon du Pain Frit',
        back: 'Honore les traditions culinaires autochtones avec du pain frit sucré et salé, servant un goût de l\'histoire de l\'Arizona. Le salon est détenu par une famille navajo avec une recette de cinq générations.',
      },
      de: {
        front: 'Fry Bread Lounge',
        back: 'Ehrt indigene kulinarische Traditionen mit süßem und herzhaftem frittiertem Brot und serviert einen Geschmack der Geschichte Arizonas. Die Lounge gehört einer Navajo-Familie mit einem Fünf-Generationen-Rezept.',
      },
    },
  },
  {
    id: 'sprinkles-atm',
    translations: {
      en: {
        front: 'Sprinkles ATM',
        back: "Arizona's first cupcake ATM, installed in 2014, offers fresh treats 24/7 from a vending machine that looks like a giant pink cupcake. It's become one of Scottsdale's most photographed landmarks.",
      },
      es: {
        front: 'Cajero Automático de Sprinkles',
        back: 'El primer cajero automático de cupcakes de Arizona, instalado en 2014, ofrece golosinas frescas las 24 horas del día desde una máquina expendedora que parece un cupcake rosa gigante. Se ha convertido en uno de los hitos más fotografiados de Scottsdale.',
      },
      fr: {
        front: 'Distributeur Sprinkles',
        back: 'Le premier distributeur de cupcakes de l\'Arizona, installé en 2014, propose des friandises fraîches 24h/24 depuis une machine qui ressemble à un cupcake rose géant. Il est devenu l\'un des monuments les plus photographiés de Scottsdale.',
      },
      de: {
        front: 'Sprinkles Automat',
        back: 'Arizonas erster Cupcake-Automat, installiert 2014, bietet rund um die Uhr frische Leckereien aus einem Automaten, der wie ein riesiger rosa Cupcake aussieht. Er ist zu einem der am meisten fotografierten Wahrzeichen von Scottsdale geworden.',
      },
    },
  },
  {
    id: 'sugar-bowl',
    translations: {
      en: {
        front: 'Sugar Bowl',
        back: "A 1958 ice cream parlor with its original pink décor, Sugar Bowl has been serving generations of locals. The building is one of the few remaining examples of 1950s Googie architecture in Scottsdale.",
      },
      es: {
        front: 'Tazón de Azúcar',
        back: 'Una heladería de 1958 con su decoración rosa original, Sugar Bowl ha estado sirviendo a generaciones de locales. El edificio es uno de los pocos ejemplos restantes de arquitectura Googie de los años 50 en Scottsdale.',
      },
      fr: {
        front: 'Bol de Sucre',
        back: 'Un salon de crème glacée de 1958 avec sa décoration rose d\'origine, Sugar Bowl sert des générations d\'habitants. Le bâtiment est l\'un des rares exemples restants de l\'architecture Googie des années 1950 à Scottsdale.',
      },
      de: {
        front: 'Zuckerschale',
        back: 'Eine Eisdiele von 1958 mit ihrer ursprünglichen rosa Dekoration, Sugar Bowl bedient seit Generationen Einheimische. Das Gebäude ist eines der wenigen verbleibenden Beispiele für Googie-Architektur der 1950er Jahre in Scottsdale.',
      },
    },
  },
  // Continue with remaining cards - Queen of the Desert (Holiday)
  {
    id: 'civic-center-tree-walk',
    translations: {
      en: {
        front: 'Civic Center Tree Walk',
        back: "Dozens of holiday-lit trees turn this park into a glowing promenade during the holiday season. The tradition began in 1985 with just 12 trees and has grown to over 100 today.",
      },
      es: {
        front: 'Paseo de Árboles del Centro Cívico',
        back: 'Decenas de árboles iluminados con luces navideñas convierten este parque en un paseo brillante durante la temporada navideña. La tradición comenzó en 1985 con solo 12 árboles y ha crecido a más de 100 hoy.',
      },
      fr: {
        front: 'Promenade des Arbres du Centre Civique',
        back: 'Des dizaines d\'arbres illuminés pour les fêtes transforment ce parc en une promenade lumineuse pendant la saison des fêtes. La tradition a commencé en 1985 avec seulement 12 arbres et en compte plus de 100 aujourd\'hui.',
      },
      de: {
        front: 'Bürgerzentrum Baumspaziergang',
        back: 'Dutzende von festlich beleuchteten Bäumen verwandeln diesen Park während der Feiertagszeit in eine leuchtende Promenade. Die Tradition begann 1985 mit nur 12 Bäumen und ist heute auf über 100 angewachsen.',
      },
    },
  },
  // Continue with remaining cards - Queen of the Desert (Holiday)
  {
    id: 'civic-center-tree-walk',
    translations: {
      en: {
        front: 'Civic Center Tree Walk',
        back: "Dozens of holiday-lit trees turn this park into a glowing promenade during the holiday season. The tradition began in 1985 with just 12 trees and has grown to over 100 today.",
      },
      es: {
        front: 'Paseo de Árboles del Centro Cívico',
        back: 'Decenas de árboles iluminados con luces navideñas convierten este parque en un paseo brillante durante la temporada navideña. La tradición comenzó en 1985 con solo 12 árboles y ha crecido a más de 100 hoy.',
      },
      fr: {
        front: 'Promenade des Arbres du Centre Civique',
        back: 'Des dizaines d\'arbres illuminés pour les fêtes transforment ce parc en une promenade lumineuse pendant la saison des fêtes. La tradition a commencé en 1985 avec seulement 12 arbres et en compte plus de 100 aujourd\'hui.',
      },
      de: {
        front: 'Bürgerzentrum Baumspaziergang',
        back: 'Dutzende von festlich beleuchteten Bäumen verwandeln diesen Park während der Feiertagszeit in eine leuchtende Promenade. Die Tradition begann 1985 mit nur 12 Bäumen und ist heute auf über 100 angewachsen.',
      },
    },
  },
];

/**
 * Get a card translation by ID and language
 */
export function getCardTranslation(cardId: string, language: Language): { front: string; back: string } | null {
  const card = CARDS_I18N.find(c => c.id === cardId);
  if (!card) return null;
  return card.translations[language] || card.translations.en || null;
}

/**
 * Create a mapping from English front text to card ID
 * This helps match existing cards to their translations
 */
export function createFrontToIdMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const card of CARDS_I18N) {
    const enFront = card.translations.en.front;
    map.set(enFront.toLowerCase().trim(), card.id);
  }
  return map;
}
