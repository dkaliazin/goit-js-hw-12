import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkupGal } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const imgGalleryContainer = document.querySelector('.gallery');
const form = document.querySelector('.srch-form');
const loader = document.querySelector('.loader');
const loadImgsBtn = document.querySelector('.img-btn');
let page = 1;
let limit = 15;
//let 
function onSearchImages(event) {
  event.preventDefault();
  
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  imgGalleryContainer.innerHTML = '';
  if (searchQuery === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  imgGalleryContainer.innerHTML = '';
  loader.classList.remove('is-hidden');

  fetchPhotos(searchQuery)
    .then(imagesData => {
      if (imagesData.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      
      imgGalleryContainer.innerHTML = createMarkupGal(imagesData.hits);
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
    
    })
    .catch(error => {
      iziToast.error({
        message: `Something went wrong: ${error.message}`,
      });
    })
    .finally(() => {
      event.target.reset();
      hideLoader();
    });
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

form.addEventListener('submit', onSearchImages);