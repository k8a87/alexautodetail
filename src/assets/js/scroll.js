const navEl = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navEl.classList.add("nav--hidden");
  } else {
    navEl.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
});
