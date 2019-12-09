"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector("#value");

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const increment = () => {
  counterValue.textContent += 1;

  return Number(counterValue.textContent);
};
const decrement = () => {
  counterValue.textContent -= 1;

  return Number(counterValue.textContent);
};

buttonIncrement.addEventListener("click", () => {
  counterValue.textContent += 1;
});
buttonDecrement.addEventListener("click", decrement);
