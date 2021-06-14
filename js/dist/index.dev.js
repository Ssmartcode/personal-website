"use strict";

var _typing = _interopRequireDefault(require("./typing.js"));

var _formvalidation = _interopRequireDefault(require("./formvalidation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// HTML SECTIONS AND NAVBAR ICONS
var home = document.querySelector("#home");
var contact = document.querySelector("#contact");
var work = document.querySelector("#work");
var about = document.querySelector(".about");
var homeIcon = document.querySelector(".home-icon");
var contactIcon = document.querySelector(".contact-icon");
var workIcon = document.querySelector(".work-icon");
var aboutIcon = document.querySelector(".about-icon");
var sideBar = document.querySelector(".side-bar");
var modals = document.querySelectorAll(".modal"); // body takes the height of section

document.body.style.height = contact.offsetHeight; // HOME TYPING PARAGRAPH

var typeEffectParagraph = document.querySelector(".type-effect"); // TYPING FUNCTION

(0, _typing["default"])(typeEffectParagraph); // OBJECT WITH SECTIONS AND THEIR ICON/PAGE

var sections = {
  home: {
    icon: homeIcon,
    page: home
  },
  work: {
    icon: workIcon,
    page: work
  },
  contact: {
    icon: contactIcon,
    page: contact
  },
  about: {
    icon: aboutIcon,
    page: about
  }
};
var linkIcons = [aboutIcon, workIcon, homeIcon, contactIcon];
var pages = [sections.home, sections.contact, sections.work, sections.about]; // FIRST PAGE(HOME) HAS INDEX 0

var pageIndex = 0;
var currentPage = sections.home; // ADD SECONDARY COLOR TO THE ICON WHICH IS RELATED TO THE ACTIVE PAGE

var toggleActivePage = function toggleActivePage() {
  linkIcons.forEach(function (icon) {
    return icon.classList.remove("active-page");
  });
  this.icon.classList.toggle("active-page");
}; // SWITCH PAGE FUNCTION - HIDES CURRENT PAGE AND SHOWS THE NEXT ONE


var switchPage = function switchPage(nextPage) {
  currentPage.page.classList.toggle("hidden");
  nextPage.page.classList.toggle("hidden");
  toggleActivePage.call(nextPage);
  currentPage = nextPage; // LAZY LOAD IMAGES WHEN ON WORK PAGE

  if (currentPage === sections.work) {
    document.querySelectorAll(".work-card img").forEach(function (img) {
      if (img.src) return;
      img.src = img.dataset.src;
    });
  }
}; // EVENT LISTENER ON SIDE-BAR


sideBar.addEventListener("click", function (e) {
  var targetIcon = e.target.getAttribute("name");

  if (targetIcon) {
    switchPage(sections[targetIcon]);
  }

  console.log(pageIndex);
}); // EVENT LLISTENER FOR CA BUTTONS(WORK ANC CONTACT)

document.querySelector(".button-contact").addEventListener("click", function () {
  return switchPage(sections.contact);
});
document.querySelector(".button-work").addEventListener("click", function () {
  return switchPage(sections.work);
}); // EVENT LISTENER FOR KEY DOWN AND UP TO SCROLL THROUGH PAGES

document.addEventListener("keydown", function (e) {
  // ArrowUp
  if (e.key === "ArrowUp") {
    pageIndex === 0 ? pageIndex = 3 : pageIndex--;
    switchPage(pages[pageIndex]);
  } // ArrowDown


  if (e.key === "ArrowDown") {
    pageIndex === 3 ? pageIndex = 0 : pageIndex++;
    switchPage(pages[pageIndex]);
  }
}); // HANDLE SUBMIT OF CONTACT FORM

document.querySelector("#contact form").addEventListener("submit", function (e) {
  e.preventDefault();
  var myForm = e.target;
  var formData = new FormData(myForm);

  if ((0, _formvalidation["default"])()) {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData).toString()
    }).then(function () {
      document.querySelector(".contact-modal").classList.remove("hidden");
      myForm.reset();
    })["catch"](function (error) {
      return alert(error);
    });
  }
}); // HANDLE MODAL

var displayModal = function displayModal(target) {
  target.nextElementSibling.classList.remove("hidden");
};

var closeModal = function closeModal() {
  modals.forEach(function (modal) {
    return modal.classList.add("hidden");
  });
}; // EVENT LISTENER ON DOCUMENT TO CLOSE MODAL


document.addEventListener("click", function (e) {
  if (e.target.closest(".work-card") || e.target.closest(".modal-inner")) return;
  closeModal();
}); // CLOSE MODAL BUTTON ACTION

document.addEventListener("click", function (e) {
  if (e.target.closest(".close-modal")) closeModal();
}); // EVENT LISTENER ON WORK SECTION--DISPLAY MODAL AND OVERLAY

work.addEventListener("click", function (e) {
  if (e.target.closest(".work-card")) {
    var targetedCard = e.target.closest(".work-card");
    displayModal(targetedCard);
  }
}); // EVENT LISTENER ON ESC KEY TO CLOSE MODAL

document.addEventListener("keydown", closeModal);