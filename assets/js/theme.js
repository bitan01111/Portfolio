// theme toggle — bitan portfolio

// Keep the same function name used by inline onclick="toggleTheme()"
function toggleTheme(){
  const isLight=document.body.classList.toggle('light');
  document.getElementById('theme-btn').textContent=isLight?'🌙 Dark':'☀ Light';
}


