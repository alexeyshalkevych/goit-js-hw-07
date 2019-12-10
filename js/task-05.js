"use strict";

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане
// должна отображаться строка 'незнакомец'.

const inputValue = document.querySelector("#name-input");
const currentValue = document.querySelector("#name-output");

const handlerInput = e => {
  if (!e.currentTarget.value.length) {
    currentValue.textContent = "незнакомец";
    return;
  }
  currentValue.textContent = e.currentTarget.value;
};

inputValue.addEventListener("input", handlerInput);
