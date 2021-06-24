"use strict";

// STICKY ASIDE
window.onscroll = function () {
  myFunction2();
};

var asideRight = document.getElementById('contact');
var stickyAside = asideRight.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= stickyAside) {
    asideRight.classList.add('stickyAside');
  } else {
    asideRight.classList.remove('stickyAside');
  }
}