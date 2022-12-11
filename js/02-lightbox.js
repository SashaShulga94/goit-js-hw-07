import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector(".gallery");

function createMarkupImage(array) {
  const markup = array.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`,
    ""
  );
  return markup;
}
galleryDiv.insertAdjacentHTML("beforeend", createMarkupImage(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  fadeSpeed: 250,
  animationSlide: false,
});
console.log(lightbox);
console.log(galleryItems);
