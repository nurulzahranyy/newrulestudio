AOS.init({
  once: true,
  offset: 100,
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add(
      "bg-white/90",
      "backdrop-blur-md",
      "shadow-sm",
      "py-3",
    );
    navbar.classList.add("bg-transparent", "py-4");
  } else {
    navbar.classList.add("bg-transparent", "py-4");
    navbar.classList.remove(
      "bg-white/90",
      "backdrop-blur-md",
      "shadow-sm",
      "py-3",
    );
  }
});
