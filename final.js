// ==========================================
// FINAL PAGE
// final.js
// ==========================================

const stars = document.getElementById("stars");
const petals = document.getElementById("petals");
const hearts = document.getElementById("hearts");
const sparkles = document.getElementById("sparkles");
const fireflies = document.getElementById("fireflies");

const foreverBtn = document.getElementById("forever");
const letter = document.getElementById("loveLetter");
const ps = document.getElementById("ps");
const music = document.getElementById("endingMusic");

// ==========================================
// LOVE LETTER
// ==========================================

const message = `
My Dearest Arshi,
Happy Girlfriend's Day ❤️
Thank you for coming into my life.
You've become my happiest place,
my biggest smile,
and the most beautiful chapter of my story.
You're the bestfriend I didn't knew I wanted. 
You're the kind of dream I don't want to wake up from. 
So, Babe.....
No matter what happens...
No matter where life takes us...
I'll always choose you.

Again.

Again.

And Again.

I love you endlessly.
❤️
`;

let index = 0;

function typeLetter(){

    if(index < message.length){

        letter.textContent += message.charAt(index);

        index++;

        setTimeout(typeLetter,45);

    }

}

window.addEventListener("load",()=>{

    typeLetter();

    if(music){
        music.volume=.45;
        music.play().catch(()=>{});
    }

});

// ==========================================
// STARS
// ==========================================

for(let i=0;i<220;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animation="twinkle "+(2+Math.random()*4)+"s infinite";

    stars.appendChild(star);

}

// ==========================================
// PETALS
// ==========================================

const flowers=["🌸","🌺","🌼","🌷"];

function createPetal(){

    const p=document.createElement("div");

    p.className="petal";

    p.innerHTML=
    flowers[Math.floor(Math.random()*flowers.length)];

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=
    (8+Math.random()*6)+"s";

    p.style.fontSize=
    (18+Math.random()*20)+"px";

    petals.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },14000);

}

setInterval(createPetal,600);

// ==========================================
// HEARTS
// ==========================================

function createHeart(){

    const h=document.createElement("div");

    h.className="floatingHeart";

    h.innerHTML="❤️";

    h.style.left=Math.random()*100+"vw";

    h.style.fontSize=
    (16+Math.random()*20)+"px";

    h.style.animationDuration=
    (7+Math.random()*5)+"s";

    hearts.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },12000);

}

setInterval(createHeart,900);

// ==========================================
// SPARKLES
// ==========================================

function sparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.innerHTML="✨";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    sparkles.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(sparkle,350);

// ==========================================
// FIREFLIES
// ==========================================

function firefly(){

    const f=document.createElement("div");

    f.className="firefly";

    f.style.left=Math.random()*100+"vw";

    f.style.top=Math.random()*100+"vh";

    fireflies.appendChild(f);

    setTimeout(()=>{

        f.remove();

    },4000);

}

setInterval(firefly,500);

// ==========================================
// P.S.
// ==========================================

setTimeout(()=>{

    ps.classList.add("show");

},22000);

// ==========================================
// FOREVER BUTTON
// ==========================================

foreverBtn.addEventListener("click",()=>{

    foreverBtn.innerHTML="Forever ❤️";

    foreverBtn.classList.add("forever");

    if(typeof confetti==="function"){

        confetti({

            particleCount:350,

            spread:180,

            origin:{y:.65}

        });

    }

    // More petals

    for(let i=0;i<60;i++){

        setTimeout(createPetal,i*50);

    }

    // More hearts

    for(let i=0;i<60;i++){

        setTimeout(createHeart,i*40);

    }

    // Moon glow

    document.querySelector(".moon").style.filter=
    "brightness(1.35)";

});

// ==========================================
// PHOTO HOVER
// ==========================================

document.querySelectorAll(".polaroid").forEach(photo=>{

    photo.addEventListener("mouseenter",()=>{

        photo.style.zIndex=100;

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.zIndex=1;

    });

});

// ==========================================
// Cursor Hearts
// ==========================================

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.7){

        const h=document.createElement("div");

        h.innerHTML="🤍";

        h.style.position="fixed";

        h.style.left=e.clientX+"px";

        h.style.top=e.clientY+"px";

        h.style.pointerEvents="none";

        h.style.transition="all 1s linear";

        h.style.opacity=".8";

        document.body.appendChild(h);

        setTimeout(()=>{

            h.style.transform="translateY(-40px) scale(0)";
            h.style.opacity="0";

        },30);

        setTimeout(()=>{

            h.remove();

        },1000);

    }

});