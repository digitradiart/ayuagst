// var topbar = document.getElementById('stickytopbar');
// var stickyTop = topbar.offsetTop;

// function myFunction2() {
//   if (window.pageYOffset >= stickyTop) {
//     topbar.classList.add('sticky');
//   } else {
//     topbar.classList.remove('sticky');
//   }
// }

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('#stickytopbar ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
  //   navbar.classList.add('sticky');
});
