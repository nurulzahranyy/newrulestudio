// Initialize AOS
AOS.init({
  once: true,
  offset: 60,
  duration: 600,
  easing: "ease-out",
});

// Dynamic Navbar Scroll Effect
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 30) {
        navbar.classList.add("nav-scrolled");
        navbar.classList.remove("nav-top");
      } else {
        navbar.classList.add("nav-top");
        navbar.classList.remove("nav-scrolled");
      }
    },
    { passive: true },
  );
}
