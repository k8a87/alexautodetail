// Variables
const navEl = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".clickToClose");

let lastScrollY = window.scrollY;

// loop through links to close with a delay to counteract the scroll up
navLinks.forEach(i => {
  i.addEventListener("click", () => {
    setTimeout(() => {
      navEl.classList.add("nav--hidden");
    }, 1000);
  });
});

// Hide and show nav on scroll
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // goin down  to hide nav
    navEl.classList.add("nav--hidden");

    //scroll back up to show nav
  } else if (lastScrollY > window.scrollY) {
    navEl.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});
