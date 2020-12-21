// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let counterValue = document.querySelector("#value");

const btnIncrmnt = document.querySelector('button[data-action="increment"]');
const btnDcrmnt = document.querySelector('button[data-action="decrement"]');

let count = 0;
btnIncrmnt.addEventListener("click", (event) => {
  count += 1;
  counterValue.textContent = count;

  return counterValue;
});

btnDcrmnt.addEventListener("click", (event) => {
  count -= 1;
  counterValue.textContent = count;

  return counterValue;
});
