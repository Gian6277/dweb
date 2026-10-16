const challenges=[
{m:"01 · SELECTORES",t:"Jerarquía visual",x:1,d:"Sin modificar el HTML: centrà el texto de #titulo, asignale un tamaño mínimo de 48px y cambiá su color.",h:`<main><h1 id="titulo">Paysandú</h1><p class="bajada">Una ciudad sobre el río Uruguay.</p></main>`,p:"Usá el selector #titulo y las propiedades text-align, font-size y color.",check:(doc)=>{let e=doc.querySelector("#titulo"),s=doc.defaultView.getComputedStyle(e);return s.textAlign==="center"&&parseFloat(s.fontSize)>=48&&!["rgb(17, 17, 17)","rgb(23, 23, 23)","rgb(0, 0, 0)"].includes(s.color)}},
{m:"02 · SELECTORES",t:"Clase destacada",x:1,d:"Estilizá solamente los elementos .destacado: fondo, padding de al menos 12px y un borde izquierdo visible.",h:`<section><p>Información general</p><p class="destacado">Heroica Paysandú</p><p>Patrimonio e identidad</p></section>`,p:"No selecciones todos los párrafos. Trabajá con .destacado.",check:(doc)=>{let e=doc.querySelector(".destacado"),s=doc.defaultView.getComputedStyle(e);return s.backgroundColor!=="rgba(0, 0, 0, 0)"&&parseFloat(s.paddingTop)>=12&&parseFloat(s.borderLeftWidth)>0&&s.borderLeftStyle!=="none"}},
{m:"03 · BOX MODEL",t:"Construí una tarjeta",x:1,d:"Convertí .card en una tarjeta: padding mínimo 20px, borde, border-radius y box-shadow.",h:`<article class="card"><h2>Semana de la Cerveza</h2><p>Uno de los eventos tradicionales de Paysandú.</p></article>`,p:"Pensá en el espacio interior, el contorno, las esquinas y la profundidad.",check:(doc)=>{let s=doc.defaultView.getComputedStyle(doc.querySelector(".card"));return parseFloat(s.paddingTop)>=20&&parseFloat(s.borderTopWidth)>0&&parseFloat(s.borderRadius)>0&&s.boxShadow!=="none"}},
{m:"04 · FLEXBOX",t:"Navbar flexible",x:1,d:"Hacé que nav ul sea flex, distribuí los enlaces con espacio entre ellos, eliminá las viñetas y agregá gap.",h:`<nav><ul><li>Inicio</li><li>Historia</li><li>Turismo</li><li>Contacto</li></ul></nav>`,p:"El contenedor que debe convertirse en flex es nav ul.",check:(doc)=>{let s=doc.defaultView.getComputedStyle(doc.querySelector("nav ul"));return s.display==="flex"&&s.justifyContent==="space-between"&&s.listStyleType==="none"&&parseFloat(s.gap)>0}},
{m:"05 · GRID",t:"Galería de tres columnas",x:1,d:"Transformá .lugares en una grilla de 3 columnas iguales con un gap mínimo de 16px.",h:`<section class="lugares"><article>Costanera</article><article>Monumento</article><article>Termas</article><article>Teatro</article><article>Basílica</article><article>Puerto</article></section>`,p:"Necesitás display:grid y tres columnas equivalentes.",check:(doc)=>{let e=doc.querySelector(".lugares"),s=doc.defaultView.getComputedStyle(e);return s.display==="grid"&&s.gridTemplateColumns.split(" ").length===3&&parseFloat(s.gap)>=16}},
{m:"06 · INTERACCIÓN",t:"Botón con estado hover",x:1,d:"Diseñá .btn y agregá un :hover que cambie al menos background-color y transforme ligeramente el botón.",h:`<a class="btn" href="#">Explorar Paysandú</a>`,p:"Creá dos reglas: .btn y .btn:hover. Podés usar transform: translateY(...) o scale(...).",sourceCheck:c=>/\.btn\s*\{[^}]+}/i.test(c)&&/\.btn:hover\s*\{[^}]*background(?:-color)?\s*:/i.test(c)&&/\.btn:hover\s*\{[^}]*transform\s*:/i.test(c)},
{m:"07 · RESPONSIVE",t:"Adaptación móvil",x:1,d:"Creá una media query para pantallas de máximo 700px. Dentro, hacé que .lugares tenga una sola columna.",h:`<section class="lugares"><article>A</article><article>B</article><article>C</article></section>`,p:"Usá @media (max-width: 700px) y redefiní grid-template-columns.",sourceCheck:c=>/@media\s*\(\s*max-width\s*:\s*700px\s*\)/i.test(c)&&/grid-template-columns\s*:\s*(?:1fr|repeat\(\s*1\s*,\s*1fr\s*\))/i.test(c)},
{m:"08 · TRANSICIONES",t:"Transición suave",x:1,d:"Aplicá a .card una transición de 0.3s sobre transform y, al pasar el mouse, desplazala 4px hacia arriba.",h:`<article class="card"><h2>Paysandú</h2><p>Diseño con interacción suave.</p></article>`,p:"Usá transition en .card y transform dentro de .card:hover.",sourceCheck:c=>/\.card\s*\{[^}]*transition\s*:\s*transform\s+0?\.3s/i.test(c)&&/\.card:hover\s*\{[^}]*transform\s*:\s*translateY\(\s*-4px\s*\)/i.test(c)},
{m:"09 · VARIABLES",t:"Variables reutilizables",x:1,d:"Definí en :root las variables --principal y --espacio. Usalas en .panel para el background-color y el padding respectivamente.",h:`<section class="panel"><h2>Identidad visual</h2><p>Reutilización de valores con variables CSS.</p></section>`,p:"Definí las variables con --nombre: valor; y recuperalas con var(--nombre).",sourceCheck:c=>/:root\s*\{[^}]*--principal\s*:[^;]+;[^}]*--espacio\s*:[^;]+;?/is.test(c)&&/\.panel\s*\{[^}]*background-color\s*:\s*var\(\s*--principal\s*\)[^}]*padding\s*:\s*var\(\s*--espacio\s*\)/is.test(c)},
{m:"10 · FINAL",t:"Interfaz completa · sin pistas",x:1,d:"Sin tocar el HTML: creá una interfaz coherente. Debe incluir variables CSS en :root, Grid o Flex, tarjetas, :hover y una media query.",h:`<header class="hero"><h1>Paysandú</h1><p>Historia · río · cultura</p></header><nav class="menu"><a>Historia</a><a>Turismo</a><a>Eventos</a></nav><main class="cards"><article class="card"><h2>Costanera</h2><p>Río Uruguay</p></article><article class="card"><h2>Termas</h2><p>Naturaleza</p></article><article class="card"><h2>Cultura</h2><p>Identidad</p></article></main>`,p:"",sourceCheck:c=>/:root\s*\{[^}]*--[\w-]+\s*:/i.test(c)&&/display\s*:\s*(?:grid|flex)/i.test(c)&&/\.card\s*\{[^}]+}/i.test(c)&&/:hover\s*\{/i.test(c)&&/@media/i.test(c)}
];
let current=0, solved=new Set(), answers={}, failedAttempts={}, verifiedAttempts={};
const $=s=>document.querySelector(s);
function renderModules(){const mods=[...new Set(challenges.map(x=>x.m))];$("#modules").innerHTML=mods.map(m=>`<button class="${challenges[current].m===m?'active':''}" data-m="${m}">${m}</button>`).join("");document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{let i=challenges.findIndex(x=>x.m===b.dataset.m);if(i<=Math.max(0,solved.size)){current=i;render()}})}
function render(){let q=challenges[current];$("#moduleLabel").textContent=q.m;$("#challengeTitle").textContent=q.t;$("#challengeText").textContent=q.d;$("#xpBadge").textContent=`${q.x} punto${q.x===1?"":"s"}`;$("#htmlCode").textContent=q.h;$("#cssEditor").value=answers[current]||"";$("#hint").textContent=q.p||"Este desafío no tiene pistas.";$("#hint").classList.add("hidden");$("#feedback").textContent=solved.has(current)?"✓ Desafío ya superado.":"";$("#feedback").className="feedback"+(solved.has(current)?" ok":"");$("#prevBtn").disabled=current===0;$("#nextBtn").disabled=!solved.has(current)||current===challenges.length-1;$("#pdfBtn").classList.remove("hidden");renderModules();updatePreview();updateProgress()}
function updatePreview(){answers[current]=$("#cssEditor").value;let q=challenges[current];$("#preview").srcdoc=`<!doctype html><html><head><style>body{font-family:Arial,sans-serif;padding:28px;color:#171717}${answers[current]}</style></head><body>${q.h}</body></html>`}
function updateProgress(){let grade=[...solved].reduce((s,i)=>s+challenges[i].x,0);$("#progress").textContent=`${grade.toFixed(1).replace(".0","")} / 10`;$("#xp").textContent=`Desafíos superados: ${solved.size} / ${challenges.length}`;$("#bar").style.width=`${grade/10*100}%`}
function cssParses(css){try{let st=document.createElement("style");st.textContent=css;document.head.appendChild(st);let ok=st.sheet&&st.sheet.cssRules.length>0;st.remove();return ok}catch(e){return false}}
$("#cssEditor").addEventListener("input",()=>{updatePreview();if(solved.has(current)){solved.delete(current);$("#nextBtn").disabled=true;updateProgress()}});
$("#hintBtn").onclick=()=>$("#hint").classList.toggle("hidden");
$("#resetBtn").onclick=()=>{$("#cssEditor").value="";updatePreview();$("#feedback").textContent=""};
$("#verifyBtn").onclick=()=>{let name=$("#studentName").value.trim(),css=$("#cssEditor").value,q=challenges[current];if(!name){$("#feedback").className="feedback bad";$("#feedback").textContent="✕ Escribí tu nombre y apellido antes de verificar.";return}verifiedAttempts[current]=(verifiedAttempts[current]||0)+1;if(!css.trim()||!cssParses(css)){failedAttempts[current]=(failedAttempts[current]||0)+1;$("#feedback").className="feedback bad";$("#feedback").textContent="✕ El CSS está vacío o contiene un error de sintaxis. Intento incorrecto registrado.";return}let ok=false;try{ok=q.sourceCheck?q.sourceCheck(css):q.check($("#preview").contentDocument)}catch(e){ok=false}$("#feedback").className="feedback "+(ok?"ok":"bad");if(!ok){failedAttempts[current]=(failedAttempts[current]||0)+1;}$("#feedback").textContent=ok?"✓ Desafío superado. Ya podés continuar.":"✕ El desafío todavía no cumple todos los requisitos. Corregilo antes de continuar. No se descuentan puntos por intentar nuevamente.";if(ok){solved.add(current);answers[current]=css;$("#nextBtn").disabled=current===challenges.length-1;updateProgress();$("#pdfBtn").classList.remove("hidden")}};
$("#prevBtn").onclick=()=>{if(current>0){current--;render()}};
$("#nextBtn").onclick=()=>{if(solved.has(current)&&current<challenges.length-1){current++;render()}};
$("#pdfBtn").onclick=()=>{
 let name=$("#studentName").value.trim();
 if(!name){alert("Escribí el nombre y apellido del estudiante antes de generar el PDF.");return}
 answers[current]=$("#cssEditor").value;
 const {jsPDF}=window.jspdf;
 let doc=new jsPDF({unit:"mm",format:"a4"}),y=18;
 let grade=[...solved].reduce((s,i)=>s+challenges[i].x,0);
 doc.setFont("helvetica","bold");doc.setFontSize(18);doc.text("CSS LAB - Entrega",15,y);y+=9;
 doc.setFontSize(10);doc.setFont("helvetica","normal");
 doc.text("Unidad Curricular: Electiva Experiencia del Usuario",15,y);y+=6;
 doc.text("Docente: Gianna Giupponi",15,y);y+=6;
 doc.text(`Estudiante: ${name}`,15,y);y+=6;
 doc.setFont("helvetica","bold");doc.setFontSize(13);
 doc.text(`Calificacion: ${grade.toFixed(1).replace(".0","")} / 10`,15,y);y+=7;
 doc.setFont("helvetica","normal");doc.setFontSize(10);
 doc.text(`Desafios superados: ${solved.size} / ${challenges.length}`,15,y);y+=10;
 challenges.forEach((q,i)=>{
   if(y>260){doc.addPage();y=18}
   let code=(answers[i]||"").trim();let status=solved.has(i)?"SUPERADO":(!code?"SIN RESPUESTA":((verifiedAttempts[i]||0)>0?"NO SUPERADO":"NO VERIFICADO"));
   doc.setFont("helvetica","bold");doc.setFontSize(11);
   doc.text(`${i+1}. ${q.t} - ${status} (${q.x} pt${q.x===1?"":"s"})`,15,y);y+=5;
   doc.setFont("helvetica","normal");doc.setFontSize(8);
   doc.text(`Intentos incorrectos: ${failedAttempts[i]||0}`,15,y);y+=5;
   code=code||"(sin respuesta)";
   doc.setFont("courier","normal");doc.setFontSize(8);
   let lines=doc.splitTextToSize(code,175);
   if(y+lines.length*4>280){doc.addPage();y=18}
   doc.text(lines,15,y);y+=lines.length*4+7;
 });
 // Registro de incidencias en una página independiente.
 doc.addPage();let yy=18;
 doc.setFont("helvetica","bold");doc.setFontSize(15);doc.text("CONTROL DE EVALUACION - INCIDENCIAS",15,yy);yy+=10;
 doc.setFont("helvetica","normal");doc.setFontSize(10);
 doc.text(`Cambios de pestana detectados: ${examSecurity.incidents.length}`,15,yy);yy+=7;
 doc.text(`Estado: ${examSecurity.locked ? "BLOQUEADA" : "SIN BLOQUEO"}`,15,yy);yy+=9;
 if(!examSecurity.incidents.length){doc.text("Sin incidencias registradas.",15,yy);}else{
 examSecurity.incidents.forEach((ev,i)=>{if(yy>265){doc.addPage();yy=18;}
 const line=`${i+1}. ${ev.time} - Desafio ${ev.challenge} - ${ev.reason}`;
 doc.text(doc.splitTextToSize(line,175),15,yy);yy+=13;});
 }
 doc.save(`CSS_LAB_${name.replace(/\s+/g,"_")}.pdf`);
};
render();

// ===== CONTROL DE EVALUACION CSS LAB =====
// Deteccion de perdida de visibilidad; es disuasoria, no un navegador seguro.
const SECURITY_KEY = 'css_lab_exam_control_v3';
function readSecurity(){
  try {return JSON.parse(sessionStorage.getItem(SECURITY_KEY)) || {};}
  catch(e){return {};}
}
const examSecurity = Object.assign({started:false, student:'', locked:false, incidents:[], answers:{}, solved:[], failed:{}, verified:{}, current:0}, readSecurity());
function saveSecurity(){
  if(!examSecurity.started)return;
  examSecurity.student = document.querySelector('#studentName').value.trim();
  examSecurity.answers = {...answers};
  examSecurity.answers[current] = document.querySelector('#cssEditor').value;
  examSecurity.solved = [...solved];
  examSecurity.failed = {...failedAttempts};
  examSecurity.verified = {...verifiedAttempts};
  examSecurity.current = current;
  try {sessionStorage.setItem(SECURITY_KEY,JSON.stringify(examSecurity));}catch(e){}
}
function securityOverlay(){
  let box=document.querySelector('#securityOverlay');
  if(!box){
    box=document.createElement('div');box.id='securityOverlay';
    box.innerHTML='<div class="security-card" role="alertdialog" aria-modal="true"><h2>⛔ EVALUACIÓN BLOQUEADA</h2><p>Se detectaron dos salidas de la pestaña de evaluación.</p><p>Consultá con la docente. Podés generar el PDF con tu trabajo y el registro de incidencias.</p><button id="securityPdf">Generar PDF de entrega</button></div>';
    document.body.appendChild(box);
    box.querySelector('#securityPdf').addEventListener('click',()=>document.querySelector('#pdfBtn').click());
  }
  box.hidden=!examSecurity.locked;
  document.querySelector('#cssEditor').disabled=examSecurity.locked;
  ['#verifyBtn','#resetBtn','#nextBtn','#prevBtn','#hintBtn'].forEach(sel=>document.querySelector(sel).disabled=examSecurity.locked);
  document.querySelectorAll('#modules button').forEach(el=>el.disabled=examSecurity.locked);
}
function startSecurity(){
  const name=document.querySelector('#studentName').value.trim();
  if(!name || examSecurity.locked)return;
  if(!examSecurity.started){examSecurity.started=true;examSecurity.student=name;saveSecurity();}
}
function recordExit(reason){
  if(!examSecurity.started || examSecurity.locked)return;
  // visibilitychange y blur pueden ocurrir juntos; contar una sola vez por ausencia.
  if(examSecurity.away)return;
  examSecurity.away=true;
  examSecurity.incidents.push({time:new Date().toLocaleString('es-UY'),challenge:current+1,reason});
  if(examSecurity.incidents.length>=2)examSecurity.locked=true;
  saveSecurity();
  securityOverlay();
}
function returnToExam(){
  if(!examSecurity.away)return;
  examSecurity.away=false;saveSecurity();securityOverlay();
  if(!examSecurity.locked && examSecurity.incidents.length===1){
    alert('⚠ PRIMERA ADVERTENCIA: saliste de la pestaña de evaluación. Otra salida bloqueará el ejercicio.');
  }
}
// Iniciar al escribir el nombre, no esperar a verificar el primer desafío.
document.querySelector('#studentName').addEventListener('input',startSecurity);
document.querySelector('#cssEditor').addEventListener('focus',startSecurity);
document.querySelector('#verifyBtn').addEventListener('click',startSecurity,true);
document.addEventListener('visibilitychange',()=>{
  if(document.hidden)recordExit('Cambio de pestaña o ventana');
  else returnToExam();
});
window.addEventListener('blur',()=>{
  // blur detecta también clics en barras o diálogos; evitar falsos positivos.
  if(document.hidden)recordExit('Cambio de pestaña o ventana');
});
window.addEventListener('focus',()=>{if(!document.hidden)returnToExam();});
// Persistir trabajo y prevenir edición o navegación tras bloqueo.
document.addEventListener('input',()=>{if(examSecurity.started)saveSecurity();});
document.addEventListener('click',e=>{
  if(!examSecurity.locked)return;
  if(e.target.closest('#securityPdf, #pdfBtn'))return;
  if(e.target.closest('#modules, #verifyBtn, #resetBtn, #nextBtn, #prevBtn, #hintBtn')){
    e.preventDefault();e.stopImmediatePropagation();
  }
},true);
if(examSecurity.started){
  document.querySelector('#studentName').value=examSecurity.student || '';
  answers={...examSecurity.answers};solved=new Set(examSecurity.solved);
  failedAttempts={...examSecurity.failed};verifiedAttempts={...examSecurity.verified};
  current=Math.max(0,Math.min(challenges.length-1,examSecurity.current||0));
  render();
}
securityOverlay();
// Save after verification and navigation (existing handlers run first).
['#verifyBtn','#nextBtn','#prevBtn','#resetBtn'].forEach(sel=>document.querySelector(sel).addEventListener('click',()=>queueMicrotask(saveSecurity)));
document.querySelector('#modules').addEventListener('click',()=>queueMicrotask(saveSecurity));
