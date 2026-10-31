
/* =====================================================================
   🖼️ CARTOON PICTURES (ARASAAC pictograms) instead of emoji
   Paste this block at the VERY END of assets/common.js
   - Looks up each word in the free ARASAAC speech-therapy picture library (Arabic search)
   - Shows the emoji until the picture loads; keeps the emoji if no picture is found / offline
   - Settings: "شكل الصور" (cartoon / emoji) + "🖼️ صورة أخرى" button in the result popup
   Pictograms: Sergio Palao / ARASAAC (arasaac.org), Government of Aragón – CC BY-NC-SA
   ===================================================================== */
(()=>{
const S=KV.S; if(S.pics===undefined){S.pics=true;KV.save();}
const API="https://api.arasaac.org/v1/pictograms/ar/";
const IMG=id=>`https://static.arasaac.org/pictograms/${id}/${id}_300.png`;
const EMO=/(?:\p{Extended_Pictographic}|\p{Regional_Indicator})(?:\uFE0F|\u20E3|\p{Emoji_Modifier}|\u200D\p{Extended_Pictographic}\uFE0F?)*/gu;
const HAS=/\p{Extended_Pictographic}/u;
const key=e=>e.replace(/\uFE0F/g,"");
const FACE=/[\u{1F600}-\u{1F64F}\u{1F910}-\u{1F92F}\u{1F970}-\u{1F97F}\u{1F9D0}\u{1FAE0}-\u{1FAE8}\u{1F44D}\u{1F44E}\u{2639}\u{263A}]/u;
const PAGE=(location.pathname.split("/").pop()||"index.html").replace(".html","");
const OFF_PAGES=["emotions","yes-no","index"];

/* ---------- style + credit ---------- */
const st=document.createElement("style");
st.textContent=`.kvpic{display:inline-block;line-height:1;vertical-align:middle}
.kvpic.on img{height:1.15em;width:1.15em;object-fit:contain;display:block;background:#fff;border-radius:.2em;padding:.05em;box-sizing:border-box;box-shadow:0 2px 6px rgba(0,0,0,.08)}
.kv-credit{text-align:center;font-size:11px;color:var(--muted);padding:6px 10px 14px;position:relative;z-index:1}
.kv-credit a{text-decoration:underline}`;
document.head.appendChild(st);

/* ---------- emoji -> Arabic word for pictures that have no word next to them ---------- */
const EXTRA=[];
const LETTERS={};
if(typeof KV_LETTERS!=="undefined")for(const L in KV_LETTERS)for(const p in KV_LETTERS[L].lists)KV_LETTERS[L].lists[p].forEach(({w,e})=>{const k=key(e);if(!LETTERS[k])LETTERS[k]=w;});
const EXTRA_MAP={};EXTRA.forEach(([e,w])=>{const k=key(e);if(!EXTRA_MAP[k])EXTRA_MAP[k]=w;});
const learned={};
let pickMap={},pickT=0;
function pickers(){if(Date.now()-pickT<1000)return pickMap;pickT=Date.now();pickMap={};
 try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k||!k.startsWith("kvPick:"))continue;const s=JSON.parse(localStorage.getItem(k)||"{}");[...(s.sel||[]),...(s.custom||[])].forEach(x=>{if(x&&x.e&&x.w)pickMap[key(x.e)]=x.w;});}}catch(e){}
 return pickMap;}
const dictWord=e=>{const k=key(e);return pickers()[k]||learned[k]||EXTRA_MAP[k]||LETTERS[k]||null;};
const nWords=s=>s.trim().split(/\s+/).filter(Boolean).length;

/* ---------- ARASAAC lookup with cache ---------- */
const CK="kvPicCache2";let cache={};try{cache=JSON.parse(localStorage.getItem(CK)||"{}");}catch(e){}
let saveT;const saveCache=()=>{clearTimeout(saveT);saveT=setTimeout(()=>{try{localStorage.setItem(CK,JSON.stringify(cache));}catch(e){}},400);};
const inflight={},queue=[];let active=0;
function run(){while(active<4&&queue.length){const job=queue.shift();active++;job().finally(()=>{active--;run();});}}
async function fetchIds(q){let err=false;
 for(const ep of["bestsearch","search"]){try{const r=await fetch(API+ep+"/"+encodeURIComponent(q),{referrerPolicy:"no-referrer"});
   if(r.ok){const a=await r.json();if(Array.isArray(a)&&a.length)return{ids:a.slice(0,6).map(x=>x._id)};}else if(r.status>=500)err=true;}catch(e){err=true;}}
 return{ids:[],err};}
function variants(w){w=w.replace(/[؟?!.,،:«»"]/g," ").trim();const v=[w];
 if(w.startsWith("ال")&&w.length>3)v.push(w.slice(2));
 const f=w.split(/\s+/);if(f.length>1){v.push(f[0]);if(f[0].startsWith("ال"))v.push(f[0].slice(2));}
 if(/ة$/.test(f[0]))v.push(f[0].replace(/ة$/,"").replace(/^ال/,""));
 return [...new Set(v)].filter(Boolean);}
function lookup(word){
 const c=cache[word],age=c?Date.now()-c.t:1e15;
 if(c&&((c.ids.length&&age<90*864e5)||(!c.ids.length&&age<7*864e5)))return Promise.resolve(c);
 if(inflight[word])return inflight[word];
 inflight[word]=new Promise(res=>{queue.push(async()=>{let ids=[],err=false;
   for(const q of variants(word)){const r=await fetchIds(q);if(r.ids.length){ids=r.ids;break;}if(r.err)err=true;}
   const ent={ids,i:(c&&c.i)||0,t:Date.now()};
   if(ids.length||!err){cache[word]=ent;saveCache();}
   delete inflight[word];res(ent);});run();});
 return inflight[word];}
const imgCache={};
function imageFor(word,onReady){
 const c=cache[word];
 if(c&&c.ids.length){const id=c.ids[c.i%c.ids.length];let im=imgCache[id];
  if(!im){im=imgCache[id]=new Image();im.referrerPolicy="no-referrer";im.src=IMG(id);}
  if(im.complete&&im.naturalWidth)return im;im.addEventListener("load",()=>onReady&&onReady(),{once:true});return null;}
 lookup(word).then(()=>{if(cache[word]&&cache[word].ids.length)imageFor(word,onReady);});return null;}

/* ---------- replace emoji in the page ---------- */
const SKIP=".kv-header,.ghost,.pill,.rb,.btn,.tab,.seg,.toast,.m-title,.m-sub,.hint,.close-x,.fav,.deco,.lock,label,select,option,textarea,input,.kvpic,.plays,.new,.tag,.lab,.badge,.prompt,.qz-top,.stat,.top,.belly,.kv-credit,.kv-resume,footer,.feat,.hero-art,.letter,h1,h2,h3,.qz-q,script,style";
function contextFor(p){
 if(p.id==="kvPE"){const t=document.getElementById("kvPTx");const s=t?t.textContent.trim():"";return s&&nWords(s)<=2&&!HAS.test(s)?s:null;}
 const par=p.parentElement;if(!par)return null;
 const t=[...par.children].find(c=>c!==p&&c.classList.contains("t"));
 if(t){const s=t.textContent.trim();if(s&&nWords(s)<=3)return s;}
 return null;}
const GROUP=".qz-ch,.choices,#choices,.grid,.board,.snacks,.shelf,.chips,.doors,.scene,.slots,.pool";
function revertGroup(sp){const g=sp.closest(GROUP);if(!g)return;g.dataset.kvemoji="1";g.querySelectorAll(".kvpic").forEach(x=>{x.classList.remove("on");x.textContent=x.dataset.e||x.textContent;});}
function swap(sp,word){
 lookup(word).then(ent=>{if(!sp.isConnected)return;const g=sp.closest(GROUP);
  if(!ent.ids.length||(g&&g.dataset.kvemoji)){revertGroup(sp);return;}const id=ent.ids[ent.i%ent.ids.length];
  const im=new Image();im.alt=word;im.referrerPolicy="no-referrer";im.draggable=false;
  im.onerror=()=>revertGroup(sp);
  im.onload=()=>{if(!sp.isConnected)return;const gg=sp.closest(GROUP);if(gg&&gg.dataset.kvemoji)return;sp.textContent="";sp.appendChild(im);sp.classList.add("on");};
  im.src=IMG(id);});}
function proc(t){
 const s=t.nodeValue;if(!s||!HAS.test(s))return;
 const p=t.parentElement;if(!p||p.closest(SKIP))return;
 const ems=[...s.matchAll(EMO)];if(!ems.length)return;
 const rest=s.replace(EMO,"").trim();
 let ctx=null;
 if(rest){ if(ems.length===1&&ems[0].index===s.search(/\S/)&&nWords(rest)<=3&&!/[!؟?]/.test(rest))ctx=rest;else return; }
 else if(ems.length===1)ctx=contextFor(p);
 const frag=document.createDocumentFragment();let last=0,any=false;
 for(const m of ems){frag.append(s.slice(last,m.index));const em=m[0],w=FACE.test(em)?null:(ctx||(ems.length===1?dictWord(em):null));
  if(w){const sp=document.createElement("span");sp.className="kvpic";sp.dataset.w=w;sp.dataset.e=em;sp.textContent=em;frag.append(sp);if(ctx)learned[key(em)]=w;swap(sp,w);any=true;}
  else frag.append(em);
  last=m.index+em.length;}
 frag.append(s.slice(last));if(any)t.replaceWith(frag);}
function scan(n){
 if(!S.pics||!n||OFF_PAGES.includes(PAGE))return;
 if(n.nodeType===3){proc(n);return;}
 if(n.nodeType!==1||n.closest&&n.closest(".kvpic"))return;
 if(n.id==="kvSettings")addToggle();
 if(n.id==="kvPop")addPopBtn();
 const tw=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);const list=[];while(tw.nextNode())list.push(tw.currentNode);list.forEach(proc);}

/* ---------- wheel (canvas) ---------- */
const ft=CanvasRenderingContext2D.prototype.fillText;
CanvasRenderingContext2D.prototype.fillText=function(text,x,y,...r){
 if(S.pics&&typeof text==="string"&&text.length<=8&&HAS.test(text)&&!text.replace(EMO,"").trim()){
  const w=FACE.test(text)?null:dictWord(text);
  if(w){const im=imageFor(w,()=>{if(document.getElementById("wheel")&&typeof window.draw==="function")try{window.draw();}catch(e){}});
   if(im){const m=/(\d+(?:\.\d+)?)px/.exec(this.font),sz=(m?+m[1]:60)*1.2;
    this.save();this.fillStyle="#fff";this.beginPath();if(this.roundRect)this.roundRect(x-sz/2,y-sz/2,sz,sz,sz*.18);else this.rect(x-sz/2,y-sz/2,sz,sz);this.fill();
    this.drawImage(im,x-sz/2+sz*.05,y-sz/2+sz*.05,sz*.9,sz*.9);this.restore();return;}}}
 return ft.call(this,text,x,y,...r);};

/* ---------- settings toggle + "another picture" button ---------- */
function addToggle(){const ov=document.getElementById("kvSettings");if(!ov||ov.querySelector("#kvPicSeg"))return;
 const hint=ov.querySelector("#kvVoiceNote");const row=document.createElement("div");row.className="setting-row";
 row.innerHTML=`<b>شكل الصور</b><div class="seg" id="kvPicSeg"><button data-v="1">🖼️ رسوم كرتونية</button><button data-v="0">😀 إيموجي</button></div>`;
 (hint?hint.before(row):ov.querySelector(".modal").appendChild(row));
 row.querySelectorAll("button").forEach(b=>{b.classList.toggle("on",(S.pics?"1":"0")===b.dataset.v);b.onclick=()=>{S.pics=b.dataset.v==="1";KV.save();location.reload();};});}
function addPopBtn(){const pop=document.getElementById("kvPop");if(!pop||pop.querySelector("#kvPicNext"))return;
 const b=document.createElement("button");b.id="kvPicNext";b.className="rb";b.style.background="#b7791f";b.textContent="🖼️ صورة أخرى";
 pop.querySelector(".m-foot").prepend(b);
 b.onclick=()=>{const sp=pop.querySelector("#kvPE .kvpic");if(!sp)return KV.toast("لا توجد صورة لهذه الكلمة");
  const w=sp.dataset.w,c=cache[w];if(!c||c.ids.length<2)return KV.toast("لا توجد صور أخرى لهذه الكلمة");
  c.i=(c.i+1)%c.ids.length;saveCache();
  document.querySelectorAll(".kvpic").forEach(x=>{if(x.dataset.w===w)swap(x,w);});
  if(document.getElementById("wheel")&&typeof window.draw==="function")setTimeout(()=>{imageFor(w,()=>window.draw());window.draw();},50);
  KV.toast("✅ سيتم استخدام هذه الصورة لهذه الكلمة دائمًا");};}

/* ---------- start ---------- */
if(S.pics&&!OFF_PAGES.includes(PAGE)){
 const cr=document.createElement("div");cr.className="kv-credit";
 cr.innerHTML=`الرسوم التوضيحية: سيرجيو بالاو – <a href="https://arasaac.org" target="_blank" rel="noopener">ARASAAC</a> (حكومة أراغون) – رخصة CC BY-NC-SA`;
 document.body.appendChild(cr);
 new MutationObserver(ms=>{for(const m of ms){if(m.type==="characterData")proc(m.target);else m.addedNodes.forEach(scan);}})
  .observe(document.body,{childList:true,subtree:true,characterData:true});
 scan(document.body);
}
document.addEventListener("DOMContentLoaded",()=>{addToggle();if(S.pics)addPopBtn();});
setTimeout(()=>{addToggle();if(S.pics)addPopBtn();},0);
})();
