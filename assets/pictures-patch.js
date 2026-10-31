/* =====================================================================
   🎨 Microsoft Fluent Emoji 3D – cartoon pictures for every emoji
   (replaces the old ARASAAC pictures-patch.js – same file name, so no other change is needed)
   - Each emoji is swapped for its own 3D picture → the picture always matches (no word guessing)
   - Works in all games, the spinning wheel, pop-ups and buttons
   - If a picture can't load (offline / missing), the normal emoji stays
   - Android app: uses pictures bundled inside the APK (assets/fluent/) → works offline
   - Settings: "شكل الصور" → 3D / إيموجي
   Fluent Emoji © Microsoft Corporation – MIT License (github.com/microsoft/fluentui-emoji)
   Files served via @lobehub/fluent-emoji-3d (MIT)
   ===================================================================== */
(()=>{
if(window.__kvFluent)return;window.__kvFluent=1;
const S=(window.KV&&KV.S)||{};const save=()=>{try{KV.save();}catch(e){}};
if(S.fluent===undefined){S.fluent=true;save();}

/* ---------- where the pictures come from ---------- */
const LOCAL=window.Capacitor?["assets/fluent/"]:[];
const CDNS=[...LOCAL,
 "https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/",
 "https://unpkg.com/@lobehub/fluent-emoji-3d@latest/assets/",
 "https://cdn.jsdelivr.net/npm/@lobehub/fluent-emoji-3d@latest/assets/"];

/* ---------- emoji detection ---------- */
const EMO=/(?:[#*0-9]\uFE0F?\u20E3|\p{Regional_Indicator}{2}|\p{Extended_Pictographic}(?:\uFE0F|\p{Emoji_Modifier})?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\p{Emoji_Modifier})?)*)/gu;
const HAS=/\p{Extended_Pictographic}|\u20E3|\p{Regional_Indicator}/u;
const cps=s=>[...s].map(c=>c.codePointAt(0).toString(16).padStart(4,"0"));
function codes(em){const a=cps(em),out=[a.join("-")];
 const noVS=a.filter(x=>x!=="fe0f");out.push(noVS.join("-"));
 if(!a.includes("fe0f")){const b=[...noVS];b.splice(1,0,"fe0f");out.push(b.join("-"));}
 return [...new Set(out)];}

/* ---------- resolve one emoji → working URL (cached) ---------- */
const CK="kvFluentURL";let ok={};try{ok=JSON.parse(localStorage.getItem(CK)||"{}");}catch(e){}
const bad=new Set();let st;const persist=()=>{clearTimeout(st);st=setTimeout(()=>{try{localStorage.setItem(CK,JSON.stringify(ok));}catch(e){}},500);};
const pending={},imgs={};const q=[];let act=0;
function pump(){while(act<6&&q.length){const j=q.shift();act++;j().finally(()=>{act--;pump();});}}
function tryLoad(url){return new Promise(res=>{const im=new Image();im.referrerPolicy="no-referrer";im.decoding="async";
 const t=setTimeout(()=>{im.src="";res(null);},7000);
 im.onload=()=>{clearTimeout(t);res(im.naturalWidth?im:null);};im.onerror=()=>{clearTimeout(t);res(null);};im.src=url;});}
function resolve(em){
 const key=cps(em).join("-");
 if(ok[key]&&!(ok[key].startsWith("assets/")&&!window.Capacitor))return Promise.resolve(ok[key]);
 if(bad.has(key))return Promise.resolve(null);
 if(pending[key])return pending[key];
 return pending[key]=new Promise(r=>{q.push(async()=>{
   for(const base of CDNS)for(const c of codes(em)){const u=base+c+".webp";const im=await tryLoad(u);
     if(im){imgs[key]=im;ok[key]=u;persist();delete pending[key];return r(u);}}
   bad.add(key);delete pending[key];r(null);});pump();});}
function imageNow(em,onReady){const key=cps(em).join("-");
 const im=imgs[key];if(im)return im;
 resolve(em).then(u=>{if(!u)return;if(!imgs[key]){const x=new Image();x.referrerPolicy="no-referrer";x.onload=()=>{imgs[key]=x;onReady&&onReady();};x.src=u;}else onReady&&onReady();});
 return null;}

/* ---------- style + credit ---------- */
const css=document.createElement("style");
css.textContent=`.fe3d{display:inline-block;width:1.15em;height:1.15em;vertical-align:-.2em;line-height:1}
.fe3d img{width:100%;height:100%;object-fit:contain;display:block;pointer-events:none;-webkit-user-drag:none}
.fe3d-credit{text-align:center;font-size:11px;color:var(--muted);padding:6px 10px 14px;position:relative;z-index:1}
.fe3d-credit a{text-decoration:underline}`;
document.head.appendChild(css);

/* ---------- swap emoji text → 3D pictures ---------- */
const SKIP="script,style,textarea,input,select,option,.fe3d,title";
function proc(t){
 const s=t.nodeValue;if(!s||!HAS.test(s))return;
 const p=t.parentElement;if(!p||p.closest(SKIP))return;
 const ms=[...s.matchAll(EMO)];if(!ms.length)return;
 const f=document.createDocumentFragment();let last=0;
 for(const m of ms){f.append(s.slice(last,m.index));const em=m[0];
  const sp=document.createElement("span");sp.className="fe3d";sp.textContent=em;sp.dataset.e=em;
  const key=cps(em).join("-");
  const put=u=>{if(!u||!sp.isConnected&&!sp.parentNode)return;const im=new Image();im.alt=em;im.referrerPolicy="no-referrer";im.draggable=false;
   im.onload=()=>{sp.textContent="";sp.appendChild(im);};im.src=u;};
  if(ok[key]&&imgs[key])put(ok[key]);else resolve(em).then(u=>{if(u)put(u);else{sp.classList.remove("fe3d");}});
  f.append(sp);last=m.index+em.length;}
 f.append(s.slice(last));t.replaceWith(f);}
function scan(n){
 if(!n)return;
 if(n.nodeType===3){proc(n);return;}
 if(n.nodeType!==1)return;
 if(n.id==="kvSettings")addToggle();
 if(n.closest&&n.closest(".fe3d"))return;
 const w=document.createTreeWalker(n,NodeFilter.SHOW_TEXT);const l=[];while(w.nextNode())l.push(w.currentNode);l.forEach(proc);}

/* ---------- spinning wheel (canvas) ---------- */
const ft=CanvasRenderingContext2D.prototype.fillText;
let redrawT;const redraw=()=>{clearTimeout(redrawT);redrawT=setTimeout(()=>{if(document.getElementById("wheel")&&typeof window.draw==="function")try{window.draw();}catch(e){}},60);};
function patchCanvas(){CanvasRenderingContext2D.prototype.fillText=function(text,x,y,...r){
 if(S.fluent&&typeof text==="string"&&text.length<=16&&HAS.test(text)&&!text.replace(EMO,"").trim()){
  const im=imageNow(text,redraw);
  if(im){const m=/(\d+(?:\.\d+)?)px/.exec(this.font),sz=(m?+m[1]:60)*1.25;
   const a=this.textAlign,b=this.textBaseline;let dx=x-sz/2,dy=y-sz/2;
   if(a==="left"||a==="start")dx=x;if(a==="right"||a==="end")dx=x-sz;
   if(b==="top"||b==="hanging")dy=y;if(b==="alphabetic"||b==="bottom"||b==="ideographic")dy=y-sz*.85;
   this.drawImage(im,dx,dy,sz,sz);return;}}
 return ft.call(this,text,x,y,...r);};}

/* ---------- settings toggle ---------- */
function addToggle(){const ov=document.getElementById("kvSettings");if(!ov||ov.querySelector("#feSeg"))return;
 const row=document.createElement("div");row.className="setting-row";
 row.innerHTML=`<b>شكل الصور</b><div class="seg" id="feSeg"><button data-v="1">🎨 صور 3D</button><button data-v="0">😀 إيموجي</button></div>`;
 const hint=ov.querySelector("#kvVoiceNote");hint?hint.before(row):ov.querySelector(".modal").appendChild(row);
 row.querySelectorAll("button").forEach(b=>{b.classList.toggle("on",(S.fluent?"1":"0")===b.dataset.v);
  b.onclick=()=>{S.fluent=b.dataset.v==="1";save();location.reload();};});}

/* ---------- start ---------- */
function start(){
 addToggle();
 if(!S.fluent)return;
 patchCanvas();
 const cr=document.createElement("div");cr.className="fe3d-credit";
 cr.innerHTML=`الصور: Fluent Emoji © Microsoft – <a href="https://github.com/microsoft/fluentui-emoji" target="_blank" rel="noopener">MIT License</a>`;
 document.body.appendChild(cr);
 scan(document.body);redraw();
 new MutationObserver(ms=>{for(const m of ms){if(m.type==="characterData")proc(m.target);else m.addedNodes.forEach(scan);}})
  .observe(document.body,{childList:true,subtree:true,characterData:true});
}
if(document.body)start();else document.addEventListener("DOMContentLoaded",start);
})();
