const navEl = document.querySelector(".navbar");
const regularEl = document.getElementById("regular");
const deepEl = document.getElementById("deep");
const maintenanceEl = document.getElementById("maintenance");
const galleryEl = document.getElementById("gallery");
const testimonialEl = document.getElementById("testimonial");

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // goin down
    navEl.classList.add("nav--hidden");
    regularEl.classList.toggle("nav--scroll-margin");
    deepEl.classList.toggle("nav--scroll-margin");
    maintenanceEl.classList.toggle("nav--scroll-margin");
    galleryEl.classList.toggle("nav--scroll-margin");
    testimonialEl.classList.toggle("nav--scroll-margin");
  } else {
    //going up
    navEl.classList.remove("nav--hidden");
    regularEl.classList.toggle("nav--scroll-margin");
    deepEl.classList.toggle("nav--scroll-margin");
    maintenanceEl.classList.toggle("nav--scroll-margin");
    galleryEl.classList.toggle("nav--scroll-margin");
    testimonialEl.classList.toggle("nav--scroll-margin");
  }
  lastScrollY = window.scrollY;
});
