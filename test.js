"use strict";
// HTML SECTIONS AND NAVBAR ICONS
const home = document.querySelector("#home");
const about = document.querySelector(".about");
const contact = document.querySelector("#contact");
const aboutIcon = document.querySelector(".about-icon");
const homeIcon = document.querySelector(".home-icon");
const contactIcon = document.querySelector(".contact-icon");
const contactMeLink = document.querySelector(".contact-link");
const body = document.querySelector("body");

// FOOTER
// const footer = document.querySelector("footer");
// const footerCross = document.querySelector(".cross");

// HOME TYPING PARAGRAPH
let typeEffectParagraph = document.querySelector(".type-effect");

const sections = {
  about: {
    icon: aboutIcon,
    page: about,
  },
  home: {
    icon: homeIcon,
    page: home,
  },
  contact: {
    icon: contactIcon,
    page: contact,
  },
};
const linkIcons = [aboutIcon, homeIcon, contactIcon];
const pages = [sections.home, sections.contact, sections.about];

let pageIndex = 0;
let currentPage = sections.home;

// SET OVERFLOW SCROLL FOR ABOUT

// SCROLL TO TOP FUNCTION
const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

// HIDE THE FOOTER
// footerCross.addEventListener("click", () => (footer.style.display = "none"));

// ADD SECONDARY COLOR TO THE ICON WHICH IS RELATED TO THE ACTIVE PAGE
const toggleActivePage = function () {
  linkIcons.forEach((icon) => icon.classList.remove("active-page"));
  this.icon.classList.toggle("active-page");
};

// SWITCH PAGE FUNCTION - HIDES CURRENT PAGE AND SHOWS THE NEXT ONE
const switchPage = (current, next) => {
  current.page.classList.toggle("hidden");
  next.page.classList.toggle("hidden");
  toggleActivePage.call(next);
  currentPage = next;
  // scrollToTop();
};

// EVENT LISTENERS FOR LINK ICONS
homeIcon.addEventListener("click", function () {
  switchPage(currentPage, sections.home);
});
contactIcon.addEventListener("click", function () {
  switchPage(currentPage, sections.contact);
});
aboutIcon.addEventListener("click", function () {
  switchPage(currentPage, sections.about);
});
// EVENT LLISTENER FOR CA BUTTONS
document
  .querySelector(".button-contact")
  .addEventListener("click", () => switchPage(currentPage, sections.contact));
document
  .querySelector(".button-work")
  .addEventListener("click", () => switchPage(currentPage, sections.contact));

// EVENT LISTENER FOR KEY DOWN AND UP
document.addEventListener("keydown", (e) => {
  // ArrowUp
  // ArrowDown
  if (e.key === "ArrowUp") {
    pageIndex === 0 ? (pageIndex = 2) : pageIndex--;
    switchPage(currentPage, pages[pageIndex]);
  }
  if (e.key === "ArrowDown") {
    pageIndex === 2 ? (pageIndex = 0) : pageIndex++;
    switchPage(currentPage, pages[pageIndex]);
  }
});
// EVENT LISTENER FOR CONTACT ME LINK ON TOP OF THE PAGE
// contactMeLink.addEventListener("click", () => {
//   switchPage(currentPage, contact);
//   toggleActivePage.call(contactIcon);
// });

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
