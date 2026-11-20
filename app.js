const drive=id=>`https://drive.google.com/thumbnail?id=${id}&sz=w1300`;
const whatsapp='https://wa.me/51915174240?text=Hola%2C%20deseo%20informaci%C3%B3n%20sobre%20Admisi%C3%B3n%202027';
const profiles=[
 {icon:'✨',title:'Presentación personal',desc:'Cultiva una imagen cuidada, limpia y ordenada como expresión de respeto propio y hacia los demás.',color:'#fef1cc'},
 {icon:'💙',title:'Salud emocional',desc:'Reconoce sus emociones, desarrolla autoestima, mantiene una actitud positiva y se adapta a nuevos desafíos.',color:'#e2f5ff'},
 {icon:'🤝',title:'Habilidades sociales',desc:'Se comunica con claridad, escucha activamente y actúa con empatía en las relaciones con sus compañeros y su comunidad.',color:'#f4e7ff'},
 {icon:'🔎',title:'Pensamiento crítico',desc:'Analiza información, investiga, formula preguntas y propone soluciones razonadas ante situaciones de la vida real.',color:'#e0f9f1'},
 {icon:'📚',title:'Rigor académico',desc:'Demuestra disciplina, participación y sólida preparación académica, desarrollando hábitos de estudio y autoaprendizaje.',color:'#fff0e4'},
 {icon:'🌱',title:'Valores y ética',desc:'Practica la honestidad, solidaridad, respeto y responsabilidad, con compromiso activo con el cuidado del ambiente.',color:'#e8f8e4'},
 {icon:'💰',title:'Educación financiera',desc:'Adquiere nociones prácticas para organizar recursos, comprender el ahorro y planificar decisiones personales responsables.',color:'#fff2d4'},
 {icon:'🌐',title:'Idioma inglés',desc:'Fortalece el dominio del inglés como herramienta de comunicación, aprendizaje y apertura a un entorno global.',color:'#e9edff'},
 {icon:'💻',title:'Competencia digital',desc:'Usa la tecnología y las herramientas digitales con criterio, autonomía y responsabilidad para aprender y crear.',color:'#dff8fc'}
];
const profileList=document.getElementById('profileList'),profileDetail=document.getElementById('profileDetail');
profileList.innerHTML=profiles.map((p,i)=>`<button class="profile-item ${i===0?'selected':''}" data-profile="${i}" aria-pressed="${i===0}"><span class="profile-emoji">${p.icon}</span><span>${p.title}</span></button>`).join('');
function showProfile(i){let p=profiles[i];document.querySelectorAll('[data-profile]').forEach((b,j)=>{b.classList.toggle('selected',i===j);b.setAttribute('aria-pressed',String(i===j))});profileDetail.innerHTML=`<span class="detail-icon">${p.icon}</span><div><b>${p.title}</b><p>${p.desc}</p></div>`;}
profileList.addEventListener('click',e=>{let b=e.target.closest('[data-profile]');if(b)showProfile(Number(b.dataset.profile))});showProfile(0);
const levels=[
 {label:'NIVEL INICIAL',title:'Pequeños exploradores, grandes descubrimientos.',desc:'Aprendizaje a través del juego, movimiento, expresión artística y descubrimiento. Acompañamos sus primeros pasos con experiencias cálidas y significativas.',areas:['Inglés','Computación','Psicomotricidad','Ballet','Karate','Música'],img:'1Wgvqh4oL1USxVf4eQsjGhusk4G_0NB3o'},
 {label:'NIVEL PRIMARIA',title:'Curiosidad que se convierte en conocimiento.',desc:'Una base académica sólida que potencia la comunicación, el pensamiento lógico, la creatividad, la disciplina y la confianza para aprender.',areas:['Inglés','Computación','Técnicas de estudio','Oratoria','Teatro','Danza','Música','Banda','Karate'],img:'1RWp10u2bOALLnuSKN7IfcnG9th83X57r'},
 {label:'NIVEL SECUNDARIA',title:'Preparados para los retos del mañana.',desc:'Desarrollo de competencias, bienestar emocional y construcción del proyecto personal con herramientas académicas, digitales y para la vida.',areas:['Inglés','Ofimática avanzada y diseño','Educación financiera','Técnicas de estudio','Oratoria','Debates','Educación sexual','Nutrición','Teatro','Danza','Música','Banda','Vóley'],img:'1DtpXN0lVyxBCmPBtmaeVmh53usRI_DZr'}
];
function showLevel(i){const l=levels[i];document.querySelectorAll('[data-level]').forEach(b=>{let a=Number(b.dataset.level)===i;b.classList.toggle('selected',a);b.setAttribute('aria-selected',String(a))});document.getElementById('levelPanel').innerHTML=`<img src="${drive(l.img)}" loading="lazy" alt="Actividades del ${l.label.toLowerCase()}"><div><span class="small">${l.label}</span><h3>${l.title}</h3><p>${l.desc}</p><div class="chips">${l.areas.map(s=>`<span>${s}</span>`).join('')}</div><a href="${whatsapp}" target="_blank" rel="noopener" style="margin-top:18px;color:#007db9;font-weight:900">Consultar vacantes ↗</a></div>`;}
document.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>showLevel(Number(b.dataset.level))));showLevel(0);
const photos=[
 ['1kF1oBRA7K7FfzZqkXLrERW4ALooNS4Ml','Nuestro colegio','academico'],
 ['1DtpXN0lVyxBCmPBtmaeVmh53usRI_DZr','Sala de cómputo','academico'],
 ['1RWp10u2bOALLnuSKN7IfcnG9th83X57r','Día del Logro','academico'],
 ['1LtcUFVQ_QbaSKiWcPE9r5Eqc791xUDSb','Taller de teatro','arte'],
 ['1Wgvqh4oL1USxVf4eQsjGhusk4G_0NB3o','Presentación de ballet','arte'],
 ['11PMNCz0DvaXUme-to119MKkLoynV1pFp','Elenco de danzas','arte'],
 ['1ZEquEwmnvvGKzn42Io3vczYfc7nvvba8','Taller de karate','deporte'],
 ['1bCD4dFd5kJ0V9sGMY-7x09xH7uUpUXVu','Actividades deportivas','deporte'],
 ['1sLQKHPDj_64-U6qkv2J65HdlaTZ6cwov','Encuentros deportivos','deporte'],
 ['10sBTsaKZ1eIaxth2kz8PkFdH0xL_G7qQ','Escuela para Padres','familia'],
 ['1t-VMcLiMmp9cZLIXnbbx8Koif2DyUJcN','Familias participando','familia'],
 ['1uMdci1NMtOOTOU7AekHnFl3D0shcMMWp','Visita al Palacio de Gobierno','academico'],
 ['1Fkf1ulYNUng-6OysKWuoc7xWbzmP14Vc','Desfile escolar','familia'],
 ['1aolfS-ksLNt-O-EvSUWsl8xcrZmu0rM5','Show de talentos','arte'],
];
const grid=document.getElementById('galleryGrid');
function renderGallery(filter='all'){grid.innerHTML=photos.filter(x=>filter==='all'||x[2]===filter).map(([id,title])=>`<div class="gallery-card" tabindex="0" role="button" aria-label="Ampliar ${title}" data-id="${id}" data-title="${title}"><img loading="lazy" src="${drive(id)}" alt="${title}"><span>${title} ↗</span></div>`).join('')}
renderGallery();document.getElementById('galleryFilters').addEventListener('click',e=>{let b=e.target.closest('[data-filter]');if(!b)return;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('selected',x===b));renderGallery(b.dataset.filter)});
const lightbox=document.getElementById('lightbox');function openPhoto(card){document.getElementById('lightboxImage').src=drive(card.dataset.id);document.getElementById('lightboxCaption').textContent=card.dataset.title;lightbox.classList.add('open');document.body.style.overflow='hidden'}function closePhoto(){lightbox.classList.remove('open');document.body.style.overflow=''}grid.addEventListener('click',e=>{const card=e.target.closest('.gallery-card');if(card)openPhoto(card)});grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest('.gallery-card')){e.preventDefault();openPhoto(e.target.closest('.gallery-card'))}});document.getElementById('lightboxClose').onclick=closePhoto;lightbox.addEventListener('click',e=>{if(e.target===lightbox)closePhoto()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closePhoto()});
// Los videos se cargan solo tras un clic: mejora la velocidad en celulares.
document.querySelectorAll('.video-thumb').forEach(el=>el.addEventListener('click',()=>{const id=el.dataset.video;el.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Video del Colegio Virgen María" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`}));
const menu=document.getElementById('sidebar'),toggle=document.getElementById('menuToggle'),scrim=document.getElementById('scrim');function setMenu(open){menu.classList.toggle('open',open);scrim.classList.toggle('show',open);toggle.setAttribute('aria-expanded',String(open));toggle.querySelector('span').textContent=open?'✕':'☰'}toggle.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));scrim.addEventListener('click',()=>setMenu(false));document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}})},{rootMargin:'-25% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));document.getElementById('year').textContent=new Date().getFullYear();
