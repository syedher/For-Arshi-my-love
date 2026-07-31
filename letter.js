const message = `

Happy Girlfriend's Day ❤️

My Dearest Arshi,

Every day with you becomes a memory
that I never want to forget.

Thank you for being my happiness,
my peace,
my smile,
and my home.

No matter where life takes us,
I'll always choose you.

I love you more than words
could ever describe.

Forever Yours ❤️
Rahim
`;

let i = 0;

function typeLetter(){

    if(i < message.length){

        document.getElementById("letterText").textContent += message.charAt(i);

        i++;

        setTimeout(typeLetter,35);

    }

}

window.onload = typeLetter;
const nextBtn = document.getElementById("continueBtn");

nextBtn.addEventListener("click", () => {

    nextBtn.innerHTML = "Loading... ❤️";

    document.body.style.opacity = "0";
    document.body.style.transition = "0.8s ease";

    setTimeout(() => {

        window.location.href = "song.html";

    }, 800);

});
