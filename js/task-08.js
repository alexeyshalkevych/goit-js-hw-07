"use strict";

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const itemBoxes = document.querySelector("#boxes");
const controlInput = document.querySelector("#controls > input");

const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');

const colorGenerator = () =>
  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;

const createBoxes = amount => {
  let size = 30;

  for (let i = 1; i <= amount; i++) {
    const item = document.createElement("div");

    item.style.backgroundColor = colorGenerator();

    item.style.width = `${size}px`;
    item.style.height = `${size}px`;

    itemBoxes.appendChild(item);

    size += 10;
  }
};

const destroyBoxes = () => {
  itemBoxes.innerHTML = "";
};

const isValidNumbers = someValue => {
  const inputMinAttribute = someValue.getAttribute("min");
  const inputMaxAttribute = someValue.getAttribute("max");

  if (
    Number(inputMinAttribute) > someValue.value ||
    Number(inputMaxAttribute) < someValue.value
  ) {
    console.error(
      "Error: A number is entered that does not match the specified parameters."
    );
    destroyBoxes();
    return false;
  }

  return true;
};

renderButton.addEventListener("click", () => {
  if (isValidNumbers(controlInput)) {
    if (itemBoxes.children.length) {
      destroyBoxes();
    }

    createBoxes(controlInput.value);
  }
});

destroyButton.addEventListener("click", destroyBoxes);
