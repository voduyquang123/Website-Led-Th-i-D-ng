const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});
