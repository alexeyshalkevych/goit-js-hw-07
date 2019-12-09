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

console.log(`В списке ${totalCategories(categories)} категории.`);

// const findTitleAndTotalElements = elem =>
//   [...elem]
//     .map(
//       item =>
//         `Категория: ${item.firstElementChild.textContent}.
// Количество элементов: ${item.lastElementChild.children.length}.\n`
//     )
//     .join("");

const findTitleAndTotalElements = elem => {
  return [...elem]
    .map(item => {
      const itemTitle = item.querySelector("h2");
      const itemList = item.querySelector("ul");

      return `Категория: ${itemTitle.textContent}.
Количество элементов: ${itemList.children.length}.\n`;
    })
    .join("");
};

console.log(findTitleAndTotalElements(items));
