"use strict";

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.

const inputField = document.querySelector("#validation-input");

const handlerInputValidation = e => {
  const valueDataLengthAttribute = Number(
    e.currentTarget.dataset.length
  );
  const valueInputLength = e.currentTarget.value.length;

  if (valueDataLengthAttribute === valueInputLength) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
};

inputField.addEventListener("blur", handlerInputValidation);
