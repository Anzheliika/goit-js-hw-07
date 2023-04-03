import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", imagesMarkup);
gallery.addEventListener('click', onOpenModal);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<li class='gallery__item'><a class='gallery__link' href="${original}"><img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}'><a/></li>`;
    })
    .join('');
}

function onOpenModal(evt) {
    evt.preventDefault();
    const isImageEl = evt.target.classList.contains('gallery__image');
    if (!isImageEl) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
    instance.show();
    window.addEventListener("keydown", onCloseModal)
}

function onCloseModal(event) {
  const openInstance = document.querySelector('.basicLightbox');
  if (event.code === 'Escape') {
    openInstance.remove();
  }
  window.removeEventListener('keydown', onCloseModal);
}