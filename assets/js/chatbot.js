// chatbot logic — bitan portfolio

// ── Knowledge Base ──
const KB = {
  about: `<strong>Bitan Chakraborty</strong> is a B.Tech Computer Science &amp; Engineering student at <strong>Techno Main Salt Lake, Kolkata</strong> (Expected: May 2027).<br><br>
He builds end-to-end software — React frontends, Node.js/Express backends, and ML pipelines. His focus areas are <strong>Full Stack Development</strong>, <strong>Data Analytics</strong>, and <strong>AI/ML Engineering</strong>.<br><br>
With 200+ LeetCode problems solved and 3 live deployed projects, he's an active builder — not just a learner.<br><br>
Currently <strong>open to internship opportunities</strong> in Software Engineering, Full Stack, or AI/ML.<br><br>
📧 <a href='mailto:chakrabortybitan679@gmail.com'>chakrabortybitan679@gmail.com</a>`,

  skills: `Here's Bitan's full technical skill set:<br><br>
<strong>Frontend</strong><br>
React · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind CSS<br><br>
<strong>Backend</strong><br>
Node.js · Express.js · REST APIs<br><br>
<strong>Databases</strong><br>
PostgreSQL · Supabase · MySQL · MongoDB · Firebase<br><br>
<strong>Languages</strong><br>
Python · Java · C · SQL<br><br>
<strong>AI / ML</strong><br>
Scikit-learn · Pandas · NumPy · Machine Learning · Deep Learning · NLP · Generative AI · EDA<br><br>
<strong>Core CS</strong><br>
DSA · OOP · DBMS · OS · Computer Networks<br><br>
<strong>Tools &amp; Platforms</strong><br>
Git · GitHub · VS Code · Postman · Netlify · Vercel`,

  projects: `Bitan has <strong>3 live, deployed projects</strong> spanning full-stack, data analytics, and ML:<br><br>
🚀 <strong>Foodiegasm</strong> — Full Stack<br>
Food discovery platform · React + Firebase · wishlist, filtering, real-time data<br>
<a href='https://foodie-gasm.netlify.app/' target='_blank'>foodie-gasm.netlify.app ↗</a><br><br>
📊 <strong>IPL Analytics Dashboard</strong> — Data Analytics<br>
50,000+ IPL records · Python + Pandas · interactive dashboards and heatmaps<br>
<a href='https://ipl-intel.netlify.app/' target='_blank'>ipl-intel.netlify.app ↗</a><br><br>
🤖 <strong>Student Performance Prediction</strong> — ML<br>
End-to-end classification pipeline · Scikit-learn · feature engineering + F1 evaluation<br>
<a href='https://edu-predict-ai.netlify.app/' target='_blank'>edu-predict-ai.netlify.app ↗</a><br><br>
Want details on a specific one? Ask: <em>"Tell me about Foodiegasm"</em> or <em>"IPL project"</em>.`,

  foodiegasm: `🚀 <strong>Foodiegasm</strong><br>
A full-stack food discovery platform — restaurant browsing with a smart filtering system and wishlist.<br><br>
<strong>Key Features</strong><br>
• Browse and discover restaurants by category, cuisine, and rating<br>
• Wishlist system with real-time sync across sessions<br>
• Veg / Non-veg / cuisine-based multi-criteria filtering<br>
• Firebase real-time database for instant data persistence<br>
• Fully responsive across mobile and desktop<br><br>
<strong>Tech Stack</strong><br>
React · Firebase · JavaScript · HTML · CSS<br><br>
<a href='https://foodie-gasm.netlify.app/' target='_blank'>Live Demo ↗</a> &nbsp;·&nbsp; <a href='https://github.com/bitan01111' target='_blank'>GitHub ↗</a>`,

  ipl: `📊 <strong>IPL Analytics Dashboard</strong><br>
A data analytics project that processes and visualizes 50,000+ IPL match records.<br><br>
<strong>Key Features</strong><br>
• Player performance trend analysis across seasons<br>
• Team win rate and head-to-head comparisons<br>
• Interactive heatmaps and statistical charts<br>
• EDA pipeline to uncover patterns in large sports datasets<br><br>
<strong>Tech Stack</strong><br>
Python · Pandas · NumPy · Matplotlib · Seaborn · EDA<br><br>
<a href='https://ipl-intel.netlify.app/' target='_blank'>Live Demo ↗</a> &nbsp;·&nbsp; <a href='https://github.com/bitan01111' target='_blank'>GitHub ↗</a>`,

  studentml: `🤖 <strong>Student Performance Prediction</strong><br>
An end-to-end supervised ML classification pipeline predicting academic outcomes.<br><br>
<strong>Key Features</strong><br>
• Full data preprocessing and feature engineering pipeline<br>
• Logistic Regression and Decision Tree classifiers<br>
• Model evaluation using F1-score metrics<br>
• Behavioral, demographic, and academic feature analysis<br><br>
<strong>Tech Stack</strong><br>
Python · Scikit-learn · Pandas · NumPy<br><br>
<a href='https://edu-predict-ai.netlify.app/' target='_blank'>Live Demo ↗</a> &nbsp;·&nbsp; <a href='https://github.com/bitan01111' target='_blank'>GitHub ↗</a>`,

  certs: `Bitan holds <strong>5 verified Udemy certifications</strong>:<br><br>
1. <strong>Python &amp; DSA Bootcamp</strong><br>
&nbsp;&nbsp;&nbsp;Python · Data Structures · Algorithms · <a href='https://ude.my/UC-eb8b1f01-97ba-4d64-8c86-d782f1d68ed1' target='_blank'>View ↗</a><br><br>
2. <strong>Artificial Intelligence in Healthcare</strong><br>
&nbsp;&nbsp;&nbsp;AI · ML · Healthcare applications · <a href='https://ude.my/UC-9f6ed70b-eb08-4b54-a83a-e5cf117977ba' target='_blank'>View ↗</a><br><br>
3. <strong>CSS, JavaScript, PHP &amp; Python — All in One</strong><br>
&nbsp;&nbsp;&nbsp;Multi-language web fundamentals · <a href='https://ude.my/UC-d042fae9-78c2-45b1-b591-739c905bd593' target='_blank'>View ↗</a><br><br>
4. <strong>Complete Data Science, ML, DL &amp; NLP Bootcamp</strong><br>
&nbsp;&nbsp;&nbsp;Data Science · Deep Learning · NLP · <a href='https://ude.my/UC-a7adf189-b61a-4078-8437-e1520e8abed1' target='_blank'>View ↗</a><br><br>
5. <strong>Python Framework &amp; HTML Course</strong><br>
&nbsp;&nbsp;&nbsp;Python · Web frameworks · HTML · <a href='https://ude.my/UC-661605c3-85d1-44fd-a9ad-25848a4e50b2' target='_blank'>View ↗</a>`,

  contact: `Best ways to reach Bitan:<br><br>
📧 <strong>Email</strong> &nbsp;<a href='mailto:chakrabortybitan679@gmail.com'>chakrabortybitan679@gmail.com</a><br>
🐙 <strong>GitHub</strong> &nbsp;<a href='https://github.com/bitan01111' target='_blank'>github.com/bitan01111 ↗</a><br>
💼 <strong>LinkedIn</strong> &nbsp;<a href='https://linkedin.com/in/bitan-chakraborty-b11955274' target='_blank'>linkedin.com/in/bitan-chakraborty ↗</a><br>
🏆 <strong>LeetCode</strong> &nbsp;<a href='https://leetcode.com/u/4m2ECO46V7/' target='_blank'>leetcode.com/u/4m2ECO46V7 ↗</a><br>
📍 <strong>Location</strong> &nbsp;Kolkata, West Bengal, India`,

  leetcode: `Bitan has solved <strong>200+ LeetCode problems</strong>, covering:<br><br>
• Arrays, Strings, and Hash Maps<br>
• Linked Lists and Two-pointer techniques<br>
• Trees and Binary Search<br>
• Graphs — BFS and DFS<br>
• Dynamic Programming<br><br>
Consistent problem-solving has built the DSA and algorithmic thinking needed for technical interviews.<br><br>
🏆 <a href='https://leetcode.com/u/4m2ECO46V7/' target='_blank'>View LeetCode Profile ↗</a>`,

  intern: `Bitan is <strong>actively seeking internship opportunities</strong> and available to start immediately.<br><br>
<strong>Open to roles in:</strong><br>
• Software Engineering — Full Stack or Backend<br>
• Frontend Development (React, TypeScript)<br>
• AI / ML Engineering<br>
• Data Analytics and Data Science<br><br>
<strong>Availability:</strong> Remote or on-site · India-based · Open to relocation<br><br>
Best way to reach him:<br>
📧 <a href='mailto:chakrabortybitan679@gmail.com'>chakrabortybitan679@gmail.com</a><br>
💼 <a href='https://linkedin.com/in/bitan-chakraborty-b11955274' target='_blank'>LinkedIn ↗</a>`,

  resume: `Bitan's resume is <strong>ATS-optimized and updated for 2026</strong>.<br><br>
It covers his full skill set, all 3 live projects, 5 certifications, and academic background — formatted for technical recruiter screening.<br><br>
<strong>Download it here:</strong><br>
<a href='https://drive.google.com/uc?export=download&id=1jyhCg7VQLh1wGTkb9smi0K7WOU2P6JfH' target='_blank'>↓ Download PDF ↗</a><br><br>
Or scroll to the <strong>Resume section</strong> at the bottom of this page.`,

  education: `<strong>B.Tech in Computer Science &amp; Engineering</strong><br>
Techno Main Salt Lake · Kolkata<br>
Expected graduation: <strong>May 2027</strong><br><br>
Core coursework: Data Structures &amp; Algorithms · DBMS · Operating Systems · Computer Networks · OOP · Software Engineering.<br><br>
Alongside academics, Bitan has completed 5 professional certifications and built 3 live deployed projects.`,

  github: `All of Bitan's projects are on GitHub:<br><br>
🐙 <a href='https://github.com/bitan01111' target='_blank'>github.com/bitan01111 ↗</a><br><br>
Repositories include Foodiegasm (full-stack), IPL Analytics Dashboard (data), and Student Performance Prediction (ML).`,

  linkedin: `Connect with Bitan on LinkedIn:<br><br>
💼 <a href='https://linkedin.com/in/bitan-chakraborty-b11955274' target='_blank'>linkedin.com/in/bitan-chakraborty ↗</a><br><br>
His profile includes certifications, project work, and his academic background.`,

  mlskills: `Bitan's AI / ML stack:<br><br>
<strong>Libraries</strong><br>
Scikit-learn · Pandas · NumPy · Matplotlib · Seaborn<br><br>
<strong>Concepts</strong><br>
Supervised Learning · Classification · Regression · Feature Engineering · EDA<br><br>
<strong>Advanced</strong><br>
Deep Learning (fundamentals) · NLP (text preprocessing) · Generative AI (LLM APIs, prompt engineering)<br><br>
Applied in live projects: <strong>Student Performance Prediction</strong> and <strong>IPL Analytics Dashboard</strong>.`,

  databases: `Bitan works with multiple databases:<br><br>
• <strong>PostgreSQL</strong> — relational, production-grade SQL<br>
• <strong>MySQL</strong> — standard relational database<br>
• <strong>MongoDB</strong> — NoSQL document store<br>
• <strong>Firebase</strong> — real-time BaaS (used in Foodiegasm)<br>
• <strong>Supabase</strong> — open-source Firebase alternative with PostgreSQL backend`,

  navigate: `This portfolio is a single-page scroll layout with five sections:<br><br>
1. <strong>Projects</strong> — 3 deployed projects (full-stack, analytics, ML)<br>
2. <strong>Credentials</strong> — 5 verified Udemy certifications<br>
3. <strong>Forge</strong> — Full technical skill breakdown<br>
4. <strong>Persona</strong> — About, timeline, and contact form<br>
5. <strong>Resume</strong> — ATS-ready PDF download<br><br>
Use the top navbar or the quick-nav grid to jump to any section.`,

  strengths: `Bitan's core strengths as a developer:<br><br>
• <strong>Full-stack ownership</strong> — can take a feature from UI to database to deployment<br>
• <strong>Problem-solving</strong> — 200+ LeetCode problems build real algorithmic thinking<br>
• <strong>Versatility</strong> — strong across web dev, data analytics, and ML<br>
• <strong>Shipping</strong> — all 3 projects are live and deployed, not just demos<br>
• <strong>Learning velocity</strong> — self-taught multiple stacks; 5 certifications across domains<br>
• <strong>Clean code</strong> — values readability, modularity, and good engineering practices`,

  career: `Bitan's career focus and goals:<br><br>
<strong>Short-term (2025–2026)</strong><br>
Secure an internship in Software Engineering, Full Stack, or AI/ML to gain industry experience.<br><br>
<strong>Long-term</strong><br>
Build scalable, impactful software — at companies that solve real problems with technology.<br><br>
<strong>Preferred domains:</strong><br>
• Full Stack / Backend Engineering<br>
• AI/ML and Data-driven products<br>
• Developer tooling and infrastructure<br><br>
Expected graduation: <strong>May 2027</strong> · Open to full-time after graduation.`
};

const INTENTS=[
  {
    id:'greeting',
    keys:['hello','hi','hey','greetings','good morning','good afternoon','good evening','howdy','start'],
    syns:['sup','yo','hiya','what up','namaste','helo'],
    res:()=>`Hello! 👋 I'm <strong>VITALITY</strong>, Bitan's portfolio assistant.<br><br>I can tell you about his skills, projects, certifications, education, internship availability, and more. What would you like to know?`,
    chips:['skills','projects','intern','contact']
  },
  {
    id:'about',
    keys:['who is bitan','about bitan','tell me about bitan','introduce','background','summary','overview','who are you','who is he'],
    syns:['bitan','introduce yourself','about him','profile','about yourself'],
    res:()=>KB.about,
    chips:['skills','projects','education','intern']
  },
  {
    id:'skills',
    keys:['skills','tech stack','technologies','expertise','technical skills','what do you know','what can you do','proficient','what technologies'],
    syns:['stack','abilities','toolkit','know','capable','languages','frameworks'],
    res:()=>KB.skills,
    chips:['mlskills','databases','projects','resume']
  },
  {
    id:'mlskills',
    keys:['machine learning','ml','artificial intelligence','ai','deep learning','nlp','data science','neural network','generative ai','gen ai'],
    syns:['scikit','scikit-learn','pandas','numpy','model','tensorflow','pytorch','llm','language model'],
    res:()=>KB.mlskills,
    chips:['studentml','ipl','skills','projects']
  },
  {
    id:'databases',
    keys:['database','sql','mongodb','firebase','postgresql','mysql','supabase','nosql','postgres','db'],
    syns:['data storage','backend database','relational','document store'],
    res:()=>KB.databases,
    chips:['skills','projects','resume']
  },
  {
    id:'projects',
    keys:['projects','portfolio','what have you built','what did you build','work','apps','deployed','live projects','show projects','all projects'],
    syns:['built','made','created','developed','showcase','applications','demos'],
    res:()=>KB.projects,
    chips:['foodiegasm','ipl','studentml','github']
  },
  {
    id:'foodiegasm',
    keys:['foodiegasm','food app','restaurant','food discovery','food project','foodie','food platform','food website'],
    syns:['food','gasm','react firebase','wishlist','veg filter','restaurant app'],
    res:()=>KB.foodiegasm,
    chips:['ipl','studentml','skills','contact']
  },
  {
    id:'ipl',
    keys:['ipl','cricket','ipl analytics','ipl dashboard','ipl project','sports data','cricket analytics','ipl intel'],
    syns:['cricket data','sports analytics','pandas project','ipl match','50000','fifty thousand'],
    res:()=>KB.ipl,
    chips:['foodiegasm','studentml','mlskills','contact']
  },
  {
    id:'studentml',
    keys:['student performance','student prediction','performance prediction','academic prediction','classification project','ml project','machine learning project','edu predict'],
    syns:['logistic regression','decision tree','student ml','ml pipeline','f1 score','feature engineering'],
    res:()=>KB.studentml,
    chips:['ipl','mlskills','skills','contact']
  },
  {
    id:'certs',
    keys:['certifications','certificates','udemy','courses','credentials','qualifications','bootcamp','certified'],
    syns:['cert','course','training','verified','learning','udemy cert'],
    res:()=>KB.certs,
    chips:['skills','education','resume','projects']
  },
  {
    id:'education',
    keys:['education','university','college','btech','b.tech','degree','techno main','academic','study','student','graduation','cse','computer science'],
    syns:['school','engineering','techno main salt lake','tmsl','kolkata college','b tech'],
    res:()=>KB.education,
    chips:['certs','skills','projects','resume']
  },
  {
    id:'leetcode',
    keys:['leetcode','dsa','data structures','algorithms','competitive programming','problem solving','200','coding problems'],
    syns:['leet','problems solved','algo','competitive','leetcode profile'],
    res:()=>KB.leetcode,
    chips:['skills','projects','github','contact']
  },
  {
    id:'intern',
    keys:['internship','intern','available','hire','job','opportunity','recruit','open to work','looking for','available for','joining'],
    syns:['onboard','collaborate','full time','placement','can i hire','are you available','work with'],
    res:()=>KB.intern,
    chips:['contact','resume','skills','projects']
  },
  {
    id:'resume',
    keys:['resume','cv','download','pdf','curriculum vitae','ats resume','download resume'],
    syns:['get resume','download cv','resume link','ats','resume pdf'],
    res:()=>KB.resume,
    chips:['contact','projects','certs','skills']
  },
  {
    id:'contact',
    keys:['contact','email','phone','reach','connect','get in touch','message','mail','how to contact'],
    syns:['gmail','call','whatsapp','phone number','email address','reach out'],
    res:()=>KB.contact,
    chips:['linkedin','github','intern','resume']
  },
  {
    id:'github',
    keys:['github','source code','repository','repo','code base','open source','github profile'],
    syns:['git','codebase','github.com','see code'],
    res:()=>KB.github,
    chips:['projects','linkedin','contact','resume']
  },
  {
    id:'linkedin',
    keys:['linkedin','professional network','connect on linkedin','linkedin profile'],
    syns:['linkedin.com','professional profile','social profile'],
    res:()=>KB.linkedin,
    chips:['github','contact','resume','intern']
  },
  {
    id:'strengths',
    keys:['strengths','strong points','what makes you good','why hire','best qualities','standout','unique','differentiator'],
    syns:['strength','good at','advantages','why bitan','value'],
    res:()=>KB.strengths,
    chips:['skills','projects','intern','contact']
  },
  {
    id:'career',
    keys:['career','goals','career goals','future plans','ambitions','what do you want','long term','career interest','aspirations'],
    syns:['plans','future','goal','aim','objective','where do you see'],
    res:()=>KB.career,
    chips:['intern','skills','projects','contact']
  },
  {
    id:'navigate',
    keys:['how to use','website','portfolio layout','where is','find section','page sections','what can i ask','help','guide'],
    syns:['tour','how does this work','navigate','sections','show me around'],
    res:()=>KB.navigate,
    chips:['skills','projects','resume','contact']
  }
];

const CHIP_LABELS={
  skills:'Tech Stack',projects:'All Projects',foodiegasm:'Foodiegasm',
  ipl:'IPL Dashboard',studentml:'ML Project',mlskills:'AI / ML Skills',
  databases:'Databases',certs:'Certifications',education:'Education',
  leetcode:'LeetCode',intern:'Internship?',resume:'Resume',
  contact:'Contact',github:'GitHub',linkedin:'LinkedIn',
  strengths:'Strengths',career:'Career Goals',navigate:'Help'
};

function matchIntent(raw){
  const input=raw.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
  const words=input.split(' ').filter(w=>w.length>=3);
  let best=null,bestScore=0;
  for(const intent of INTENTS){
    let score=0;
    for(const kw of intent.keys){if(input.includes(kw))score+=2;}
    for(const syn of intent.syns){if(input.includes(syn))score+=1;}
    for(const word of words){
      for(const kw of intent.keys){
        const kwFirst=kw.split(' ')[0];
        if(kw===word||kwFirst===word)score+=0.5;
        else if(word.length>=5&&(kw.includes(word)||word.includes(kwFirst)))score+=0.3;
      }
    }
    if(score>bestScore){bestScore=score;best=intent;}
  }
  return bestScore>=1?best:null;
}

function renderChips(chipIds){
  const container=document.getElementById('ai-chips');
  container.innerHTML='';
  (chipIds||[]).forEach(id=>{
    const label=CHIP_LABELS[id]||id;
    const btn=document.createElement('button');
    btn.className='chip';
    btn.textContent=label;
    btn.onclick=()=>handleQuery(id);
    container.appendChild(btn);
  });
  setTimeout(saveSession,60);
}

function addMsg(html,type){
  const msgs=document.getElementById('ai-msgs');
  const div=document.createElement('div');
  div.className='msg '+type;
  div.innerHTML=html;
  msgs.appendChild(div);
  requestAnimationFrame(()=>{msgs.scrollTo({top:msgs.scrollHeight,behavior:'smooth'})});
  setTimeout(saveSession,50);
}

function showTyping(){
  removeTyping();
  const msgs=document.getElementById('ai-msgs');
  const div=document.createElement('div');
  div.className='msg typing';
  div.id='vitality-typing';
  div.innerHTML='<div class="typing-dots"><span></span><span></span><span></span></div>';
  msgs.appendChild(div);
  msgs.scrollTo({top:msgs.scrollHeight,behavior:'smooth'});
}

function removeTyping(){
  const t=document.getElementById('vitality-typing');
  if(t)t.remove();
}

function setInputBusy(busy){
  const inp=document.getElementById('ai-inp');
  const btn=document.getElementById('ai-send');
  inp.disabled=busy;
  btn.disabled=busy;
}

let vitality_busy=false;

function handleQuery(intentIdOrText){
  if(vitality_busy)return;
  const directIntent=INTENTS.find(i=>i.id===intentIdOrText);
  const intent=directIntent||matchIntent(intentIdOrText);
  if(!directIntent){
    const trimmed=intentIdOrText.trim();
    if(!trimmed)return;
    addMsg(trimmed,'user');
  } else {
    addMsg(CHIP_LABELS[intentIdOrText]||intentIdOrText,'user');
  }

  vitality_busy=true;
  setInputBusy(true);

  const delay=350+Math.random()*350;
  showTyping();

  setTimeout(()=>{
    removeTyping();
    if(intent){
      addMsg(intent.res(),'bot');
      renderChips(intent.chips);
    } else {
      addMsg(
        `Thanks for your question. I may not have a precise answer for that — but here's what I can help with:<br><br>`+
        `• Bitan's <strong>skills and tech stack</strong><br>`+
        `• His <strong>projects</strong> — Foodiegasm, IPL Dashboard, ML Project<br>`+
        `• <strong>Certifications</strong> and <strong>education</strong><br>`+
        `• <strong>Internship availability</strong> and <strong>contact details</strong><br>`+
        `• Downloading his <strong>resume</strong><br><br>`+
        `Try one of the suggestions below, or rephrase your question.`,
        'bot'
      );
      renderChips(['skills','projects','contact','resume']);
    }

    vitality_busy=false;
    setInputBusy(false);
    document.getElementById('ai-inp').focus();
  },delay);
}

function sendAI(){
  const inp=document.getElementById('ai-inp');
  const msg=inp.value.trim();
  if(!msg||vitality_busy)return;
  inp.value='';
  handleQuery(msg);
}

function toggleAI(){
  const panel=document.getElementById('ai-panel');
  const backdrop=document.getElementById('ai-backdrop');
  const isOpen=panel.classList.toggle('open');
  backdrop.classList.toggle('open',isOpen);

  if(isOpen){
    document.getElementById('ai-badge').style.display='none';
    document.body.style.overflow='hidden';
    setTimeout(()=>document.getElementById('ai-inp').focus(),320);
    const msgs=document.getElementById('ai-msgs');
    requestAnimationFrame(()=>msgs.scrollTo({top:msgs.scrollHeight,behavior:'instant'}));
  } else {
    document.body.style.overflow='';
  }
}

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&document.getElementById('ai-panel').classList.contains('open')) toggleAI();
});

function clearChat(){
  const msgs=document.getElementById('ai-msgs');
  msgs.style.opacity='0';
  msgs.style.transition='opacity 0.18s ease';

  setTimeout(()=>{
    msgs.innerHTML='';
    vitality_busy=false;
    setInputBusy(false);

    const now=new Date();
    const timeStr=now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
    const div=document.createElement('div');
    div.className='session-divider';
    div.textContent=`New conversation · ${timeStr}`;
    msgs.appendChild(div);

    addMsg(`Chat reset. I'm <strong>VITALITY</strong> — Bitan's portfolio assistant.<br>What would you like to know?`,'bot');
    renderChips(['skills','projects','certs','intern','resume','contact']);
    saveSession();

    msgs.style.opacity='1';
    document.getElementById('ai-inp').focus();
  },180);
}

function saveSession(){
  try{
    const msgs=document.getElementById('ai-msgs');
    const items=[];
    msgs.querySelectorAll('.msg, .session-divider').forEach(el=>{items.push({cls:el.className,html:el.innerHTML})});
    sessionStorage.setItem('vitality_chat',JSON.stringify(items));

    const chips=document.getElementById('ai-chips');
    const chipIds=[];
    chips.querySelectorAll('.chip').forEach(c=>chipIds.push(c.textContent));
    sessionStorage.setItem('vitality_chips_html',chips.innerHTML);
  }catch(e){}
}

function restoreSession(){
  try{
    const saved=sessionStorage.getItem('vitality_chat');
    if(!saved)return false;
    const items=JSON.parse(saved);
    if(!items||items.length===0)return false;

    const msgs=document.getElementById('ai-msgs');
    msgs.innerHTML='';
    items.forEach(item=>{
      const el=document.createElement('div');
      el.className=item.cls;
      el.innerHTML=item.html;
      msgs.appendChild(el);
    });

    const savedChips=sessionStorage.getItem('vitality_chips_html');
    if(savedChips){
      const chips=document.getElementById('ai-chips');
      chips.innerHTML=savedChips;
      chips.querySelectorAll('.chip').forEach(btn=>{
        const label=btn.textContent.trim();
        const id=Object.entries(CHIP_LABELS).find(([k,v])=>v===label)?.[0]||label.toLowerCase();
        btn.onclick=()=>handleQuery(id);
      });
    }

    msgs.scrollTo({top:msgs.scrollHeight,behavior:'instant'});
    return true;
  }catch(e){return false;}
}

(function(){
  const restored=restoreSession();
  if(!restored){}
})();

(function initDefaultChips(){
  // default chips wired inline
})();


