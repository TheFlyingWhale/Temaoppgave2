const burgerToggle = document.querySelector('.burgerMenu');
const navMenu = document.querySelector('.navMenu');
const constNav = document.querySelector('.constantNav');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

burgerToggle.addEventListener('click', () => {
    constNav.classList.toggle('navRow');
    navMenu.classList.toggle('toggleDisplay');
    nav.classList.toggle('activeNavMobile');
    header.classList.toggle('headerActiveBurger')
});