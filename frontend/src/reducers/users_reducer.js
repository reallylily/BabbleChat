
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
  
const UsersReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USERS:
        // newUsers = {}
        // action.users.data.forEach(user=> newUsers[user.handle] = user)
      newState.all = action.users.data;
      return newState;
    case RECEIVE_USER:
      newState.user = action.user.data;
      return newState;
    // case RECEIVE_NEW_TWEET:
    //   newState.new = action.tweet.data
    //   return newState;
    default:
      return state;
  }
};

export default UsersReducer;