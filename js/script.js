'use strict';

const modalOpenBtn = document.querySelector('.hero__button');
const modalWindow = document.querySelector('.modal');
const modalCloseBtn = modalWindow.querySelector('.modal__button');

modalOpenBtn.addEventListener('click', () => {
    modalWindow.classList.add('modal--is-open');
});

modalCloseBtn.addEventListener('click', () => {
    modalWindow.classList.remove('modal--is-open');
});

const burgerMenuOpenBtn = document.querySelector('.header__burger-btn');
const burgerMenuCloseBtn = document.querySelector('.burger-menu__close-btn');
const burgerMenu= document.querySelector('.burger-menu');


burgerMenuOpenBtn.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu--is-open')
});

burgerMenuCloseBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--is-open')
});

console.log(burgerMenuOpenBtn);
