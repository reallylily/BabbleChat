import axios from 'axios';

export const getDog = () => {
  return axios.get('https://dog.ceo/api/breeds/image/random')
};