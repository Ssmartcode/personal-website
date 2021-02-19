"use strict";
import type from "./typing.js";
// HTML SECTIONS AND NAVBAR ICONS
const home = document.querySelector("#home");
const contact = document.querySelector("#contact");
const work = document.querySelector("#work");
const about = document.querySelector(".about");

const homeIcon = document.querySelector(".home-icon");
const contactIcon = document.querySelector(".contact-icon");
const workIcon = document.querySelector(".work-icon");
const aboutIcon = document.querySelector(".about-icon");

const sideBar = document.querySelector(".side-bar");
const modals = document.querySelectorAll(".modal");
// !FOOTER -DISABLED
// const footer = document.querySelector("footer");
// const footerCross = document.querySelector(".cross");

// HOME TYPING PARAGRAPH
let typeEffectParagraph = document.querySelector(".type-effect");
// TYPING FUNCTION
type(typeEffectParagraph);

const sections = {
  home: {
    icon: homeIcon,
    page: home,
  },
  work: {
    icon: workIcon,
    page: work,
  },
  contact: {
    icon: contactIcon,
    page: contact,
  },
  about: {
    icon: aboutIcon,
    page: about,
  },
};
const linkIcons = [aboutIcon, workIcon, homeIcon, contactIcon];
const pages = [sections.home, sections.contact, sections.work, sections.about];

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

// !DISABLED HIDE THE FOOTER
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

// EVENT LISTENER ON SIDE-BAR
sideBar.addEventListener("click", (e) => {
  const targetIcon = e.target.getAttribute("name");
  if (targetIcon) {
    switchPage(currentPage, sections[targetIcon]);
  }
});
// EVENT LLISTENER FOR CA BUTTONS(WORK ANC CONTACT)
document
  .querySelector(".button-contact")
  .addEventListener("click", () => switchPage(currentPage, sections.contact));
document
  .querySelector(".button-work")
  .addEventListener("click", () => switchPage(currentPage, sections.work));

// EVENT LISTENER FOR KEY DOWN AND UP TO SCROLL THROUGH PAGES
document.addEventListener("keydown", (e) => {
  // ArrowUp
  // ArrowDown
  if (e.key === "ArrowUp") {
    pageIndex === 0 ? (pageIndex = 3) : pageIndex--;
    switchPage(currentPage, pages[pageIndex]);
  }
  if (e.key === "ArrowDown") {
    pageIndex === 3 ? (pageIndex = 0) : pageIndex++;
    switchPage(currentPage, pages[pageIndex]);
  }
});
// !DISABLED EVENT LISTENER FOR CONTACT ME LINK ON TOP OF THE PAGE -
// contactMeLink.addEventListener("click", () => {
//   switchPage(currentPage, contact);
//   toggleActivePage.call(contactIcon);
// });
//

// HANDLE MODAL
const displayModal = (target) => {
  target.nextElementSibling.classList.remove("hidden");
};
const closeModal = () => {
  modals.forEach((modal) => modal.classList.add("hidden"));
};
// EVENT LISTENER ON WORK SECTION--DISPLAY MODAL AND OVERLAY
work.addEventListener("click", (e) => {
  const targetedCard = e.target.closest(".work-card");
  console.log(targetedCard);
  displayModal(targetedCard);
});
// EVENT LISTENER ON ESC KEY TO CLOSE MODAL
document.addEventListener("keydown", () => {
  closeModal();
});
