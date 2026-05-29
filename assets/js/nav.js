// nav interactions — bitan portfolio

// ══ NAV TOGGLE ══
document.getElementById('nav-toggle').onclick=()=>document.getElementById('nav-links').classList.toggle('open');
function closeNav(){document.getElementById('nav-links').classList.remove('open')}

// ══ SCROLL TO SECTION ══
function scrollToSection(id){
  const el=document.getElementById(id);
  if(el){const y=el.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:y,behavior:'smooth'})}
  closeNav();
}


