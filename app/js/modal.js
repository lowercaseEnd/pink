"use strict"

let modalFail = document.getElementsByClassName("modal")[0];
let modalSuccess = document.getElementsByClassName("modal")[1];
let buttonFail = document.getElementsByClassName("modal__button--failure")[0];
let buttonSuccess = document.getElementsByClassName("modal__button--success")[0];

let submit = document.getElementsByClassName("forms__submit--button")[0];

let inputs = document.getElementsByClassName("forms--important");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  for(let form of inputs) {
    if(!form.value) {
      modalFail.classList.add("modal-show");
      break;
    }
  }
  if(!modalFail.classList.contains("modal-show")) {
    modalSuccess.classList.add("modal-show");
  }
});

buttonFail.addEventListener("click", (event) => {
  event.preventDefault();
  modalFail.classList.remove("modal-show");
})
buttonSuccess.addEventListener("click", (event) => {
  event.preventDefault();
  modalSuccess.classList.remove("modal-show");
})