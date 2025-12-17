const menuButtons = document.querySelectorAll('.open-menu-button, .close-menu-button');
const toggleElements = document.querySelectorAll('.open-menu-button, .close-menu-button, .menu, .header-address, .mail');
const title = document.querySelector('.title');
const header = document.querySelector('.header');

const toggleMenu = () => {
    toggleElements.forEach(element => {
        element.classList.toggle('hidden');
    });
    
    title.classList.toggle('menu-title');
    header.classList.toggle('show-menu');
};

menuButtons.forEach(button => {
    button.addEventListener('click', toggleMenu);
});