
import React from 'react';
// import TweetBox from './tweet_box';
import TranslateMessageContainer from '../translate/translate_message_container'


class TweetCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
          newTweet: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newTweet: nextProps.newTweet.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      text: this.state.text
    };

    this.props.composeTweet(tweet); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="Write your tweet..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <TranslateMessageContainer text={this.state.newTweet} />
        </div>
    )
  }
}

export default TweetCompose;