window.addEventListener('scroll',()=>{const h=document.documentElement;document.getElementById('bar').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});
document.querySelectorAll('.rv').forEach(s=>obs.observe(s));
document.querySelectorAll('.card').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}));
const links=document.querySelectorAll('.nl a');
window.addEventListener('scroll',()=>{let cur='';document.querySelectorAll('section').forEach(s=>{if(scrollY>=s.offsetTop-160)cur=s.id});links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur))});
function tab(e,id){document.querySelectorAll('.tb').forEach(t=>t.classList.remove('on'));document.querySelectorAll('.tcc').forEach(c=>c.classList.remove('on'));e.currentTarget.classList.add('on');document.getElementById(id).classList.add('on')}