"use strict";

window.onclick = function () {
  myFunction3();
};

function myFunction3() {
  var topbar = document.getElementById('stickytopbar');

  if (topbar.className === 'top-navbar') {
    topbar.className += 'responsive';
  } else {
    topbar.className = 'top-navbar';
  }
}