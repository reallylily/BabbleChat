
// import { getUsers, getUser, writeTweet } from '../util/tweet_api_util';
import { getUsers, getUser } from '../util/user_api_util';


export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// export const receiveNewTweet = tweet => ({
//   type: RECEIVE_NEW_TWEET,
//   tweet
// })

export const fetchUsers = () => dispatch => (
  getUsers()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => console.log(err))
);

export const fetchUser = id => dispatch => (
  getUser(id)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
);

// export const composeTweet = data => dispatch => (
//   writeTweet(data)
//     .then(tweet => dispatch(receiveNewTweet(tweet)))
//     .catch(err => console.log(err))
// );