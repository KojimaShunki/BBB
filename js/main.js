'use strict';

const humbergerMenu = document.querySelector('.humberger-menu');

const navi = document.getElementById('humberger-navigation');

const humbergerMenuSections = document.querySelectorAll('.humberger-menu-section');

humbergerMenu.addEventListener('click', function () {
  humbergerMenu.classList.toggle('active');
  navi.classList.toggle('active');
});

humbergerMenuSections.forEach((humbergerMenuSection) => {
  humbergerMenuSection.addEventListener('click', function () {
    humbergerMenu.classList.remove('active');
    navi.classList.remove('active');
  });
});

console.log(toggleImg.classList.contains('active'));