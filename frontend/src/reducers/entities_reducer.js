import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 
import DogsReducer from './dogs_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    dog: DogsReducer,
})

export default entitiesReducer; 