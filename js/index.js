// Burger menu
const menuIcon = document.querySelector(".burger-icon");
const navBurger = document.querySelector(".nav__burger");
const xIcon = document.querySelector(".x-icon");

function openMenu() {
    navBurger.style.display = "grid";
    menuIcon.style.display = "none";
}

function closeMenu() {
    navBurger.style.display = "none";
    menuIcon.style.display = "flex";   
}

menuIcon.addEventListener("click", openMenu);
xIcon.addEventListener("click", closeMenu);