import { getDog } from '../util/dog_util';


export const RECEIVE_DOG = "RECEIVE_DOG";

export const receiveDog = dog => ({
  type: RECEIVE_DOG,
  dog
});

export const fetchDog = () => dispatch => (
  getDog()
    .then(dog => dispatch(receiveDog(dog)))
    .catch(err => console.log(err))
);