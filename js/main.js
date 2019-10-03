let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuBranding = document.querySelector('.menu-branding');
let menuNav = document.querySelector('.menu-nav');
let navItems = document.querySelectorAll('.nav-item');

let menuState = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuBranding.classList.toggle('show');
  menuNav.classList.toggle('show');
  navItems.forEach(item => item.classList.toggle('show'));

  menuState = !menuState;
}
