// Animasi scroll muncul
const targets = document.querySelectorAll("section, .card, .product-card, .gallery img, .desc-text");
const nav = document.querySelector("nav");

const observerOptions = {
  root: null,
  rootMargin: "0px", 
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

targets.forEach(el => observer.observe(el));

// Animasi navbar saat scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Toggle hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Pastikan elemen sudah loaded sebelum menjalankan animasi
document.addEventListener('DOMContentLoaded', function() {
  // Trigger animasi untuk elemen yang sudah terlihat saat page load
  const immediateTargets = document.querySelectorAll('.desc-text');
  immediateTargets.forEach(target => {
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      target.classList.add('visible');
    }
  });
});