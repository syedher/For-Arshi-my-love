// ===========================================
// Envelope Animation
// ===========================================

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("open");
const petals = document.getElementById("petals");

let opened = false;

// -------------------------------------------
// Open Envelope
// -------------------------------------------

function openEnvelope() {

    if (opened) return;

    opened = true;

    envelope.classList.add("open");

    // Confetti
    if (typeof confetti === "function") {
        confetti({
            particleCount: 180,
            spread: 90,
            origin: {
                y: 0.65
            }
        });
    }

    // Show button after animation
    setTimeout(() => {
        openBtn.classList.add("show");
    }, 1200);

}

// Click envelope
envelope.addEventListener("click", openEnvelope);


// -------------------------------------------
// Continue Button
// -------------------------------------------

openBtn.addEventListener("click", () => {

    openBtn.innerHTML = "Loading... ❤️";

    if (typeof confetti === "function") {

        confetti({

            particleCount: 120,

            spread: 70,

            origin: {
                y: 0.7
            }

        });

    }

    setTimeout(() => {

        window.location.href = "letter.html";

    }, 1200);

});


// ===========================================
// Flower Petals
// ===========================================

const flowers = [
    "🌸",
    "🌺",
    "🌷",
    "🌼"
];

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (18 + Math.random() * 18) + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    petal.style.opacity =
        0.7 + Math.random() * 0.3;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 11000);

}

// Create petals forever

setInterval(createPetal, 600);


// ===========================================
// Gentle Floating Hearts
// ===========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.transition =
        "transform 8s linear, opacity 8s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-120vh)
             translateX(${Math.random() * 120 - 60}px)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1200);


// ===========================================
// Envelope Hover
// ===========================================

envelope.addEventListener("mouseenter", () => {

    if (opened) return;

    envelope.style.transform = "scale(1.03)";

});

envelope.addEventListener("mouseleave", () => {

    if (opened) return;

    envelope.style.transform = "scale(1)";

});


// ===========================================
// Small Entrance Animation
// ===========================================

window.addEventListener("load", () => {

    envelope.style.opacity = "0";
    envelope.style.transform = "translateY(40px)";

    setTimeout(() => {

        envelope.style.transition =
            "all .8s ease";

        envelope.style.opacity = "1";
        envelope.style.transform = "translateY(0)";

    }, 200);

});