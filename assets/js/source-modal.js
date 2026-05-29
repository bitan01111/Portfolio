// source modal open close logic — bitan portfolio

function openSourceModal(){
  document.getElementById('src-backdrop').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('nav-links').classList.remove('open');
}
function closeSourceModal(){
  document.getElementById('src-backdrop').classList.remove('open');
  document.body.style.overflow='';
}
function srcBackdropClick(e){
  if(e.target===document.getElementById('src-backdrop')) closeSourceModal();
}
function srcTab(id,btn){
  document.querySelectorAll('.src-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.src-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById('src-'+id).classList.add('active');
  btn.classList.add('active');
}

document.addEventListener('keydown',e=>{
  if(e.key==='Escape' && document.getElementById('src-backdrop').classList.contains('open')) closeSourceModal();
});


