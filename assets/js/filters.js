// filters — bitan portfolio

// ══ PROJECT FILTER ══
function filterProj(cat,btn){
  document.querySelectorAll('.proj-filters .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(item=>{
    item.style.display=(cat==='all'||item.dataset.cat===cat)?'flex':'none';
  });
}

// ══ CERT FILTER ══
function filterCred(cat,btn){
  document.querySelectorAll('.cred-filters .filter-btn,.proj-filters .filter-btn').forEach(b=>{
    if(b.closest('#credentials-section'))b.classList.remove('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('#cred-grid .cred-card').forEach(card=>{
    const cats=card.dataset.cat||'';
    card.style.display=(cat==='all'||cats.includes(cat))?'flex':'none';
  });
}

// ══ FORGE TABS ══
function forgeTab(id,btn){
  document.querySelectorAll('.forge-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.forge-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('forge-'+id).classList.add('active');
}


