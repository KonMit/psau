"use strict"

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav__menu');


burger.addEventListener('click', () => {

    burger.classList.toggle('active');
    menu.classList.toggle('active');

});