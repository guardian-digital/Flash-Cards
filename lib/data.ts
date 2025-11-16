export type Card = { front: string; back: string };
export type Deck = { id: string; label: string; cards: Card[] };

export const DECKS: Deck[] = [
  {
    id: 'cholla',
    label: 'Cholla – Classic Highlights',
    cards: [
      { front: 'Old Adobe Mission', back: "Hand-built by Mexican settlers starting in 1917 and completed in 1933, this adobe church is one of Old Town's earliest landmarks. The builders used traditional methods—mixing mud, straw, and water, then forming bricks by hand. The original wood beams are saguaro ribs, a technique borrowed from Tohono O'odham builders. Local legend says the mission was built on sacred ground where Tohono O'odham people once held ceremonies, and some claim to hear faint drumming on quiet nights. Step inside later to see the quiet desert chapel where early Catholic services were held before Scottsdale had a formal church." },
      { front: 'Soleri Bridge', back: "Paolo Soleri spent decades designing this bridge, dedicated in 2010, to mark the winter solstice through shadow and light. It is one of Scottsdale's most photographed public-art pieces." },
      { front: 'Museum of the West', back: 'Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. The building itself is a work of art—desert masonry walls that echo ancient Hohokam techniques, with copper accents that patina in the Arizona sun. Inside, you\'ll find rare artifacts from the Apache Wars, original Frederic Remington bronzes, and rotating exhibits that tell untold stories of the frontier. The courtyard alone, with its adobe walls and desert plantings, is worth a return visit.' },
      { front: 'Bronze Horse Fountain', back: "Five bronze Arabian horses, sculpted by artist Bob Parks and donated in 1989, honor Scottsdale's Arabian horse-breeding boom that began in the 1950s. The horses represent the five major bloodlines that established Scottsdale as the Arabian capital of America. Each horse weighs over 1,200 pounds and was cast using the lost-wax method. Fun fact: locals have a playful myth that the horses come to life at midnight and gallop through Old Town—though no one's ever caught them in the act! The fountain's design mimics a desert arroyo, with water flowing between the horses' hooves—a detail most visitors miss. It's one of downtown's most photographed landmarks." },
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
      { front: 'Historic Old Town Square', back: "This square was the commercial heart of Scottsdale from the 1920s through the 1950s. The original buildings housed a general store, a blacksmith shop, and the town's first post office. Many of the storefronts still have their original wooden boardwalks and false-front facades—a design that made small buildings look more impressive to attract customers. The square was where farmers sold produce, where news was shared, and where the community gathered. Local folklore says that if you stand in the center of the square at sunset, you can still hear the echoes of horse-drawn wagons and the chatter of early settlers. Today, it's home to galleries, boutiques, and restaurants, but the architecture preserves that early 20th-century character." },
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
      { front: 'Old Adobe Mission', back: "Hand-built by Mexican settlers starting in 1917 and completed in 1933, this adobe church is one of Old Town's earliest landmarks. The builders used traditional methods—mixing mud, straw, and water, then forming bricks by hand. The original wood beams are saguaro ribs, a technique borrowed from Tohono O'odham builders. Local legend says the mission was built on sacred ground where Tohono O'odham people once held ceremonies, and some claim to hear faint drumming on quiet nights. Step inside later to see the quiet desert chapel where early Catholic services were held before Scottsdale had a formal church." },
      { front: 'Little Red Schoolhouse', back: 'Built in 1909, this was Scottsdale's first schoolhouse—one teacher, eight grades, 30 students in a single room. The teacher, Lulu Oatman, earned $75 a month and taught everything from reading to algebra. The building was moved twice before landing here, and the original bell still hangs in the belfry. Fun fact: students had to bring their own firewood in winter, and the school day started with everyone reciting the Pledge of Allegiance in unison. Some say if you visit on a quiet morning, you can still hear the echo of children's voices. Inside, you'll find desks from the era, slates, and photographs of those early students. It's now a small museum that reveals how this desert town first took shape.' },
      { front: 'Rusty Spur Saloon', back: 'This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. The bank closed during the Depression, and the building sat empty until 1955 when it became a saloon. The original bank vault door weighs 3,000 pounds and is still functional—bartenders use it to store liquor. The floorboards are original, and bullet holes in the ceiling are from New Year's celebrations in the 1960s. Local legend says the ghost of a bank teller who worked here in the 1920s still haunts the place—staff report cold spots near the vault and glasses moving on their own. Drop in later for live country music and real Old West atmosphere, and maybe you'll catch a glimpse of the past.' },
      { front: 'Soleri Bridge', back: 'An architectural sculpture marking the winter solstice.' },
      { front: 'Museum of the West', back: 'Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. The building itself is a work of art—desert masonry walls that echo ancient Hohokam techniques, with copper accents that patina in the Arizona sun. Inside, you'll find rare artifacts from the Apache Wars, original Frederic Remington bronzes, and rotating exhibits that tell untold stories of the frontier. The courtyard alone, with its adobe walls and desert plantings, is worth a return visit.' },
      { front: 'Bronze Horse Fountain', back: "Five bronze Arabian horses, sculpted by artist Bob Parks and donated in 1989, honor Scottsdale's Arabian horse-breeding boom that began in the 1950s. The horses represent the five major bloodlines that established Scottsdale as the Arabian capital of America. Each horse weighs over 1,200 pounds and was cast using the lost-wax method. Fun fact: locals have a playful myth that the horses come to life at midnight and gallop through Old Town—though no one's ever caught them in the act! The fountain's design mimics a desert arroyo, with water flowing between the horses' hooves—a detail most visitors miss. It's one of downtown's most photographed landmarks." },
      { front: 'Waterfront Promenade', back: 'A scenic canal walk perfect for evening strolls.' },
      { front: 'Marshall Way Murals', back: 'A colorful corridor of Old Town’s best modern murals.' }
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


