
import { RECEIVE_DOG } from '../actions/dog_actions';
  
const DogsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_DOG:
        // debugger
      newState = action.dog.data.message;
      return newState;
    default:
      return state;
  }
};

export default DogsReducer;