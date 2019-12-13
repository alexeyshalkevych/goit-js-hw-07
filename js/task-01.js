"use strict";

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента (тега h2) и количество элементов
// в категории (всех вложенных в него элементов li).

const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

const totalCategories = elem => elem.children.length;

const findTitleAndTotalElements = elem => {
  return [].map
    .call(elem, item => {
      const itemTitle = item.querySelector("h2");
      const itemList = item.querySelector("ul");

      return `Категория: ${itemTitle.textContent}.
Количество элементов: ${itemList.children.length}.\n`;
    })
    .join("");
};

// items.forEach(element => {
//   console.log(`Категория: ${element.querySelector("h2").textContent}.`);
//   console.log(
//     `Количество элементов: ${element.querySelector("ul").children.length}.`
//   );
// });

console.log(`В списке ${totalCategories(categories)} категории.`);

console.log(findTitleAndTotalElements(items));
