"use strict";

// STICKY NAVBAR
window.onscroll = function () {
  myFunction();
  myFunction2();
}; // STICKY ASIDE NAVBAR


var navbar = document.querySelector('.stickynavbar');
var stickyNav = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}