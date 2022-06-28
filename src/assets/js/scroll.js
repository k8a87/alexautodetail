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
    regularEl.style.scrollMarginTop = "0rem";
    deepEl.style.scrollMarginTop = "0rem";
    maintenanceEl.style.scrollMarginTop = "0rem";
    galleryEl.style.scrollMarginTop = "0rem";
    testimonialEl.style.scrollMarginTop = "0rem";
  } else {
    //going up
    navEl.classList.remove("nav--hidden");
    regularEl.style.scrollMarginTop = "5.5rem";
    deepEl.style.scrollMarginTop = "5.5rem";
    maintenanceEl.style.scrollMarginTop = "5.5rem";
    galleryEl.style.scrollMarginTop = "5.5rem";
    testimonialEl.style.scrollMarginTop = "5.5rem";
    // regularEl.classList.add("nav--scroll-margin");
    // deepEl.classList.add("nav--scroll-margin");
    // maintenanceEl.classList.add("nav--scroll-margin");
    // galleryEl.classList.add("nav--scroll-margin");
    // testimonialEl.classList.add("nav--scroll-margin");
  }

  lastScrollY = window.scrollY;
});
