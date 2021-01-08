"use strict";

// hamburger menu
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");

menuIcon.addEventListener("click", () => menuNavbar.classList.toggle("change"));

// FAQ DROPDOWN
const faqLink = document.querySelectorAll(".faq-link");

faqLink.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.nextElementSibling.classList.toggle("active");
  });
});
