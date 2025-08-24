// Animasi scroll muncul
const sections = document.querySelectorAll("section");
const cards = document.querySelectorAll(".card");
const productGalleryCards = document.querySelectorAll(".product-gallery-grid .product-card"); // Selektor baru
const galleryImages = document.querySelectorAll(".gallery img");
const nav = document.querySelector("nav");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
cards.forEach(card => {
  observer.observe(card);
});
productGalleryCards.forEach(card => { 
  observer.observe(card);
});
galleryImages.forEach(img => {
  observer.observe(img);
});

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

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});