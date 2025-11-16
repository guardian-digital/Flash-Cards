export type Card = { front: string; back: string };
export type Deck = { id: string; label: string; cards: Card[] };

export const DECKS: Deck[] = [
  {
    id: 'cholla',
    label: 'Cholla – Classic Highlights',
    cards: [
      { front: 'Old Adobe Mission', back: "Hand-built by Mexican settlers in the late 1910s and completed in 1933, this adobe church is one of Old Town's earliest landmarks. Step inside later to see the original wood beams and quiet desert chapel." },
      { front: 'Soleri Bridge', back: "Paolo Soleri spent decades designing this bridge, dedicated in 2010, to mark the winter solstice through shadow and light. It is one of Scottsdale's most photographed public-art pieces." },
      { front: 'Museum of the West', back: 'Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. The desert-masonry architecture alone is worth a visit.' },
      { front: 'Bronze Horse Fountain', back: "Five bronze Arabian horses, donated in 1989, honor Scottsdale's Arabian horse-breeding boom of the 1950s and beyond. They look incredible up close—one of downtown's most iconic stops." },
      { front: 'Civic Center Park', back: "Planned in the mid-1960s with City Hall opening in 1968, this “public backyard” park ties together Scottsdale's civic buildings, sculptures, lawns, and shaded paths—perfect to explore after the tour." },
      { front: 'Marshall Way Arts District', back: "Home to Scottsdale's weekly ArtWalk, which began in 1975 and is now the longest-running in the country. Galleries here range from Western art to modern sculpture." },
      { front: 'Main Street Arts District', back: "Dozens of galleries in two historic blocks that grew up in the 1960s–70s. A slow stroll here reveals some of the region's finest Western and Native art." }
    ]
  },
  {
    id: 'ocotillo',
    label: 'Ocotillo – Sunset & Romance',
    cards: [
      { front: 'Waterfront Arches', back: 'These glowing arches frame Camelback Mountain at sunset. It’s one of Old Town’s most romantic photo spots.' },
      { front: 'Marshall Way Murals', back: 'A colorful corridor of modern desert art. At golden hour, the walls light up beautifully for photos.' },
      { front: 'Soleri Plaza', back: 'A peaceful space designed around sun, shadow, and quiet reflection. Perfect spot to return for a slow evening walk.' },
      { front: 'Scottsdale Waterfront', back: 'Soft lighting and canal reflections make this area shine at dusk. Great for a riverside cocktail after the tour.' },
      { front: 'Love Story Lane', back: 'This tucked-away alley is a longtime favorite for engagement photos. Easy to miss unless you know where to look.' }
    ]
  },
  {
    id: 'prickly',
    label: 'Prickly Pear – Sweets & Snacks',
    cards: [
      { front: 'Berdena’s', back: 'Known for small-batch coffee and handmade pastries. Their honey lavender latte is a local obsession.' },
      { front: 'Arcadia Farms Marketplace', back: 'A Scottsdale staple for 30+ years featuring baked goods and local gourmet items. The patio is a quiet escape in Old Town.' },
      { front: 'Fry Bread Lounge', back: 'Honors Indigenous culinary traditions with sweet and savory fry bread. It’s a taste of Arizona history.' },
      { front: 'Sprinkles ATM', back: 'Arizona’s first cupcake ATM—fresh treats 24/7. A fun little stop guests revisit on their own.' },
      { front: 'Sugar Bowl', back: 'A 1958 ice cream parlor with its original pink décor. Generations of locals have made this their dessert tradition.' }
    ]
  },
  {
    id: 'queen',
    label: 'Queen of the Desert – Holiday',
    cards: [
      { front: 'Civic Center Tree Walk', back: 'Dozens of holiday-lit trees turn this park into a glowing promenade. A perfect evening walk during the season.' },
      { front: 'Old Town Holiday Arch', back: 'A festive installation welcoming visitors each winter. Fantastic for family photos after dark.' },
      { front: 'Soleri Bridge Lights', back: 'Holiday lighting casts warm shadows across the plaza. A quieter, more reflective spot for evening visits.' },
      { front: 'Museum Courtyard Decor', back: 'Subtle desert-themed wreaths and lanterns bring Western charm. The adobe walls glow beautifully at dusk.' },
      { front: 'Warm Beverage Stop', back: 'Local pop-up vendors serve seasonal cocoa and spiced drinks. A cozy way to enjoy the cooler desert nights.' }
    ]
  },
  {
    id: 'senita',
    label: 'Senita – Taco Trail',
    cards: [
      { front: 'America’s Taco Shop', back: 'Famous for authentic Sonoran-style carne asada, marinated 24 hours. A cherished family recipe from Hermosillo.' },
      { front: 'Velvet Taco', back: 'Craft tacos inspired by global flavors—Korean BBQ to Nashville hot chicken. A modern twist on classic street food.' },
      { front: 'Mesquite Fresh Street Mex', back: 'Mesquite-grilled meats give everything a deep, smoky flavor. A Scottsdale original that locals swear by.' },
      { front: 'Fry Bread Stop', back: 'A nod to Indigenous culinary traditions of the Southwest. Warm, fluffy, and unforgettable.' },
      { front: 'Taco Alley', back: 'A stretch of Old Town with multiple quick-serve taco options. Perfect for a casual walkabout meal later.' }
    ]
  },
  {
    id: 'saguaro',
    label: 'Saguaro – Deep Dive',
    cards: [
      { front: 'Scottsdale Civic Center', back: 'A 1960s modernist park designed for festivals, art, and open-air gatherings. Great for exploring on foot after the tour.' },
      { front: 'Entertainment District', back: 'A lively cluster of patios, DJs, and lounges. A completely different energy after sunset.' },
      { front: 'Waterfront Promenade', back: 'This canal-side walk links art, dining, and shaded paths. A perfect route for a post-tour stroll.' },
      { front: 'Old Town Western Storefronts', back: 'Wood-beamed, low-slung Western Revival buildings from the 1950s–70s. They preserve the cowboy character Scottsdale was built on.' },
      { front: 'Soleri Plaza', back: 'A celebration of desert light and form. Architecture fans love to explore its shapes and shadows later.' },
      { front: 'Historic Old Town Square', back: "Home to some of Scottsdale's earliest shops, bars, and artisan businesses. A great area to wander and shop after the tour." },
      { front: 'Museum of the West', back: 'One of the region’s finest Western museums with rotating exhibits. Many guests return here for a longer visit.' }
    ]
  },
  {
    id: 'hidden',
    label: 'Hidden Gems',
    cards: [
      { front: 'Love Story Lane', back: 'A tucked-away alley known for engagement photos. Easy to miss unless you’ve been shown it.' },
      { front: 'Fourtillfour Alley', back: 'A quiet corridor behind a beloved coffee shop. Mornings bring vintage cars and great lighting.' },
      { front: 'Canal Undercrossings', back: 'Shadowed tunnels with surprising acoustics and mural art. A cool place to walk when the sun’s high.' },
      { front: 'Hidden Artist Studios', back: 'Small working studios scattered above Old Town shops. Artists often welcome drop-in visitors.' },
      { front: 'Copper Canopy Sculpture', back: 'Organic metalwork forming a tree-like silhouette. Beautiful shadow patterns throughout the day.' }
    ]
  },
  {
    id: 'romantic',
    label: 'Romantic Spots',
    cards: [
      { front: 'Waterfront Reflections', back: 'Canal lights shimmer against the water at dusk. One of the city’s most relaxing evening walks.' },
      { front: 'Marshall Way Murals at Sunset', back: 'Soft desert light brings out richer colors. Beautiful backdrop for couple photos.' },
      { front: 'Soleri Bridge Golden Hour', back: 'Warm tones and long shadows create dramatic silhouettes. Great spot to catch the last light.' },
      { front: 'Museum Courtyard', back: 'Quiet, warm, and architecturally stunning after hours. A peaceful escape steps from the action.' },
      { front: 'Old Town Lantern Walk', back: 'A short route of softly lit pathways and hidden corners. Romantic and usually uncrowded.' }
    ]
  },
  {
    id: 'micro',
    label: 'Quick Facts',
    cards: [
      { front: 'Old Adobe Mission', back: 'One of Old Town’s oldest buildings, hand-built in the 1910s.' },
      { front: 'Little Red Schoolhouse', back: 'The 1909 school that started Scottsdale’s education story.' },
      { front: 'Rusty Spur Saloon', back: 'A 1920s bank turned cowboy bar with live music nightly.' },
      { front: 'Soleri Bridge', back: 'An architectural sculpture marking the winter solstice.' },
      { front: 'Museum of the West', back: 'A top-tier Western art museum worth a full return visit.' },
      { front: 'Bronze Horse Fountain', back: 'Five Arabian horses celebrating Scottsdale’s equestrian heritage.' },
      { front: 'Waterfront Promenade', back: 'A scenic canal walk perfect for evening strolls.' },
      { front: 'Marshall Way Murals', back: 'A colorful corridor of Old Town’s best modern murals.' }
    ]
  }
];

export function getAllDeck(): Deck {
  return {
    id: 'all',
    label: 'All Highlights',
    cards: DECKS.flatMap((d) => d.cards),
  };
}


