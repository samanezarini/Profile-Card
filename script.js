'use strict'

const home = document.querySelector('.home');
const about = document.querySelector('.about');

const btnHome = document.getElementById('btn-home');
const btnAbout = document.getElementById('btn-about');

// show home
const showHome = function () {
    home.classList.remove('hidden');
    about.classList.add('hidden');
}
// show about
const showAbout = function () {
    home.classList.add('hidden');
    about.classList.remove('hidden');
}

                                             
btnAbout.addEventListener('click', showAbout);
btnHome.addEventListener('click', showHome);

