// ===========================
// accept.js
// ===========================

const teddy = document.getElementById("teddy");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const msg = document.getElementById("message");

let noCount = 0;

// ----------------------
// YES BUTTON
// ----------------------

yes.addEventListener("click",()=>{

confetti({

particleCount:250,

spread:120,

origin:{y:.6}

});

teddy.innerHTML="🥰";

msg.innerHTML=`
YAYYYYY!! ❤️<br><br>
I knew you'd say yes!<br>
Let's open your surprise...
`;

setTimeout(()=>{

window.location.href="envelope.html";

},2000);

});


// ----------------------
// NO BUTTON
// ----------------------

no.addEventListener("click",()=>{

noCount++;

if(noCount===1){

teddy.innerHTML="🥺";

msg.innerHTML=` Why Princess?
🥺<br><br>
I worked really hard
to make this for you...
Pwease... Say yes? 
`;

growYes();

}

else if(noCount===2){

teddy.innerHTML="😭";

msg.innerHTML=`
You're making Teddy cry... 😭<br><br>
Please don't say no...
`;

runButton();

growYes();

}

else if(noCount===3){

teddy.innerHTML="😭💔";

msg.innerHTML=`
Pretty please...? 🥹<br><br>
Just one chance...
`;

runButton();

growYes();

shake();

}

else{

runButton();

growYes();

}

});


// ----------------------
// Grow YES Button
// ----------------------

function growYes(){

let size=parseFloat(getComputedStyle(yes).fontSize);

yes.style.fontSize=(size+2)+"px";

yes.style.padding="18px 42px";

}


// ----------------------
// Move NO Button
// ----------------------

function runButton(){

const w=window.innerWidth-150;

const h=window.innerHeight-80;

const x=Math.random()*w;

const y=Math.random()*h;

no.style.position="fixed";

no.style.left=x+"px";

no.style.top=y+"px";

}


// ----------------------
// Shake Teddy
// ----------------------

function shake(){

teddy.animate([

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(0)"}

],{

duration:500

});

}


// ----------------------
// Floating Hearts
// ----------------------

setInterval(()=>{

const h=document.createElement("div");

h.className="floatingHeart";

h.innerHTML="💖";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(15+Math.random()*20)+"px";

h.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},9000);

},400);


// ----------------------
// Sparkles
// ----------------------

setInterval(()=>{

const s=document.createElement("div");

s.className="spark";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1800);

},250);


// ----------------------
// Teddy Breathing
// ----------------------

setInterval(()=>{

teddy.animate([

{transform:"scale(1)"},

{transform:"scale(1.05)"},

{transform:"scale(1)"}

],{

duration:1200

});

},1300);


// ----------------------
// Background Hearts
// ----------------------

setInterval(()=>{

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.top="100vh";

h.style.fontSize=(18+Math.random()*18)+"px";

h.style.pointerEvents="none";

h.style.transition="8s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.top="-100px";

h.style.opacity="0";

},50);

setTimeout(()=>{

h.remove();

},8000);

},700);