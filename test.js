"use strict";

const home = document.querySelector("#home");
const about = document.querySelector(".about");
const contact = document.querySelector("#contact");
const aboutIcon = document.querySelector(".about-icon");
const homeIcon = document.querySelector(".home-icon");
const contactIcon = document.querySelector(".contact-icon");
const contactMeLink = document.querySelector(".contact-link");

const footer = document.querySelector("footer");
const footerCross = document.querySelector(".cross");

let typeEffectParagraph = document.querySelector(".type-effect");

const linkIcons = [aboutIcon, homeIcon, contactIcon];
let currentPage = home;

// SCROLL TO TOP FUNCTION
const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
// HIDE THE FOOTER
footerCross.addEventListener("click", () => (footer.style.display = "none"));
// ADD SECONDARY COLOR TO THE ICON WHICH IS RELATED TO THE ACTIVE PAGE
const toggleActivePage = function () {
  linkIcons.forEach((icon) => icon.classList.remove("active-page"));
  this.classList.toggle("active-page");
};

// SWITCH PAGE FUNCTION - HIDES CURRENT PAGE AND SHOWS THE NEXT ONE
const switchPage = (current, next) => {
  current.classList.toggle("hidden");
  next.classList.toggle("hidden");
  currentPage = next;
  // scrollToTop();
};

// EVENT LISTENERS FOR LINK ICONS
aboutIcon.addEventListener("click", function () {
  switchPage(currentPage, about);
  toggleActivePage.call(aboutIcon);
});
homeIcon.addEventListener("click", function () {
  switchPage(currentPage, home);
  toggleActivePage.call(homeIcon);
});
contactIcon.addEventListener("click", function () {
  switchPage(currentPage, contact);
  toggleActivePage.call(contactIcon);
});

// EVENT LISTENER FOR CONTACT ME LINK ON TOP OF THE PAGE
contactMeLink.addEventListener("click", () => {
  switchPage(currentPage, contact);
  toggleActivePage.call(contactIcon);
});

// TYPING EFFECT
(function type(
  index = 0,
  text = "Hello world. I am Andrew. Wordpress developer. "
) {
  typeEffectParagraph.textContent += text[index++];
  if (index == text.length) {
    index = 0;
    typeEffectParagraph.textContent = "";
  }
  setTimeout(() => type(index), 200);
})();
