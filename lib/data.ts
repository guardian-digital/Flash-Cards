export type Card = { front: string; back: string };
export type Deck = { id: string; label: string; cards: Card[] };

export const DECKS: Deck[] = [
  {
    id: 'cholla',
    label: 'Cholla – Classic Highlights',
    cards: [
      { front: 'Old Adobe Mission', back: "Hand-built by Mexican settlers from 1917 to 1933, this adobe church is one of Old Town's earliest landmarks. Step inside to see the quiet desert chapel." },
      { front: 'Soleri Bridge', back: "Designed by Italian architect Paolo Soleri and dedicated in 2010, this bridge marks the winter solstice through shadow and light. On December 21st, the sun aligns perfectly with its geometric patterns." },
      { front: 'Museum of the West', back: "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits." },
      { front: 'Bronze Horse Fountain', back: "Five bronze Arabian horses, sculpted by Bob Parks in 1989, honor Scottsdale's Arabian horse-breeding heritage. The fountain is one of downtown's most photographed landmarks." },
      { front: 'Civic Center Park', back: "This 'public backyard' park, opened in 1968, ties together Scottsdale's civic buildings, sculptures, and shaded paths. It hosts the annual Arts Festival and other cultural events." },
      { front: 'Marshall Way Arts District', back: "Home to Scottsdale's weekly ArtWalk, which began in 1975 and is now the longest-running in the country. Over 40 galleries participate in this vibrant art destination." },
      { front: 'Main Street Arts District', back: "Dozens of galleries in two historic blocks from the 1960s–70s represent the heart of Scottsdale's art scene. A slow stroll reveals fine Western and Native art." }
    ]
  },
  {
    id: 'ocotillo',
    label: 'Ocotillo – Sunset & Romance',
    cards: [
      { front: 'Waterfront Arches', back: "These glowing arches frame Camelback Mountain at sunset, creating one of Old Town's most romantic photo spots. The arches were installed in 2009 as part of the Waterfront development." },
      { front: 'Marshall Way Murals', back: "A colorful corridor of modern desert art that transforms Marshall Way into an open-air gallery. Over 20 murals span multiple blocks, painted by internationally recognized street artists." },
      { front: 'Soleri Plaza', back: "A peaceful space designed by architect Paolo Soleri as a meditation on desert time. The plaza features concrete forms that cast ever-changing shadows throughout the day." },
      { front: 'Scottsdale Waterfront', back: "Soft lighting and canal reflections make this area shine at dusk, creating a sophisticated urban oasis in the desert. The Waterfront was developed in 2008." },
      { front: 'Love Story Lane', back: "This tucked-away alley is a longtime favorite for engagement photos, hidden between two buildings. Easy to miss unless you know where to look." }
    ]
  },
  {
    id: 'prickly',
    label: 'Prickly Pear – Sweets & Snacks',
    cards: [
      { front: "Berdena's", back: "Known for small-batch coffee and handmade pastries, Berdena's has become a cult favorite among locals since opening in 2018. The honey lavender latte is a local obsession." },
      { front: 'Arcadia Farms Marketplace', back: "A Scottsdale staple for 30+ years, Arcadia Farms has been serving baked goods and local gourmet items since 1993. The patio is a quiet escape in Old Town." },
      { front: 'Fry Bread Lounge', back: "Honors Indigenous culinary traditions with sweet and savory fry bread, serving a taste of Arizona history. The lounge is owned by a Navajo family with a five-generation recipe." },
      { front: 'Sprinkles ATM', back: "Arizona's first cupcake ATM, installed in 2014, offers fresh treats 24/7 from a vending machine that looks like a giant pink cupcake. It's become one of Scottsdale's most photographed landmarks." },
      { front: 'Sugar Bowl', back: "A 1958 ice cream parlor with its original pink décor, Sugar Bowl has been serving generations of locals. The building is one of the few remaining examples of 1950s Googie architecture in Scottsdale." }
    ]
  },
  {
    id: 'queen',
    label: 'Queen of the Desert – Holiday',
    cards: [
      { front: 'Civic Center Tree Walk', back: "Dozens of holiday-lit trees turn this park into a glowing promenade during the holiday season. The tradition began in 1985 with just 12 trees and has grown to over 100 today." },
      { front: 'Old Town Holiday Arch', back: "A festive installation welcoming visitors each winter, the Holiday Arch has become one of Old Town's most iconic seasonal landmarks. Standing 20 feet tall, it's made of thousands of LED lights." },
      { front: 'Soleri Bridge Lights', back: "Holiday lighting casts warm shadows across the plaza during the winter season, transforming Paolo Soleri's architectural masterpiece into a festive gathering place. The installation was added in 2012." },
      { front: 'Museum Courtyard Decor', back: "Subtle desert-themed wreaths and lanterns bring Western charm to the Museum of the West courtyard during the holiday season. The adobe walls glow beautifully at dusk when the lanterns are lit." },
      { front: 'Warm Beverage Stop', back: "Local pop-up vendors serve seasonal cocoa and spiced drinks during the holiday season, creating a cozy way to enjoy the cooler desert nights. The pop-ups operate from late November through early January." }
    ]
  },
  {
    id: 'senita',
    label: 'Senita – Taco Trail',
    cards: [
      { front: "America's Taco Shop", back: "Famous for authentic Sonoran-style carne asada, marinated 24 hours using a cherished family recipe from Hermosillo, Mexico. The restaurant was founded in 2010 by the Rodriguez family." },
      { front: 'Velvet Taco', back: "Craft tacos inspired by global flavors—from Korean BBQ to Nashville hot chicken—offer a modern twist on classic street food. The restaurant opened in 2018 and has become a Scottsdale favorite." },
      { front: 'Mesquite Fresh Street Mex', back: "Mesquite-grilled meats give everything a deep, smoky flavor at this Scottsdale original that locals swear by. The restaurant was founded in 2005 by a local chef." },
      { front: 'Fry Bread Stop', back: "A nod to Indigenous culinary traditions of the Southwest, serving warm, fluffy fry bread that's unforgettable. This food stand was opened in 2017 by a Native American family." },
      { front: 'Taco Alley', back: "A stretch of Old Town with multiple quick-serve taco options, Taco Alley has become a perfect destination for a casual walkabout meal. The alley hosts an annual 'Taco Fest' each spring." }
    ]
  },
  {
    id: 'saguaro',
    label: 'Saguaro – Deep Dive',
    cards: [
      { front: 'Scottsdale Civic Center', back: "A 1960s modernist park designed for festivals, art, and open-air gatherings. The park opened in 1968 and hosts over 50 events annually, from art festivals to outdoor concerts." },
      { front: 'Entertainment District', back: "A lively cluster of patios, DJs, and lounges that transforms Old Town into a vibrant nightlife destination after sunset. The district emerged organically in the late 1990s." },
      { front: 'Waterfront Promenade', back: "This canal-side walk links art, dining, and shaded paths, creating a perfect route for a post-tour stroll. The promenade spans over a mile and includes public art installations and restaurants." },
      { front: 'Old Town Western Storefronts', back: "Wood-beamed, low-slung Western Revival buildings from the 1950s–70s preserve the cowboy character that Scottsdale was built on. These buildings are now home to galleries, boutiques, and restaurants." },
      { front: 'Soleri Plaza', back: "A peaceful space designed by architect Paolo Soleri as a meditation on desert time. The plaza features concrete forms that cast ever-changing shadows throughout the day." },
      { front: 'Historic Old Town Square', back: "This square was the commercial heart of Scottsdale from the 1920s through the 1950s. Today, it's home to galleries, boutiques, and restaurants, but the architecture preserves that early 20th-century character." },
      { front: 'Museum of the West', back: "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits." }
    ]
  },
  {
    id: 'hidden',
    label: 'Hidden Gems',
    cards: [
      { front: 'Love Story Lane', back: "This tucked-away alley is a longtime favorite for engagement photos, hidden between two buildings. Easy to miss unless you know where to look." },
      { front: 'Fourtillfour Alley', back: "A quiet corridor behind a beloved coffee shop, Fourtillfour Alley has become a hidden gem for photographers and car enthusiasts. The alley is particularly popular in the mornings when vintage car owners gather." },
      { front: 'Canal Undercrossings', back: "Shadowed tunnels with surprising acoustics and mural art provide a cool place to walk when the sun's high. The tunnels have been transformed into art spaces by local muralists." },
      { front: 'Hidden Artist Studios', back: "Small working studios scattered above Old Town shops house artists who often welcome drop-in visitors. These studios are located in the second and third floors of historic buildings." },
      { front: 'Copper Canopy Sculpture', back: "Organic metalwork forming a tree-like silhouette, the Copper Canopy Sculpture creates beautiful shadow patterns throughout the day. The sculpture was installed in 2016 as part of a public art initiative." }
    ]
  },
  {
    id: 'romantic',
    label: 'Romantic Spots',
    cards: [
      { front: 'Waterfront Reflections', back: "Canal lights shimmer against the water at dusk, creating one of the city's most relaxing evening walks along the Scottsdale Waterfront. The reflection effect is particularly beautiful during the 'golden hour'." },
      { front: 'Marshall Way Murals at Sunset', back: "Soft desert light brings out richer colors in the Marshall Way murals at sunset, creating a beautiful backdrop for couple photos. The murals were painted by internationally recognized street artists." },
      { front: 'Soleri Bridge Golden Hour', back: "Warm tones and long shadows create dramatic silhouettes at the Soleri Bridge during golden hour, making it a great spot to catch the last light of the day. The bridge's concrete forms cast ever-changing shadows." },
      { front: 'Museum Courtyard', back: "Quiet, warm, and architecturally stunning after hours, the Museum of the West courtyard offers a peaceful escape steps from the action of Old Town. The courtyard features adobe walls and desert plantings." },
      { front: 'Old Town Lantern Walk', back: "A short route of softly lit pathways and hidden corners, the Old Town Lantern Walk is romantic and usually uncrowded. The route was created in 2010 and connects several of the area's most beautiful spots." }
    ]
  },
  {
    id: 'micro',
    label: 'Quick Facts',
    cards: [
      { front: 'Old Adobe Mission', back: "Hand-built by Mexican settlers from 1917 to 1933, this adobe church is one of Old Town's earliest landmarks. Step inside to see the quiet desert chapel." },
      { front: 'Little Red Schoolhouse', back: "Built in 1909, this was Scottsdale's first schoolhouse—one teacher, eight grades, 30 students in a single room. The teacher, Lulu Oatman, earned $75 a month. It's now a small museum." },
      { front: 'Rusty Spur Saloon', back: "This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. It became a saloon in 1955. Drop in later for live country music." },
      { front: 'Soleri Bridge', back: "Designed by Italian architect Paolo Soleri and dedicated in 2010, this bridge marks the winter solstice through shadow and light. On December 21st, the sun aligns perfectly with its geometric patterns." },
      { front: 'Museum of the West', back: "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits." },
      { front: 'Bronze Horse Fountain', back: "Five bronze Arabian horses, sculpted by Bob Parks in 1989, honor Scottsdale's Arabian horse-breeding heritage. The fountain is one of downtown's most photographed landmarks." },
      { front: 'Waterfront Promenade', back: "This canal-side walk links art, dining, and shaded paths, creating a perfect route for a post-tour stroll. The promenade spans over a mile and includes public art installations and restaurants." },
      { front: 'Marshall Way Murals', back: "A colorful corridor of modern desert art that transforms Marshall Way into an open-air gallery. Over 20 murals span multiple blocks, painted by internationally recognized street artists." }
    ]
  }
];

export function getAllDeck(): Deck {
  const seen = new Set<string>();
  const cards = [];
  for (const d of DECKS) {
    for (const c of d.cards) {
      const key = c.front.trim();
      if (!seen.has(key)) {
        seen.add(key);
        cards.push(c);
      }
    }
  }
  return { id: 'all', label: 'All Highlights', cards };
}


