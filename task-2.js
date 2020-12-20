const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// console.log(ingredients);
// ~~~~~~~~~~~~~~~~~~Решение через for~~~~~~~~~~~~~~~~~~~
// const fn = function (array) {
//   let ulListEl = document.getElementById("ingredients");
//   // console.log(ulListEl);
//   for (let i = 0; i < array.length; i += 1) {
//     let ingredient = array[i];
//     // console.log(ingredient);
//     let listEl = document.createElement("li");
//     // console.log(listEl);
//     listEl.textContent = ingredient;
//     // console.log(listEl);
//     ulListEl.appendChild(listEl);
//   }
//   return ulListEl;
// };
// console.log(fn(ingredients));
// ~~~~~~~~~~~~~~~~~~~~~~~~Решение через forEach~~~~~~~~~~~~~~~~~~~
// let ulListEl = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   // console.log(ingredient);
//   let listEl = document.createElement("li");
//   listEl.textContent = ingredient;
//   // console.log(listEl);
//   ulListEl.appendChild(listEl);
// });
// console.log(ulListEl);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Решение через map~~~~~~~~~~~~~~~~~~~~~~~~
// Чтобы за одну операцию добавить в DOM все элементы, а не перезаписывать его на каждой итерации
// обавление элементов  в DOM должно осуществляться за одну операцию, за пределами метода.
const result = ingredients.map((ingredient) => {
  let listEl = document.createElement("li");
  listEl.textContent = ingredient;
  return listEl;
});

const ulEl = document.getElementById("ingredients");
ulEl.append(...result);
console.log(ulEl);
