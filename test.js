'use strict';

const main = document.querySelector('main');
const network = document.querySelector('.network');
const networkIcon = document.querySelector('.fa-network-wired');
const homeIcon = document.querySelector('.fa-home');
const content = document.querySelector('.content');

let currentPage = main;

// SCROLL TO TOP FUNCTION
const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};
// SWITCH PAGE FUNCTION
const switchPage = (current, next) => {
  current.classList.add('hidden');
  next.classList.remove('hidden');
  currentPage = next;
  scrollToTop();
};
function checkHeight(element) {
  console.log(element.getBoundingClientRect());
}
// EVENT LISTENERS FOR LINK ICONS
networkIcon.addEventListener('click', function () {
  switchPage(currentPage, network);
  console.log(network.clientHeight);
  network.parentElement.style.overflowY = 'hidden';
});
homeIcon.addEventListener('click', function () {
  switchPage(currentPage, main);
  network.parentElement.style.overflowY = 'auto';
});
console.log(content.clientHeight, content.parentElement.scrollHeight);
console.log(network.scrollHeight, network.offsetHeight, network.clientHeight);
