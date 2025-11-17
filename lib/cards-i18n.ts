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
      back: 'Des dizaines d\'arbres illuminés pour les fêtes transforment ce parc en une promenade lumineuse pendant la saison des fêtes. La tradition a commencé en 1985 avec seulement 12 arbres et en compte plus de 100 aujourd\'hui.',
    },
    de: {
      front: 'Bürgerzentrum Baumspaziergang',
      back: 'Dutzende von festlich beleuchteten Bäumen verwandeln diesen Park während der Feiertagszeit in eine leuchtende Promenade. Die Tradition begann 1985 mit nur 12 Bäumen und ist heute auf über 100 angewachsen.',
    },
  },
},
{
  id: 'old-town-holiday-arch',
  translations: {
    en: {
      front: 'Old Town Holiday Arch',
      back: "A festive installation welcoming visitors each winter, the Holiday Arch has become one of Old Town's most iconic seasonal landmarks. Standing 20 feet tall, it's made of thousands of LED lights.",
    },
    es: {
      front: 'Arco Navideño del Viejo Pueblo',
      back: 'Una instalación festiva que da la bienvenida a los visitantes cada invierno, el Arco Navideño se ha convertido en uno de los hitos estacionales más icónicos del Viejo Pueblo. Con 20 pies de altura, está hecho de miles de luces LED.',
    },
    fr: {
      front: 'Arche des Fêtes du Vieux Scottsdale',
      back: 'Une installation festive accueillant les visiteurs chaque hiver, l\'Arche des Fêtes est devenue l\'un des monuments saisonniers les plus emblématiques du Vieux Scottsdale. Haute de 20 pieds, elle est faite de milliers de lumières LED.',
    },
    de: {
      front: 'Altes Scottsdale Feiertagsbogen',
      back: 'Eine festliche Installation, die Besucher jeden Winter begrüßt, ist der Feiertagsbogen zu einem der ikonischsten saisonalen Wahrzeichen des Alten Scottsdale geworden. Mit 20 Fuß Höhe besteht er aus Tausenden von LED-Lichtern.',
    },
  },
},
{
  id: 'soleri-bridge-lights',
  translations: {
    en: {
      front: 'Soleri Bridge Lights',
      back: "Holiday lighting casts warm shadows across the plaza during the winter season, transforming Paolo Soleri's architectural masterpiece into a festive gathering place. The installation was added in 2012.",
    },
    es: {
      front: 'Luces del Puente Soleri',
      back: 'La iluminación navideña proyecta sombras cálidas en la plaza durante la temporada de invierno, transformando la obra maestra arquitectónica de Paolo Soleri en un lugar de reunión festivo. La instalación se agregó en 2012.',
    },
    fr: {
      front: 'Lumières du Pont Soleri',
      back: 'L\'éclairage des fêtes projette des ombres chaudes sur la place pendant la saison hivernale, transformant le chef-d\'œuvre architectural de Paolo Soleri en un lieu de rassemblement festif. L\'installation a été ajoutée en 2012.',
    },
    de: {
      front: 'Soleri-Brücke Lichter',
      back: 'Feiertagsbeleuchtung wirft warme Schatten über den Platz während der Wintersaison und verwandelt Paolo Soleris architektonisches Meisterwerk in einen festlichen Versammlungsort. Die Installation wurde 2012 hinzugefügt.',
    },
  },
},
{
  id: 'museum-courtyard-decor',
  translations: {
    en: {
      front: 'Museum Courtyard Decor',
      back: "Subtle desert-themed wreaths and lanterns bring Western charm to the Museum of the West courtyard during the holiday season. The adobe walls glow beautifully at dusk when the lanterns are lit.",
    },
    es: {
      front: 'Decoración del Patio del Museo',
      back: 'Coronas y linternas con temas del desierto traen encanto occidental al patio del Museo del Oeste durante la temporada navideña. Las paredes de adobe brillan bellamente al anochecer cuando se encienden las linternas.',
    },
    fr: {
      front: 'Décoration de la Cour du Musée',
      back: 'Des couronnes et des lanternes aux thèmes du désert apportent un charme occidental à la cour du Musée de l\'Ouest pendant la saison des fêtes. Les murs en adobe brillent magnifiquement au crépuscule lorsque les lanternes sont allumées.',
    },
    de: {
      front: 'Museumshof Dekoration',
      back: 'Subtile wüstenthematische Kränze und Laternen bringen westlichen Charme in den Hof des Museums des Westens während der Feiertagszeit. Die Adobe-Wände leuchten wunderschön in der Dämmerung, wenn die Laternen angezündet sind.',
    },
  },
},
{
  id: 'warm-beverage-stop',
  translations: {
    en: {
      front: 'Warm Beverage Stop',
      back: "Local pop-up vendors serve seasonal cocoa and spiced drinks during the holiday season, creating a cozy way to enjoy the cooler desert nights. The pop-ups operate from late November through early January.",
    },
    es: {
      front: 'Parada de Bebidas Calientes',
      back: 'Los vendedores pop-up locales sirven cacao estacional y bebidas especiadas durante la temporada navideña, creando una forma acogedora de disfrutar las noches más frescas del desierto. Los pop-ups operan desde finales de noviembre hasta principios de enero.',
    },
    fr: {
      front: 'Arrêt des Boissons Chaudes',
      back: 'Les vendeurs éphémères locaux servent du cacao de saison et des boissons épicées pendant la saison des fêtes, créant une façon chaleureuse de profiter des nuits plus fraîches du désert. Les stands éphémères fonctionnent de fin novembre à début janvier.',
    },
    de: {
      front: 'Warme Getränke Haltestelle',
      back: 'Lokale Pop-up-Verkäufer servieren saisonale Kakao- und Gewürzgetränke während der Feiertagszeit und schaffen eine gemütliche Art, die kühleren Wüstennächte zu genießen. Die Pop-ups sind von Ende November bis Anfang Januar geöffnet.',
    },
  },
},
// Senita – Taco Trail
{
  id: 'americas-taco-shop',
  translations: {
    en: {
      front: "America's Taco Shop",
      back: "Famous for authentic Sonoran-style carne asada, marinated 24 hours using a cherished family recipe from Hermosillo, Mexico. The restaurant was founded in 2010 by the Rodriguez family.",
    },
    es: {
      front: 'America\'s Taco Shop',
      back: 'Famoso por su auténtica carne asada estilo Sonora, marinada durante 24 horas usando una receta familiar apreciada de Hermosillo, México. El restaurante fue fundado en 2010 por la familia Rodríguez.',
    },
    fr: {
      front: 'America\'s Taco Shop',
      back: 'Célèbre pour son carne asada authentique de style Sonora, mariné pendant 24 heures selon une recette familiale chère d\'Hermosillo, au Mexique. Le restaurant a été fondé en 2010 par la famille Rodriguez.',
    },
    de: {
      front: 'America\'s Taco Shop',
      back: 'Berühmt für authentisches Sonora-Style Carne Asada, 24 Stunden mariniert mit einem geschätzten Familienrezept aus Hermosillo, Mexiko. Das Restaurant wurde 2010 von der Familie Rodriguez gegründet.',
    },
  },
},
{
  id: 'velvet-taco',
  translations: {
    en: {
      front: 'Velvet Taco',
      back: "Craft tacos inspired by global flavors—from Korean BBQ to Nashville hot chicken—offer a modern twist on classic street food. The restaurant opened in 2018 and has become a Scottsdale favorite.",
    },
    es: {
      front: 'Velvet Taco',
      back: 'Tacos artesanales inspirados en sabores globales, desde BBQ coreano hasta pollo picante de Nashville, ofrecen un giro moderno a la comida callejera clásica. El restaurante abrió en 2018 y se ha convertido en un favorito de Scottsdale.',
    },
    fr: {
      front: 'Velvet Taco',
      back: 'Des tacos artisanaux inspirés par des saveurs mondiales—du BBQ coréen au poulet épicé de Nashville—offrent une touche moderne à la cuisine de rue classique. Le restaurant a ouvert en 2018 et est devenu un favori de Scottsdale.',
    },
    de: {
      front: 'Velvet Taco',
      back: 'Handwerklich hergestellte Tacos, inspiriert von globalen Aromen—von koreanischem BBQ bis Nashville Hot Chicken—bieten eine moderne Wendung zu klassischem Street Food. Das Restaurant öffnete 2018 und ist zu einem Scottsdale-Favoriten geworden.',
    },
  },
},
{
  id: 'mesquite-fresh-street-mex',
  translations: {
    en: {
      front: 'Mesquite Fresh Street Mex',
      back: "Mesquite-grilled meats give everything a deep, smoky flavor at this Scottsdale original that locals swear by. The restaurant was founded in 2005 by a local chef.",
    },
    es: {
      front: 'Mesquite Fresh Street Mex',
      back: 'Las carnes a la parrilla de mezquite dan a todo un sabor profundo y ahumado en este original de Scottsdale del que los locales juran. El restaurante fue fundado en 2005 por un chef local.',
    },
    fr: {
      front: 'Mesquite Fresh Street Mex',
      back: 'Les viandes grillées au mesquite donnent une saveur profonde et fumée à tout dans cet original de Scottsdale que les habitants adorent. Le restaurant a été fondé en 2005 par un chef local.',
    },
    de: {
      front: 'Mesquite Fresh Street Mex',
      back: 'Mesquite-gegrilltes Fleisch verleiht allem einen tiefen, rauchigen Geschmack in diesem Scottsdale-Original, auf das Einheimische schwören. Das Restaurant wurde 2005 von einem lokalen Koch gegründet.',
    },
  },
},
{
  id: 'fry-bread-stop',
  translations: {
    en: {
      front: 'Fry Bread Stop',
      back: "A nod to Indigenous culinary traditions of the Southwest, serving warm, fluffy fry bread that's unforgettable. This food stand was opened in 2017 by a Native American family.",
    },
    es: {
      front: 'Parada de Pan Frito',
      back: 'Un guiño a las tradiciones culinarias indígenas del Suroeste, sirviendo pan frito caliente y esponjoso que es inolvidable. Este puesto de comida fue abierto en 2017 por una familia nativa americana.',
    },
    fr: {
      front: 'Arrêt du Pain Frit',
      back: 'Un clin d\'œil aux traditions culinaires autochtones du Sud-Ouest, servant du pain frit chaud et moelleux inoubliable. Ce stand de nourriture a été ouvert en 2017 par une famille amérindienne.',
    },
    de: {
      front: 'Fry Bread Haltestelle',
      back: 'Ein Gruß an die indigenen kulinarischen Traditionen des Südwestens, serviert warmes, fluffiges frittiertes Brot, das unvergesslich ist. Dieser Imbissstand wurde 2017 von einer Native American Familie eröffnet.',
    },
  },
},
{
  id: 'taco-alley',
  translations: {
    en: {
      front: 'Taco Alley',
      back: "A stretch of Old Town with multiple quick-serve taco options, Taco Alley has become a perfect destination for a casual walkabout meal. The alley hosts an annual 'Taco Fest' each spring.",
    },
    es: {
      front: 'Callejón de Tacos',
      back: 'Un tramo del Viejo Pueblo con múltiples opciones de tacos de servicio rápido, el Callejón de Tacos se ha convertido en un destino perfecto para una comida casual. El callejón alberga un "Festival de Tacos" anual cada primavera.',
    },
    fr: {
      front: 'Ruelle des Tacos',
      back: 'Un tronçon du Vieux Scottsdale avec plusieurs options de tacos à service rapide, la Ruelle des Tacos est devenue une destination parfaite pour un repas décontracté. La ruelle accueille un "Festival des Tacos" annuel chaque printemps.',
    },
    de: {
      front: 'Taco Gasse',
      back: 'Ein Abschnitt des Alten Scottsdale mit mehreren Schnellservice-Taco-Optionen, die Taco Gasse ist zu einem perfekten Ziel für eine entspannte Mahlzeit geworden. Die Gasse veranstaltet jedes Frühjahr ein jährliches "Taco Fest".',
    },
  },
},
// Saguaro – Deep Dive
{
  id: 'scottsdale-civic-center',
  translations: {
    en: {
      front: 'Scottsdale Civic Center',
      back: "A 1960s modernist park designed for festivals, art, and open-air gatherings. The park opened in 1968 and hosts over 50 events annually, from art festivals to outdoor concerts.",
    },
    es: {
      front: 'Centro Cívico de Scottsdale',
      back: 'Un parque modernista de los años 60 diseñado para festivales, arte y reuniones al aire libre. El parque se inauguró en 1968 y alberga más de 50 eventos anuales, desde festivales de arte hasta conciertos al aire libre.',
    },
    fr: {
      front: 'Centre Civique de Scottsdale',
      back: 'Un parc moderniste des années 1960 conçu pour les festivals, l\'art et les rassemblements en plein air. Le parc a ouvert en 1968 et accueille plus de 50 événements annuels, des festivals d\'art aux concerts en plein air.',
    },
    de: {
      front: 'Scottsdale Bürgerzentrum',
      back: 'Ein modernistischer Park der 1960er Jahre, entworfen für Festivals, Kunst und Open-Air-Veranstaltungen. Der Park wurde 1968 eröffnet und beherbergt jährlich über 50 Veranstaltungen, von Kunstfestivals bis zu Open-Air-Konzerten.',
    },
  },
},
{
  id: 'entertainment-district',
  translations: {
    en: {
      front: 'Entertainment District',
      back: "A lively cluster of patios, DJs, and lounges that transforms Old Town into a vibrant nightlife destination after sunset. The district emerged organically in the late 1990s.",
    },
    es: {
      front: 'Distrito de Entretenimiento',
      back: 'Un grupo animado de patios, DJs y salones que transforma el Viejo Pueblo en un destino de vida nocturna vibrante después del atardecer. El distrito surgió orgánicamente a fines de la década de 1990.',
    },
    fr: {
      front: 'Quartier du Divertissement',
      back: 'Un groupe animé de patios, DJ et salons qui transforme le Vieux Scottsdale en une destination de vie nocturne animée après le coucher du soleil. Le quartier est apparu organiquement à la fin des années 1990.',
    },
    de: {
      front: 'Unterhaltungsviertel',
      back: 'Eine lebendige Ansammlung von Terrassen, DJs und Lounges, die das Alte Scottsdale nach Sonnenuntergang in ein pulsierendes Nachtleben-Ziel verwandelt. Das Viertel entstand organisch in den späten 1990er Jahren.',
    },
  },
},
{
  id: 'waterfront-promenade',
  translations: {
    en: {
      front: 'Waterfront Promenade',
      back: "This canal-side walk links art, dining, and shaded paths, creating a perfect route for a post-tour stroll. The promenade spans over a mile and includes public art installations and restaurants.",
    },
    es: {
      front: 'Paseo Marítimo',
      back: 'Este paseo junto al canal conecta arte, restaurantes y senderos sombreados, creando una ruta perfecta para un paseo después del recorrido. El paseo se extiende más de una milla e incluye instalaciones de arte público y restaurantes.',
    },
    fr: {
      front: 'Promenade du Front de Mer',
      back: 'Cette promenade le long du canal relie l\'art, la restauration et les sentiers ombragés, créant un itinéraire parfait pour une promenade après la visite. La promenade s\'étend sur plus d\'un mile et comprend des installations d\'art public et des restaurants.',
    },
    de: {
      front: 'Waterfront Promenade',
      back: 'Dieser Kanalweg verbindet Kunst, Restaurants und schattige Wege und schafft eine perfekte Route für einen Spaziergang nach der Tour. Die Promenade erstreckt sich über mehr als eine Meile und umfasst öffentliche Kunstinstallationen und Restaurants.',
    },
  },
},
{
  id: 'old-town-western-storefronts',
  translations: {
    en: {
      front: 'Old Town Western Storefronts',
      back: "Wood-beamed, low-slung Western Revival buildings from the 1950s–70s preserve the cowboy character that Scottsdale was built on. These buildings are now home to galleries, boutiques, and restaurants.",
    },
    es: {
      front: 'Fachadas del Viejo Pueblo al Estilo Occidental',
      back: 'Los edificios de renacimiento occidental de los años 50-70 con vigas de madera y perfil bajo preservan el carácter vaquero en el que se construyó Scottsdale. Estos edificios ahora albergan galerías, boutiques y restaurantes.',
    },
    fr: {
      front: 'Façades Ouest du Vieux Scottsdale',
      back: 'Les bâtiments Western Revival à poutres en bois et bas des années 1950-1970 préservent le caractère cowboy sur lequel Scottsdale a été construit. Ces bâtiments abritent maintenant des galeries, des boutiques et des restaurants.',
    },
    de: {
      front: 'Altes Scottsdale Western Fassaden',
      back: 'Holzbalken, niedrige Western Revival-Gebäude aus den 1950er-70er Jahren bewahren den Cowboy-Charakter, auf dem Scottsdale aufgebaut wurde. Diese Gebäude beherbergen jetzt Galerien, Boutiquen und Restaurants.',
    },
  },
},
{
  id: 'historic-old-town-square',
  translations: {
    en: {
      front: 'Historic Old Town Square',
      back: "This square was the commercial heart of Scottsdale from the 1920s through the 1950s. Today, it's home to galleries, boutiques, and restaurants, but the architecture preserves that early 20th-century character.",
    },
    es: {
      front: 'Plaza Histórica del Viejo Pueblo',
      back: 'Esta plaza fue el corazón comercial de Scottsdale desde la década de 1920 hasta la de 1950. Hoy, es hogar de galerías, boutiques y restaurantes, pero la arquitectura preserva ese carácter de principios del siglo XX.',
    },
    fr: {
      front: 'Place Historique du Vieux Scottsdale',
      back: 'Cette place était le cœur commercial de Scottsdale des années 1920 aux années 1950. Aujourd\'hui, elle abrite des galeries, des boutiques et des restaurants, mais l\'architecture préserve ce caractère du début du 20e siècle.',
    },
    de: {
      front: 'Historischer Platz des Alten Scottsdale',
      back: 'Dieser Platz war das kommerzielle Herz von Scottsdale von den 1920er bis zu den 1950er Jahren. Heute beherbergt er Galerien, Boutiquen und Restaurants, aber die Architektur bewahrt diesen Charakter des frühen 20. Jahrhunderts.',
    },
  },
},
// Hidden Gems
{
  id: 'fourtillfour-alley',
  translations: {
    en: {
      front: 'Fourtillfour Alley',
      back: "A quiet corridor behind a beloved coffee shop, Fourtillfour Alley has become a hidden gem for photographers and car enthusiasts. The alley is particularly popular in the mornings when vintage car owners gather.",
    },
    es: {
      front: 'Callejón Fourtillfour',
      back: 'Un corredor tranquilo detrás de una querida cafetería, el Callejón Fourtillfour se ha convertido en una joya oculta para fotógrafos y entusiastas de los autos. El callejón es particularmente popular por las mañanas cuando se reúnen los propietarios de autos clásicos.',
    },
    fr: {
      front: 'Ruelle Fourtillfour',
      back: 'Un couloir tranquille derrière un café bien-aimé, la Ruelle Fourtillfour est devenue un joyau caché pour les photographes et les passionnés de voitures. La ruelle est particulièrement populaire le matin lorsque les propriétaires de voitures vintage se rassemblent.',
    },
    de: {
      front: 'Fourtillfour Gasse',
      back: 'Ein ruhiger Korridor hinter einem beliebten Café, die Fourtillfour Gasse ist zu einem versteckten Juwel für Fotografen und Autoenthusiasten geworden. Die Gasse ist besonders morgens beliebt, wenn sich Besitzer von Oldtimern versammeln.',
    },
  },
},
{
  id: 'canal-undercrossings',
  translations: {
    en: {
      front: 'Canal Undercrossings',
      back: "Shadowed tunnels with surprising acoustics and mural art provide a cool place to walk when the sun's high. The tunnels have been transformed into art spaces by local muralists.",
    },
    es: {
      front: 'Pasos Inferiores del Canal',
      back: 'Túneles sombreados con acústica sorprendente y arte mural proporcionan un lugar fresco para caminar cuando el sol está alto. Los túneles han sido transformados en espacios de arte por muralistas locales.',
    },
    fr: {
      front: 'Passages Souterrains du Canal',
      back: 'Des tunnels ombragés avec une acoustique surprenante et de l\'art mural offrent un endroit frais pour marcher quand le soleil est haut. Les tunnels ont été transformés en espaces d\'art par des muralistes locaux.',
    },
    de: {
      front: 'Kanalunterführungen',
      back: 'Beschattete Tunnel mit überraschender Akustik und Wandgemälden bieten einen kühlen Ort zum Gehen, wenn die Sonne hoch steht. Die Tunnel wurden von lokalen Wandmalern in Kunsträume verwandelt.',
    },
  },
},
{
  id: 'hidden-artist-studios',
  translations: {
    en: {
      front: 'Hidden Artist Studios',
      back: "Small working studios scattered above Old Town shops house artists who often welcome drop-in visitors. These studios are located in the second and third floors of historic buildings.",
    },
    es: {
      front: 'Estudios de Artistas Ocultos',
      back: 'Pequeños estudios de trabajo dispersos sobre las tiendas del Viejo Pueblo albergan artistas que a menudo dan la bienvenida a visitantes sin cita. Estos estudios se encuentran en el segundo y tercer piso de edificios históricos.',
    },
    fr: {
      front: 'Studios d\'Artistes Cachés',
      back: 'De petits studios de travail dispersés au-dessus des magasins du Vieux Scottsdale abritent des artistes qui accueillent souvent les visiteurs sans rendez-vous. Ces studios sont situés aux deuxième et troisième étages de bâtiments historiques.',
    },
    de: {
      front: 'Versteckte Künstlerstudios',
      back: 'Kleine Arbeitsstudios, die über den Geschäften des Alten Scottsdale verstreut sind, beherbergen Künstler, die oft spontane Besucher willkommen heißen. Diese Studios befinden sich im zweiten und dritten Stock historischer Gebäude.',
    },
  },
},
{
  id: 'copper-canopy-sculpture',
  translations: {
    en: {
      front: 'Copper Canopy Sculpture',
      back: "Organic metalwork forming a tree-like silhouette, the Copper Canopy Sculpture creates beautiful shadow patterns throughout the day. The sculpture was installed in 2016 as part of a public art initiative.",
    },
    es: {
      front: 'Escultura de Dosel de Cobre',
      back: 'Trabajo en metal orgánico que forma una silueta similar a un árbol, la Escultura de Dosel de Cobre crea hermosos patrones de sombra durante todo el día. La escultura se instaló en 2016 como parte de una iniciativa de arte público.',
    },
    fr: {
      front: 'Sculpture de Canopée en Cuivre',
      back: 'Travail du métal organique formant une silhouette en forme d\'arbre, la Sculpture de Canopée en Cuivre crée de beaux motifs d\'ombre tout au long de la journée. La sculpture a été installée en 2016 dans le cadre d\'une initiative d\'art public.',
    },
    de: {
      front: 'Kupferdach-Skulptur',
      back: 'Organische Metallarbeit, die eine baumähnliche Silhouette bildet, die Kupferdach-Skulptur erzeugt den ganzen Tag über schöne Schattenmuster. Die Skulptur wurde 2016 als Teil einer öffentlichen Kunstinitiative installiert.',
    },
  },
},
// Romantic Spots
{
  id: 'waterfront-reflections',
  translations: {
    en: {
      front: 'Waterfront Reflections',
      back: "Canal lights shimmer against the water at dusk, creating one of the city's most relaxing evening walks along the Scottsdale Waterfront. The reflection effect is particularly beautiful during the 'golden hour'.",
    },
    es: {
      front: 'Reflejos del Paseo Marítimo',
      back: 'Las luces del canal brillan contra el agua al anochecer, creando uno de los paseos nocturnos más relajantes de la ciudad a lo largo del Paseo Marítimo de Scottsdale. El efecto de reflexión es particularmente hermoso durante la "hora dorada".',
    },
    fr: {
      front: 'Reflets du Front de Mer',
      back: 'Les lumières du canal scintillent contre l\'eau au crépuscule, créant l\'une des promenades du soir les plus relaxantes de la ville le long du Front de Mer de Scottsdale. L\'effet de réflexion est particulièrement beau pendant "l\'heure dorée".',
    },
    de: {
      front: 'Waterfront Reflexionen',
      back: 'Kanalbeleuchtung schimmert gegen das Wasser in der Dämmerung und schafft einen der entspannendsten Abendspaziergänge der Stadt entlang des Scottsdale Waterfront. Der Reflexionseffekt ist besonders schön während der "goldenen Stunde".',
    },
  },
},
{
  id: 'marshall-way-murals-at-sunset',
  translations: {
    en: {
      front: 'Marshall Way Murals at Sunset',
      back: "Soft desert light brings out richer colors in the Marshall Way murals at sunset, creating a beautiful backdrop for couple photos. The murals were painted by internationally recognized street artists.",
    },
    es: {
      front: 'Murales de Marshall Way al Atardecer',
      back: 'La luz suave del desierto resalta colores más ricos en los murales de Marshall Way al atardecer, creando un hermoso telón de fondo para fotos de parejas. Los murales fueron pintados por artistas callejeros reconocidos internacionalmente.',
    },
    fr: {
      front: 'Muraux de Marshall Way au Coucher du Soleil',
      back: 'La lumière douce du désert fait ressortir des couleurs plus riches dans les muraux de Marshall Way au coucher du soleil, créant un magnifique arrière-plan pour les photos de couples. Les muraux ont été peints par des artistes de rue reconnus internationalement.',
    },
    de: {
      front: 'Marshall Way Wandgemälde bei Sonnenuntergang',
      back: 'Sanftes Wüstenlicht bringt reichere Farben in den Marshall Way Wandgemälden bei Sonnenuntergang hervor und schafft einen schönen Hintergrund für Paarfotos. Die Wandgemälde wurden von international anerkannten Straßenkünstlern gemalt.',
    },
  },
},
{
  id: 'soleri-bridge-golden-hour',
  translations: {
    en: {
      front: 'Soleri Bridge Golden Hour',
      back: "Warm tones and long shadows create dramatic silhouettes at the Soleri Bridge during golden hour, making it a great spot to catch the last light of the day. The bridge's concrete forms cast ever-changing shadows.",
    },
    es: {
      front: 'Puente Soleri en la Hora Dorada',
      back: 'Los tonos cálidos y las sombras largas crean siluetas dramáticas en el Puente Soleri durante la hora dorada, convirtiéndolo en un gran lugar para capturar la última luz del día. Las formas de concreto del puente proyectan sombras siempre cambiantes.',
    },
    fr: {
      front: 'Pont Soleri à l\'Heure Dorée',
      back: 'Les tons chauds et les longues ombres créent des silhouettes dramatiques au Pont Soleri pendant l\'heure dorée, en faisant un endroit idéal pour capturer la dernière lumière du jour. Les formes en béton du pont projettent des ombres en constante évolution.',
    },
    de: {
      front: 'Soleri-Brücke Goldene Stunde',
      back: 'Warme Töne und lange Schatten schaffen dramatische Silhouetten an der Soleri-Brücke während der goldenen Stunde und machen sie zu einem großartigen Ort, um das letzte Licht des Tages einzufangen. Die Betonformen der Brücke werfen sich ständig verändernde Schatten.',
    },
  },
},
{
  id: 'museum-courtyard',
  translations: {
    en: {
      front: 'Museum Courtyard',
      back: "Quiet, warm, and architecturally stunning after hours, the Museum of the West courtyard offers a peaceful escape steps from the action of Old Town. The courtyard features adobe walls and desert plantings.",
    },
    es: {
      front: 'Patio del Museo',
      back: 'Tranquilo, cálido y arquitectónicamente impresionante después del horario de atención, el patio del Museo del Oeste ofrece un escape pacífico a pasos de la acción del Viejo Pueblo. El patio cuenta con paredes de adobe y plantaciones del desierto.',
    },
    fr: {
      front: 'Cour du Musée',
      back: 'Calme, chaleureuse et architecturalement époustouflante après les heures d\'ouverture, la cour du Musée de l\'Ouest offre une évasion paisible à quelques pas de l\'action du Vieux Scottsdale. La cour présente des murs en adobe et des plantations du désert.',
    },
    de: {
      front: 'Museumshof',
      back: 'Ruhig, warm und architektonisch atemberaubend nach den Öffnungszeiten bietet der Hof des Museums des Westens einen friedlichen Rückzugsort nur wenige Schritte vom Geschehen des Alten Scottsdale entfernt. Der Hof verfügt über Adobe-Wände und Wüstenpflanzungen.',
    },
  },
},
{
  id: 'old-town-lantern-walk',
  translations: {
    en: {
      front: 'Old Town Lantern Walk',
      back: "A short route of softly lit pathways and hidden corners, the Old Town Lantern Walk is romantic and usually uncrowded. The route was created in 2010 and connects several of the area's most beautiful spots.",
    },
    es: {
      front: 'Paseo de Linternas del Viejo Pueblo',
      back: 'Una ruta corta de senderos suavemente iluminados y rincones ocultos, el Paseo de Linternas del Viejo Pueblo es romántico y generalmente poco concurrido. La ruta se creó en 2010 y conecta varios de los lugares más hermosos de la zona.',
    },
    fr: {
      front: 'Promenade des Lanternes du Vieux Scottsdale',
      back: 'Un court itinéraire de sentiers doucement éclairés et de coins cachés, la Promenade des Lanternes du Vieux Scottsdale est romantique et généralement peu fréquentée. L\'itinéraire a été créé en 2010 et relie plusieurs des plus beaux endroits de la région.',
    },
    de: {
      front: 'Altes Scottsdale Laternenweg',
      back: 'Eine kurze Route von sanft beleuchteten Wegen und versteckten Ecken, der Alte Scottsdale Laternenweg ist romantisch und normalerweise unüberfüllt. Die Route wurde 2010 erstellt und verbindet mehrere der schönsten Orte der Gegend.',
    },
  },
},
// Quick Facts
{
  id: 'little-red-schoolhouse',
  translations: {
    en: {
      front: 'Little Red Schoolhouse',
      back: "Built in 1909, this was Scottsdale's first schoolhouse—one teacher, eight grades, 30 students in a single room. The teacher, Lulu Oatman, earned $75 a month. It's now a small museum.",
    },
    es: {
      front: 'Pequeña Escuela Roja',
      back: 'Construida en 1909, esta fue la primera escuela de Scottsdale: un maestro, ocho grados, 30 estudiantes en una sola habitación. La maestra, Lulu Oatman, ganaba $75 al mes. Ahora es un pequeño museo.',
    },
    fr: {
      front: 'Petite École Rouge',
      back: 'Construite en 1909, c\'était la première école de Scottsdale—un enseignant, huit niveaux, 30 élèves dans une seule pièce. L\'enseignante, Lulu Oatman, gagnait 75 $ par mois. C\'est maintenant un petit musée.',
    },
    de: {
      front: 'Kleines Rotes Schulhaus',
      back: 'Erbaut 1909, war dies Scottsdales erstes Schulhaus—ein Lehrer, acht Klassen, 30 Schüler in einem einzigen Raum. Die Lehrerin Lulu Oatman verdiente 75 Dollar im Monat. Es ist jetzt ein kleines Museum.',
    },
  },
},
{
  id: 'rusty-spur-saloon',
  translations: {
    en: {
      front: 'Rusty Spur Saloon',
      back: "This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. It became a saloon in 1955. Drop in later for live country music.",
    },
    es: {
      front: 'Salón Rusty Spur',
      back: 'Este edificio comenzó como el Banco de Agricultores y Comerciantes en 1921, completo con una bóveda que todavía se encuentra detrás del bar. Se convirtió en un salón en 1955. Pasa más tarde para música country en vivo.',
    },
    fr: {
      front: 'Saloon Rusty Spur',
      back: 'Ce bâtiment a commencé comme la Banque des Fermiers et des Marchands en 1921, avec un coffre-fort qui se trouve toujours derrière le bar. Il est devenu un saloon en 1955. Passez plus tard pour de la musique country en direct.',
    },
    de: {
      front: 'Rusty Spur Saloon',
      back: 'Dieses Gebäude begann 1921 als Farmers & Merchants Bank, komplett mit einem Tresor, der noch immer hinter der Bar steht. Es wurde 1955 zu einem Saloon. Kommen Sie später vorbei für Live-Country-Musik.',
    },
  },
},
];

