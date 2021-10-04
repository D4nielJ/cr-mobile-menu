const menuBars = document.querySelector('.menu-bars');
const menuX = document.querySelector('.menu-x');
const navMenu = document.querySelector('.mobile-nav');
const menuLinks = document.querySelectorAll('.mobile-nav > ul > li');

const myMenuFunction = () => {
  navMenu.classList.toggle('mobile-nav--active');
  burguerIcon.classList.toggle('menu-bars--active');
  closeIcon.classList.toggle('x-icon--active');
};

menuIcons.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.forEach((link) => link.addEventListener('click', () => {
  toggleMenu();
}));
