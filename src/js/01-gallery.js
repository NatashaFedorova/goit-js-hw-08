// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryEl(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryEl(galleryItems) {
  return galleryItems
    .map(
      el =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${el.original}">
                <img
                  class="gallery__image"
                  src="${el.preview}"
                  alt="${el.description}"
                />
            </a>
        </div>`
    )
    .join('');
}
