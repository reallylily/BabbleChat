
import React from 'react';
import '../../index.css'; 
import Footer from '../footer/footer'; 

import ProfileSnippet from './profile_snippet'; 
import languages from '../languages/languages'

import ProfileEditContainer from './profile_edit_container'

// import TweetBox from '../tweets/tweet_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     tweets: []
        // }
    }
    
    componentWillMount() {
        // console.log(this.props.currentUser.id)
        // this.props.fetchUserTweets(this.props.currentUser.id);
        // this.props.fetchUser(this.props.currentUser.id)
    }

    // componentDidMount() {
    //   this.props.isOnProfile();
    // }

    componentWillReceiveProps(newState) {
        // this.setState({ tweets: newState.tweets });
    }

    extractDate(date) {
      return date.slice(0, 10); 
    }

    renderEdit(e) {
      e.preventDefault(); 
      this.setState({
        displayEditForm: !this.state.displayEditForm
      })
    }
    
    render() {
        return (
          <>
          {this.props.currentUser &&
          <div className="profile-page">
            <div className="profile-card">
              <img style={{borderRadius: '15px'}} width="300px" height="300px" src={this.props.currentUser.pic} />
              <div className="profile-description">
                <ProfileSnippet name="Username" value={this.props.currentUser.handle} />
                <ProfileSnippet name="Joined" value={this.extractDate(this.props.currentUser.date)} />
                <ProfileSnippet name="Learning" value={languages[this.props.currentUser.to_learn]} />
                <ProfileSnippet name="Speaks" value={languages[this.props.currentUser.to_share]} />
              </div>
            </div>
            <ProfileEditContainer />
          </div>}
          <Footer />
          </>
        )
    }
}

export default Profile;