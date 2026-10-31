const RAW = {
"أ":["الهمزة","أرنب:🐰,أسد:🦁,أناناس:🍍,إبريق:🫖,أذن:👂,إصبع:☝️,أخطبوط:🐙,أم:👩","فأر:🐭,رأس:🙂,كأس:🏆,فأس:🪓,سائق:🚕,مائدة:🍽️,طائرة:✈️,بئر:🪣","ماء:💧,سماء:🌌,هواء:💨,دواء:💊,حذاء:👟,شتاء:❄️,عشاء:🍽️,كهرباء:⚡"],
"ب":["الباء","بطة:🦆,باب:🚪,بيت:🏠,بقرة:🐄,بطيخ:🍉,بالون:🎈,برتقال:🍊,بيضة:🥚","سبانخ:🥬,حبل:🪢,قبعة:🎩,لبن:🥛,زبدة:🧈,مبنى:🏢,شباك:🪟,كباب:🍢","أرنب:🐰,عنب:🍇,ذهب:🥇,كلب:🐕,قلب:❤️,باب:🚪,كتاب:📖,دب:🐻"],
"ت":["التاء","تفاح:🍎,تمر:🌴,تاج:👑,تمساح:🐊,تلفاز:📺,ترس:⚙️,توت:🫐,تين:🌰","كتاب:📖,فستان:👗,بستان:🌳,مفتاح:🔑,ستارة:🪟,كتكوت:🐥,دفتر:📒,هاتف:📱","بيت:🏠,توت:🫐,زيت:🫒,حوت:🐋,بنت:👧,صوت:🔊,ياقوت:💎,كتكوت:🐥"],
"ث":["الثاء","ثعلب:🦊,ثلج:❄️,ثوم:🧄,ثعبان:🐍,ثوب:👗,ثلاثة:3️⃣,ثمرة:🍎,ثور:🐂","مثلث:🔺,كمثرى:🍐,مثلجات:🍦,ممثل:🎭,مثقاب:🔩,كثبان:🏜️","ليث:🦁,حرث:🚜,بحث:🔍,غيث:🌧️,ثلاث:3️⃣,أثاث:🛋️,حديث:🗣️,مثلث:🔺"],
"ج":["الجيم","جمل:🐫,جزر:🥕,جبل:⛰️,جرس:🔔,جبن:🧀,جوال:📱,جرو:🐶,جدة:👵","دجاجة:🐔,نجمة:⭐,شجرة:🌳,مجلة:📰,عجلة:🛞,ثلاجة:🧊,زجاجة:🍼,مرجان:🪸","ثلج:❄️,درج:🪜,برج:🗼,تاج:👑,موج:🌊,سياج:🚧,دجاج:🐔,زجاج:🪟"],
"ح":["الحاء","حصان:🐴,حوت:🐋,حليب:🥛,حذاء:👟,حمار:🫏,حلوى:🍬,حديقة:🏞️,حقيبة:🎒","بحر:🌊,نحلة:🐝,تفاحة:🍎,سلحفاة:🐢,لحم:🥩,محفظة:👛,صحن:🍽️,محراث:🚜","تفاح:🍎,مفتاح:🔑,ملح:🧂,قمح:🌾,تمساح:🐊,رمح:🔱,مصباح:💡,سباح:🏊"],
"خ":["الخاء","خروف:🐑,خبز:🍞,خيمة:⛺,خيار:🥒,خس:🥬,خاتم:💍,خوخ:🍑,خريطة:🗺️","نخلة:🌴,مخدة:🛏️,دخان:💨,سخان:♨️,أخطبوط:🐙,صخرة:🪨,مخلب:🐾,بخار:♨️","بطيخ:🍉,خوخ:🍑,مطبخ:🍳,فخ:🪤,كوخ:🛖,صاروخ:🚀,مريخ:🔴,شيخ:👴"],
"د":["الدال","دب:🐻,دجاجة:🐔,دلفين:🐬,دراجة:🚲,دفتر:📒,دودة:🪱,دمية:🪆,ديك:🐓","مدرسة:🏫,بندورة:🍅,هدية:🎁,مدفأة:🔥,قدم:🦶,مدينة:🏙️,عدسة:🔍,وردة:🌹","يد:✋,أسد:🦁,قرد:🐒,ورد:🌹,برد:🥶,ولد:👦,هدهد:🐦,عود:🪕"],
"ذ":["الذال","ذئب:🐺,ذرة:🌽,ذهب:🥇,ذيل:🐕,ذبابة:🪰,ذقن:🧔,ذراع:💪,ذكي:🧠","حذاء:👟,نافذة:🪟,مذياع:📻,جذع:🪵,بذور:🌱,أذن:👂,غذاء:🥗,لذيذة:😋","تلميذ:🧑‍🎓,لذيذ:😋,رذاذ:💦,قنفذ:🦔,أستاذ:👨‍🏫,جرذ:🐀,فولاذ:🔩"],
"ر":["الراء","روبوت:🤖,رز:🍚,ريشة:🪶,رسالة:✉️,رعد:⛈️,رمل:🏖️,رأس:🙂,رسام:🎨","فراشة:🦋,قرد:🐒,برتقال:🍊,شجرة:🌳,سيارة:🚗,كرة:⚽,فراولة:🍓,زرافة:🦒","قمر:🌙,نمر:🐅,بحر:🌊,مطر:🌧️,نار:🔥,قطار:🚆,فأر:🐭,جزر:🥕"],
"ز":["الزاي","زرافة:🦒,زهرة:🌸,زيتون:🫒,زبدة:🧈,زجاجة:🍼,زر:🔘,زورق:🚣,زلاجة:🛷","غزال:🦌,مزمار:🎺,ميزان:⚖️,مزرعة:🏡,بازلاء:🫛,جزيرة:🏝️,حزام:🥋,وزة:🪿","موز:🍌,خبز:🍞,كنز:💎,لوز:🌰,أرز:🍚,جوز:🥥,ماعز:🐐,كرز:🍒"],
"س":["السين","سمكة:🐟,ساعة:⌚,سرير:🛏️,سلحفاة:🐢,سفينة:🚢,سحابة:☁️,سنجاب:🐿️,سيارة:🚗","مسطرة:📏,فستان:👗,بسكويت:🍪,مسمار:🔩,مسجد:🕌,عسل:🍯,حاسوب:💻,مكنسة:🧹","شمس:☀️,فأس:🪓,جرس:🔔,كأس:🏆,خس:🥬,حارس:💂,درس:📚,قوس:🏹"],
"ش":["الشين","شمس:☀️,شجرة:🌳,شاي:🍵,شوكة:🍴,شمعة:🕯️,شاحنة:🚚,شطيرة:🥪,شباك:🪟","فراشة:🦋,مشط:🪮,عشب:🌿,مشمش:🍑,مشروب:🧃,عشاء:🍽️,شاشة:📺,فشار:🍿","عش:🪺,ريش:🪶,قرش:🦈,جيش:💂,فرش:🛋️,رشاش:🚿,خفاش:🦇,قماش:🧵"],
"ص":["الصاد","صقر:🦅,صندوق:📦,صابون:🧼,صاروخ:🚀,صحن:🍽️,صوص:🐥,صدفة:🐚,صبار:🌵","عصفور:🐦,عصير:🧃,بصل:🧅,حصان:🐴,قصر:🏰,مصباح:💡,إصبع:☝️,قصة:📖","مقص:✂️,قميص:👕,لص:🦹,قرص:💿,شخص:🧍,حمص:🫘,قفص:🐦,رقص:💃"],
"ض":["الضاد","ضفدع:🐸,ضوء:💡,ضرس:🦷,ضابط:👮,ضباب:🌫️,ضحكة:😂,ضيف:🧳,ضمادة:🩹","بيضة:🥚,خضار:🥦,مضرب:🏏,حضن:🤗,روضة:🏫,رياضة:⚽,مضيفة:✈️","أرض:🌍,بيض:🥚,حوض:🛁,مريض:🤒,أبيض:⚪,نبض:💓,ركض:🏃"],
"ط":["الطاء","طائرة:✈️,طبل:🥁,طماطم:🍅,طاووس:🦚,طفل:👶,طبيب:🧑‍⚕️,طاولة:🪑,طريق:🛣️","بطة:🦆,قطة:🐈,بطيخ:🍉,قطار:🚆,مطر:🌧️,شطيرة:🥪,بطاطس:🥔,عطر:🧴","مشط:🪮,قط:🐈,خط:✏️,بط:🦆,نفط:🛢️,شريط:🎞️,خيط:🧵,محيط:🌊"],
"ظ":["الظاء","ظرف:✉️,ظل:👤,ظبي:🦌,ظهر:🧍,ظفر:💅,ظلام:🌑,ظهيرة:☀️","نظارة:👓,مظلة:☂️,عظم:🦴,حظيرة:🐄,منظار:🔭,محفظة:👛,نظيف:🧼","حفظ:📚,لفظ:🗣️,حظ:🍀,غيظ:😠,قيظ:🔥,استيقظ:⏰"],
"ع":["العين","عين:👁️,عنب:🍇,عصفور:🐦,عسل:🍯,علم:🚩,عنكبوت:🕷️,عصير:🧃,عجلة:🛞","ملعقة:🥄,شمعة:🕯️,نعامة:🦤,ساعة:⌚,لعبة:🧸,ثعلب:🦊,بعوضة:🦟,قبعة:🎩","ضفدع:🐸,شارع:🛣️,إصبع:☝️,مصنع:🏭,ربيع:🌸,شراع:⛵,ذراع:💪,زرع:🌱"],
"غ":["الغين","غزال:🦌,غيمة:☁️,غراب:🐦‍⬛,غسالة:🧺,غواصة:🚢,غوريلا:🦍,غرفة:🚪,غطاء:🧢","صغير:🐣,مغسلة:🚰,بغل:🫏,مغناطيس:🧲,ببغاء:🦜,نغمة:🎵,رغيف:🍞","صمغ:🧴,دماغ:🧠,مضغ:😋,فراغ:⬜,رسغ:✋,لدغ:🐝"],
"ف":["الفاء","فيل:🐘,فراشة:🦋,فأر:🐭,فستان:👗,فراولة:🍓,فطيرة:🥧,فانوس:🏮,فم:👄","تفاحة:🍎,سفينة:🚢,قفاز:🧤,مفتاح:🔑,دفتر:📒,سلحفاة:🐢,عصفور:🐦,صفارة:📣","هاتف:📱,سيف:🗡️,خروف:🐑,أنف:👃,رف:📚,كهف:🕳️,صيف:☀️,حرف:🔤"],
"ق":["القاف","قطة:🐈,قمر:🌙,قرد:🐒,قلب:❤️,قلم:✏️,قطار:🚆,قبعة:🎩,قارب:⛵","بقرة:🐄,عقرب:🦂,سقف:🏠,ملعقة:🥄,برتقال:🍊,نقود:💰,دقيقة:⏱️,صقر:🦅","طبق:🍽️,ورق:📄,برق:⚡,صندوق:📦,سوق:🛒,إبريق:🫖,طريق:🛣️,بوق:📯"],
"ك":["الكاف","كلب:🐕,كرة:⚽,كتاب:📖,كعكة:🎂,كوب:☕,كرسي:🪑,كمثرى:🍐,كنغر:🦘","سكر:🍬,شكولاتة:🍫,بسكويت:🍪,دكتور:🧑‍⚕️,مكنسة:🧹,سمكة:🐟,مكواة:👔,مكتب:🗄️","سمك:🐟,ديك:🐓,شباك:🪟,شوك:🌵,كعك:🍩,ملك:🤴,فلك:🪐,مسواك:🪥"],
"ل":["اللام","ليمون:🍋,لعبة:🧸,لبن:🥛,لحم:🥩,ليل:🌃,لسان:👅,لوحة:🖼️,لؤلؤ:🦪","قلم:✏️,قلب:❤️,كلب:🐕,علم:🚩,ملعقة:🥄,سلحفاة:🐢,فلفل:🌶️,بالون:🎈","جمل:🐫,فيل:🐘,جبل:⛰️,نحل:🐝,عسل:🍯,طفل:👶,بصل:🧅,برتقال:🍊"],
"م":["الميم","موز:🍌,مفتاح:🔑,مطر:🌧️,ملعقة:🥄,مقص:✂️,ماء:💧,مصباح:💡,مدرسة:🏫","سمكة:🐟,شمس:☀️,شمعة:🕯️,نمر:🐅,قمر:🌙,تمساح:🐊,جمل:🐫,سماء:🌌","قلم:✏️,فم:👄,لحم:🥩,علم:🚩,نجم:⭐,خاتم:💍,رسم:🎨,حمام:🛁"],
"ن":["النون","نمر:🐅,نحلة:🐝,نجمة:⭐,نار:🔥,نملة:🐜,نخلة:🌴,نظارة:👓,نافذة:🪟","أنف:👃,عنب:🍇,سنجاب:🐿️,منزل:🏠,فنجان:☕,بنت:👧,قنفذ:🦔,عنكبوت:🕷️","لبن:🥛,عين:👁️,قطن:☁️,حصان:🐴,ثعبان:🐍,تين:🌰,بالون:🎈,ليمون:🍋"],
"ه":["الهاء","هاتف:📱,هدية:🎁,هرم:🔺,هلال:🌙,هدهد:🐦,هر:🐈,هواء:💨,هيكل:🦴","مهرج:🤡,نهر:🏞️,زهرة:🌸,فهد:🐆,كهف:🕳️,ظهر:🧍,سهم:🏹,مهد:👶","وجه:🙂,مياه:💧,شفاه:👄,اتجاه:🧭,تنبيه:🔔,انتباه:⚠️,شبيه:👯"],
"و":["الواو","وردة:🌹,وسادة:🛏️,ولد:👦,وزة:🪿,وجه:🙂,ورقة:🍃,وعاء:🥣,وشاح:🧣","حوت:🐋,موز:🍌,ثوم:🧄,توت:🫐,صورة:🖼️,كوب:☕,يوم:📅,صوص:🐥","دلو:🪣,جرو:🐶,حلو:🍬,جو:🌤️,بدو:🏕️,لهو:🎠"],
"ي":["الياء","يد:✋,يمامة:🕊️,يخت:🛥️,ياقوت:💎,يقطين:🎃,يوسفي:🍊,يوم:📅,يرقة:🐛","سيارة:🚗,فيل:🐘,بيت:🏠,زيت:🫒,ديك:🐓,عين:👁️,سيف:🗡️,ريشة:🪶","شاي:🍵,كرسي:🪑,جدي:🐐,ظبي:🦌,قاضي:⚖️,مشي:🚶,وادي:🏞️,يوسفي:🍊"]
};
const KV_LETTERS={};
for(const [L,[name,a,b,c]] of Object.entries(RAW)){const p=s=>s.split(",").map(x=>{const i=x.indexOf(":");return {w:x.slice(0,i),e:x.slice(i+1)};});KV_LETTERS[L]={name,lists:{start:p(a),mid:p(b),end:p(c)}};}
const KV_POS={start:"في أول الكلمة",mid:"في وسط الكلمة",end:"في آخر الكلمة"};
const KV_VARIANTS={"أ":"أإآءئؤ","ي":"يى"};
const KV=(()=>{
const $=id=>document.getElementById(id);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const pick=a=>a[Math.floor(Math.random()*a.length)];
let S={sfx:true,voiceSrc:"auto",rate:0.85,theme:"",stars:0};
try{Object.assign(S,JSON.parse(localStorage.getItem("kvSettings")||"{}"));}catch(e){}
const save=()=>localStorage.setItem("kvSettings",JSON.stringify(S));
function toast(t){let el=$("kvToast");if(!el){el=document.createElement("div");el.id="kvToast";el.className="toast";document.body.appendChild(el);}el.textContent=t;el.classList.add("show");clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove("show"),2200);}

/* sound effects */
let actx;const ac=()=>{try{return actx||(actx=new (window.AudioContext||window.webkitAudioContext)());}catch(e){return null;}};
function tone(f,d,type="sine",v=.15,delay=0){if(!S.sfx)return;const c=ac();if(!c)return;if(c.state==="suspended")c.resume();const o=c.createOscillator(),g=c.createGain(),t=c.currentTime+delay;o.type=type;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(c.destination);o.start(t);o.stop(t+d);}
const sfx={win:()=>[523,659,784,1046].forEach((f,i)=>tone(f,.25,"triangle",.18,i*.1)),oops:()=>{tone(330,.18);tone(262,.25,"sine",.15,.15);},flip:()=>tone(600,.08,"triangle",.1),tick:()=>tone(900,.05,"square",.05),star:()=>[784,988,1318].forEach((f,i)=>tone(f,.2,"sine",.18,i*.08)),knock:()=>{tone(180,.08,"square",.2);tone(180,.08,"square",.2,.18);},pop:()=>{tone(200,.3,"sawtooth",.2);tone(80,.5,"square",.15,.05);},chomp:()=>{tone(260,.06,"square",.12);tone(200,.06,"square",.12,.09);},bubble:()=>[400,600,800].forEach((f,i)=>tone(f,.12,"sine",.12,i*.06))};

/* speech: own recording -> browser Arabic voice -> online voice */
let arVoice=null,player=new Audio(),speakId=0;
function loadVoices(){if("speechSynthesis" in window){const v=speechSynthesis.getVoices();arVoice=v.find(x=>x.lang==="ar-SA")||v.find(x=>/^ar/i.test(x.lang))||v.find(x=>/arab/i.test(x.name))||null;}const n=$("kvVoiceNote");if(n)n.innerHTML=arVoice?`✅ صوت عربي متوفر في المتصفح: <b>${arVoice.name}</b>`:`⚠️ لا يوجد صوت عربي مثبت في المتصفح، سيُستخدم <b>الصوت عبر الإنترنت</b> تلقائيًا.`;}
if("speechSynthesis" in window){speechSynthesis.onvoiceschanged=loadVoices;setTimeout(loadVoices,700);}
function speakBrowser(text){return new Promise((res,rej)=>{if(!("speechSynthesis" in window)||!arVoice)return rej("no-voice");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=arVoice.lang;u.voice=arVoice;u.rate=S.rate;let st=false;u.onstart=()=>st=true;u.onend=res;u.onerror=e=>rej(e.error);setTimeout(()=>{speechSynthesis.speak(u);speechSynthesis.resume();},60);setTimeout(()=>{if(!st)rej("timeout");},2500);});}
function speakOnline(text){return new Promise((res,rej)=>{player.pause();player=new Audio("https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ar&ttsspeed="+(S.rate<0.8?0.4:1)+"&q="+encodeURIComponent(text.slice(0,190)));player.onended=res;player.onerror=()=>rej("online");player.play().catch(rej);});}
function playRec(d){return new Promise((res,rej)=>{player.pause();player=new Audio(d);player.onended=res;player.onerror=rej;player.play().catch(rej);});}
const recKey=w=>"arSpinnerRec:"+w;
async function speak(text){if(!text)return;const id=++speakId;const rec=localStorage.getItem(recKey(text));if(rec){try{return await playRec(rec);}catch(e){}}
 const order=S.voiceSrc==="online"?[speakOnline,speakBrowser]:S.voiceSrc==="browser"?[speakBrowser,speakOnline]:(arVoice?[speakBrowser,speakOnline]:[speakOnline,speakBrowser]);
 for(const fn of order){if(id!==speakId)return;try{return await fn(text);}catch(e){}}if(id===speakId)toast("🔇 تعذّر تشغيل الصوت – تأكد من اتصال الإنترنت");}
function stopSpeech(){speakId++;if("speechSynthesis" in window)speechSynthesis.cancel();try{player.pause();}catch(e){}}

/* record your own voice for a word */
let recorder=null;
async function record(word,btn,done){
 if(recorder&&recorder.state==="recording"){recorder.stop();return;}
 if(!navigator.mediaDevices||!window.MediaRecorder)return toast("التسجيل غير مدعوم في هذا المتصفح");
 try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});const chunks=[];recorder=new MediaRecorder(stream);
  recorder.ondataavailable=e=>chunks.push(e.data);
  recorder.onstop=()=>{stream.getTracks().forEach(t=>t.stop());btn.textContent="🎙️ سجّل صوتك";btn.classList.remove("recording");
   const fr=new FileReader();fr.onload=()=>{try{localStorage.setItem(recKey(word),fr.result);toast("✅ تم حفظ تسجيلك لهذه الكلمة");playRec(fr.result);done&&done();}catch(e){toast("المساحة ممتلئة – احذف بعض التسجيلات");}};fr.readAsDataURL(new Blob(chunks,{type:recorder.mimeType||"audio/webm"}));};
  recorder.start();btn.textContent="⏹️ إيقاف التسجيل";btn.classList.add("recording");setTimeout(()=>{if(recorder&&recorder.state==="recording")recorder.stop();},4000);
 }catch(e){toast("لم يُسمح باستخدام الميكروفون");}}
function stopRecord(){if(recorder&&recorder.state==="recording")recorder.stop();}
const hasRec=w=>!!localStorage.getItem(recKey(w));
const delRec=w=>localStorage.removeItem(recKey(w));

function addStar(n=1){S.stars+=n;save();const el=$("kvStars");if(el){el.textContent=S.stars;el.parentElement.classList.remove("joy");void el.offsetWidth;el.parentElement.classList.add("joy");}}
function confetti(){let c=$("kvConfetti");if(!c){c=document.createElement("canvas");c.id="kvConfetti";document.body.appendChild(c);}const x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;const cols=["#f4a259","#5b8e7d","#f25c54","#7d6bd6","#f7b538","#3d9ad1","#e76f9a","#8cb369"];
 const P=Array.from({length:140},()=>({x:c.width/2,y:c.height/2,vx:(Math.random()-.5)*16,vy:Math.random()*-16-4,s:6+Math.random()*8,r:Math.random()*6,c:pick(cols)}));let f=0;
 (function loop(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.vy+=.45;p.x+=p.vx;p.y+=p.vy;p.r+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore();});if(++f<140)requestAnimationFrame(loop);else x.clearRect(0,0,c.width,c.height);})();}
function applyTheme(){document.body.classList.remove("theme-space","theme-autumn","theme-winter");if(S.theme)document.body.classList.add(S.theme);
 let d=$("kvDeco");if(!d){d=document.createElement("div");d.id="kvDeco";d.className="deco";document.body.prepend(d);}
 const set={"":["⭐","🌈","☁️","🎈"],"theme-space":["⭐","🪐","✨","🚀"],"theme-autumn":["🍂","🍁","🍃","🌰"],"theme-winter":["❄️","⛄","🌨️"]}[S.theme]||["⭐"];
 d.innerHTML=Array.from({length:12},()=>`<span style="left:${Math.random()*100}%;animation-duration:${12+Math.random()*14}s;animation-delay:-${Math.random()*20}s;font-size:${18+Math.random()*20}px">${pick(set)}</span>`).join("");}
function bindClose(ov,fn){ov.querySelectorAll("[data-x]").forEach(b=>b.onclick=fn);ov.addEventListener("click",e=>{if(e.target===ov)fn();});}

function header({title,sub,icon,extra=""}){
 const h=document.createElement("header");h.className="kv-header";
 h.innerHTML=`<div class="logo"><div class="icon">${icon}</div><div><h1>${title}</h1><small>${sub||""}</small></div></div>
 <div class="hbtns">${extra}<div class="pill stars">⭐ <span id="kvStars">${S.stars}</span></div><a class="pill" href="index.html" id="kvHome">🎮 كل الألعاب</a><button class="pill" id="kvSetBtn">⚙️ الإعدادات</button></div>`;
 document.body.prepend(h);
 const ov=document.createElement("div");ov.className="overlay";ov.id="kvSettings";
 ov.innerHTML=`<div class="modal"><div class="m-head"><span class="m-title">⚙️ الإعدادات</span><button class="close-x" data-x>✕</button></div>
  <div class="setting-row"><b>المؤثرات الصوتية</b><div class="seg" data-k="sfx"><button data-v="true">تشغيل</button><button data-v="false">إيقاف</button></div></div>
  <div class="setting-row"><b>مصدر الصوت</b><div class="seg" data-k="voiceSrc"><button data-v="auto">تلقائي</button><button data-v="online">عبر الإنترنت</button><button data-v="browser">صوت المتصفح</button></div></div>
  <div class="setting-row"><b>سرعة النطق</b><div class="seg" data-k="rate"><button data-v="0.6">بطيء</button><button data-v="0.85">عادي</button><button data-v="1">سريع</button></div></div>
  <div class="setting-row"><b>اختبار الصوت</b><button class="ghost" id="kvTest">🔊 جرّب</button></div>
  <div class="setting-row"><b>الشكل</b><div class="seg" data-k="theme"><button data-v="">افتراضي</button><button data-v="theme-space">الفضاء 🚀</button><button data-v="theme-autumn">الخريف 🍂</button><button data-v="theme-winter">الشتاء ❄️</button></div></div>
  <p class="hint" id="kvVoiceNote"></p></div>`;
 document.body.appendChild(ov);
 ov.querySelectorAll(".seg").forEach(seg=>{const k=seg.dataset.k;seg.querySelectorAll("button").forEach(b=>{b.classList.toggle("on",String(S[k])===b.dataset.v);b.onclick=()=>{seg.querySelectorAll("button").forEach(x=>x.classList.remove("on"));b.classList.add("on");const v=b.dataset.v;S[k]=k==="sfx"?v==="true":k==="rate"?Number(v):v;save();if(k==="theme")applyTheme();};});});
 $("kvSetBtn").onclick=()=>{ov.classList.add("show");loadVoices();};
 $("kvTest").onclick=()=>speak("مرحبا! هيا نلعب");
 bindClose(ov,()=>ov.classList.remove("show"));
 applyTheme();loadVoices();document.title=title+" – ألعاب النطق والتخاطب";
}

/* ===== result popup: ✕ / إغلاق / التالي =====
   If the user closes it (✕, إغلاق, Esc, click outside) and the game did not give onClose,
   a floating "next" button stays on screen so the game can always continue. */
let popCb=null;
function popup({emoji="",title="🎉 أحسنت!",text="",html,sub="",say,nextLabel="التالي ←",onNext,onClose,closeLabel="✖️ إغلاق",listen=true,extra="",onShow}){
 let ov=$("kvPop");
 if(!ov){ov=document.createElement("div");ov.className="overlay";ov.id="kvPop";
  ov.innerHTML=`<div class="modal center"><div class="m-head"><span class="m-title" id="kvPT"></span><button class="close-x" id="kvPX" title="إغلاق (Esc)">✕</button></div>
  <div class="m-emoji" id="kvPE"></div><div class="m-text" id="kvPTx"></div><div class="m-sub" id="kvPS"></div><div id="kvPExtra"></div>
  <div class="m-foot"><button class="rb listen" id="kvPL">🔊 استمع</button><button class="rb closeb" id="kvPC"></button><button class="rb next" id="kvPN"></button></div></div>`;
  document.body.appendChild(ov);
  const close=go=>{if(!ov.classList.contains("show"))return;ov.classList.remove("show");stopSpeech();stopRecord();const cb=popCb;popCb=null;if(!cb)return;
   if(go){cb.onNext&&cb.onNext();}else if(cb.onClose){cb.onClose();}else if(cb.onNext){showResume(cb.nextLabel,cb.onNext);}};
  $("kvPX").onclick=()=>close(false);$("kvPC").onclick=()=>close(false);$("kvPN").onclick=()=>close(true);
  ov.addEventListener("click",e=>{if(e.target===ov)close(false);});
  document.addEventListener("keydown",e=>{if(!ov.classList.contains("show"))return;if(e.key==="Escape")close(false);if(e.key==="Enter"){e.preventDefault();close(true);}});
 }
 hideResume();popCb={onNext,onClose,nextLabel,say:(say===false||say==null)?text:say};
 $("kvPT").textContent=title;$("kvPE").textContent=emoji;$("kvPE").style.display=emoji?"":"none";
 if(html)$("kvPTx").innerHTML=html;else $("kvPTx").textContent=text;
 $("kvPS").innerHTML=sub;$("kvPExtra").innerHTML=extra;
 $("kvPC").textContent=closeLabel;$("kvPN").textContent=nextLabel;$("kvPN").style.display=onNext?"":"none";
 $("kvPL").style.display=listen?"":"none";$("kvPL").onclick=()=>speak(popCb?popCb.say:"");
 ov.classList.add("show");onShow&&onShow();if(say!==false)setTimeout(()=>speak(say??text),300);
}
function showResume(label,fn){let b=$("kvResume");if(!b){b=document.createElement("button");b.id="kvResume";b.className="btn big kv-resume";document.body.appendChild(b);}
 b.textContent=label||"التالي ←";b.onclick=()=>{hideResume();fn();};b.classList.add("show");}
function hideResume(){const b=$("kvResume");if(b)b.classList.remove("show");}
document.addEventListener("keydown",e=>{
 if(e.key==="Escape")document.querySelectorAll(".overlay.show").forEach(o=>{if(o.id!=="kvPop")o.classList.remove("show");});
 const b=$("kvResume");if(e.key==="Enter"&&b&&b.classList.contains("show")&&!document.querySelector(".overlay.show")){e.preventDefault();b.click();}});

/* ===== generic quiz engine ===== item={pic,small,q,say,choices:[{e,t,ok}],ans,ansEmoji,sub,silent} */
function quiz({make,modes,modeKey,tools=""}){
 const root=$("qz");let deck=[],i=0,score=0,lock=false,mode=modes?(localStorage.getItem(modeKey)||Object.keys(modes)[0]):null;
 root.innerHTML=`<div class="panel qz"><div class="qz-top"><span class="muted" id="qzProg"></span>${modes?`<div class="seg" id="qzMode">${Object.entries(modes).map(([k,v])=>`<button data-v="${k}">${v}</button>`).join("")}</div>`:""}<span style="font-weight:800">✅ <span id="qzScore">0</span></span></div>
  <div class="qz-pic" id="qzPic"></div><div class="qz-q" id="qzQ"></div>
  <div class="row"><button class="ghost" id="qzRead">🔊 اسمع</button>${tools}<button class="ghost" id="qzSkip">تخطَّ ←</button></div>
  <div class="qz-ch" id="qzCh"></div></div>`;
 const restart=()=>{hideResume();deck=make(mode);i=0;score=0;$("qzScore").textContent=0;if(modes)$("qzMode").querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.v===mode));show();};
 function show(){hideResume();lock=false;const c=deck[i];$("qzProg").textContent=`${i+1} / ${deck.length}`;
  const p=$("qzPic");p.className="qz-pic"+(c.small?" small":"");p.textContent=c.pic;p.style.animation="none";void p.offsetWidth;p.style.animation="";
  $("qzQ").textContent=c.q;
  $("qzCh").innerHTML=c.choices.map((o,k)=>`<button class="qz-c" data-k="${k}">${o.e?`<span class="e">${o.e}</span>`:""}<span class="t">${o.t}</span></button>`).join("");
  $("qzCh").querySelectorAll(".qz-c").forEach(b=>b.onclick=()=>ans(b,c.choices[+b.dataset.k]));
  setTimeout(()=>speak(c.say??c.q),300);}
 const next=()=>{if(i<deck.length-1){i++;show();}else restart();};
 function ans(b,o){if(lock||b.disabled)return;const c=deck[i];if(!c.silent)speak(o.t);
  if(o.ok){lock=true;b.classList.add("right","joy");score++;$("qzScore").textContent=score;sfx.star();addStar();
   $("qzCh").querySelectorAll(".qz-c").forEach(x=>x.disabled=true);
   const last=i===deck.length-1;if(last){confetti();sfx.win();}
   setTimeout(()=>popup({emoji:c.ansEmoji??o.e??"",title:last?"🏆 انتهت الأسئلة!":"🎉 "+pick(["أحسنت!","ممتاز!","رائع!","شاطر!"]),text:c.ans??o.t,sub:last?`النتيجة: ${score} من ${deck.length}`:(c.sub||""),nextLabel:last?"🔁 العب مرة أخرى":"السؤال التالي ←",onNext:next}),400);}
  else{b.classList.add("wrong","shake");b.disabled=true;sfx.oops();toast("حاول مرة أخرى 💪");}}
 $("qzRead").onclick=()=>{const c=deck[i];speak(c.say??c.q);};
 $("qzSkip").onclick=next;
 if(modes)$("qzMode").querySelectorAll("button").forEach(b=>b.onclick=()=>{mode=b.dataset.v;localStorage.setItem(modeKey,mode);restart();});
 restart();return{restart,current:()=>deck[i]};
}

/* ===== word picker (28 letters) ===== */
function wordPicker({key,min=2,max=8,onDone,title="📝 اختر الكلمات"}){
 const sk="kvPick:"+key;let st={pos:"start",letters:["ر"],sel:[],custom:[]};
 try{Object.assign(st,JSON.parse(localStorage.getItem(sk)||"{}"));}catch(e){}
 const pool=()=>{const seen=new Set(),o=[];st.letters.forEach(L=>KV_LETTERS[L].lists[st.pos].forEach(x=>{if(!seen.has(x.w)){seen.add(x.w);o.push(x);}}));st.custom.forEach(x=>{if(!seen.has(x.w)){seen.add(x.w);o.push(x);}});return o;};
 if(!st.sel.length)st.sel=pool().slice(0,max);st.sel=st.sel.slice(0,max);
 let ov=$("kvPick");if(ov)ov.remove();
 ov=document.createElement("div");ov.className="overlay";ov.id="kvPick";
 ov.innerHTML=`<div class="modal wide"><div class="m-head"><span class="m-title">${title}</span><button class="close-x" data-x>✕</button></div>
 <p class="muted" style="margin-bottom:10px">اختر موضع الحرف، ثم حرفًا أو أكثر (حتى 4)، ثم اختر من ${min} إلى ${max} كلمات.</p>
 <div class="tabs" id="kvPos"></div><div class="letters" id="kvLet"></div>
 <div class="sel-head"><b>الكلمات المختارة: <span id="kvCnt"></span> من ${max}</b><div class="row"><button class="ghost" id="kvRnd">🔀 اختيار عشوائي</button><button class="ghost" id="kvAll">✅ تحديد الكل</button><button class="ghost" id="kvNone">⬜ إلغاء تحديد الكل</button></div></div>
 <div class="chips" id="kvChips"></div>
 <b style="display:block;margin-bottom:8px">➕ أضف كلمة خاصة بك</b>
 <div class="add-row"><input class="em" id="kvNE" placeholder="🙂" maxlength="4"><input id="kvNW" placeholder="اكتب الكلمة هنا…"><button class="ghost" id="kvAdd">إضافة</button></div>
 <div class="center"><button class="btn big" id="kvGo">▶️ ابدأ اللعب</button></div></div>`;
 document.body.appendChild(ov);
 const render=()=>{
  $("kvPos").innerHTML=Object.entries(KV_POS).map(([k,v])=>`<button class="tab ${st.pos===k?"on":""}" data-k="${k}">${v}</button>`).join("");
  $("kvPos").querySelectorAll(".tab").forEach(b=>b.onclick=()=>{st.pos=b.dataset.k;st.sel=shuffle(pool()).slice(0,max);render();});
  $("kvLet").innerHTML=Object.keys(KV_LETTERS).map(L=>`<button class="letter ${st.letters.includes(L)?"on":""}" title="${KV_LETTERS[L].name}">${L}</button>`).join("");
  $("kvLet").querySelectorAll(".letter").forEach(b=>b.onclick=()=>{const L=b.textContent,a=st.letters;
   if(a.includes(L)){if(a.length===1)return toast("اختر حرفًا واحدًا على الأقل");a.splice(a.indexOf(L),1);}else{if(a.length>=4)return toast("يمكنك دمج 4 حروف كحد أقصى");a.push(L);}
   const ws=pool().map(x=>x.w);st.sel=st.sel.filter(s=>ws.includes(s.w));if(!st.sel.length)st.sel=shuffle(pool()).slice(0,max);render();});
  const p=pool();
  $("kvChips").innerHTML=p.map(x=>`<button class="chip ${st.sel.some(s=>s.w===x.w)?"on":""}" data-w="${x.w}">${x.e} ${x.w}</button>`).join("");
  $("kvChips").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{const w=b.dataset.w,i=st.sel.findIndex(s=>s.w===w);
   if(i>-1)st.sel.splice(i,1);else{if(st.sel.length>=max)return toast(`${max} كلمات كحد أقصى`);st.sel.push(p.find(x=>x.w===w));}render();});
  $("kvCnt").textContent=st.sel.length;};
 $("kvRnd").onclick=()=>{st.sel=shuffle(pool()).slice(0,max);render();};
 $("kvAll").onclick=()=>{st.sel=pool().slice(0,max);render();};
 $("kvNone").onclick=()=>{st.sel=[];render();};
 $("kvAdd").onclick=()=>{const w=$("kvNW").value.trim(),e=$("kvNE").value.trim()||"⭐";if(!w)return toast("اكتب الكلمة أولًا");
  if(!st.custom.some(c=>c.w===w))st.custom.push({w,e});if(st.sel.length<max&&!st.sel.some(s=>s.w===w))st.sel.push({w,e});$("kvNW").value="";$("kvNE").value="";render();};
 $("kvGo").onclick=()=>{if(st.sel.length<min)return toast(`اختر ${min} كلمات على الأقل`);localStorage.setItem(sk,JSON.stringify(st));ov.classList.remove("show");hideResume();onDone([...st.sel],st);};
 bindClose(ov,()=>ov.classList.remove("show"));
 render();ov.classList.add("show");
}
function savedWords(key){try{const s=JSON.parse(localStorage.getItem("kvPick:"+key)||"null");return s&&s.sel&&s.sel.length?s:null;}catch(e){return null;}}
function bumpPlay(id){try{const p=JSON.parse(localStorage.getItem("kvPlays")||"{}");p[id]=(p[id]||0)+1;localStorage.setItem("kvPlays",JSON.stringify(p));}catch(e){}}

return {$,shuffle,pick,S,save,toast,sfx,speak,stopSpeech,record,hasRec,delRec,addStar,confetti,header,popup,showResume,hideResume,quiz,wordPicker,savedWords,bindClose,applyTheme,bumpPlay};
})();
