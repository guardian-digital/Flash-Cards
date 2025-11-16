// Deck data (grouped)
var DECKS = [
  {
    id: "cholla",
    label: "Cholla – Classic Highlights",
    cards: [
      { front: "Old Adobe Mission", back: "Hand-built by Mexican settlers in the late 1910s and completed in 1933, this adobe church is one of Old Town's earliest landmarks. Step inside later to see the original wood beams and quiet desert chapel." },
      { front: "Soleri Bridge", back: "Paolo Soleri spent decades designing this bridge, dedicated in 2010, to mark the winter solstice through shadow and light. It is one of Scottsdale's most photographed public-art pieces." },
      { front: "Museum of the West", back: "Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. The desert-masonry architecture alone is worth a visit." },
      { front: "Bronze Horse Fountain", back: "Five bronze Arabian horses, donated in 1989, honor Scottsdale's Arabian horse-breeding boom of the 1950s and beyond. They look incredible up close—one of downtown's most iconic stops." },
      { front: "Civic Center Park", back: "Planned in the mid-1960s with City Hall opening in 1968, this “public backyard” park ties together Scottsdale's civic buildings, sculptures, lawns, and shaded paths—perfect to explore after the tour." },
      { front: "Marshall Way Arts District", back: "Home to Scottsdale's weekly ArtWalk, which began in 1975 and is now the longest-running in the country. Galleries here range from Western art to modern sculpture." },
      { front: "Main Street Arts District", back: "Dozens of galleries in two historic blocks that grew up in the 1960s–70s. A slow stroll here reveals some of the region's finest Western and Native art." }
    ]
  },
  {
    id: "ocotillo",
    label: "Ocotillo – Sunset & Romance",
    cards: [
      { front: "Waterfront Arches", back: "These glowing arches frame Camelback Mountain at sunset. It’s one of Old Town’s most romantic photo spots." },
      { front: "Marshall Way Murals", back: "A colorful corridor of modern desert art. At golden hour, the walls light up beautifully for photos." },
      { front: "Soleri Plaza", back: "A peaceful space designed around sun, shadow, and quiet reflection. Perfect spot to return for a slow evening walk." },
      { front: "Scottsdale Waterfront", back: "Soft lighting and canal reflections make this area shine at dusk. Great for a riverside cocktail after the tour." },
      { front: "Love Story Lane", back: "This tucked-away alley is a longtime favorite for engagement photos. Easy to miss unless you know where to look." }
    ]
  },
  {
    id: "prickly",
    label: "Prickly Pear – Sweets & Snacks",
    cards: [
      { front: "Berdena’s", back: "Known for small-batch coffee and handmade pastries. Their honey lavender latte is a local obsession." },
      { front: "Arcadia Farms Marketplace", back: "A Scottsdale staple for 30+ years featuring baked goods and local gourmet items. The patio is a quiet escape in Old Town." },
      { front: "Fry Bread Lounge", back: "Honors Indigenous culinary traditions with sweet and savory fry bread. It’s a taste of Arizona history." },
      { front: "Sprinkles ATM", back: "Arizona’s first cupcake ATM—fresh treats 24/7. A fun little stop guests revisit on their own." },
      { front: "Sugar Bowl", back: "A 1958 ice cream parlor with its original pink décor. Generations of locals have made this their dessert tradition." }
    ]
  },
  {
    id: "queen",
    label: "Queen of the Desert – Holiday",
    cards: [
      { front: "Civic Center Tree Walk", back: "Dozens of holiday-lit trees turn this park into a glowing promenade. A perfect evening walk during the season." },
      { front: "Old Town Holiday Arch", back: "A festive installation welcoming visitors each winter. Fantastic for family photos after dark." },
      { front: "Soleri Bridge Lights", back: "Holiday lighting casts warm shadows across the plaza. A quieter, more reflective spot for evening visits." },
      { front: "Museum Courtyard Decor", back: "Subtle desert-themed wreaths and lanterns bring Western charm. The adobe walls glow beautifully at dusk." },
      { front: "Warm Beverage Stop", back: "Local pop-up vendors serve seasonal cocoa and spiced drinks. A cozy way to enjoy the cooler desert nights." }
    ]
  },
  {
    id: "senita",
    label: "Senita – Taco Trail",
    cards: [
      { front: "America’s Taco Shop", back: "Famous for authentic Sonoran-style carne asada, marinated 24 hours. A cherished family recipe from Hermosillo." },
      { front: "Velvet Taco", back: "Craft tacos inspired by global flavors—Korean BBQ to Nashville hot chicken. A modern twist on classic street food." },
      { front: "Mesquite Fresh Street Mex", back: "Mesquite-grilled meats give everything a deep, smoky flavor. A Scottsdale original that locals swear by." },
      { front: "Fry Bread Stop", back: "A nod to Indigenous culinary traditions of the Southwest. Warm, fluffy, and unforgettable." },
      { front: "Taco Alley", back: "A stretch of Old Town with multiple quick-serve taco options. Perfect for a casual walkabout meal later." }
    ]
  },
  {
    id: "saguaro",
    label: "Saguaro – Deep Dive",
    cards: [
      { front: "Scottsdale Civic Center", back: "A 1960s modernist park designed for festivals, art, and open-air gatherings. Great for exploring on foot after the tour." },
      { front: "Entertainment District", back: "A lively cluster of patios, DJs, and lounges. A completely different energy after sunset." },
      { front: "Waterfront Promenade", back: "This canal-side walk links art, dining, and shaded paths. A perfect route for a post-tour stroll." },
      { front: "Old Town Western Storefronts", back: "Wood-beamed, low-slung Western Revival buildings from the 1950s–70s. They preserve the cowboy character Scottsdale was built on." },
      { front: "Soleri Plaza", back: "A celebration of desert light and form. Architecture fans love to explore its shapes and shadows later." },
      { front: "Historic Old Town Square", back: "Home to Scottsdale’s earliest shops, bars, and artisan businesses. A great area to wander and shop after the tour." },
      { front: "Museum of the West", back: "One of the region’s finest Western museums with rotating exhibits. Many guests return here for a longer visit." }
    ]
  },
  {
    id: "hidden",
    label: "Hidden Gems",
    cards: [
      { front: "Love Story Lane", back: "A tucked-away alley known for engagement photos. Easy to miss unless you’ve been shown it." },
      { front: "Fourtillfour Alley", back: "A quiet corridor behind a beloved coffee shop. Mornings bring vintage cars and great lighting." },
      { front: "Canal Undercrossings", back: "Shadowed tunnels with surprising acoustics and mural art. A cool place to walk when the sun’s high." },
      { front: "Hidden Artist Studios", back: "Small working studios scattered above Old Town shops. Artists often welcome drop-in visitors." },
      { front: "Copper Canopy Sculpture", back: "Organic metalwork forming a tree-like silhouette. Beautiful shadow patterns throughout the day." }
    ]
  },
  {
    id: "romantic",
    label: "Romantic Spots",
    cards: [
      { front: "Waterfront Reflections", back: "Canal lights shimmer against the water at dusk. One of the city’s most relaxing evening walks." },
      { front: "Marshall Way Murals at Sunset", back: "Soft desert light brings out richer colors. Beautiful backdrop for couple photos." },
      { front: "Soleri Bridge Golden Hour", back: "Warm tones and long shadows create dramatic silhouettes. Great spot to catch the last light." },
      { front: "Museum Courtyard", back: "Quiet, warm, and architecturally stunning after hours. A peaceful escape steps from the action." },
      { front: "Old Town Lantern Walk", back: "A short route of softly lit pathways and hidden corners. Romantic and usually uncrowded." }
    ]
  },
  {
    id: "micro",
    label: "Quick Facts",
    cards: [
      { front: "Old Adobe Mission", back: "One of Old Town’s oldest buildings, hand-built in the 1910s." },
      { front: "Little Red Schoolhouse", back: "The 1909 school that started Scottsdale’s education story." },
      { front: "Rusty Spur Saloon", back: "A 1920s bank turned cowboy bar with live music nightly." },
      { front: "Soleri Bridge", back: "An architectural sculpture marking the winter solstice." },
      { front: "Museum of the West", back: "A top-tier Western art museum worth a full return visit." },
      { front: "Bronze Horse Fountain", back: "Five Arabian horses celebrating Scottsdale’s equestrian heritage." },
      { front: "Waterfront Promenade", back: "A scenic canal walk perfect for evening strolls." },
      { front: "Marshall Way Murals", back: "A colorful corridor of Old Town’s best modern murals." }
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
var deckLabel=document.getElementById('deckLabel');
var pagerEl=document.getElementById('pager');
var cardEl=document.getElementById('card');
var frontDeckLabel=document.getElementById('frontDeckLabel');
var frontTitleEl=document.getElementById('frontTitle');
var backTitleEl=document.getElementById('backTitle');
var backTextEl=document.getElementById('backText');
var prevBtn=document.getElementById('prevBtn');
var nextBtn=document.getElementById('nextBtn');
var flipBtn=document.getElementById('flipBtn');
var voiceBtn=document.getElementById('voiceBtn');
var shuffleBtn=document.getElementById('shuffleBtn');
var autoBtn=document.getElementById('autoBtn');
var hzPrev=document.getElementById('hzPrev');
var hzNext=document.getElementById('hzNext');
var hzFlip=document.getElementById('hzFlip');

// State
var currentDeck=allDeck;
var index=0; var flipped=false;
var narrationEnabled=false;
var shuffleMode=false;
var autoTimer=null;

// Populate selector
if(deckSelect){
  var options=[{id:'all',label:'All Highlights'}].concat(DECKS.map(function(d){return {id:d.id,label:d.label};}));
  options.forEach(function(opt){
    var o=document.createElement('option'); 
    o.value=opt.id; 
    o.textContent=opt.label; 
    deckSelect.appendChild(o);
  });
  deckSelect.value='all';
  console.log('Deck selector populated with', options.length, 'options');
} else {
  console.error('Deck selector element not found!');
}

function setDeckById(id){
  var found = (id==='all') ? allDeck : (DECKS.find(function(d){return d.id===id;}) || allDeck);
  if(!found){
    console.error('Deck not found:', id);
    found = allDeck;
  }
  currentDeck = found;
  deckLabel.textContent = found.label;
  frontDeckLabel.textContent = found.label;
  index = 0; flipped=false;
  render();
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
    if(!window.speechSynthesis) return;
    try{
      var utter=new SpeechSynthesisUtterance(item.front+'. '+item.back);
      var voice=getBestVoice();
      if(voice) utter.voice=voice;
      utter.rate=0.92; utter.pitch=1.0; utter.lang='en-US';
      window.speechSynthesis.speak(utter);
    }catch(e){}
  };
  audio.onended=function(){ currentAudio=null; };
  currentAudio=audio;
  audio.play().catch(function(){ currentAudio=null; });
}
function toggleVoice(){
  // Stop any current audio/speech
  if(currentAudio){ currentAudio.pause(); currentAudio=null; }
  if(window.speechSynthesis){ window.speechSynthesis.cancel(); }
  
  if(!window.speechSynthesis){
    narrationEnabled=false; voiceBtn.disabled=true; voiceBtn.textContent='Voice N/A'; return;
  }
  narrationEnabled=!narrationEnabled;
  if(!narrationEnabled){ voiceBtn.classList.remove('active'); voiceBtn.textContent='Voice Off'; }
  else { voiceBtn.classList.add('active'); voiceBtn.textContent='Voice On'; speakCurrent(); }
}
function toggleShuffle(){
  shuffleMode=!shuffleMode;
  shuffleBtn.classList.toggle('active', shuffleMode);
  shuffleBtn.textContent = shuffleMode ? 'Shuffle: On' : 'Shuffle: Off';
  shuffleBtn.setAttribute('aria-pressed', shuffleMode ? 'true' : 'false');
}
function stopAuto(){
  if(autoTimer){ clearInterval(autoTimer); autoTimer=null; }
  autoBtn.classList.remove('active'); autoBtn.textContent='Auto: Off'; autoBtn.setAttribute('aria-pressed','false');
}
function toggleAuto(){
  if(autoTimer){ stopAuto(); return; }
  autoBtn.classList.add('active'); autoBtn.textContent='Auto: On'; autoBtn.setAttribute('aria-pressed','true');
  autoTimer = setInterval(next, 8000);
}

deckLabel.textContent='All Highlights'; frontDeckLabel.textContent='All Highlights';
function render(){
  var cards=currentDeck.cards || [];
  if(!cards.length){ frontTitleEl.textContent='No cards'; backTitleEl.textContent='No cards'; backTextEl.textContent='This deck is empty.'; pagerEl.textContent='0 / 0'; return; }
  if(index<0) index=0; if(index>=cards.length) index=cards.length-1;
  var item = cards[index];
  frontTitleEl.textContent=item.front; backTitleEl.textContent=item.front; backTextEl.textContent=item.back;
  pagerEl.textContent=(index+1)+' / '+cards.length;
  if(flipped){ cardEl.classList.add('flipped'); cardEl.setAttribute('aria-pressed','true'); }
  else { cardEl.classList.remove('flipped'); cardEl.setAttribute('aria-pressed','false'); }
}
function flip(){ flipped=!flipped; render(); }
function next(){
  var cards=currentDeck.cards||[]; if(!cards.length) return;
  if(shuffleMode){
    if(cards.length===1){ index=0; }
    else {
      var ni=index;
      while(ni===index){ ni=Math.floor(Math.random()*cards.length); }
      index=ni;
    }
  }else{
    index=(index+1)%cards.length;
  }
  flipped=false; render(); if(narrationEnabled) speakCurrent();
}
function prev(){
  var cards=currentDeck.cards||[]; if(!cards.length) return;
  index=(index-1+cards.length)%cards.length; flipped=false; render(); if(narrationEnabled) speakCurrent();
}

// Events
cardEl.addEventListener('click',flip); flipBtn.addEventListener('click',flip);
nextBtn.addEventListener('click',next); prevBtn.addEventListener('click',prev);
voiceBtn.addEventListener('click',toggleVoice);
shuffleBtn.addEventListener('click',toggleShuffle);
autoBtn.addEventListener('click',toggleAuto);
hzFlip.addEventListener('click',flip); hzNext.addEventListener('click',next); hzPrev.addEventListener('click',prev);
if(deckSelect){ 
  deckSelect.addEventListener('change', function(e){ 
    var selectedId = e.target.value;
    console.log('Deck selected:', selectedId);
    stopAuto(); 
    setDeckById(selectedId); 
  }); 
}
cardEl.addEventListener('keydown',function(e){ if(e.key===' '||e.key==='Enter'){ e.preventDefault(); flip(); } if(e.key==='ArrowRight'){ next(); } if(e.key==='ArrowLeft'){ prev(); } });
var startX=0,startY=0,moved=false; function touchStart(x,y){ startX=x; startY=y; moved=false; } function touchMove(x,y){ if(Math.abs(x-startX)>12) moved=true; } function touchEnd(x,y){ var dx=x-startX; var dy=y-startY; if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>40){ if(dx<0){ next(); } else { prev(); } } else { if(!moved) flip(); } }
cardEl.addEventListener('touchstart',function(e){ var t=e.touches[0]; touchStart(t.clientX,t.clientY); },{passive:true});
cardEl.addEventListener('touchmove',function(e){ var t=e.touches[0]; touchMove(t.clientX,t.clientY); },{passive:true});
cardEl.addEventListener('touchend',function(e){ var t=e.changedTouches[0]; touchEnd(t.clientX,t.clientY); });
var lastTap=0; document.addEventListener('touchend',function(e){ var now=Date.now(); if(now-lastTap<350){ e.preventDefault(); } lastTap=now; },{passive:false});
document.addEventListener('visibilitychange', function(){ if(document.hidden){ stopAuto(); } });

// Load voices when available (Chrome needs this)
if(window.speechSynthesis){
  window.speechSynthesis.getVoices(); // Trigger load
  window.speechSynthesis.onvoiceschanged=function(){ window.speechSynthesis.getVoices(); };
}

setDeckById('all');


