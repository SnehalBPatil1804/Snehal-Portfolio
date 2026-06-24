// =========================
// TYPING ANIMATION
// =========================

const words = [
    "Software Developer",
    "Flutter Developer",
    "Cloud Enthusiast",
    "AWS Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    let currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent =
            currentWord.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        isDeleting = true;
        typingSpeed = 1500;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");

    });

}


// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

    });

});


// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});


// =========================
// SCROLL REVEAL ANIMATIONS
// =========================

if (typeof ScrollReveal !== "undefined") {

    ScrollReveal().reveal(".hero-text", {
        origin: "left",
        distance: "100px",
        duration: 1500,
        delay: 200
    });

    ScrollReveal().reveal(".hero-image", {
        origin: "right",
        distance: "100px",
        duration: 1500,
        delay: 300
    });

    ScrollReveal().reveal(".glass-card", {
        distance: "50px",
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal(".section-title", {
        origin: "top",
        distance: "50px",
        duration: 1200
    });

}


// =========================
// NAVBAR BACKGROUND ON SCROLL
// =========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(2,6,23,0.95)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        nav.style.background = "rgba(255,255,255,0.05)";
        nav.style.boxShadow = "none";

    }

});
