const words = [
    "Software Developer",
    "Flutter Developer",
    "Cloud Enthusiast",
    "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = words[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            current.substring(0, j++);

    } else {
        document.getElementById("typing").textContent =
            current.substring(0, j--);
    }

    if (j == current.length + 1)
        isDeleting = true;

    if (j == 0) {
        isDeleting = false;
        i++;

        if (i == words.length)
            i = 0;
    }

    setTimeout(type, isDeleting ? 70 : 120);
}

type();

ScrollReveal().reveal('.hero-text',{
    distance:'100px',
    origin:'left',
    duration:1500
});

ScrollReveal().reveal('.hero-image',{
    distance:'100px',
    origin:'right',
    duration:1500
});

ScrollReveal().reveal('.glass-card',{
    interval:200,
    distance:'50px'
});