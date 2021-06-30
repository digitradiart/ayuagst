// STICKY NAVBAR
window.onscroll = function () {
  myFunction();
  myFunction2();
};

var navbar = document.getElementById('stickynavbar');
var stickyNav = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= stickyNav) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

var topbar = document.getElementById('stickytopbar');
var stickyTopNav = topbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= stickyTopNav) {
    topbar.classList.add('sticky');
  } else {
    topbar.classList.remove('sticky');
  }
}
