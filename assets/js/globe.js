// tech globe only — bitan portfolio

(function(){
  const canvas=document.getElementById('globe-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');

  const maxSize = Math.min(canvas.parentElement.offsetWidth || 520, 520);
  const size = window.innerWidth <= 380 ? 260 : window.innerWidth <= 480 ? 300 : Math.min(maxSize, 520);
  canvas.width = size; canvas.height = size;
  canvas.style.width = size + 'px'; canvas.style.height = size + 'px';

  const W=canvas.width,H=canvas.height,cx=W/2,cy=H/2,R=Math.floor(size*0.365);

  const techs=[
    {name:'React',color:'#61dafb'},{name:'Python',color:'#3776ab'},
    {name:'Node.js',color:'#68a063'},{name:'JavaScript',color:'#f7df1e'},
    {name:'TypeScript',color:'#3178c6'},{name:'MongoDB',color:'#47a248'},
    {name:'Firebase',color:'#ffca28'},{name:'PostgreSQL',color:'#336791'},
    {name:'Scikit-learn',color:'#f7931e'},{name:'Pandas',color:'#150458'},
    {name:'NumPy',color:'#013243'},{name:'TailwindCSS',color:'#06b6d4'},
    {name:'Express.js',color:'#fff'},{name:'Git',color:'#f05032'},
    {name:'Java',color:'#ed8b00'},{name:'MySQL',color:'#4479a1'},
    {name:'Supabase',color:'#3ecf8e'},{name:'Netlify',color:'#00c7b7'},
    {name:'Vercel',color:'#fff'},{name:'NLP',color:'#a78bfa'},
    {name:'Deep Learning',color:'#f472b6'},{name:'Gen AI',color:'#34d399'},
    {name:'Postman',color:'#ff6c37'},{name:'HTML/CSS',color:'#e34f26'}
  ];

  const pts=techs.map((t,i)=>{
    const golden=Math.PI*(3-Math.sqrt(5));
    const y=1-(i/(techs.length-1))*2;
    const r=Math.sqrt(1-y*y);
    const theta=golden*i;
    return {x:Math.cos(theta)*r,y,z:Math.sin(theta)*r,name:t.name,color:t.color};
  });

  let rotY=0,rotX=0.2,isDragging=false,lastX=0,lastY=0,autoRotSpeed=0.006;
  canvas.addEventListener('mousedown',e=>{isDragging=true;lastX=e.clientX;lastY=e.clientY});
  window.addEventListener('mousemove',e=>{if(!isDragging)return;rotY+=(e.clientX-lastX)*0.01;rotX+=(e.clientY-lastY)*0.005;lastX=e.clientX;lastY=e.clientY});
  window.addEventListener('mouseup',()=>isDragging=false);
  canvas.addEventListener('touchstart',e=>{isDragging=true;lastX=e.touches[0].clientX;lastY=e.touches[0].clientY});
  canvas.addEventListener('touchmove',e=>{e.preventDefault();if(!isDragging)return;rotY+=(e.touches[0].clientX-lastX)*0.01;rotX+=(e.touches[0].clientY-lastY)*0.005;lastX=e.touches[0].clientX;lastY=e.touches[0].clientY},{passive:false});
  canvas.addEventListener('touchend',()=>isDragging=false);

  function project(p){
    const x1=p.x*Math.cos(rotY)-p.z*Math.sin(rotY);
    const z1=p.x*Math.sin(rotY)+p.z*Math.cos(rotY);
    const y2=p.y*Math.cos(rotX)-z1*Math.sin(rotX);
    const z2=p.y*Math.sin(rotX)+z1*Math.cos(rotX);
    return {sx:cx+x1*R,sy:cy+y2*R,z:z2};
  }

  function drawGlobe(){
    ctx.clearRect(0,0,W,H);
    const isDark=!document.body.classList.contains('light');
    const grd=ctx.createRadialGradient(cx-40,cy-40,10,cx,cy,R);
    grd.addColorStop(0,isDark?'rgba(0,212,255,0.05)':'rgba(0,104,144,0.05)');
    grd.addColorStop(1,isDark?'rgba(6,6,16,0.8)':'rgba(240,242,248,0.8)');
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);
    ctx.fillStyle=grd;ctx.fill();
    ctx.strokeStyle=isDark?'rgba(0,212,255,0.12)':'rgba(0,104,144,0.15)';
    ctx.lineWidth=1;ctx.stroke();

    for(let la=-60;la<=60;la+=30){
      const phi=la*Math.PI/180;
      const r2=Math.cos(phi)*R;
      const yc=cy+Math.sin(phi)*R;
      ctx.beginPath();
      ctx.ellipse(cx,yc,r2,r2*Math.abs(Math.sin(rotX+0.5))+2,0,0,Math.PI*2);
      ctx.strokeStyle=isDark?'rgba(0,212,255,0.06)':'rgba(0,104,144,0.08)';
      ctx.lineWidth=0.5;ctx.stroke();
    }

    for(let lo=0;lo<180;lo+=30){
      const a=lo*Math.PI/180+rotY;
      ctx.beginPath();
      ctx.ellipse(cx,cy,Math.abs(Math.cos(a))*R,R,0,0,Math.PI*2);
      ctx.strokeStyle=isDark?'rgba(0,212,255,0.04)':'rgba(0,104,144,0.06)';
      ctx.lineWidth=0.5;ctx.stroke();
    }

    const projected=pts.map(p=>({...project(p),name:p.name,color:p.color}));
    projected.sort((a,b)=>a.z-b.z);

    projected.forEach(p=>{
      const visible=p.z>-0.1;
      const alpha=visible?Math.max(0.2,0.5+p.z*0.5):0.08;
      const scale=visible?0.85+p.z*0.25:0.5;
      const fs=Math.round(10*scale);
      ctx.globalAlpha=alpha;
      ctx.beginPath();ctx.arc(p.sx,p.sy,3*scale,0,Math.PI*2);
      ctx.fillStyle=p.color;ctx.fill();
      ctx.font=`${fs}px Inter,sans-serif`;
      ctx.fillStyle=p.color;
      ctx.textAlign='center';
      ctx.fillText(p.name,p.sx,p.sy-5*scale);
    });

    ctx.globalAlpha=1;
    if(!isDragging)rotY+=autoRotSpeed;
    requestAnimationFrame(drawGlobe);
  }

  drawGlobe();
})();


