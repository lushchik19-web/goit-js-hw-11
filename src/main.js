import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const inputSubmit = event.currentTarget.elements['search-text'].value;

  console.log(event);

  if (inputSubmit === '') {
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(inputSubmit)
    .then(value => {
      if (value.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(value.hits);
    })

    .finally(hideLoader);
}
