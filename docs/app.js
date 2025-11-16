var CARDS = [
  { group:'cholla', front:'Old Adobe Mission', back:'Hand-built by Mexican settlers in the late 1910s and completed in 1933, this adobe church is one of Old Town\'s earliest landmarks. Step inside later to see the original wood beams and quiet desert chapel.' },
  { group:'cholla', front:'Soleri Bridge', back:'Paolo Soleri spent decades designing this bridge, dedicated in 2010, to mark the winter solstice through shadow and light. It is one of Scottsdale\'s most photographed public-art pieces.' },
  { group:'cholla', front:'Museum of the West', back:'Opened in 2015, this Smithsonian-affiliate celebrates Western, Native, and frontier stories. The desert-masonry architecture alone is worth a visit.' },
  { group:'cholla', front:'Bronze Horse Fountain', back:'Five bronze Arabian horses, donated in 1989, honor Scottsdale\'s Arabian horse-breeding boom of the 1950s and beyond. They look incredible up close and are one of downtown\'s most iconic stops.' },
  { group:'cholla', front:'Civic Center Park', back:'Planned in the mid-1960s with City Hall opening in 1968, this central civic park ties together Scottsdale\'s public buildings, sculptures, lawns, and shaded paths.' },
  { group:'cholla', front:'Marshall Way Arts District', back:'Home to Scottsdale\'s weekly ArtWalk, which began in 1975 and is now the longest-running in the country. Galleries here range from Western art to modern sculpture.' },
  { group:'cholla', front:'Main Street Arts District', back:'Dozens of galleries in two historic blocks that grew up in the 1960s and 1970s. A slow stroll here reveals some of the region\'s finest Western and Native art.' },
  { group:'ocotillo', front:'Waterfront Arches', back:'These glowing arches frame Camelback Mountain at sunset. One of Old Town\'s most romantic photo spots.' },
  { group:'ocotillo', front:'Marshall Way Murals', back:'A colorful corridor of modern desert art. At golden hour, the walls light up beautifully for photos.' },
  { group:'ocotillo', front:'Soleri Plaza', back:'A peaceful space designed around sun, shadow, and quiet reflection. A great place to return for a slow evening walk.' },
  { group:'ocotillo', front:'Scottsdale Waterfront', back:'Soft lighting and canal reflections make this area shine at dusk. Great for a riverside cocktail after the tour.' },
  { group:'ocotillo', front:'Love Story Lane', back:'A tucked-away alley that is a longtime favorite for engagement photos. Easy to miss unless you know where to look.' },
  { group:'prickly', front:'Berdena\'s', back:'Known for small-batch coffee and handmade pastries. Their honey lavender latte is a local obsession.' },
  { group:'prickly', front:'Arcadia Farms Marketplace', back:'A Scottsdale staple for more than 30 years featuring baked goods and local gourmet items. The patio is a quiet escape in Old Town.' },
  { group:'prickly', front:'Fry Bread Lounge', back:'Honors Indigenous culinary traditions with sweet and savory fry bread. It is a taste of Arizona history.' },
  { group:'prickly', front:'Sprinkles ATM', back:'A cupcake ATM with fresh treats any time. A fun little stop guests often revisit on their own.' },
  { group:'prickly', front:'Sugar Bowl', back:'Housed in a 1950 building and reborn as an ice cream parlor in 1958, this pink landmark has been a Scottsdale dessert tradition for generations.' },
  { group:'queen', front:'Civic Center Tree Walk', back:'Dozens of holiday-lit trees turn this park into a glowing promenade. A perfect evening walk during the season.' },
  { group:'queen', front:'Old Town Holiday Arch', back:'A festive installation welcoming visitors each winter. Fantastic for family photos after dark.' },
  { group:'queen', front:'Soleri Bridge Lights', back:'Holiday lighting casts warm shadows across the plaza. A quieter, more reflective spot for evening visits.' },
  { group:'queen', front:'Museum Courtyard Decor', back:'Subtle desert-themed wreaths and lanterns bring Western charm. The adobe walls glow beautifully at dusk.' },
  { group:'queen', front:'Warm Beverage Stop', back:'Local pop-up vendors serve seasonal cocoa and spiced drinks. A cozy way to enjoy the cooler desert nights.' },
  { group:'senita', front:'America\'s Taco Shop', back:'Famous for authentic Sonoran-style carne asada, marinated 24 hours. A cherished family recipe from Hermosillo.' },
  { group:'senita', front:'Velvet Taco', back:'Craft tacos inspired by global flavors, from Korean barbecue to Nashville hot chicken. A modern twist on classic street food.' },
  { group:'senita', front:'Mesquite Fresh Street Mex', back:'Mesquite-grilled meats give everything a deep, smoky flavor. A Scottsdale original that locals swear by.' },
  { group:'senita', front:'Fry Bread Stop', back:'A nod to Indigenous culinary traditions of the Southwest. Warm, fluffy, and memorable.' },
  { group:'senita', front:'Taco Alley', back:'A stretch of Old Town with multiple quick-serve taco options. Perfect for a casual walkabout meal later.' },
  { group:'saguaro', front:'Scottsdale Civic Center', back:'A 1960s modernist park designed for festivals, art, and open-air gatherings. Great for exploring on foot after the tour.' },
  { group:'saguaro', front:'Entertainment District', back:'A lively cluster of patios, DJs, and lounges. A completely different energy after sunset.' },
  { group:'saguaro', front:'Waterfront Promenade', back:'This canal-side walk links art, dining, and shaded paths. A perfect route for a post-tour stroll.' },
  { group:'saguaro', front:'Old Town Western Storefronts', back:'Wood-beamed, low-slung Western Revival buildings from the 1950s through the 1970s. They preserve the cowboy character Scottsdale was built on.' },
  { group:'saguaro', front:'Soleri Plaza', back:'A celebration of desert light and form. Architecture fans love to explore its shapes and shadows later.' },
  { group:'saguaro', front:'Historic Old Town Square', back:'Home to some of Scottsdale\'s earliest shops, bars, and artisan businesses. A great area to wander and shop after the tour.' },
  { group:'saguaro', front:'Museum of the West (Return Visit)', back:'One of the region\'s finest Western museums with rotating exhibits. Many guests return here for a longer visit.' },
  { group:'hidden', front:'Love Story Lane (Hidden Gem)', back:'A tucked-away alley known for engagement photos. Easy to miss unless you have been shown it.' },
  { group:'hidden', front:'Fourtillfour Alley', back:'A quiet corridor behind a beloved coffee shop. Mornings bring vintage cars and great lighting.' },
  { group:'hidden', front:'Canal Undercrossings', back:'Shadowed tunnels with surprising acoustics and mural art. A cool place to walk when the sun is high.' },
  { group:'hidden', front:'Hidden Artist Studios', back:'Small working studios scattered above Old Town shops. Artists often welcome drop-in visitors.' },
  { group:'hidden', front:'Copper Canopy Sculpture', back:'Organic metalwork forming a tree-like silhouette. Beautiful shadow patterns throughout the day.' },
  { group:'romantic', front:'Waterfront Reflections', back:'Canal lights shimmer against the water at dusk. One of the city\'s most relaxing evening walks.' },
  { group:'romantic', front:'Marshall Way Murals at Sunset', back:'Soft desert light brings out richer colors. A beautiful backdrop for couple photos.' },
  { group:'romantic', front:'Soleri Bridge Golden Hour', back:'Warm tones and long shadows create dramatic silhouettes. A great spot to catch the last light.' },
  { group:'romantic', front:'Museum Courtyard (Evening)', back:'Quiet, warm, and architecturally striking after hours. A peaceful escape steps from the action.' },
  { group:'romantic', front:'Old Town Lantern Walk', back:'A short route of softly lit pathways and hidden corners. Romantic and usually uncrowded.' },
  { group:'micro', front:'Museum of the West (Fact)', back:'A top-tier Western art museum worth a full return visit.' },
  { group:'micro', front:'Bronze Horse Fountain (Fact)', back:'Five Arabian horses donated in 1989, celebrating Scottsdale\'s Arabian horse-breeding heritage.' },
  { group:'micro', front:'Waterfront Promenade (Fact)', back:'A scenic canal walk perfect for evening strolls.' },
  { group:'micro', front:'Marshall Way Murals (Fact)', back:'A colorful corridor of Old Town\'s best modern murals.' }
];
var GROUPS = [
  { id:'cholla', label:'Cholla' },{ id:'ocotillo', label:'Ocotillo' },{ id:'prickly', label:'Prickly Pear' },
  { id:'queen', label:'Queen of the Desert' },{ id:'senita', label:'Senita' },{ id:'saguaro', label:'Saguaro' },
  { id:'hidden', label:'Hidden Gems' },{ id:'romantic', label:'Romantic' },{ id:'micro', label:'Quick Facts' }
];
var deckLabel=document.getElementById('deckLabel');
var pagerEl=document.getElementById('pager');
var cardEl=document.getElementById('card');
var frontDeckLabel=document.getElementById('frontDeckLabel');
var frontTitleEl=document.getElementById('frontTitle');
var backTitleEl=document.getElementById('backTitle');
var backTextEl=document.getElementById('backText');
var tagStrip=document.getElementById('tagStrip');
var prevBtn=document.getElementById('prevBtn');
var nextBtn=document.getElementById('nextBtn');
var flipBtn=document.getElementById('flipBtn');
var voiceBtn=document.getElementById('voiceBtn');
var hzPrev=document.getElementById('hzPrev');
var hzNext=document.getElementById('hzNext');
var hzFlip=document.getElementById('hzFlip');
var index=0; var flipped=false; var narrationEnabled=false;
var groupFirstIndex={}; for(var i=0;i<CARDS.length;i++){ var g=CARDS[i].group; if(g && groupFirstIndex[g]===undefined){ groupFirstIndex[g]=i; } }
function buildTagStrip(){ if(!tagStrip) return; tagStrip.innerHTML=''; for(var i=0;i<GROUPS.length;i++){ var g=GROUPS[i]; var btn=document.createElement('button'); btn.type='button'; btn.className='tag-pill'; btn.setAttribute('data-group',g.id); btn.textContent=g.label; (function(groupId){ btn.addEventListener('click',function(){ var idx=groupFirstIndex[groupId]; if(typeof idx==='number'){ index=idx; flipped=false; render(); if (narrationEnabled) speakCurrent(); } }); })(g.id); tagStrip.appendChild(btn); } }
function highlightTag(groupId){ if(!tagStrip) return; var pills=tagStrip.querySelectorAll('.tag-pill'); for(var i=0;i<pills.length;i++){ var p=pills[i]; if(p.getAttribute('data-group')===groupId){ p.classList.add('active'); } else { p.classList.remove('active'); } } }
function speakCurrent(){ if(!narrationEnabled) return; if(!window.speechSynthesis) return; var card=CARDS[index]; if(!card) return; try{ window.speechSynthesis.cancel(); var text=card.front+'. '+card.back; var utter=new SpeechSynthesisUtterance(text); utter.rate=0.95; utter.pitch=1.0; utter.lang='en-US'; window.speechSynthesis.speak(utter); } catch(e){} }
function toggleVoice(){ if(!window.speechSynthesis){ narrationEnabled=false; voiceBtn.disabled=true; voiceBtn.textContent='Voice N/A'; return; } narrationEnabled=!narrationEnabled; if(!narrationEnabled){ window.speechSynthesis.cancel(); voiceBtn.classList.remove('active'); voiceBtn.textContent='Voice Off'; } else { voiceBtn.classList.add('active'); voiceBtn.textContent='Voice On'; speakCurrent(); } }
deckLabel.textContent='All Highlights'; frontDeckLabel.textContent='All Highlights';
function render(){ var cards=CARDS; if(!cards||!cards.length){ frontTitleEl.textContent='No cards'; backTitleEl.textContent='No cards'; backTextEl.textContent='This deck is empty.'; pagerEl.textContent='0 / 0'; return; } if(index<0) index=0; if(index>=cards.length) index=cards.length-1; var item=cards[index]; frontTitleEl.textContent=item.front; backTitleEl.textContent=item.front; backTextEl.textContent=item.back; pagerEl.textContent=(index+1)+' / '+cards.length; var grp=item.group||''; if(grp){ deckLabel.textContent='Highlights – '+grp.charAt(0).toUpperCase()+grp.slice(1); frontDeckLabel.textContent=deckLabel.textContent; } highlightTag(grp); if(flipped){ cardEl.classList.add('flipped'); cardEl.setAttribute('aria-pressed','true'); } else { cardEl.classList.remove('flipped'); cardEl.setAttribute('aria-pressed','false'); } }
function flip(){ flipped=!flipped; render(); }
function next(){ if(!CARDS.length) return; index=(index+1)%CARDS.length; flipped=false; render(); if(narrationEnabled) speakCurrent(); }
function prev(){ if(!CARDS.length) return; index=(index-1+CARDS.length)%CARDS.length; flipped=false; render(); if(narrationEnabled) speakCurrent(); }
cardEl.addEventListener('click',flip); flipBtn.addEventListener('click',flip); nextBtn.addEventListener('click',next); prevBtn.addEventListener('click',prev); voiceBtn.addEventListener('click',toggleVoice);
hzFlip.addEventListener('click',flip); hzNext.addEventListener('click',next); hzPrev.addEventListener('click',prev);
cardEl.addEventListener('keydown',function(e){ if(e.key===' '||e.key==='Enter'){ e.preventDefault(); flip(); } if(e.key==='ArrowRight'){ next(); } if(e.key==='ArrowLeft'){ prev(); } });
var startX=0,startY=0,moved=false; function touchStart(x,y){ startX=x; startY=y; moved=false; } function touchMove(x,y){ if(Math.abs(x-startX)>12) moved=true; } function touchEnd(x,y){ var dx=x-startX; var dy=y-startY; if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>40){ if(dx<0){ next(); } else { prev(); } } else { if(!moved) flip(); } }
cardEl.addEventListener('touchstart',function(e){ var t=e.touches[0]; touchStart(t.clientX,t.clientY); },{passive:true});
cardEl.addEventListener('touchmove',function(e){ var t=e.touches[0]; touchMove(t.clientX,t.clientY); },{passive:true});
cardEl.addEventListener('touchend',function(e){ var t=e.changedTouches[0]; touchEnd(t.clientX,t.clientY); });
var lastTap=0; document.addEventListener('touchend',function(e){ var now=Date.now(); if(now-lastTap<350){ e.preventDefault(); } lastTap=now; },{passive:false});
buildTagStrip(); render();


