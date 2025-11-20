/**
 * Copyright (c) 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.
 * 
 * PROPRIETARY - Unauthorized use prohibited.
 * 
 * Single-file JavaScript for GitHub Pages deployment.
 * Contains flashcard data and application logic.
 */

// Deck data (grouped)
var DECKS = [
  {
    "id": "cholla",
    "label": "Cholla – Classic Highlights",
    "cards": [
      {
        "front": "Old Adobe Mission",
        "back": "Hand-built by Mexican settlers from 1917 to 1933, this adobe church is one of Old Town's earliest landmarks. Step inside to see the quiet desert chapel."
      },
      {
        "front": "Soleri Bridge",
        "back": "Designed by Italian architect Paolo Soleri and dedicated in 2010, this bridge marks the winter solstice through shadow and light. On December 21st, the sun aligns perfectly with its geometric patterns."
      },
      {
        "front": "Museum of the West",
        "back": "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits."
      },
      {
        "front": "Bronze Horse Fountain",
        "back": "Five bronze Arabian horses, sculpted by Bob Parks in 1989, honor Scottsdale's Arabian horse-breeding heritage. The fountain is one of downtown's most photographed landmarks."
      },
      {
        "front": "Civic Center Park",
        "back": "This 'public backyard' park, opened in 1968, ties together Scottsdale's civic buildings, sculptures, and shaded paths. It hosts the annual Arts Festival and other cultural events."
      },
      {
        "front": "Marshall Way Arts District",
        "back": "Home to Scottsdale's weekly ArtWalk, which began in 1975 and is now the longest-running in the country. Over 40 galleries participate in this vibrant art destination."
      },
      {
        "front": "Main Street Arts District",
        "back": "Dozens of galleries in two historic blocks from the 1960s–70s represent the heart of Scottsdale's art scene. A slow stroll reveals fine Western and Native art."
      }
    ]
  },
  {
    "id": "ocotillo",
    "label": "Ocotillo – Sunset & Romance",
    "cards": [
      {
        "front": "Waterfront Arches",
        "back": "These glowing arches frame Camelback Mountain at sunset, creating one of Old Town's most romantic photo spots. The arches were installed in 2009 as part of the Waterfront development."
      },
      {
        "front": "Marshall Way Murals",
        "back": "A colorful corridor of modern desert art that transforms Marshall Way into an open-air gallery. Over 20 murals span multiple blocks, painted by internationally recognized street artists."
      },
      {
        "front": "Soleri Plaza",
        "back": "A peaceful space designed by architect Paolo Soleri as a meditation on desert time. The plaza features concrete forms that cast ever-changing shadows throughout the day."
      },
      {
        "front": "Scottsdale Waterfront",
        "back": "Soft lighting and canal reflections make this area shine at dusk, creating a sophisticated urban oasis in the desert. The Waterfront was developed in 2008."
      },
      {
        "front": "Love Story Lane",
        "back": "This tucked-away alley is a longtime favorite for engagement photos, hidden between two buildings. Easy to miss unless you know where to look."
      }
    ]
  },
  {
    "id": "prickly",
    "label": "Prickly Pear – Sweets & Snacks",
    "cards": [
      {
        "front": "Berdena's",
        "back": "Known for small-batch coffee and handmade pastries, Berdena's has become a cult favorite among locals since opening in 2018. The honey lavender latte is a local obsession."
      },
      {
        "front": "Arcadia Farms Marketplace",
        "back": "A Scottsdale staple for 30+ years, Arcadia Farms has been serving baked goods and local gourmet items since 1993. The patio is a quiet escape in Old Town."
      },
      {
        "front": "Fry Bread Lounge",
        "back": "Honors Indigenous culinary traditions with sweet and savory fry bread, serving a taste of Arizona history. The lounge is owned by a Navajo family with a five-generation recipe."
      },
      {
        "front": "Sprinkles ATM",
        "back": "Arizona's first cupcake ATM, installed in 2014, offers fresh treats 24/7 from a vending machine that looks like a giant pink cupcake. It's become one of Scottsdale's most photographed landmarks."
      },
      {
        "front": "Sugar Bowl",
        "back": "A 1958 ice cream parlor with its original pink décor, Sugar Bowl has been serving generations of locals. The building is one of the few remaining examples of 1950s Googie architecture in Scottsdale."
      }
    ]
  },
  {
    "id": "queen",
    "label": "Queen of the Desert – Holiday",
    "cards": [
      {
        "front": "Civic Center Tree Walk",
        "back": "Dozens of holiday-lit trees turn this park into a glowing promenade during the holiday season. The tradition began in 1985 with just 12 trees and has grown to over 100 today."
      },
      {
        "front": "Old Town Holiday Arch",
        "back": "A festive installation welcoming visitors each winter, the Holiday Arch has become one of Old Town's most iconic seasonal landmarks. Standing 20 feet tall, it's made of thousands of LED lights."
      },
      {
        "front": "Soleri Bridge Lights",
        "back": "Holiday lighting casts warm shadows across the plaza during the winter season, transforming Paolo Soleri's architectural masterpiece into a festive gathering place. The installation was added in 2012."
      },
      {
        "front": "Museum Courtyard Decor",
        "back": "Subtle desert-themed wreaths and lanterns bring Western charm to the Museum of the West courtyard during the holiday season. The adobe walls glow beautifully at dusk when the lanterns are lit."
      },
      {
        "front": "Warm Beverage Stop",
        "back": "Local pop-up vendors serve seasonal cocoa and spiced drinks during the holiday season, creating a cozy way to enjoy the cooler desert nights. The pop-ups operate from late November through early January."
      }
    ]
  },
  {
    "id": "senita",
    "label": "Senita – Taco Trail",
    "cards": [
      {
        "front": "America's Taco Shop",
        "back": "Famous for authentic Sonoran-style carne asada, marinated 24 hours using a cherished family recipe from Hermosillo, Mexico. The restaurant was founded in 2010 by the Rodriguez family."
      },
      {
        "front": "Velvet Taco",
        "back": "Craft tacos inspired by global flavors—from Korean BBQ to Nashville hot chicken—offer a modern twist on classic street food. The restaurant opened in 2018 and has become a Scottsdale favorite."
      },
      {
        "front": "Mesquite Fresh Street Mex",
        "back": "Mesquite-grilled meats give everything a deep, smoky flavor at this Scottsdale original that locals swear by. The restaurant was founded in 2005 by a local chef."
      },
      {
        "front": "Fry Bread Stop",
        "back": "A nod to Indigenous culinary traditions of the Southwest, serving warm, fluffy fry bread that's unforgettable. This food stand was opened in 2017 by a Native American family."
      },
      {
        "front": "Taco Alley",
        "back": "A stretch of Old Town with multiple quick-serve taco options, Taco Alley has become a perfect destination for a casual walkabout meal. The alley hosts an annual 'Taco Fest' each spring."
      }
    ]
  },
  {
    "id": "saguaro",
    "label": "Saguaro – Deep Dive",
    "cards": [
      {
        "front": "Scottsdale Civic Center",
        "back": "A 1960s modernist park designed for festivals, art, and open-air gatherings. The park opened in 1968 and hosts over 50 events annually, from art festivals to outdoor concerts."
      },
      {
        "front": "Entertainment District",
        "back": "A lively cluster of patios, DJs, and lounges that transforms Old Town into a vibrant nightlife destination after sunset. The district emerged organically in the late 1990s."
      },
      {
        "front": "Waterfront Promenade",
        "back": "This canal-side walk links art, dining, and shaded paths, creating a perfect route for a post-tour stroll. The promenade spans over a mile and includes public art installations and restaurants."
      },
      {
        "front": "Old Town Western Storefronts",
        "back": "Wood-beamed, low-slung Western Revival buildings from the 1950s–70s preserve the cowboy character that Scottsdale was built on. These buildings are now home to galleries, boutiques, and restaurants."
      },
      {
        "front": "Soleri Plaza",
        "back": "A peaceful space designed by architect Paolo Soleri as a meditation on desert time. The plaza features concrete forms that cast ever-changing shadows throughout the day."
      },
      {
        "front": "Historic Old Town Square",
        "back": "This square was the commercial heart of Scottsdale from the 1920s through the 1950s. Today, it's home to galleries, boutiques, and restaurants, but the architecture preserves that early 20th-century character."
      },
      {
        "front": "Museum of the West",
        "back": "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits."
      }
    ]
  },
  {
    "id": "hidden",
    "label": "Hidden Gems",
    "cards": [
      {
        "front": "Love Story Lane",
        "back": "This tucked-away alley is a longtime favorite for engagement photos, hidden between two buildings. Easy to miss unless you know where to look."
      },
      {
        "front": "Fourtillfour Alley",
        "back": "A quiet corridor behind a beloved coffee shop, Fourtillfour Alley has become a hidden gem for photographers and car enthusiasts. The alley is particularly popular in the mornings when vintage car owners gather."
      },
      {
        "front": "Canal Undercrossings",
        "back": "Shadowed tunnels with surprising acoustics and mural art provide a cool place to walk when the sun's high. The tunnels have been transformed into art spaces by local muralists."
      },
      {
        "front": "Hidden Artist Studios",
        "back": "Small working studios scattered above Old Town shops house artists who often welcome drop-in visitors. These studios are located in the second and third floors of historic buildings."
      },
      {
        "front": "Copper Canopy Sculpture",
        "back": "Organic metalwork forming a tree-like silhouette, the Copper Canopy Sculpture creates beautiful shadow patterns throughout the day. The sculpture was installed in 2016 as part of a public art initiative."
      }
    ]
  },
  {
    "id": "romantic",
    "label": "Romantic Spots",
    "cards": [
      {
        "front": "Waterfront Reflections",
        "back": "Canal lights shimmer against the water at dusk, creating one of the city's most relaxing evening walks along the Scottsdale Waterfront. The reflection effect is particularly beautiful during the 'golden hour'."
      },
      {
        "front": "Marshall Way Murals at Sunset",
        "back": "Soft desert light brings out richer colors in the Marshall Way murals at sunset, creating a beautiful backdrop for couple photos. The murals were painted by internationally recognized street artists."
      },
      {
        "front": "Soleri Bridge Golden Hour",
        "back": "Warm tones and long shadows create dramatic silhouettes at the Soleri Bridge during golden hour, making it a great spot to catch the last light of the day. The bridge's concrete forms cast ever-changing shadows."
      },
      {
        "front": "Museum Courtyard",
        "back": "Quiet, warm, and architecturally stunning after hours, the Museum of the West courtyard offers a peaceful escape steps from the action of Old Town. The courtyard features adobe walls and desert plantings."
      },
      {
        "front": "Old Town Lantern Walk",
        "back": "A short route of softly lit pathways and hidden corners, the Old Town Lantern Walk is romantic and usually uncrowded. The route was created in 2010 and connects several of the area's most beautiful spots."
      }
    ]
  },
  {
    "id": "micro",
    "label": "Quick Facts",
    "cards": [
      {
        "front": "Old Adobe Mission",
        "back": "Hand-built by Mexican settlers from 1917 to 1933, this adobe church is one of Old Town's earliest landmarks. Step inside to see the quiet desert chapel."
      },
      {
        "front": "Little Red Schoolhouse",
        "back": "Built in 1909, this was Scottsdale's first schoolhouse—one teacher, eight grades, 30 students in a single room. The teacher, Lulu Oatman, earned $75 a month. It's now a small museum."
      },
      {
        "front": "Rusty Spur Saloon",
        "back": "This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. It became a saloon in 1955. Drop in later for live country music."
      },
      {
        "front": "Soleri Bridge",
        "back": "Designed by Italian architect Paolo Soleri and dedicated in 2010, this bridge marks the winter solstice through shadow and light. On December 21st, the sun aligns perfectly with its geometric patterns."
      },
      {
        "front": "Museum of the West",
        "back": "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. Inside you'll find rare artifacts, original Frederic Remington bronzes, and rotating exhibits."
      },
      {
        "front": "Bronze Horse Fountain",
        "back": "Five bronze Arabian horses, sculpted by Bob Parks in 1989, honor Scottsdale's Arabian horse-breeding heritage. The fountain is one of downtown's most photographed landmarks."
      },
      {
        "front": "Waterfront Promenade",
        "back": "This canal-side walk links art, dining, and shaded paths, creating a perfect route for a post-tour stroll. The promenade spans over a mile and includes public art installations and restaurants."
      },
      {
        "front": "Marshall Way Murals",
        "back": "A colorful corridor of modern desert art that transforms Marshall Way into an open-air gallery. Over 20 murals span multiple blocks, painted by internationally recognized street artists."
      }
    ]
  },
  {
    "id": "historic",
    "label": "Historic Old Town District",
    "cards": [
      {
        "front": "Old Adobe Mission",
        "back": "Hand-built by Mexican settlers from 1917 to 1933, this adobe church is one of Old Town's earliest landmarks. Step inside to see the quiet desert chapel."
      },
      {
        "front": "Little Red Schoolhouse",
        "back": "Built in 1909, this was Scottsdale's first schoolhouse—one teacher, eight grades, 30 students in a single room. The teacher, Lulu Oatman, earned $75 a month. It's now a small museum."
      },
      {
        "front": "Rusty Spur Saloon",
        "back": "This building started as the Farmers & Merchants Bank in 1921, complete with a walk-in vault that still sits behind the bar. It became a saloon in 1955. Drop in later for live country music nightly."
      },
      {
        "front": "Historic Old Town Square",
        "back": "This square was the commercial heart of Scottsdale from the 1920s through the 1950s. Today, it's home to galleries, boutiques, and restaurants, but the architecture preserves that early 20th-century character."
      },
      {
        "front": "Western-Wear Boutiques",
        "back": "Historic Old Town is home to authentic Western-wear shops offering cowboy boots, hats, and traditional Western attire. These stores have been serving locals and visitors for decades, preserving Scottsdale's cowboy heritage."
      },
      {
        "front": "Native American Jewelry Shops",
        "back": "Handcrafted turquoise, silver, and traditional Native American jewelry can be found throughout Historic Old Town. These shops feature authentic pieces from local and regional Native artists, representing centuries of Southwestern craftsmanship."
      },
      {
        "front": "Historic Western Revival Storefronts",
        "back": "Wood-beamed, low-slung Western Revival buildings from the 1950s–70s preserve the cowboy character that Scottsdale was built on. These buildings are now home to galleries, boutiques, and restaurants, maintaining the area's historic charm."
      }
    ]
  },
  {
    "id": "fashion",
    "label": "Scottsdale Fashion Square",
    "cards": [
      {
        "front": "Nordstrom & Neiman Marcus",
        "back": "Scottsdale Fashion Square features flagship department stores Nordstrom and Neiman Marcus, offering luxury fashion, beauty, and home goods. These anchor stores have been part of the mall since its major expansion in the 1990s."
      },
      {
        "front": "Luxury Brands",
        "back": "The mall houses an impressive collection of luxury retailers including Louis Vuitton, Gucci, Tiffany & Co., Burberry, and Cartier. These flagship stores offer the latest collections from the world's most prestigious fashion houses."
      },
      {
        "front": "Apple Store",
        "back": "The Apple Store at Fashion Square provides the latest technology products, accessories, and expert support. It's one of the largest Apple retail locations in the Southwest, featuring the full range of Apple devices and services."
      },
      {
        "front": "200+ Premium Retailers",
        "back": "With over 200 premium retailers, Scottsdale Fashion Square is the largest shopping destination in the Southwest. The mall spans 1.9 million square feet and offers everything from high-end fashion to specialty stores."
      },
      {
        "front": "Fine Dining Restaurants",
        "back": "Fashion Square features several fine dining restaurants offering sophisticated cuisine in elegant settings. These restaurants provide a perfect complement to a day of luxury shopping, with menus crafted by renowned chefs."
      },
      {
        "front": "Luxury Cinema",
        "back": "The mall includes a luxury cinema with premium seating, enhanced sound systems, and gourmet concessions. It's the perfect place to catch the latest films in comfort and style after a day of shopping."
      },
      {
        "front": "Multiple Casual Dining Options",
        "back": "In addition to fine dining, Fashion Square offers numerous casual dining options ranging from quick-service restaurants to sit-down cafes. There's something to satisfy every taste and budget."
      },
      {
        "front": "Fashion Square Location",
        "back": "Located at 7014 E Camelback Rd, Scottsdale Fashion Square is easily accessible from Old Town, just a short drive or ride away. The mall's central location makes it a convenient destination for visitors exploring the area."
      }
    ]
  }
];

// All-decks computed
function uniqueByFront(cards){
  var seen = Object.create(null);
  var out = [];
  for (var i=0;i<cards.length;i++){
    var f = cards[i].front || '';
    if (!seen[f]){
      seen[f] = true;
      out.push(cards[i]);
    }
  }
  return out;
}
var allDeck = {
  id: "all",
  label: "All Highlights",
  cards: uniqueByFront(DECKS.reduce(function(acc, d){ return acc.concat(d.cards); }, []))
};

// Elements
var deckSelect=document.getElementById('deckSelect');
var pagerEl=document.getElementById('pager');
var cardEl=document.getElementById('card');
var frontDeckLabel=document.getElementById('frontDeckLabel');
var searchInput=document.getElementById('searchInput');
var searchClear=document.getElementById('searchClear');
var searchIcon=document.getElementById('searchIcon');
var searchResults=document.getElementById('searchResults');
var noResults=document.getElementById('noResults');
var frontTitleEl=document.getElementById('frontTitle');
var backTitleEl=document.getElementById('backTitle');
var backTextEl=document.getElementById('backText');
var prevBtn=document.getElementById('prevBtn');
var nextBtn=document.getElementById('nextBtn');
var flipBtn=document.getElementById('flipBtn');
var voiceBtn=document.getElementById('voiceBtn');
var shareBtn=document.getElementById('shareBtn');
var shareModal=document.getElementById('shareModal');
var closeShareModal=document.getElementById('closeShareModal');
var shareUrlInput=document.getElementById('shareUrlInput');
var shareQrCode=document.getElementById('shareQrCode');
var shareCardTitle=document.getElementById('shareCardTitle');
var copyShareBtn=document.getElementById('copyShareBtn');
var hzPrev=document.getElementById('hzPrev');
var hzNext=document.getElementById('hzNext');
var hzFlip=document.getElementById('hzFlip');

// State
var currentDeck=allDeck;
var baseDeck=allDeck;
var searchQuery='';
var index=0; var flipped=false;
var narrationEnabled=false;

// Favorites management
var FAVORITES_KEY='flashcards-favorites';
function getFavorites(){
  try{
    var stored=localStorage.getItem(FAVORITES_KEY);
    if(!stored) return new Set();
    return new Set(JSON.parse(stored));
  }catch{
    return new Set();
  }
}
function saveFavorites(favorites){
  try{
    localStorage.setItem(FAVORITES_KEY,JSON.stringify(Array.from(favorites)));
  }catch(e){
    console.error('Failed to save favorites:',e);
  }
}
function isFavorited(card){
  return getFavorites().has(card.front);
}
function toggleFavorite(card){
  var favorites=getFavorites();
  if(favorites.has(card.front)){
    favorites.delete(card.front);
  }else{
    favorites.add(card.front);
  }
  saveFavorites(favorites);
  return favorites.has(card.front);
}
function getFavoritedCards(cards){
  var favorites=getFavorites();
  return cards.filter(function(card){ return favorites.has(card.front); });
}

// Deck selector change handler
function handleDeckChange(e){ 
  var selectedId = e.target.value;
  console.log('Deck selected:', selectedId);
  setDeckById(selectedId); 
}

// Populate selector
function populateDeckSelector(){
  if(!deckSelect){
    console.error('Deck selector element not found!');
    return;
  }
  
  // Remove existing listener if any
  deckSelect.removeEventListener('change', handleDeckChange);
  
  // Clear any existing options
  deckSelect.innerHTML='';
  
  // Add "All Highlights" option
  var allOption=document.createElement('option');
  allOption.value='all';
  allOption.textContent='All Highlights';
  deckSelect.appendChild(allOption);
  
  // Add "Favorites" option
  var favOption=document.createElement('option');
  favOption.value='favorites';
  favOption.textContent='⭐ Favorites';
  deckSelect.appendChild(favOption);
  
  // Add each deck option
  DECKS.forEach(function(deck){
    var opt=document.createElement('option');
    opt.value=deck.id;
    opt.textContent=deck.label;
    deckSelect.appendChild(opt);
  });
  
  deckSelect.value='all';
  console.log('Deck selector populated with', DECKS.length + 1, 'options:', DECKS.map(function(d){return d.label;}).join(', '));
  console.log('Selector element:', deckSelect);
  console.log('Selector options count:', deckSelect.options.length);
  
  // Attach event listeners
  deckSelect.addEventListener('change', handleDeckChange);
  deckSelect.addEventListener('click', function(e){
    console.log('Selector clicked, current value:', e.target.value);
  });
  deckSelect.addEventListener('focus', function(){
    console.log('Selector focused');
  });
}

// Initialize when DOM is ready
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',populateDeckSelector);
}else{
  populateDeckSelector();
}

// Simple fuzzy search function
function fuzzySearch(cards,query){
  if(!query || !query.trim()){ return cards; }
  var normalizedQuery=query.toLowerCase().trim();
  var queryWords=normalizedQuery.split(/\s+/).filter(function(w){ return w.length>0; });
  return cards.filter(function(card){
    var frontText=(card.front||'').toLowerCase();
    var backText=(card.back||'').toLowerCase();
    var fullText=frontText+' '+backText;
    return queryWords.every(function(word){ return fullText.indexOf(word)!==-1; });
  });
}

function applySearchFilter(){
  if(!searchQuery.trim()){
    currentDeck=baseDeck;
  }else{
    var filteredCards=fuzzySearch(baseDeck.cards,searchQuery);
    currentDeck={
      id:baseDeck.id,
      label:baseDeck.label,
      cards:filteredCards
    };
  }
  if(index>=currentDeck.cards.length && currentDeck.cards.length>0){
    index=0;
  }else if(currentDeck.cards.length===0){
    index=0;
  }
  render();
  updateSearchUI();
}

function updateSearchUI(){
  if(searchClear && searchIcon){
    if(searchQuery.trim()){
      searchClear.style.display='block';
      searchIcon.classList.add('hidden');
    }else{
      searchClear.style.display='none';
      searchIcon.classList.remove('hidden');
    }
  }
  if(searchResults){
    if(searchQuery.trim() && currentDeck.cards.length>0){
      searchResults.textContent=' ('+currentDeck.cards.length+' result'+(currentDeck.cards.length!==1?'s':'')+')';
      searchResults.style.display='inline';
    }else{
      searchResults.style.display='none';
    }
  }
  if(noResults){
    if(searchQuery.trim() && currentDeck.cards.length===0){
      noResults.style.display='block';
    }else{
      noResults.style.display='none';
    }
  }
}

function setDeckById(id){
  searchQuery='';
  if(searchInput){ searchInput.value=''; }
  var found;
  if(id==='favorites'){
    var allCards=allDeck.cards;
    var favoritedCards=getFavoritedCards(allCards);
    found={id:'favorites',label:'⭐ Favorites',cards:favoritedCards};
  }else{
    found = (id==='all') ? allDeck : (DECKS.find(function(d){return d.id===id;}) || allDeck);
  }
  if(!found){
    console.error('Deck not found:', id);
    found = allDeck;
  }
  baseDeck = found;
  applySearchFilter();
  if(frontDeckLabel){ frontDeckLabel.textContent = found.label; }
  if(narrationEnabled) speakCurrent();
}

// Generate slug from card front text
function slugify(text){
  return text.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

// Get best available voice for SpeechSynthesis
function getBestVoice(){
  if(!window.speechSynthesis) return null;
  var voices=window.speechSynthesis.getVoices();
  if(!voices||!voices.length) return null;
  // Prefer natural-sounding voices (Google, Microsoft, Amazon)
  var preferred=voices.find(function(v){ return /google|microsoft|amazon|samantha|alex/i.test(v.name); });
  if(preferred) return preferred;
  // Fallback to first en-US voice
  return voices.find(function(v){ return /en-us/i.test(v.lang); }) || voices[0];
}

var currentAudio=null;

function speakCurrent(){
  if(!narrationEnabled) return;
  var cards=currentDeck.cards; if(!cards||!cards.length) return;
  var item = cards[index];
  if(!item) return;
  
  // Stop any current audio/speech
  if(currentAudio){ currentAudio.pause(); currentAudio=null; }
  if(window.speechSynthesis){ window.speechSynthesis.cancel(); }
  
  // Try pre-generated MP3 first
  var slug=slugify(item.front);
  var audio=new Audio('audio/'+slug+'.mp3');
  audio.onerror=function(){
    // Fallback to improved SpeechSynthesis
    if(!window.speechSynthesis){
      return;
    }
    try{
      var utter=new SpeechSynthesisUtterance(item.front+'. '+item.back);
      var voice=getBestVoice();
      if(voice) utter.voice=voice;
      utter.rate=0.92; utter.pitch=1.0; utter.lang='en-US';
      
      // Track when SpeechSynthesis finishes
      utter.onend=function(){
        currentAudio=null;
      };
      
      window.speechSynthesis.speak(utter);
    }catch(e){
      // SpeechSynthesis failed
    }
  };
  audio.onended=function(){ 
    currentAudio=null;
  };
  currentAudio=audio;
  audio.play().catch(function(){ 
    currentAudio=null;
    // If play fails, audio.onerror will handle it
  });
}
function toggleVoice(){
  // Stop any current audio/speech
  if(currentAudio){ currentAudio.pause(); currentAudio=null; }
  if(window.speechSynthesis){ window.speechSynthesis.cancel(); }
  
  if(!window.speechSynthesis){
    narrationEnabled=false; voiceBtn.disabled=true; voiceBtn.textContent='Voice N/A'; return;
  }
  narrationEnabled=!narrationEnabled;
  if(!narrationEnabled){ 
    voiceBtn.classList.remove('active'); 
    voiceBtn.textContent='Voice Off';
  }else { 
    voiceBtn.classList.add('active'); 
    voiceBtn.textContent='Voice On'; 
    speakCurrent();
  }
}

frontDeckLabel.textContent='All Highlights';
function render(){
  var cards=currentDeck.cards || [];
  if(!cards.length){ frontTitleEl.textContent='No cards'; backTitleEl.textContent='No cards'; backTextEl.textContent='This deck is empty.'; pagerEl.textContent='0 / 0'; if(favoriteBtn){favoriteBtn.style.display='none';} return; }
  if(index<0) index=0; if(index>=cards.length) index=cards.length-1;
  var item = cards[index];
  frontTitleEl.textContent=item.front; backTitleEl.textContent=item.front; backTextEl.textContent=item.back;
  pagerEl.textContent=(index+1)+' / '+cards.length;
  if(flipped){ cardEl.classList.add('flipped'); cardEl.setAttribute('aria-pressed','true'); }
  else { cardEl.classList.remove('flipped'); cardEl.setAttribute('aria-pressed','false'); }
  
  // Update favorite button
  if(favoriteBtn && item){
    favoriteBtn.style.display='flex';
    var favorited=isFavorited(item);
    if(favorited){
      favoriteBtn.classList.add('active');
      favoriteBtn.setAttribute('aria-label','Remove from favorites');
    }else{
      favoriteBtn.classList.remove('active');
      favoriteBtn.setAttribute('aria-label','Add to favorites');
    }
  }
  
  // Dynamically size card to fit all content without scrolling
  setTimeout(function(){
    var front=document.getElementById('front');
    var back=document.getElementById('back');
    if(front && back && cardEl){
      // scrollHeight works even with backface-visibility hidden
      var frontHeight=front.scrollHeight;
      var backHeight=back.scrollHeight;
      var maxHeight=Math.max(frontHeight,backHeight);
      
      // Set card height to fit the taller content (add buffer for padding)
      if(maxHeight>0){
        var cardHeight=maxHeight+40;
        cardEl.style.height=cardHeight+'px';
        cardEl.style.minHeight=cardHeight+'px';
      }
    }
  },50);
}
function flip(){ flipped=!flipped; render(); }
function next(){
  var cards=currentDeck.cards||[]; if(!cards.length) return;
  index=(index+1)%cards.length;
  flipped=false; render(); 
  if(narrationEnabled){ speakCurrent(); }
}
function prev(){
  var cards=currentDeck.cards||[]; if(!cards.length) return;
  index=(index-1+cards.length)%cards.length; flipped=false; render(); if(narrationEnabled) speakCurrent();
}

// Events
cardEl.addEventListener('click',flip); flipBtn.addEventListener('click',flip);
nextBtn.addEventListener('click',next); prevBtn.addEventListener('click',prev);
voiceBtn.addEventListener('click',toggleVoice);
if(favoriteBtn){
  favoriteBtn.addEventListener('click',function(e){
    e.stopPropagation();
    var cards=currentDeck.cards||[];
    if(!cards.length) return;
    var item=cards[index];
    if(!item) return;
    var newFavorited=toggleFavorite(item);
    
    // If on favorites deck and unfavorited, remove from current deck
    if(currentDeck.id==='favorites' && !newFavorited){
      var updatedCards=currentDeck.cards.filter(function(c){return c.front!==item.front;});
      currentDeck={id:'favorites',label:'⭐ Favorites',cards:updatedCards};
      if(index>=updatedCards.length){
        index=Math.max(0,updatedCards.length-1);
      }
    }
    render();
  });
}
hzFlip.addEventListener('click',flip); hzNext.addEventListener('click',next); hzPrev.addEventListener('click',prev);
cardEl.addEventListener('keydown',function(e){ if(e.key===' '||e.key==='Enter'){ e.preventDefault(); flip(); } if(e.key==='ArrowRight'){ next(); } if(e.key==='ArrowLeft'){ prev(); } });
var startX=0,startY=0,moved=false; 
function touchStart(x,y){ 
  startX=x; 
  startY=y; 
  moved=false; 
} 
function touchMove(e,x,y){ 
  if(!startX||!startY)return;
  var dx=Math.abs(x-startX);
  var dy=Math.abs(y-startY);
  if(dx>5){ 
    moved=true; 
    if(dx>dy*1.5){ 
      e.preventDefault(); 
      e.stopPropagation(); 
    } 
  }
} 
function touchEnd(e,x,y){ 
  if(!startX||!startY)return;
  var dx=x-startX; 
  var dy=y-startY; 
  var absDx=Math.abs(dx);
  var absDy=Math.abs(dy);
  // Lowered threshold from 50px to 30px for better responsiveness
  if(absDx>absDy*1.2&&absDx>30){ 
    e.preventDefault();
    e.stopPropagation();
    if(dx<0){ next(); } 
    else { prev(); } 
  } else { 
    if(!moved&&absDx<10&&absDy<10) flip(); 
  } 
  startX=0;
  startY=0;
  moved=false;
}
cardEl.addEventListener('touchstart',function(e){ 
  var t=e.touches[0]; 
  if(t){ touchStart(t.clientX,t.clientY); }
},{passive:true});
cardEl.addEventListener('touchmove',function(e){ 
  var t=e.touches[0]; 
  if(!t) return;
  touchMove(e,t.clientX,t.clientY); 
},{passive:false});
cardEl.addEventListener('touchend',function(e){ 
  var t=e.changedTouches[0]; 
  if(t){ touchEnd(e,t.clientX,t.clientY); }
},{passive:false});

// Load voices when available (Chrome needs this)
if(window.speechSynthesis){
  window.speechSynthesis.getVoices(); // Trigger load
  window.speechSynthesis.onvoiceschanged=function(){ window.speechSynthesis.getVoices(); };
}

// Share functionality
function generateShareUrl(deckId,cardIndex,language){
  var baseUrl=window.location.origin+window.location.pathname;
  var params=new URLSearchParams();
  params.set('deck',deckId);
  params.set('card',String(cardIndex));
  if(language){ params.set('lang',language); }
  return baseUrl+'?'+params.toString();
}

function parseShareUrl(){
  var params=new URLSearchParams(window.location.search);
  var deckId=params.get('deck');
  var cardIndexParam=params.get('card');
  var language=params.get('lang');
  var cardIndex=cardIndexParam?parseInt(cardIndexParam,10):null;
  return{
    deckId:deckId,
    cardIndex:cardIndex!==null&&!isNaN(cardIndex)?cardIndex:null,
    language:language
  };
}

async function copyToClipboard(text){
  if(navigator.clipboard){
    try{
      await navigator.clipboard.writeText(text);
      return true;
    }catch{
      return false;
    }
  }else{
    try{
      var textArea=document.createElement('textarea');
      textArea.value=text;
      textArea.style.position='fixed';
      textArea.style.opacity='0';
      document.body.appendChild(textArea);
      textArea.select();
      var success=document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }catch{
      return false;
    }
  }
}

function showShareModal(){
  if(!shareModal||!currentDeck.cards||!currentDeck.cards.length)return;
  var item=currentDeck.cards[index];
  if(!item)return;
  var shareUrl=generateShareUrl(currentDeck.id,index);
  if(shareQrCode){
    shareQrCode.src='https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=2&data='+encodeURIComponent(shareUrl);
  }
  if(shareUrlInput){ shareUrlInput.value=shareUrl; }
  if(shareCardTitle){ shareCardTitle.textContent='"'+item.front+'"'; }
  if(shareModal){ shareModal.style.display='flex'; }
}

function hideShareModal(){
  if(shareModal){ shareModal.style.display='none'; }
}

if(shareBtn){
  shareBtn.addEventListener('click',showShareModal);
}

if(closeShareModal&&shareModal){
  closeShareModal.addEventListener('click',hideShareModal);
}

if(shareModal){
  shareModal.addEventListener('click',function(e){
    if(e.target===shareModal){ hideShareModal(); }
  });
}

if(copyShareBtn&&shareUrlInput){
  copyShareBtn.addEventListener('click',async function(){
    var url=shareUrlInput.value;
    var success=await copyToClipboard(url);
    if(success){
      copyShareBtn.textContent='Copied!';
      copyShareBtn.style.background='#16a34a';
      setTimeout(function(){
        copyShareBtn.textContent='Copy';
        copyShareBtn.style.background='var(--accent)';
      },2000);
    }
  });
}

// Handle deep linking from share URLs
var shareParams=parseShareUrl();
if(shareParams.deckId&&shareParams.cardIndex!==null){
  if(shareParams.language&&['en','es','fr','de'].indexOf(shareParams.language)!==-1){
    // Language preference would be set here if we had language support in single-file version
  }
  setDeckById(shareParams.deckId);
  setTimeout(function(){
    if(shareParams.cardIndex!==null){
      index=shareParams.cardIndex;
      render();
    }
    var url=new URL(window.location.href);
    url.search='';
    window.history.replaceState({},'',url.toString());
  },100);
}else{
  setDeckById('all');
}

// Search functionality
if(searchInput){
  searchInput.addEventListener('input',function(e){
    searchQuery=e.target.value||'';
    applySearchFilter();
  });
  searchInput.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      searchQuery='';
      searchInput.value='';
      applySearchFilter();
      searchInput.blur();
    }
  });
}

if(searchClear){
  searchClear.addEventListener('click',function(){
    searchQuery='';
    if(searchInput){ searchInput.value=''; }
    applySearchFilter();
    if(searchInput){ searchInput.focus(); }
  });
}

// Register service worker for PWA
if('serviceWorker' in navigator){
  window.addEventListener('load',function(){
    navigator.serviceWorker.register('sw.js')
      .then(function(registration){
        console.log('Service Worker registered:',registration.scope);
      })
      .catch(function(error){
        console.warn('Service Worker registration failed:',error);
      });
  });
}

// Review modal functionality
var reviewBtn=document.getElementById('reviewBtn');
var reviewModal=document.getElementById('reviewModal');
var closeReviewModal=document.getElementById('closeReviewModal');
var qrCode=document.getElementById('qrCode');
var GOOGLE_REVIEWS_URL='https://g.page/r/CXN08ldPlfATEBM/review';

if(qrCode){
  // Increased size and margin for better scanability
  qrCode.src='https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=2&data='+encodeURIComponent(GOOGLE_REVIEWS_URL);
  qrCode.onerror=function(){
    // Fallback if QR code fails to load
    var parent=qrCode.parentElement;
    if(parent){
      parent.innerHTML='<p style="font-size:12px;color:var(--muted);text-align:center;padding:8px;">QR code unavailable. Please use the link below.</p>';
    }
  };
}

if(reviewBtn && reviewModal){
  reviewBtn.addEventListener('click',function(){
    reviewModal.style.display='flex';
  });
}

if(closeReviewModal && reviewModal){
  closeReviewModal.addEventListener('click',function(){
    reviewModal.style.display='none';
  });
}

if(reviewModal){
  reviewModal.addEventListener('click',function(e){
    if(e.target===reviewModal){
      reviewModal.style.display='none';
    }
  });
}


