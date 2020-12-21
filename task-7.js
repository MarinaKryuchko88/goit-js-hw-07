// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const inputEl = document.querySelector("#font-size-control");
console.dir(inputEl);
const spanEl = document.querySelector("#text");
console.log(spanEl);

inputEl.addEventListener("input", (event) => {
  spanEl.style.fontSize = `${event.target.value}px`;
});
