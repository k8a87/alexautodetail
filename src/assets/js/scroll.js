"use strict";
// Variables
const navEl = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".clickToClose");

let lastScrollY = window.scrollY;

// Hide and show nav on scroll
window.addEventListener("scroll", () => {
  lastScrollY < window.scrollY
    ? navEl.classList.add("nav--hidden")
    : navEl.classList.remove("nav--hidden");

  lastScrollY = window.scrollY;
});

// loop through links to close with a delay to counteract the scroll up
// navLinks.forEach(i => {
//   i.addEventListener("click", () => {
//     setTimeout(() => {
//       navEl.classList.add("nav--hidden");
//     }, 1000);
//   });
// });
//Refactor using event capture and bubbling
navEl.addEventListener("click", e => {
  if (e.target.classList.contains("clickToClose")) {
    setTimeout(() => {
      navEl.classList.add("nav--hidden");
    }, 1000);
  }
});
