
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { 
  // Route, 
  Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';


import MainPage from './main/splash';
import About from './main/about'; 

// import TweetsContainer from './tweets/tweets_container';
import UsersIndexContainer from './users/users_index_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
// import TweetComposeContainer from './tweets/tweet_compose_container';
import ChatContainer from './chat/chat_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path ="/about" component={About} />
      
      <ProtectedRoute exact path="/chat" component={ChatContainer} />

      <ProtectedRoute exact path="/users" component={UsersIndexContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;