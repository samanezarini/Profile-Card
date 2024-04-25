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


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("section1").classList.add("show");
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-about").addEventListener("click", function () {
        document.getElementById("section2").classList.add("show");
        document.getElementById("section1").classList.remove("show");
    });

    document.getElementById("btn-home").addEventListener("click", function () {
        document.getElementById("section1").classList.add("show");
        // حذف کلاس "show" از سکشن دیگر
        document.getElementById("section2").classList.remove("show");
    });
});
