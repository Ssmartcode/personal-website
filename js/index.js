"use strict";
import type from "./typing.js";
import { validateForm, clearErrors } from "./formvalidation.js";
import "./routes.js";
// HTML SECTIONS AND NAVBAR ICONS
const contact = document.querySelector("#contact");
const work = document.querySelector("#work");

const modals = document.querySelectorAll(".modal");

// body takes the height of section
document.body.style.height = contact.offsetHeight;

// HOME TYPING PARAGRAPH
let typeEffectParagraph = document.querySelector(".type-effect");

// TYPING FUNCTION
type(typeEffectParagraph);

// HANDLE SUBMIT OF CONTACT FORM
document.querySelector("#contact form").addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  let myForm = e.target;
  let formData = new FormData(myForm);
  if (validateForm()) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        document.querySelector(".contact-modal").classList.remove("hidden");
        myForm.reset();
      })
      .catch((error) => alert(error));
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

// EVENT LISTENER ON CLOSE MODAL CROSS
document.addEventListener("click", (e) => {
  if (e.target.closest(".close-modal")) closeModal();
});

// EVENT LISTENER ON WORK SECTION--DISPLAY MODAL AND OVERLAY
work.addEventListener("click", (e) => {
  if (e.target.closest(".work-card")) {
    const targetedCard = e.target.closest(".work-card");
    displayModal(targetedCard);
  }
});

// EVENT LISTENER ON ESC KEY TO CLOSE MODAL
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
