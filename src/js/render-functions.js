// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

console.log(galleryEl);
console.log(loaderEl);

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `<li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}"/>
      </a>
      <p>${image.likes}</p>
      <p>${image.views}</p>
      <p>${image.comments}</p>
      <p>${image.downloads}</p>
    </li>`;
    })
    .join('');

  galleryEl.innerHTML = markup;

  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}
export function showLoader() {
  loaderEl.classList.add('is-active');
}
export function hideLoader() {
  loaderEl.classList.remove('is-active');
}
