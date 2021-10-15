const burgerToggle = document.querySelector('.burgerMenu');
const navMenu = document.querySelector('.navMenu');
const nav = document.querySelector('nav');

burgerToggle.addEventListener('click', () => {
    nav.classList.toggle('navRow');
    navMenu.classList.toggle('toggleDisplay');
});