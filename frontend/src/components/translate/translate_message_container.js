import { connect } from 'react-redux';
// import { fetchTweets } from '../../actions/tweet_actions';
import TranslateMessage from './translate_message';

const mapStateToProps = (state) => {
    // console.log(state.session.user)
  return {
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchTweets: () => dispatch(fetchTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TranslateMessage);