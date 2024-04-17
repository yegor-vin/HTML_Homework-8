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