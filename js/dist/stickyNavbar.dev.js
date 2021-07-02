"use strict";

// STICKY NAVBAR
window.onscroll = function () {
  myFunction();
  myFunction2(); // myFunction3();
}; // STICKY ASIDE NAVBAR


var navbar = document.getElementById('stickynavbar');
var stickyNav = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
} // STICKY TOP NAVBAR, SMALL VIEW


var topbar = document.getElementById('stickytopbar');
var stickyTopNav = topbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= stickyTopNav) {
    topbar.classList.add('sticky');
  } else {
    topbar.classList.remove('sticky');
  }
} // function myFunction3() {
//   if (topbar.className === 'top-navbar') {
//     topbar.className += ' responsive';
//   } else {
//     topbar.className = 'top-navbar';
//   }
// }