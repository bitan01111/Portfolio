// contact form — bitan portfolio

function submitContactForm(){
  const nameEl = document.getElementById('cf-name');
  const emailEl= document.getElementById('cf-email');
  const subEl  = document.getElementById('cf-subject');
  const msgEl  = document.getElementById('cf-message');

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();
  const subject = subEl.value.trim();
  const message = msgEl.value.trim();

  const statusEl= document.getElementById('cf-status');
  const btn     = document.getElementById('cf-submit');
  const btnTxt  = document.getElementById('cf-btn-text');

  // Reset status
  statusEl.className='cfp-status';
  statusEl.style.display='none';
  statusEl.textContent='';

  // Reliability: prevent double-clicks
  btn.disabled=true;
  if(btnTxt) btnTxt.textContent='⏳ Sending...';

  // Validation + focus first invalid field
  if(!name){
    statusEl.className='cfp-status error';
    statusEl.style.display='block';
    statusEl.textContent='⚠️ Please enter your name.';
    nameEl.focus();
    btn.disabled=false;
    if(btnTxt) btnTxt.textContent='🚀 Send Message';
    return;
  }
  if(!email){
    statusEl.className='cfp-status error';
    statusEl.style.display='block';
    statusEl.textContent='⚠️ Please enter your email address.';
    emailEl.focus();
    btn.disabled=false;
    if(btnTxt) btnTxt.textContent='🚀 Send Message';
    return;
  }
  if(!subject){
    statusEl.className='cfp-status error';
    statusEl.style.display='block';
    statusEl.textContent='⚠️ Please enter a subject.';
    subEl.focus();
    btn.disabled=false;
    if(btnTxt) btnTxt.textContent='🚀 Send Message';
    return;
  }
  if(!message){
    statusEl.className='cfp-status error';
    statusEl.style.display='block';
    statusEl.textContent='⚠️ Please enter your message.';
    msgEl.focus();
    btn.disabled=false;
    if(btnTxt) btnTxt.textContent='🚀 Send Message';
    return;
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRx.test(email)){
    statusEl.className='cfp-status error';
    statusEl.style.display='block';
    statusEl.textContent='⚠️ Please enter a valid email address.';
    emailEl.focus();
    btn.disabled=false;
    if(btnTxt) btnTxt.textContent='🚀 Send Message';
    return;
  }

  // Frontend-only safe mailto submission (no Web3Forms/API keys)
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
  const sub  = encodeURIComponent(`[Portfolio] ${subject}`);
  window.open(`mailto:chakrabortybitan679@gmail.com?subject=${sub}&body=${body}`);

  statusEl.className='cfp-status success';
  statusEl.style.display='block';
  statusEl.textContent='📬 Opened your mail app!';

  btn.disabled=false;
  if(btnTxt) btnTxt.textContent='🚀 Send Message';
}

