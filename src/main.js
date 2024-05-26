import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkupGal } from './js/render-functions';
import fetchPhotos from './js/pixabay-api';

const imgGalleryContainer = document.querySelector('.gallery');
const form = document.querySelector('.srch-form');
const loader = document.querySelector('.loader');
const loadImgsBtn = document.querySelector('.img-btn');
let page = 1;
let limit = 15;
let currentSrchQuery = ''; 

function hideLoadMoreButton() {
  loadImgsBtn.classList.add('is-hidden-btn');
}

function showLoadMoreButton() {
  loadImgsBtn.classList.remove('is-hidden-btn');
}

async function fetchAndDisplayPhotos(searchQuery, pageNumber) {
  loader.classList.remove('is-hidden');
  try {
    const imagesData = await fetchPhotos(searchQuery, pageNumber, limit);
    if (imagesData.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadMoreButton();
      loadImgsBtn.removeEventListener('click', onLoadMore);
    } else {
      imgGalleryContainer.insertAdjacentHTML('beforeend', createMarkup(imagesData.hits));

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
      lightbox.refresh();

      const totalLoadedImages = pageNumber * limit;
      if (totalLoadedImages >= imagesData.totalHits) {
        hideLoadMoreButton();
        loadImgsBtn.removeEventListener('click', onLoadMore);
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching photos. Please try again later.',
    });
  } finally {
    loader.classList.add('is-hidden');
  }
}

async function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  imgGalleryContainer.innerHTML = '';
  if (searchQuery === '') {
    hideLoadMoreButton();
    loadImgsBtn.removeEventListener('click', onLoadMore);
    return iziToast.error({
      message: 'Please enter a search query before searching!',
    });
  }
  currentSrchQuery = searchQuery;
  loader.classList.remove('is-hidden');

  try {
    page = 1;
    await fetchAndDisplayPhotos(searchQuery, page);
    loadImgsBtn.addEventListener('click', onLoadMore);
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while performing the search. Please try again later.',
    });
  } finally {
    event.target.reset();
    loader.classList.add('is-hidden');
  }
}

async function onLoadMore() {
  page += 1;
  await fetchAndDisplayPhotos(currentSrchQuery, page);
  scrollPage();
}

form.addEventListener('submit', onSearch);

function scrollPage() {
  const { height: cardHeight } = document
    .querySelector('.photo-card')
    .getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}