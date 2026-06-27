const steps = [
  'Accediendo al Archivo Central...',
  'Verificando autorización...',
  'Revisando expedientes clasificados...',
  'Acceso concedido.'
];
const boot = document.getElementById('boot');
const bootText = document.getElementById('bootText');
let i = 0;
function bootSequence(){
  if(!boot || !bootText) return;
  bootText.textContent = steps[i];
  i++;
  if(i < steps.length){ setTimeout(bootSequence, 520); }
  else{
    setTimeout(()=> boot.classList.add('show-stamp'), 250);
    setTimeout(()=> boot.classList.add('hide'), 1300);
  }
}
window.addEventListener('load', bootSequence);

document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', ()=> nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
