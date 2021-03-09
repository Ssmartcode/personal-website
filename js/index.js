"use strict";
import type from "./typing.js";
import validateForm from "./formvalidation.js";
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

// ADD SECONDARY COLOR TO THE ICON WHICH IS RELATED TO THE ACTIVE PAGE
const toggleActivePage = function () {
  linkIcons.forEach((icon) => icon.classList.remove("active-page"));
  this.icon.classList.toggle("active-page");
};

// SWITCH PAGE FUNCTION - HIDES CURRENT PAGE AND SHOWS THE NEXT ONE
const switchPage = (nextPage) => {
  currentPage.page.classList.toggle("hidden");
  nextPage.page.classList.toggle("hidden");
  toggleActivePage.call(nextPage);
  currentPage = nextPage;
  // scrollToTop();
};

// EVENT LISTENER ON SIDE-BAR
sideBar.addEventListener("click", (e) => {
  const targetIcon = e.target.getAttribute("name");
  if (targetIcon) {
    switchPage(sections[targetIcon]);
  }
});
// EVENT LLISTENER FOR CA BUTTONS(WORK ANC CONTACT)
document
  .querySelector(".button-contact")
  .addEventListener("click", () => switchPage(sections.contact));
document
  .querySelector(".button-work")
  .addEventListener("click", () => switchPage(sections.work));

// EVENT LISTENER FOR KEY DOWN AND UP TO SCROLL THROUGH PAGES
document.addEventListener("keydown", (e) => {
  // ArrowUp
  if (e.key === "ArrowUp") {
    pageIndex === 0 ? (pageIndex = 3) : pageIndex--;
    switchPage(pages[pageIndex]);
  }
  // ArrowDown
  if (e.key === "ArrowDown") {
    pageIndex === 3 ? (pageIndex = 0) : pageIndex++;
    switchPage(pages[pageIndex]);
  }
});
// HANDLE SUBMIT OF CONTACT FORM
document.querySelector("#contact form").addEventListener("submit", (e) => {
  if (!validateForm()) {
    e.preventDefault();
    alert("Name, subject or message is too short");
  }
});
// HANDLE MODAL
const displayModal = (target) => {
  target.nextElementSibling.classList.remove("hidden");
};
const closeModal = () => {
  modals.forEach((modal) => modal.classList.add("hidden"));
};
// EVENT LISTENER ON DOCUMENT TO CLOSE MODAL
document.addEventListener("click", (e) => {
  if (e.target.closest(".work-card") || e.target.closest(".modal-inner"))
    return;
  closeModal();
});
// EVENT LISTENER ON WORK SECTION--DISPLAY MODAL AND OVERLAY
work.addEventListener("click", (e) => {
  if (e.target.closest(".work-card")) {
    const targetedCard = e.target.closest(".work-card");
    displayModal(targetedCard);
  }
  // close modal
  if (e.target.closest(".close-modal")) {
    closeModal();
  }
});
// EVENT LISTENER ON ESC KEY TO CLOSE MODAL
document.addEventListener("keydown", closeModal);
