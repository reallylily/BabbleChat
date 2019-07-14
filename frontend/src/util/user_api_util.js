import axios from 'axios';

export const getUsers = () => {
  return axios.get('/api/users')
};

export const getUser = id => {
  return axios.get(`/api/users/${id}`)
};

// export const writeTweet = data => {
//   return axios.post('/api/tweets/', data)
// }