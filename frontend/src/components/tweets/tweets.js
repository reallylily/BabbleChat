import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

// import { setCORS } from "google-translate-api-browser";


class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {

    return (
      <div>
        <h2>All Tweets</h2>
        {this.state.tweets.map(tweet => (
          <TweetBox key={tweet._id} text={tweet.text} />
        ))}
      </div>
    );
  }
  
}

export default withRouter(Tweet);