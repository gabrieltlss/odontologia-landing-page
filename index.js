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