import axios from 'axios';
import Notiflix from 'notiflix';

const URL = 'https://pixabay.com/api/';
const KEY = `27487139-e524d10819fee38ea9f4aa544`;

export const params = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
  page: 1,
  safesearch: 'true',
};

const customAxios = axios.create({
  baseURL: URL,
  params: {
    key: KEY,
  },
});

export const getData = async params => {
  try {
    const response = await customAxios.get('', {
      params,
    });

    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};
