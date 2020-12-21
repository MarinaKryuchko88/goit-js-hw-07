// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const inputEl = document.querySelector("#validation-input");
let totalLenght = inputEl.getAttribute("data-length");
let parsTotalLength = parseInt(totalLenght); //для получения примитивного типа данных — преобразует строку в число.

inputEl.addEventListener("blur", (event) => {
  //   console.log("outfocus");
  inputEl.textContent = event.target.value;
  console.log(inputEl.textContent);

  const text = inputEl.textContent.length;
  if (text === parsTotalLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else if (inputEl.textContent === "") {
    event.target.classList.remove("invalid");
    event.target.classList.remove("valid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});
