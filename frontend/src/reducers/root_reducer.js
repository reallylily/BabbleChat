
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import entities from './entities_reducer'; 

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  tweets, 
});

export default RootReducer;