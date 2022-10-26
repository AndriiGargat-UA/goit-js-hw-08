// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarcup = createGalleryItemMarcup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarcup);

function createGalleryItemMarcup() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
};

galleryRef.addEventListener('click', onGalleryRefClick);
let lightboxGallery = new SimpleLightbox('.gallery a', { animationSlide: true, captionsData: "alt", captionDelay: 250 });

function onGalleryRefClick(event) {
    event.preventDefault();
    const isGalleryRef = event.target.classList.contains('gallery__image');
    if (!isGalleryRef) {        
        return
    }
}
console.log(galleryItems);



