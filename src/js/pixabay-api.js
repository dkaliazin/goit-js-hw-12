import axios from 'axios';
const apiKey = "28216731-30bd748fb13dcf95cdddced76";
const pixUrl = "https://pixabay.com/api/";
async function fetchPhotos(searchQuery, page = 1, perPage = 15) {
  const response = await axios.get(pixUrl, {
    params: {
      key: apiKey,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: perPage,
    },
  });

  return response.data;
}

export default fetchPhotos;