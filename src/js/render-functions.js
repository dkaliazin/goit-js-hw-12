import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export const createMarkupGal = images => {
    return images
      .map(
        ({
            likes, views, comments, downloads,webformatURL, largeImageURL,tags
        }) => {
          return `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-item-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
      <div class="image-info">
          <span class="image-likes">Likes: ${likes}</span>
          <span class="image-views">Views: ${views}</span >
          <span  class="image-comments">Comments: ${comments}</span>
          <span class="image-downloads">Dowloads: ${downloads}</span>
      </div>
   
      </li>
  `;
        }
      )
      .join('');
  };
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });