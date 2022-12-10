import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector(".gallery");
galleryDiv.addEventListener("click", onModalViewImg);
galleryDiv.addEventListener("click", onGalleryImagesMarkup);

function createMarkupImage(array) {
  const markup = array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
  return markup;
}
galleryDiv.insertAdjacentHTML("beforeend", createMarkupImage(galleryItems));

function onGalleryImagesMarkup(evt) {
  evt.preventDefault();
}
function onModalViewImg(event) {
  const viewediImage = event.target.dataset.source;

  if (event.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(
    `
    <img src="${viewediImage}">
`,
    {
      onShow: (instance) => {
        document.addEventListener(
          `keydown`,
          closingModalWindowClickingOnEscape
        );
      },
      onClose: (instance) => {
        document.removeEventListener(
          `keydown`,
          closingModalWindowClickingOnEscape
        );
      },
    }
  );

  instance.show();

  function closingModalWindowClickingOnEscape(event) {
    console.log(event);
    if (event.code !== `Escape`) return;
    instance.close();
  }
}

// console.log(basicLightbox);

console.log(galleryItems);
