let rx=-14,ry=0,zoom=1,drag=false,lx=0,ly=0;
const d3=document.getElementById('d3obj'),stage=document.getElementById('stage');
function apply(){d3.style.transform=`scale(${zoom}) rotateX(${rx}deg) rotateY(${ry}deg)`}
function reset3d(){rx=-14;ry=0;zoom=1;apply()}
stage.addEventListener('mousedown',e=>{drag=true;lx=e.clientX;ly=e.clientY});
window.addEventListener('mouseup',()=>drag=false);
window.addEventListener('mousemove',e=>{if(!drag)return;ry+=(e.clientX-lx)*.5;rx-=(e.clientY-ly)*.5;rx=Math.max(-80,Math.min(80,rx));lx=e.clientX;ly=e.clientY;apply()});
stage.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.max(.5,Math.min(2.2,zoom-e.deltaY*.001));apply()},{passive:false});
stage.addEventListener('touchstart',e=>{drag=true;lx=e.touches[0].clientX;ly=e.touches[0].clientY},{passive:true});
stage.addEventListener('touchmove',e=>{if(!drag)return;ry+=(e.touches[0].clientX-lx)*.5;rx-=(e.touches[0].clientY-ly)*.5;lx=e.touches[0].clientX;ly=e.touches[0].clientY;apply()},{passive:true});
stage.addEventListener('touchend',()=>drag=false);
function open3d(m){document.getElementById('modal').classList.add('open');setModel(m);reset3d()}
function close3d(){document.getElementById('modal').classList.remove('open')}
function setModel(m){const d=document.getElementById('d3obj');d.classList.toggle('pro',m==='pro');document.getElementById('mtitle').textContent=m==='pro'?'AeroGuard Pro':'AeroGuard Eco';document.getElementById('be').classList.toggle('on',m==='eco');document.getElementById('bp').classList.toggle('on',m==='pro')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')close3d()});