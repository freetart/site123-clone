"use strict";

// FAQ DROPDOWN
const faqLink = document.querySelectorAll(".faq-link");

faqLink.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.nextElementSibling.classList.toggle("active");
  });
});
