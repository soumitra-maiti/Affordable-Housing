const hamburger = document.getElementById("hamburger");
const nav_links = document.getElementById("nav_links");

hamburger.addEventListener("click", () => {
    nav_links.classList.toggle("active");
})