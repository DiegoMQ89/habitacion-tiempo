document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

let counter = 1;
setInterval(() => {
    const radio = document.getElementById('radio' + counter);
    if (radio) {
        radio.checked = true;
    }
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

// Animación de carga de página (fade-in)
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

