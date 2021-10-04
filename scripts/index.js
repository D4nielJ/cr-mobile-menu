const menuBars = document.querySelector('.menu-bars');
const menuX = document.querySelector('.menu-x');
const navMenu = document.querySelector('.mobile-nav');
const menuLinks = document.querySelectorAll('.mobile-nav > ul > li');

const myMenuFunction = () => {
  navMenu.classList.toggle('mobile-nav--active');
  menuBars.classList.toggle('menu-bars--active');
  menuX.classList.toggle('menu-x--active');
};

menuBars.addEventListener('click', () => {
  myMenuFunction();
});

menuLinks.map((link) => link.addEventListener('click', () => {
  myMenuFunction();
}));
