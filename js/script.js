// Initialize AOS (Animate On Scroll)
AOS.init({
  once: true,
  offset: 80,
  duration: 800,
  easing: "ease-out-cubic",
});

// Dynamic Navbar Scrolling Effect
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("nav-scrolled");
      navbar.classList.remove("nav-top");
    } else {
      navbar.classList.add("nav-top");
      navbar.classList.remove("nav-scrolled");
    }
  });
}

// Ensure background video plays smoothly
document.addEventListener("DOMContentLoaded", () => {
  const bgVideos = document.querySelectorAll("video.abstract-video");
  bgVideos.forEach((vid) => {
    vid.muted = true;
    vid.play().catch((err) => {
      console.log("Autoplay note:", err);
    });
  });
});
