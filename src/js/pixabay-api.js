import axios from 'axios';
const apiKey = "28216731-30bd748fb13dcf95cdddced76";
const pixUrl = "https://pixabay.com/api/";
const fetchPhotos = async (searchImage, page) => {
 
    const response = await axios (pixUrl, {
      parameters: {
        key: apiKey,
        q: searchImage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 15,
      },
    });
    return response.data;
};
export default fetchPhotos;