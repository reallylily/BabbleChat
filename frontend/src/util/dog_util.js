import axios from 'axios';

export const getDog = () => {
  return axios.get('https://dog.ceo/api/breeds/image/random')
};

// https://ancient-atoll-12850.herokuapp.com/ | https://git.heroku.com/ancient-atoll-12850.git