import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryRef: document.querySelector('.gallery'),
};

function addgalleryItemsMarkup(itemsArr) {
    return itemsArr
        .map(({ original, preview, description }) => {
            return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
        })
        .join('');
}

refs.galleryRef.insertAdjacentHTML(
    'beforeend',
    addgalleryItemsMarkup(galleryItems)
);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    loop: true,
    captionDelay: 300,
    animationSpeed: 300,
    animationSlide: true,
});