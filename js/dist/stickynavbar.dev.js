"use strict";

// STICKY NAVBAR
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById('stickynavbar');
var stickyNav = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add('stickyNav');
  } else {
    navbar.classList.remove('stickyNav');
  }
}