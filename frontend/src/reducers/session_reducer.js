import { RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT, 
    RECEIVE_USER_SIGN_IN,
    SAVE_ROOM_ID,
    CLEAR_ROOM_ID} from '../actions/session_actions';

const initialState = {
isAuthenticated: false,
user: {},
roomId: undefined
};

export default function(state = initialState, action) {
switch (action.type) {
case RECEIVE_CURRENT_USER:
 return {
   ...state,
   isAuthenticated: !!action.currentUser,
   user: action.currentUser
 };
case RECEIVE_USER_LOGOUT:
 return {
   ...state,
   isAuthenticated: false,
   user: undefined
 };
case RECEIVE_USER_SIGN_IN:
 return {
   ...state,
   isSignedIn: true
 }
case SAVE_ROOM_ID:
  return {
    ...state,
    roomId: action.roomId
  }
case CLEAR_ROOM_ID:
  return {
    ...state,
    roomId: undefined
  }
default:
 return state;
}
}