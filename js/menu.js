"use strict";
//BOTON MENU RESPONSIVE
document.querySelector(".btn-menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");
}

console.log(toggleMenu);
