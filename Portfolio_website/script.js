// Theme toggle
document.getElementById("themeToggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
};

// Scroll to top button visibility
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


