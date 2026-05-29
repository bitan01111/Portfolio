// animations — bitan portfolio

// ══ STAR CANVAS ══
(function(){
  const c=document.getElementById('star-canvas');
  if(!c)return;
  const ctx=c.getContext('2d');
  let stars=[];
  function resize(){
    c.width=window.innerWidth;
    c.height=window.innerHeight;
    stars=[];
    for(let i=0;i<180;i++){
      stars.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.2+0.2,a:Math.random(),s:Math.random()*0.005+0.002,d:Math.random()>0.5?1:-1});
    }
  }
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    stars.forEach(s=>{
      s.a+=s.s*s.d;
      if(s.a>1||s.a<0)s.d*=-1;
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(0,212,255,${s.a*0.8})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener('resize',resize);
  draw();
})();

// ══ CURSOR — single subtle dot ══
const cur=document.getElementById('cur');
if(cur){
  let mx=0,my=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.style.width='14px';cur.style.height='14px';cur.style.opacity='1'});
    el.addEventListener('mouseleave',()=>{cur.style.width='8px';cur.style.height='8px';cur.style.opacity='0.8'});
  });
}

// ══ SCROLL REVEAL ══
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
  },{threshold:0.08});
  document.querySelectorAll('.rev').forEach(el=>obs.observe(el));
}
setTimeout(initReveal,120);

// ══ TYPING ANIMATION ══
const roles=['Full Stack Developer','AI/ML Engineer','Data Analyst','Software Engineer'];
let ri=0,ci=0,del=false,typedEl=document.getElementById('typed-role');
function typeRole(){
  const word=roles[ri];
  if(!del){
    typedEl.textContent=word.slice(0,++ci);
    if(ci===word.length){del=true;setTimeout(typeRole,2000);return}
  } else {
    typedEl.textContent=word.slice(0,--ci);
    if(ci===0){del=false;ri=(ri+1)%roles.length}
  }
  setTimeout(typeRole,del?60:100);
}
setTimeout(typeRole,800);

// ══ BG WORD CYCLING ══
const bgWords=['PROGRAMMER','BUILDER','ENGINEER','DEVELOPER','CREATOR'];
let bwi=0;
setInterval(()=>{
  bwi=(bwi+1)%bgWords.length;
  const el=document.getElementById('hero-bg-word');
  el.style.opacity='0';el.style.transform='translateY(-10px)';
  setTimeout(()=>{el.textContent=bgWords[bwi];el.style.opacity='1';el.style.transform='translateY(0)';el.style.transition='opacity 0.5s,transform 0.5s'},400);
},3500);
document.getElementById('hero-bg-word').style.transition='opacity 0.5s,transform 0.5s';


