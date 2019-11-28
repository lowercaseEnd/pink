let navMain = document.querySelector(".nav");
let navToggle = document.querySelector(".header__toggle");
let formBG = document.querySelector(".listen-nav");

navMain.classList.remove("nav--nojs");
formBG.classList.add("listen-nav--closed");

navToggle.addEventListener("click", function() {
  if(navToggle.classList.contains("header__toggle--closed")) {
    navToggle.classList.remove("header__toggle--closed");
    formBG.classList.remove("listen-nav--closed");
    navToggle.classList.add("header__toggle--opened");
    navToggle.classList.remove("nav--closed");
    navMain.classList.add("nav--opened");
  } else {
    navToggle.classList.add('header__toggle--closed');
    formBackground.classList.add('listen-nav--closed');
    navToggle.classList.remove('header__toggle--opened');
    navMain.classList.remove('nav--opened');
    navMain.classList.add('nav--closed');
  }
})