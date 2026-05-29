// contact form — bitan portfolio

function submitContactForm(){
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  const statusEl= document.getElementById('cf-status');
  const btn     = document.getElementById('cf-submit');
  const btnTxt  = document.getElementById('cf-btn-text');

  statusEl.className='cfp-status';
  statusEl.style.display='none';
  statusEl.textContent='';

  if(!name || !email || !subject || !message){
    statusEl.className='cfp-status error';
    statusEl.style.display='block';
    statusEl.textContent='⚠️ Please fill in all fields before sending.';
    return;
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRx.test(email)){
    statusEl.className='cfp-status error';
    statusEl.style.display='block';
    statusEl.textContent='⚠️ Please enter a valid email address.';
    return;
  }

  // Security fix: frontend-only safe mailto submission (no Web3Forms key)
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
  const sub  = encodeURIComponent(`[Portfolio] ${subject}`);
  window.open(`mailto:chakrabortybitan679@gmail.com?subject=${sub}&body=${body}`);

  statusEl.className='cfp-status success';
  statusEl.style.display='block';
  statusEl.textContent='📬 Opened your mail app! ';

  // Keep UX consistent with original button state (no network request)
  btn.disabled=false;
  btnTxt.textContent='🚀 Send Message';
}

