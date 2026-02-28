// ==============================
// FADE-IN ON SCROLL
// ==============================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});


// ==============================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ==============================
// BUTTON HOVER MICRO-ANIMATION
// ==============================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-3px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });
});


// ==============================
// SECURITY (NO CONSOLE ERRORS)
// ==============================
window.addEventListener("error", function () {
  return true;
});
