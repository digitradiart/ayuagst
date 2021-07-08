"use strict";

// INTERACTION ON HAMBURGER MENU
var menuToggle = document.querySelector('.menu-toggle input');
var nav = document.querySelector('#stickytopbar ul');
menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});