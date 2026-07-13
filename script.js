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
const envelope = document.querySelector(".envelope");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

if (bgMusic) {
    bgMusic.volume = 0.5;

    bgMusic.play()
    .then(() => {
        console.log("Music started");
    })
    .catch((error) => {
        console.log("Music blocked:", error);
    });
}

// Wait for flap and card animation
setTimeout(() => {
    loading.style.transition = "opacity 1s ease";
    loading.style.opacity = "0";
}, 1500);

// Show the main invitation
setTimeout(() => {
    loading.style.display = "none";
    main.style.display = "block";

    main.style.opacity = "0";
    main.style.transition = "opacity 1s ease";

    setTimeout(() => {
        main.style.opacity = "1";
    }, 50);

    window.scrollTo(0, 0);
}, 2500);

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

const musicBtn = document.getElementById("musicBtn");

musicBtn.innerHTML = "🔇";

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerHTML = "🎵";
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "🔇";
    }

});
const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = rsvpForm.querySelector('button[type="submit"]');

    // Prevent double submission
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("guests", document.getElementById("guests").value);
    formData.append("attendance", document.getElementById("attendance").value);
    formData.append("message", document.getElementById("message").value);

    fetch("https://script.google.com/macros/s/AKfycbypwN6DCGE6EiIn0zaWHSi6OKcUkFimsazZ_g6SbW8x5bNIgEQ7iBd3z9Gs81EEq9ATWA/exec", {
        method: "POST",
        body: formData
    })
.then(() => {
    submitBtn.textContent = "Submitted ✓";

    const attendance = document.getElementById("attendance").value;

    if (attendance === "Yes") {
        alert(
            "💚 RSVP Received 💚\n\n" +
            "Thank you for accepting our wedding invitation!\n\n" +
            "Your RSVP has been successfully recorded.\n\n" +
            "We can't wait to celebrate with you on Thursday, January 7, 2027.\n\n" +
            "With love,\nJeric & Anne"
        );
    } else {
        alert(
            "💚 RSVP Received 💚\n\n" +
            "Thank you for letting us know.\n\n" +
            "Although we're sorry you won't be able to join us, we truly appreciate your response.\n\n" +
            "We wish you all the best and hope to celebrate together another time.\n\n" +
            "With love,\nJeric & Anne"
        );
    }

    rsvpForm.reset();
})
.catch(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit RSVP";
    alert("❌ Something went wrong. Please try again.");
});

});
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});