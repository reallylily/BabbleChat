
import React from 'react';
import '../../index.css'; 
import Footer from '../footer/footer'; 

import ProfileSnippet from './profile_snippet'; 
import languages from '../languages/languages'

import ProfileEditContainer from './profile_edit_container'

// import TweetBox from '../tweets/tweet_box';

class Profile extends React.Component {
    
    componentWillMount() {
        // console.log(this.props.currentUser.id)
        // this.props.fetchUserTweets(this.props.currentUser.id);
        // this.props.fetchUser(this.props.currentUser.id)
    }

    componentWillReceiveProps(newState) {
        this.setState({ tweets: newState.tweets });
    }

    extractDate(date) {
      return date.slice(0, 10); 
    }
    
    render() {
      // console.log(this.props.currentUser)
        return (
          <>
          {this.props.currentUser &&
          <div className="profile-page">
            <div className="profile-card">
              <img alt='myface' width="200px" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
              <div className="profile-description">
                <ProfileSnippet name="Username" value={this.props.currentUser.handle} />
                <ProfileSnippet name="Joined" value={this.extractDate(this.props.currentUser.date)} />
                <ProfileSnippet name="Learning" value={languages[this.props.currentUser.to_learn]} />
                <ProfileSnippet name="Speaks" value={languages[this.props.currentUser.to_share]} />
              </div>
            </div>
          </div>}
          <ProfileEditContainer/>
          <Footer />
          </>
        )
    }
}

export default Profile;