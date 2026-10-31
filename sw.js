/* offline cache for the installed web app */
const CACHE="speech-lang-v4";
const FILES=["./","board-game.html","category.html","emotions.html","feed-monster.html","index.html","knock.html","matching.html","minimal-pairs.html","object-function.html","odd-one-out.html","opposites.html","potion.html","rhyming.html","riddles.html","scavenger.html","sentence-builder.html","sequencer.html","sound-spinner.html","story-dice.html","wh-flashcards.html","where.html","yes-no.html","assets/common.js","assets/common.css","manifest.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.hostname.includes("translate.google"))return; /* never cache voice requests */
  e.respondWith(fetch(e.request).then(r=>{if(r.ok&&(u.origin===location.origin||u.hostname.includes("fonts.g"))){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));}return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true})));});
