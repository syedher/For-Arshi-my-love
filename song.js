// ==========================================
// Song Page
// song.js
// ==========================================

/*const stars = document.getElementById("stars");
const petals = document.getElementById("petals");
const hearts = document.getElementById("floatingHearts");
const fireflies = document.getElementById("fireflies");

const song = document.getElementById("song");
const button = document.getElementById("continueBtn");


// ==========================================
// Create Stars
// ==========================================

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=
        (2+Math.random()*4)+"s";

    star.style.animationDelay=
        Math.random()*5+"s";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}


// ==========================================
// Fireflies
// ==========================================

function createFirefly(){

    const fly=document.createElement("div");

    fly.innerHTML="✨";

    fly.style.position="absolute";

    fly.style.left=Math.random()*100+"vw";

    fly.style.top=Math.random()*100+"vh";

    fly.style.fontSize=(10+Math.random()*12)+"px";

    fly.style.opacity=".8";

    fly.style.transition="6s linear";

    fireflies.appendChild(fly);

    setTimeout(()=>{

        fly.style.transform=
        `translate(${Math.random()*200-100}px,
                   ${Math.random()*200-100}px)`;

        fly.style.opacity="0";

    },100);

    setTimeout(()=>{

        fly.remove();

    },6000);

}

setInterval(createFirefly,400);


// ==========================================
// Petals
// ==========================================

const flowers=[
"🌸",
"🌺",
"🌷",
"🌼"
];

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML=
        flowers[Math.floor(Math.random()*flowers.length)];

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=
        (18+Math.random()*18)+"px";

    petal.style.animationDuration=
        (8+Math.random()*5)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,700);


// ==========================================
// Floating Hearts
// ==========================================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";

    heart.style.bottom="-40px";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
        (14+Math.random()*16)+"px";

    heart.style.opacity=".6";

    heart.style.pointerEvents="none";

    heart.style.transition="8s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(-120vh)
         translateX(${Math.random()*120-60}px)`;

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,1300);


// ==========================================
// Music Effects
// ==========================================

song.addEventListener("play",()=>{

    if(typeof confetti==="function"){

        confetti({

            particleCount:80,

            spread:70,

            origin:{y:.75}

        });

    }

});


// ==========================================
// Continue Button
// ==========================================

button.addEventListener("click",()=>{

    if(typeof confetti==="function"){

        confetti({

            particleCount:180,

            spread:120,

            origin:{y:.7}

        });

    }

    button.innerHTML="Loading... ❤️";

    setTimeout(()=>{

        window.location.href="final.html";

    },1500);

});


// ==========================================
// Fade In
// ==========================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1.2s ease";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});


// ==========================================
// Pause Music When Hidden
// ==========================================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        song.pause();

    }

});


// ==========================================
// Gentle Album Glow
// ==========================================

const album=document.querySelector(".album");

let glow=0;

setInterval(()=>{

    glow++;

    album.style.boxShadow=
    `0 0 ${20+Math.sin(glow/10)*10}px rgba(255,255,255,.25)`;

},60);
/*const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    continueBtn.innerHTML = "Loading... ❤️";

    document.body.style.opacity = "0";
    document.body.style.transition = "0.8s ease";

    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.7 }
        });
    }

    setTimeout(() => {
        window.location.href = "final.html";
    }, 800);

});
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
    window.location.href = "final.html";
});*/
// ==========================================
// Song Page
// ==========================================

// Containers
const stars = document.getElementById("stars");
const petals = document.getElementById("petals");
const hearts = document.getElementById("floatingHearts");
const fireflies = document.getElementById("fireflies");

// Elements
const song = document.getElementById("song");
const button = document.getElementById("continueBtn");
const album = document.querySelector(".album");


// ==========================================
// Fade In
// ==========================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";
    document.body.style.transition = "1s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

});


// ==========================================
// Stars
// ==========================================

if (stars) {

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.opacity = Math.random();

        stars.appendChild(star);

    }

}


// ==========================================
// Fireflies
// ==========================================

function createFirefly() {

    if (!fireflies) return;

    const fly = document.createElement("div");

    fly.innerHTML = "✨";

    fly.style.position = "absolute";
    fly.style.left = Math.random() * 100 + "vw";
    fly.style.top = Math.random() * 100 + "vh";
    fly.style.fontSize = (10 + Math.random() * 12) + "px";
    fly.style.opacity = ".8";
    fly.style.transition = "6s linear";

    fireflies.appendChild(fly);

    setTimeout(() => {

        fly.style.transform =
            `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;

        fly.style.opacity = "0";

    },100);

    setTimeout(() => {

        fly.remove();

    },6000);

}

setInterval(createFirefly,400);


// ==========================================
// Petals
// ==========================================

const flowers=["🌸","🌺","🌷","🌼"];

function createPetal(){

    if(!petals) return;

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML=
    flowers[Math.floor(Math.random()*flowers.length)];

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=
    (18+Math.random()*18)+"px";

    petal.style.animationDuration=
    (8+Math.random()*5)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,700);


// ==========================================
// Hearts
// ==========================================

function createHeart(){

    if(!hearts) return;

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="fixed";
    heart.style.bottom="-40px";
    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (14+Math.random()*16)+"px";

    heart.style.opacity=".6";
    heart.style.pointerEvents="none";
    heart.style.transition="8s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(-120vh) translateX(${Math.random()*120-60}px)`;

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,1300);


// ==========================================
// Music
// ==========================================

if(song){

    song.addEventListener("play",()=>{

        if(typeof confetti==="function"){

            confetti({

                particleCount:80,
                spread:70,
                origin:{y:.75}

            });

        }

    });

}


// ==========================================
// Continue Button
// ==========================================

if(button){

    button.addEventListener("click",()=>{

        button.innerHTML="Loading... ❤️";

        if(typeof confetti==="function"){

            confetti({

                particleCount:180,
                spread:120,
                origin:{y:.7}

            });

        }

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href="final.html";

        },1000);

    });

}


// ==========================================
// Pause Music
// ==========================================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden && song){

        song.pause();

    }

});


// ==========================================
// Album Glow
// ==========================================

if(album){

    let glow=0;

    setInterval(()=>{

        glow++;

        album.style.boxShadow=
        `0 0 ${20+Math.sin(glow/10)*10}px rgba(255,255,255,.25)`;

    },60);

}