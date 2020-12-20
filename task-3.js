// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// < ul id = "gallery" ></ >
//     Используй массив объектов images для создания тегов img вложенных в li.Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const galleryEl = document.querySelector("#gallery"); //<ul id="gallery"></ul>

const imagesEl = images.map((image) => {
  galleryEl.insertAdjacentHTML(
    "afterbegin",
    `<li> <img src = ${image.url} alt = ${image.alt}> </li>`
  );
  return galleryEl;
});
console.log(galleryEl);

galleryEl.classList.add("styles");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const galleryEl = document.querySelector("#gallery"); //<ul id="gallery"></ul>

// const imagesEl = images.map((image) => {
//   // image = {url: '...', alt: '...'}
//   let itemEl = document.createElement("li"); //<li></li>
//   //const imgEl = document.createElement("img"); //<img>
//   let urlEl = image.url; //https:...
//   let altEl = image.alt; // text...
//   itemEl.insertAdjacentHTML(
//     "afterbegin",
//     `<img src = ${urlEl} alt = ${altEl}>`
//   );
//   return itemEl;
// });
// //console.log(imagesEl); // [{...}, {...}, {...}]

// galleryEl.prepend(...imagesEl);
// console.log(galleryEl);
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
