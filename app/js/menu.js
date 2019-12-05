"use strict"
//list with nav links
let navMain = document.querySelector(".nav");
//button to toggle menu
let navToggle = document.querySelector(".header__toggle");
let formBG = document.querySelector(".listen-nav");
//div for colorising depenging on menu status
let headerWrapper = document.querySelector(".header-wrapper-menu--closed");
//main content of the page
let moveTopMain = document.querySelector(".main-content");
// navMain.classList.remove("nav--nojs");
formBG.classList.add("listen-nav--closed");
//move main content up
moveTopMain.classList.add("main-content--move-top");
navMain.classList.remove("nav--nojs");

navToggle.addEventListener("click", function() {
  if(navToggle.classList.contains("header__toggle--closed")) {
    //open menu
    navToggle.classList.remove("header__toggle--closed");
    formBG.classList.remove("listen-nav--closed");
    //change icon
    navToggle.classList.add("header__toggle--opened");
    //display links
    navMain.classList.remove("nav--closed");
    navMain.classList.remove("nav--nojs");
    navMain.classList.add("nav--opened");
    //change bg color
    headerWrapper.classList.remove("header-wrapper-menu--closed");
    headerWrapper.classList.add("header-wrapper-menu--opened");
    //move main content down
    moveTopMain.classList.remove("main-content--move-top");
  } else {
    //add styles to hide menu and delete styles that showed them
    navToggle.classList.add('header__toggle--closed');
    formBG.classList.add('listen-nav--closed');
    navToggle.classList.remove('header__toggle--opened');
    navToggle.classList.add("header__toggle--closed");
    navMain.classList.add('nav--closed');
    navMain.classList.add("nav--nojs");
    navMain.classList.remove('nav--opened');
    headerWrapper.classList.add("header-wrapper-menu--closed");
    headerWrapper.classList.remove("header-wrapper-menu--opened");
    moveTopMain.classList.add("main-content--move-top");
  }
})