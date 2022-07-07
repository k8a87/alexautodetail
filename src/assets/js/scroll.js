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

// form submission validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
