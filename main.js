// ===========================
// Happy Girlfriend Day
// main.js
// ===========================

/*window.addEventListener("load", () => {

    // Loader
    const loader = document.getElementById("loader");

    if(loader){
        setTimeout(()=>{
            loader.style.opacity="0";
            loader.style.pointerEvents="none";
        },1800);
    }

    createHearts();
    createSparkles();
    createPetals();
    startCursor();

});


// Continue Button

const btn=document.getElementById("continueBtn");

const music=document.getElementById("bgMusic");

if(btn){

btn.addEventListener("click",()=>{

if(music){

music.play().catch(()=>{});

}

confetti({

particleCount:180,

spread:100,

origin:{y:.7}

});

btn.innerHTML="Loading... ❤️";

setTimeout(()=>{

window.location.href="accept.html";

},1700);

});

}


// Floating Hearts

function createHearts(){

const container=document.getElementById("hearts");

if(!container) return;

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="floatingHeart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*10)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},400);

}


// Sparkles

function createSparkles(){

const container=document.getElementById("sparkles");

if(!container) return;

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.className="spark";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

container.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

},250);

}


// Falling Petals

function createPetals(){

const container=document.getElementById("petals");

if(!container) return;

const flowers=["🌸","🌺","🌼","🌷"];

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*20)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

container.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

},700);

}


// Cursor Hearts

function startCursor(){

document.addEventListener("mousemove",(e)=>{

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.pointerEvents="none";

h.style.fontSize="14px";

h.style.transition="all 1s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform="translateY(-50px) scale(0)";

h.style.opacity="0";

},20);

setTimeout(()=>{

h.remove();

},1000);

});

}


// Floating Butterflies

const butterfly=document.getElementById("butterflies");

if(butterfly){

setInterval(()=>{

const b=document.createElement("div");

b.innerHTML="🦋";

b.style.position="fixed";

b.style.left="-50px";

b.style.top=(20+Math.random()*60)+"vh";

b.style.fontSize="28px";

b.style.transition="10s linear";

butterfly.appendChild(b);

setTimeout(()=>{

b.style.left="110vw";

},100);

setTimeout(()=>{

b.remove();

},10500);

},5000);

}


// Clouds

const clouds=document.getElementById("clouds");

if(clouds){

setInterval(()=>{

const c=document.createElement("div");

c.innerHTML="☁️";

c.style.position="fixed";

c.style.left="-80px";

c.style.top=Math.random()*20+"vh";

c.style.fontSize="50px";

c.style.opacity=".4";

c.style.transition="25s linear";

clouds.appendChild(c);

setTimeout(()=>{

c.style.left="120vw";

},100);

setTimeout(()=>{

c.remove();

},26000);

},9000);

}*/
// ===========================
// Happy Girlfriend Day
// main.js
// ===========================

window.addEventListener("load", () => {

    // Loader
    const loader = document.getElementById("loader");

    if(loader){
        setTimeout(()=>{
            loader.style.opacity="0";
            loader.style.pointerEvents="none";
        },1800);
    }

    createHearts();
    createSparkles();
    createPetals();
    startCursor();

});


// Continue Button

const btn=document.getElementById("continueBtn");

const music=document.getElementById("bgMusic");

if(btn){

btn.addEventListener("click",()=>{

if(music){

music.play().catch(()=>{});

}

confetti({

particleCount:180,

spread:100,

origin:{y:.7}

});

btn.innerHTML="Loading... ❤️";

setTimeout(()=>{

window.location.href="accept.html";

},1700);

});

}


// Floating Hearts

function createHearts(){

const container=document.getElementById("hearts");

if(!container) return;

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="floatingHeart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*10)+"s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},400);

}


// Sparkles

function createSparkles(){

const container=document.getElementById("sparkles");

if(!container) return;

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.className="spark";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

container.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

},250);

}


// Falling Petals

function createPetals(){

const container=document.getElementById("petals");

if(!container) return;

const flowers=["🌸","🌺","🌼","🌷"];

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*20)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

container.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

},700);

}


// Cursor Hearts

function startCursor(){

document.addEventListener("mousemove",(e)=>{

const h=document.createElement("div");

h.innerHTML="💖";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.pointerEvents="none";

h.style.fontSize="14px";

h.style.transition="all 1s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform="translateY(-50px) scale(0)";

h.style.opacity="0";

},20);

setTimeout(()=>{

h.remove();

},1000);

});

}


// Floating Butterflies

const butterfly=document.getElementById("butterflies");

if(butterfly){

setInterval(()=>{

const b=document.createElement("div");

b.innerHTML="🦋";

b.style.position="fixed";

b.style.left="-50px";

b.style.top=(20+Math.random()*60)+"vh";

b.style.fontSize="28px";

b.style.transition="10s linear";

butterfly.appendChild(b);

setTimeout(()=>{

b.style.left="110vw";

},100);

setTimeout(()=>{

b.remove();

},10500);

},5000);

}


// Clouds

const clouds=document.getElementById("clouds");

if(clouds){

setInterval(()=>{

const c=document.createElement("div");

c.innerHTML="☁️";

c.style.position="fixed";

c.style.left="-80px";

c.style.top=Math.random()*20+"vh";

c.style.fontSize="50px";

c.style.opacity=".4";

c.style.transition="25s linear";

clouds.appendChild(c);

setTimeout(()=>{

c.style.left="120vw";

},100);

setTimeout(()=>{

c.remove();

},26000);

},9000);

}