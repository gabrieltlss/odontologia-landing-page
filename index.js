const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("toggle-mobile");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("w3-hide")
});