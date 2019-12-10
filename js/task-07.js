"use strict";

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

const fontSizeContol = document.querySelector("#font-size-control");
const someValue = document.querySelector("#text");

const handlerInputRangeControl = e => {
  someValue.style.fontSize = `${e.currentTarget.value}px`;
};

fontSizeContol.addEventListener("input", handlerInputRangeControl);
