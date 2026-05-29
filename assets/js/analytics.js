// analytics panel — bitan portfolio

let sessionStart=Date.now();
let analyticsOpen=false;
let realVisitorCount=0;

function getDevice(){
  const ua=navigator.userAgent;
  if(/Android|iPhone|iPad/i.test(ua))return 'Mobile 📱';
  if(/Mac/i.test(ua))return 'macOS 🍎';
  if(/Win/i.test(ua))return 'Windows 💻';
  if(/Linux/i.test(ua))return 'Linux 🐧';
  return 'Unknown';
}
function formatTime(sec){
  if(sec<60)return sec+'s';
  if(sec<3600)return Math.floor(sec/60)+'m '+(sec%60)+'s';
  return Math.floor(sec/3600)+'h '+Math.floor((sec%3600)/60)+'m';
}

// Hit the real counter API on page load
fetch('https://api.countapi.xyz/hit/bitan-chakraborty-portfolio/visits')
  .then(r=>r.json())
  .then(data=>{
    realVisitorCount=data.value||0;
    document.getElementById('live-count').textContent=realVisitorCount.toLocaleString();
    document.getElementById('an-active').textContent=realVisitorCount.toLocaleString();
  })
  .catch(()=>{
    const lv=parseInt(localStorage.getItem('bitan_visits')||'0')+1;
    localStorage.setItem('bitan_visits',lv);
    realVisitorCount=lv;
    document.getElementById('live-count').textContent=lv;
    document.getElementById('an-active').textContent=lv;
  });

function updateAnalyticsTimes(){
  const elapsed=Math.floor((Date.now()-sessionStart)/1000);
  document.getElementById('an-views').textContent=realVisitorCount.toLocaleString()||'—';
  document.getElementById('an-device').textContent=getDevice();
  document.getElementById('an-time').textContent=formatTime(elapsed);
}

function toggleAnalytics(){
  analyticsOpen=!analyticsOpen;
  document.getElementById('analytics-panel').classList.toggle('open',analyticsOpen);
  if(analyticsOpen)updateAnalyticsTimes();
}
setInterval(()=>{if(analyticsOpen)updateAnalyticsTimes();},1000);


