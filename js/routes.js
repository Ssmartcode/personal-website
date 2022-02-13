const home = document.querySelector("#home");
const contact = document.querySelector("#contact");
const work = document.querySelector("#work");
const about = document.querySelector(".about");

const homeIcon = document.querySelector(".home-icon");
const contactIcon = document.querySelector(".contact-icon");
const workIcon = document.querySelector(".work-icon");
const aboutIcon = document.querySelector(".about-icon");

const sideBar = document.querySelector(".side-bar");

// OBJECT WITH SECTIONS AND THEIR ICON/PAGE
const routes = {
  "/": {
    icon: homeIcon,
    page: home,
    route: "/",
  },
  "/work": {
    icon: workIcon,
    page: work,
    route: "/work",
  },
  "/contact": {
    icon: contactIcon,
    page: contact,
    route: "/contact",
  },
  "/about": {
    icon: aboutIcon,
    page: about,
    route: "/about",
  },
};

const linkIcons = [aboutIcon, workIcon, homeIcon, contactIcon];

// ADD SECONDARY COLOR TO THE ICON WHICH IS RELATED TO THE ACTIVE PAGE
const toggleActivePage = function (page) {
  linkIcons.forEach((icon) => icon.classList.remove("active-page"));
  page.icon.classList.toggle("active-page");
};

// SWITCH PAGE FUNCTION - HIDES CURRENT PAGE AND SHOWS THE NEXT ONE
const switchPage = (nextPage) => {
  window.history.pushState(
    {},
    nextPage.route,
    window.location.origin + nextPage.route
  );
  currentPage.page.classList.toggle("hidden");
  nextPage.page.classList.toggle("hidden");
  toggleActivePage(nextPage);
  currentPage = nextPage;
};

let currentPage = routes["/"];

export default (function () {
  window.addEventListener("popstate", () => {
    console.log(window);
    switchPage(routes[window.location.pathname]);
  });

  // EVENT LLISTENER FOR CA BUTTONS(WORK ANC CONTACT)
  document
    .querySelector(".button-contact")
    .addEventListener("click", () => switchPage(routes["/contact"]));
  document
    .querySelector(".button-work")
    .addEventListener("click", () => switchPage(routes["/work"]));

  // EVENT LISTENER ON SIDE-BAR
  sideBar.addEventListener("click", (e) => {
    const sideBarIconRoute = e.target.getAttribute("route");
    if (sideBarIconRoute) {
      switchPage(routes[sideBarIconRoute]);
    }
  });
})();
