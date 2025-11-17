const fs = require('fs');
const path = require('path');

// Shortened descriptions (10 seconds = ~20-30 words)
const shortened = {
  'Old Adobe Mission': "Hand-built by Mexican settlers from 1917 to 1933, this adobe church is one of Old Town's earliest landmarks. Step inside to see the quiet desert chapel.",
  'Soleri Bridge': "Designed by Italian architect Paolo Soleri and dedicated in 2010, this bridge marks the winter solstice through shadow and light. On December 21st, the sun aligns perfectly with its geometric patterns.",
  'Museum of the West': "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits.",
  'Bronze Horse Fountain': "Five bronze Arabian horses, sculpted by Bob Parks in 1989, honor Scottsdale's Arabian horse-breeding heritage. The fountain is one of downtown's most photographed landmarks.",
  'Civic Center Park': "This 'public backyard' park, opened in 1968, ties together Scottsdale's civic buildings, sculptures, and shaded paths. It hosts the annual Arts Festival and other cultural events.",
  'Marshall Way Arts District': "Home to Scottsdale's weekly ArtWalk, which began in 1975 and is now the longest-running in the country. Over 40 galleries participate in this vibrant art destination.",
  'Main Street Arts District': "Dozens of galleries in two historic blocks from the 1960s–70s represent the heart of Scottsdale's art scene. A slow stroll reveals fine Western and Native art.",
  'Waterfront Arches': "These glowing arches frame Camelback Mountain at sunset, creating one of Old Town's most romantic photo spots. The arches were installed in 2009 as part of the Waterfront development.",
  'Marshall Way Murals': "A colorful corridor of modern desert art that transforms Marshall Way into an open-air gallery. Over 20 murals span multiple blocks, painted by internationally recognized street artists.",
  'Soleri Plaza': "A peaceful space designed by architect Paolo Soleri as a meditation on desert time. The plaza features concrete forms that cast ever-changing shadows throughout the day.",
  'Scottsdale Waterfront': "Soft lighting and canal reflections make this area shine at dusk, creating a sophisticated urban oasis in the desert. The Waterfront was developed in 2008.",
  'Love Story Lane': "This tucked-away alley is a longtime favorite for engagement photos, hidden between two buildings. Easy to miss unless you know where to look.",
  "Berdena's": "Known for small-batch coffee and handmade pastries, Berdena's has become a cult favorite among locals since opening in 2018. The honey lavender latte is a local obsession.",
  'Arcadia Farms Marketplace': "A Scottsdale staple for 30+ years, Arcadia Farms has been serving baked goods and local gourmet items since 1993. The patio is a quiet escape in Old Town.",
  'Fry Bread Lounge': "Honors Indigenous culinary traditions with sweet and savory fry bread, serving a taste of Arizona history. The lounge is owned by a Navajo family with a five-generation recipe.",
  'Sprinkles ATM': "Arizona's first cupcake ATM, installed in 2014, offers fresh treats 24/7 from a vending machine that looks like a giant pink cupcake. It's become one of Scottsdale's most photographed landmarks.",
  'Sugar Bowl': "A 1958 ice cream parlor with its original pink décor, Sugar Bowl has been serving generations of locals. The building is one of the few remaining examples of 1950s Googie architecture in Scottsdale.",
  'Civic Center Tree Walk': "Dozens of holiday-lit trees turn this park into a glowing promenade during the holiday season. The tradition began in 1985 with just 12 trees and has grown to over 100 today.",
  'Old Town Holiday Arch': "A festive installation welcoming visitors each winter, the Holiday Arch has become one of Old Town's most iconic seasonal landmarks. Standing 20 feet tall, it's made of thousands of LED lights.",
  'Soleri Bridge Lights': "Holiday lighting casts warm shadows across the plaza during the winter season, transforming Paolo Soleri's architectural masterpiece into a festive gathering place. The installation was added in 2012.",
  'Museum Courtyard Decor': "Subtle desert-themed wreaths and lanterns bring Western charm to the Museum of the West courtyard during the holiday season. The adobe walls glow beautifully at dusk when the lanterns are lit.",
  'Warm Beverage Stop': "Local pop-up vendors serve seasonal cocoa and spiced drinks during the holiday season, creating a cozy way to enjoy the cooler desert nights. The pop-ups operate from late November through early January.",
  "America's Taco Shop": "Famous for authentic Sonoran-style carne asada, marinated 24 hours using a cherished family recipe from Hermosillo, Mexico. The restaurant was founded in 2010 by the Rodriguez family.",
  'Velvet Taco': "Craft tacos inspired by global flavors—from Korean BBQ to Nashville hot chicken—offer a modern twist on classic street food. The restaurant opened in 2018 and has become a Scottsdale favorite.",
  'Mesquite Fresh Street Mex': "Mesquite-grilled meats give everything a deep, smoky flavor at this Scottsdale original that locals swear by. The restaurant was founded in 2005 by a local chef.",
  'Fry Bread Stop': "A nod to Indigenous culinary traditions of the Southwest, serving warm, fluffy fry bread that's unforgettable. This food stand was opened in 2017 by a Native American family.",
  'Taco Alley': "A stretch of Old Town with multiple quick-serve taco options, Taco Alley has become a perfect destination for a casual walkabout meal. The alley hosts an annual 'Taco Fest' each spring.",
  'Scottsdale Civic Center': "A 1960s modernist park designed for festivals, art, and open-air gatherings. The park opened in 1968 and hosts over 50 events annually, from art festivals to outdoor concerts.",
  'Entertainment District': "A lively cluster of patios, DJs, and lounges that transforms Old Town into a vibrant nightlife destination after sunset. The district emerged organically in the late 1990s.",
  'Waterfront Promenade': "This canal-side walk links art, dining, and shaded paths, creating a perfect route for a post-tour stroll. The promenade spans over a mile and includes public art installations and restaurants.",
  'Old Town Western Storefronts': "Wood-beamed, low-slung Western Revival buildings from the 1950s–70s preserve the cowboy character that Scottsdale was built on. These buildings are now home to galleries, boutiques, and restaurants.",
  'Historic Old Town Square': "This square was the commercial heart of Scottsdale from the 1920s through the 1950s. Today, it's home to galleries, boutiques, and restaurants, but the architecture preserves that early 20th-century character.",
  'Little Red Schoolhouse': "Built in 1909, this was Scottsdale's first schoolhouse—one teacher, eight grades, 30 students in a single room. The teacher, Lulu Oatman, earned $75 a month. It's now a small museum.",
  'Rusty Spur Saloon': "This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. It became a saloon in 1955. Drop in later for live country music.",
  'Waterfront Reflections': "Canal lights shimmer against the water at dusk, creating one of the city's most relaxing evening walks along the Scottsdale Waterfront. The reflection effect is particularly beautiful during the 'golden hour'.",
  'Marshall Way Murals at Sunset': "Soft desert light brings out richer colors in the Marshall Way murals at sunset, creating a beautiful backdrop for couple photos. The murals were painted by internationally recognized street artists.",
  'Soleri Bridge Golden Hour': "Warm tones and long shadows create dramatic silhouettes at the Soleri Bridge during golden hour, making it a great spot to catch the last light of the day. The bridge's concrete forms cast ever-changing shadows.",
  'Museum Courtyard': "Quiet, warm, and architecturally stunning after hours, the Museum of the West courtyard offers a peaceful escape steps from the action of Old Town. The courtyard features adobe walls and desert plantings.",
  'Old Town Lantern Walk': "A short route of softly lit pathways and hidden corners, the Old Town Lantern Walk is romantic and usually uncrowded. The route was created in 2010 and connects several of the area's most beautiful spots.",
  'Fourtillfour Alley': "A quiet corridor behind a beloved coffee shop, Fourtillfour Alley has become a hidden gem for photographers and car enthusiasts. The alley is particularly popular in the mornings when vintage car owners gather.",
  'Canal Undercrossings': "Shadowed tunnels with surprising acoustics and mural art provide a cool place to walk when the sun's high. The tunnels have been transformed into art spaces by local muralists.",
  'Hidden Artist Studios': "Small working studios scattered above Old Town shops house artists who often welcome drop-in visitors. These studios are located in the second and third floors of historic buildings.",
  'Copper Canopy Sculpture': "Organic metalwork forming a tree-like silhouette, the Copper Canopy Sculpture creates beautiful shadow patterns throughout the day. The sculpture was installed in 2016 as part of a public art initiative.",
};

const dataPath = path.join(__dirname, '../lib/data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

// Replace each card's back text
for (const [front, newBack] of Object.entries(shortened)) {
  // Match the card with this front and replace its back
  const pattern = new RegExp(
    `(\\{ front: ['"]${front.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"], back: )"[^"]*(?:\\.[^"]*)*"`,
    'g'
  );
  content = content.replace(pattern, `$1"${newBack}"`);
}

fs.writeFileSync(dataPath, content, 'utf8');
console.log('✅ Shortened all card descriptions to ~10 seconds');

