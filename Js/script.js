// script.js
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
  }