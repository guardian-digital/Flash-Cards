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
  // Historic Old Town District
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
        back: 'Construite en 1909, c\'était la première école de Scottsdale—un enseignant, huit niveaux, 30 élèves dans une seule salle. L\'enseignante, Lulu Oatman, gagnait 75 $ par mois. C\'est maintenant un petit musée.',
      },
      de: {
        front: 'Kleine Rote Schule',
        back: 'Erbaut im Jahr 1909, war dies Scottsdales erste Schule—ein Lehrer, acht Klassen, 30 Schüler in einem einzigen Raum. Die Lehrerin Lulu Oatman verdiente 75 $ pro Monat. Es ist jetzt ein kleines Museum.',
      },
    },
  },
  {
    id: 'rusty-spur-saloon',
    translations: {
      en: {
        front: 'Rusty Spur Saloon',
        back: "This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. It became a saloon in 1955. Drop in later for live country music nightly.",
      },
      es: {
        front: 'Salón Rusty Spur',
        back: 'Este edificio comenzó como el Banco de Agricultores y Comerciantes en 1921, completo con una bóveda que todavía está detrás del bar. Se convirtió en un salón en 1955. Visítalo más tarde para música country en vivo todas las noches.',
      },
      fr: {
        front: 'Saloon Rusty Spur',
        back: 'Ce bâtiment a commencé comme la Banque des Fermiers et Commerçants en 1921, avec un coffre-fort qui se trouve toujours derrière le bar. Il est devenu un saloon en 1955. Passez plus tard pour de la musique country en direct tous les soirs.',
      },
      de: {
        front: 'Rusty Spur Saloon',
        back: 'Dieses Gebäude begann 1921 als Farmers & Merchants Bank, komplett mit einem Tresor, der noch hinter der Bar steht. Es wurde 1955 zu einem Saloon. Kommen Sie später vorbei für Live-Country-Musik jeden Abend.',
      },
    },
  },
  {
    id: 'western-wear-boutiques',
    translations: {
      en: {
        front: 'Western-Wear Boutiques',
        back: "Historic Old Town is home to authentic Western-wear shops offering cowboy boots, hats, and traditional Western attire. These stores have been serving locals and visitors for decades, preserving Scottsdale's cowboy heritage.",
      },
      es: {
        front: 'Boutiques de Ropa Vaquera',
        back: 'El Viejo Pueblo Histórico alberga tiendas auténticas de ropa vaquera que ofrecen botas de vaquero, sombreros y atuendos tradicionales del Oeste. Estas tiendas han servido a locales y visitantes durante décadas, preservando el patrimonio vaquero de Scottsdale.',
      },
      fr: {
        front: 'Boutiques de Vêtements Western',
        back: 'Le Vieux Scottsdale historique abrite des magasins authentiques de vêtements western offrant des bottes de cowboy, des chapeaux et des tenues western traditionnelles. Ces magasins servent les habitants et les visiteurs depuis des décennies, préservant le patrimoine cowboy de Scottsdale.',
      },
      de: {
        front: 'Western-Bekleidungsboutiquen',
        back: 'Das historische Alte Scottsdale beherbergt authentische Western-Bekleidungsgeschäfte, die Cowboy-Stiefel, Hüte und traditionelle Western-Kleidung anbieten. Diese Geschäfte bedienen Einheimische und Besucher seit Jahrzehnten und bewahren das Cowboy-Erbe von Scottsdale.',
      },
    },
  },
  {
    id: 'native-american-jewelry-shops',
    translations: {
      en: {
        front: 'Native American Jewelry Shops',
        back: "Handcrafted turquoise, silver, and traditional Native American jewelry can be found throughout Historic Old Town. These shops feature authentic pieces from local and regional Native artists, representing centuries of Southwestern craftsmanship.",
      },
      es: {
        front: 'Tiendas de Joyería Nativa Americana',
        back: 'Se pueden encontrar joyas nativas americanas artesanales de turquesa, plata y tradicionales en todo el Viejo Pueblo Histórico. Estas tiendas presentan piezas auténticas de artistas nativos locales y regionales, que representan siglos de artesanía del Suroeste.',
      },
      fr: {
        front: 'Bijouteries Amérindiennes',
        back: 'Des bijoux amérindiens artisanaux en turquoise, argent et traditionnels peuvent être trouvés dans tout le Vieux Scottsdale historique. Ces magasins présentent des pièces authentiques d\'artistes amérindiens locaux et régionaux, représentant des siècles d\'artisanat du Sud-Ouest.',
      },
      de: {
        front: 'Schmuckgeschäfte der Ureinwohner',
        back: 'Handgefertigter Türkis-, Silber- und traditioneller Schmuck der Ureinwohner ist im gesamten historischen Alten Scottsdale zu finden. Diese Geschäfte bieten authentische Stücke von lokalen und regionalen Künstlern der Ureinwohner, die Jahrhunderte südwestlicher Handwerkskunst repräsentieren.',
      },
    },
  },
  {
    id: 'historic-western-revival-storefronts',
    translations: {
      en: {
        front: 'Historic Western Revival Storefronts',
        back: "Wood-beamed, low-slung Western Revival buildings from the 1950s–70s preserve the cowboy character that Scottsdale was built on. These buildings are now home to galleries, boutiques, and restaurants, maintaining the area's historic charm.",
      },
      es: {
        front: 'Fachadas del Renacimiento del Oeste Histórico',
        back: 'Los edificios del Renacimiento del Oeste de los años 1950-70 con vigas de madera y estructura baja preservan el carácter vaquero en el que se construyó Scottsdale. Estos edificios ahora albergan galerías, boutiques y restaurantes, manteniendo el encanto histórico del área.',
      },
      fr: {
        front: 'Façades du Renouveau Western Historique',
        back: 'Les bâtiments du Renouveau Western des années 1950-70 à poutres en bois et bas de plafond préservent le caractère cowboy sur lequel Scottsdale a été construit. Ces bâtiments abritent maintenant des galeries, des boutiques et des restaurants, maintenant le charme historique de la région.',
      },
      de: {
        front: 'Historische Western-Revival-Fassaden',
        back: 'Holzbalken, niedrige Western-Revival-Gebäude aus den 1950er-70er Jahren bewahren den Cowboy-Charakter, auf dem Scottsdale aufgebaut wurde. Diese Gebäude beherbergen jetzt Galerien, Boutiquen und Restaurants und bewahren den historischen Charme der Gegend.',
      },
    },
  },
  // Scottsdale Fashion Square
  {
    id: 'fashion-square-nordstrom-neiman',
    translations: {
      en: {
        front: 'Nordstrom & Neiman Marcus',
        back: "Scottsdale Fashion Square features flagship department stores Nordstrom and Neiman Marcus, offering luxury fashion, beauty, and home goods. These anchor stores have been part of the mall since its major expansion in the 1990s.",
      },
      es: {
        front: 'Nordstrom y Neiman Marcus',
        back: 'Scottsdale Fashion Square cuenta con las tiendas departamentales insignia Nordstrom y Neiman Marcus, que ofrecen moda de lujo, belleza y artículos para el hogar. Estas tiendas ancla han sido parte del centro comercial desde su gran expansión en la década de 1990.',
      },
      fr: {
        front: 'Nordstrom et Neiman Marcus',
        back: 'Scottsdale Fashion Square présente les grands magasins phares Nordstrom et Neiman Marcus, offrant mode de luxe, beauté et articles pour la maison. Ces magasins phares font partie du centre commercial depuis son expansion majeure dans les années 1990.',
      },
      de: {
        front: 'Nordstrom & Neiman Marcus',
        back: 'Scottsdale Fashion Square verfügt über die Flaggschiff-Warenhäuser Nordstrom und Neiman Marcus, die Luxusmode, Beauty und Haushaltswaren anbieten. Diese Ankergeschäfte sind seit der großen Erweiterung des Einkaufszentrums in den 1990er Jahren Teil des Einkaufszentrums.',
      },
    },
  },
  {
    id: 'fashion-square-luxury-brands',
    translations: {
      en: {
        front: 'Luxury Brands',
        back: "The mall houses an impressive collection of luxury retailers including Louis Vuitton, Gucci, Tiffany & Co., Burberry, and Cartier. These flagship stores offer the latest collections from the world's most prestigious fashion houses.",
      },
      es: {
        front: 'Marcas de Lujo',
        back: 'El centro comercial alberga una impresionante colección de minoristas de lujo, incluyendo Louis Vuitton, Gucci, Tiffany & Co., Burberry y Cartier. Estas tiendas insignia ofrecen las últimas colecciones de las casas de moda más prestigiosas del mundo.',
      },
      fr: {
        front: 'Marques de Luxe',
        back: 'Le centre commercial abrite une collection impressionnante de détaillants de luxe, notamment Louis Vuitton, Gucci, Tiffany & Co., Burberry et Cartier. Ces magasins phares offrent les dernières collections des maisons de mode les plus prestigieuses au monde.',
      },
      de: {
        front: 'Luxusmarken',
        back: 'Das Einkaufszentrum beherbergt eine beeindruckende Sammlung von Luxushändlern, darunter Louis Vuitton, Gucci, Tiffany & Co., Burberry und Cartier. Diese Flaggschiff-Geschäfte bieten die neuesten Kollektionen der prestigeträchtigsten Modenhäuser der Welt.',
      },
    },
  },
  {
    id: 'fashion-square-apple-store',
    translations: {
      en: {
        front: 'Apple Store',
        back: "The Apple Store at Fashion Square provides the latest technology products, accessories, and expert support. It's one of the largest Apple retail locations in the Southwest, featuring the full range of Apple devices and services.",
      },
      es: {
        front: 'Tienda Apple',
        back: 'La Tienda Apple en Fashion Square ofrece los últimos productos tecnológicos, accesorios y soporte experto. Es una de las ubicaciones minoristas de Apple más grandes del Suroeste, con toda la gama de dispositivos y servicios de Apple.',
      },
      fr: {
        front: 'Apple Store',
        back: 'L\'Apple Store à Fashion Square propose les derniers produits technologiques, accessoires et support expert. C\'est l\'un des plus grands points de vente Apple du Sud-Ouest, avec toute la gamme d\'appareils et services Apple.',
      },
      de: {
        front: 'Apple Store',
        back: 'Der Apple Store im Fashion Square bietet die neuesten Technologieprodukte, Zubehör und Expertenunterstützung. Es ist einer der größten Apple-Einzelhandelsstandorte im Südwesten mit der vollen Palette von Apple-Geräten und -Dienstleistungen.',
      },
    },
  },
  {
    id: 'fashion-square-200-retailers',
    translations: {
      en: {
        front: '200+ Premium Retailers',
        back: "With over 200 premium retailers, Scottsdale Fashion Square is the largest shopping destination in the Southwest. The mall spans 1.9 million square feet and offers everything from high-end fashion to specialty stores.",
      },
      es: {
        front: 'Más de 200 Minoristas Premium',
        back: 'Con más de 200 minoristas premium, Scottsdale Fashion Square es el destino de compras más grande del Suroeste. El centro comercial abarca 1.9 millones de pies cuadrados y ofrece todo, desde moda de alta gama hasta tiendas especializadas.',
      },
      fr: {
        front: 'Plus de 200 Détaillants Premium',
        back: 'Avec plus de 200 détaillants premium, Scottsdale Fashion Square est la plus grande destination shopping du Sud-Ouest. Le centre commercial s\'étend sur 1,9 million de pieds carrés et offre tout, de la mode haut de gamme aux magasins spécialisés.',
      },
      de: {
        front: '200+ Premium-Einzelhändler',
        back: 'Mit über 200 Premium-Einzelhändlern ist Scottsdale Fashion Square das größte Einkaufsziel im Südwesten. Das Einkaufszentrum erstreckt sich über 1,9 Millionen Quadratfuß und bietet alles von High-End-Mode bis zu Fachgeschäften.',
      },
    },
  },
  {
    id: 'fashion-square-fine-dining',
    translations: {
      en: {
        front: 'Fine Dining Restaurants',
        back: "Fashion Square features several fine dining restaurants offering sophisticated cuisine in elegant settings. These restaurants provide a perfect complement to a day of luxury shopping, with menus crafted by renowned chefs.",
      },
      es: {
        front: 'Restaurantes de Alta Cocina',
        back: 'Fashion Square cuenta con varios restaurantes de alta cocina que ofrecen cocina sofisticada en entornos elegantes. Estos restaurantes son el complemento perfecto para un día de compras de lujo, con menús creados por chefs reconocidos.',
      },
      fr: {
        front: 'Restaurants Gastronomiques',
        back: 'Fashion Square propose plusieurs restaurants gastronomiques offrant une cuisine sophistiquée dans des cadres élégants. Ces restaurants sont le complément parfait à une journée de shopping de luxe, avec des menus créés par des chefs renommés.',
      },
      de: {
        front: 'Feinschmecker-Restaurants',
        back: 'Fashion Square verfügt über mehrere Feinschmecker-Restaurants, die raffinierte Küche in eleganten Umgebungen anbieten. Diese Restaurants sind die perfekte Ergänzung zu einem Tag mit Luxus-Einkäufen, mit Menüs von renommierten Köchen.',
      },
    },
  },
  {
    id: 'fashion-square-luxury-cinema',
    translations: {
      en: {
        front: 'Luxury Cinema',
        back: "The mall includes a luxury cinema with premium seating, enhanced sound systems, and gourmet concessions. It's the perfect place to catch the latest films in comfort and style after a day of shopping.",
      },
      es: {
        front: 'Cine de Lujo',
        back: 'El centro comercial incluye un cine de lujo con asientos premium, sistemas de sonido mejorados y concesiones gourmet. Es el lugar perfecto para ver las últimas películas con comodidad y estilo después de un día de compras.',
      },
      fr: {
        front: 'Cinéma de Luxe',
        back: 'Le centre commercial comprend un cinéma de luxe avec des sièges premium, des systèmes sonores améliorés et des concessions gastronomiques. C\'est l\'endroit parfait pour voir les derniers films dans le confort et le style après une journée de shopping.',
      },
      de: {
        front: 'Luxus-Kino',
        back: 'Das Einkaufszentrum verfügt über ein Luxus-Kino mit Premium-Sitzen, verbesserten Soundsystemen und Gourmet-Konzessionen. Es ist der perfekte Ort, um die neuesten Filme in Komfort und Stil nach einem Einkaufstag zu sehen.',
      },
    },
  },
  {
    id: 'fashion-square-casual-dining',
    translations: {
      en: {
        front: 'Multiple Casual Dining Options',
        back: "In addition to fine dining, Fashion Square offers numerous casual dining options ranging from quick-service restaurants to sit-down cafes. There's something to satisfy every taste and budget.",
      },
      es: {
        front: 'Múltiples Opciones de Comida Casual',
        back: 'Además de la alta cocina, Fashion Square ofrece numerosas opciones de comida casual, desde restaurantes de servicio rápido hasta cafeterías. Hay algo para satisfacer todos los gustos y presupuestos.',
      },
      fr: {
        front: 'Plusieurs Options de Restauration Décontractée',
        back: 'En plus de la gastronomie, Fashion Square propose de nombreuses options de restauration décontractée, des restaurants à service rapide aux cafés assis. Il y a quelque chose pour satisfaire tous les goûts et budgets.',
      },
      de: {
        front: 'Mehrere Optionen für Casual Dining',
        back: 'Neben Feinschmecker-Restaurants bietet Fashion Square zahlreiche Optionen für Casual Dining, von Schnellrestaurants bis hin zu Sitzcafés. Es gibt etwas für jeden Geschmack und jedes Budget.',
      },
    },
  },
  {
    id: 'fashion-square-location',
    translations: {
      en: {
        front: 'Fashion Square Location',
        back: "Located at 7014 E Camelback Rd, Scottsdale Fashion Square is easily accessible from Old Town, just a short drive or ride away. The mall's central location makes it a convenient destination for visitors exploring the area.",
      },
      es: {
        front: 'Ubicación de Fashion Square',
        back: 'Ubicado en 7014 E Camelback Rd, Scottsdale Fashion Square es fácilmente accesible desde el Viejo Pueblo, a solo un corto viaje en auto. La ubicación central del centro comercial lo convierte en un destino conveniente para los visitantes que exploran el área.',
      },
      fr: {
        front: 'Emplacement de Fashion Square',
        back: 'Situé au 7014 E Camelback Rd, Scottsdale Fashion Square est facilement accessible depuis le Vieux Scottsdale, à seulement un court trajet en voiture. L\'emplacement central du centre commercial en fait une destination pratique pour les visiteurs explorant la région.',
      },
      de: {
        front: 'Standort Fashion Square',
        back: 'Gelegen an der 7014 E Camelback Rd, ist Scottsdale Fashion Square leicht vom Alten Scottsdale aus erreichbar, nur eine kurze Fahrt entfernt. Die zentrale Lage des Einkaufszentrums macht es zu einem bequemen Ziel für Besucher, die die Gegend erkunden.',
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
