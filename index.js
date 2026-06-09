const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("toggle-mobile");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("w3-hide")
});

// Carousel toggle
const carousel = document.querySelectorAll(".carousel-img");
const previews = document.querySelectorAll(".preview-img");

function displayCarouselImg(number) {
    carousel.forEach(elem => elem.classList.add("w3-hide"));
    document.getElementById(`carousel-${number}`).classList.remove("w3-hide");
    previews.forEach(elem => elem.classList.add("w3-grayscale-max"));
    document.getElementById(`preview-${number}`).classList.remove("w3-grayscale-max");
}

// Accordion button
function openAccordion(number) {
    const openBtn = document.getElementById(`open-btn-${number}`);
    openBtn.classList.add("w3-hide");

    const accordion = document.getElementById(`accordion-content-${number}`);
    accordion.classList.remove("w3-hide");

    const cleseBtn = document.getElementById(`close-btn-${number}`);
    cleseBtn.classList.remove("w3-hide");
}

function closeAccordion(number) {
    const cleseBtn = document.getElementById(`close-btn-${number}`);
    cleseBtn.classList.add("w3-hide");

    const accordion = document.getElementById(`accordion-content-${number}`);
    accordion.classList.add("w3-hide");

    const openBtn = document.getElementById(`open-btn-${number}`);
    openBtn.classList.remove("w3-hide");
}