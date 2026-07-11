// ===============================
// Jeric & Anne Wedding Invitation
// Script Part 1
// ===============================

// Wedding Date
const weddingDate = new Date("January 7, 2027 15:30:00").getTime();

// Elements
const loading = document.getElementById("loading");
const main = document.getElementById("main");
const openBtn = document.getElementById("openBtn");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Open Invitation
openBtn.addEventListener("click", () => {

    loading.style.opacity = "0";
    document.getElementById("bgMusic").play();

    setTimeout(() => {
        loading.style.display = "none";
        main.style.display = "block";
        window.scrollTo(0,0);
    },1000);

});

// Countdown
setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0){

        days.innerHTML = "0";
        hours.innerHTML = "0";
        minutes.innerHTML = "0";
        seconds.innerHTML = "0";

        return;
    }

    days.innerHTML = Math.floor(distance / (1000*60*60*24));

    hours.innerHTML = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    minutes.innerHTML = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    seconds.innerHTML = Math.floor(
        (distance % (1000*60))
        /1000
    );

},1000);

// Google Maps Button
document.getElementById("mapBtn").addEventListener("click",()=>{

window.open(
"https://maps.google.com/?q=Renato's+Place+Private+Resort+and+Events+Taytay+Rizal",
"_blank"
);

});

// Music Button Placeholder
document.getElementById("musicBtn").addEventListener("click",()=>{

alert("Background music will be added in the next step.");

});