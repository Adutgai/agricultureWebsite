let currentSlide = 0;

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

function showSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    showSlide();
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    showSlide();
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", previousSlide);

setInterval(nextSlide, 5000);