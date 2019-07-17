
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { fetchDog } from '../../actions/dog_actions';
import SignupForm from './signup_form.jsx';

const mapStateToProps = (state) => {
  // debugger
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    pic: state.entities.dog
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    fetchDog: () => dispatch(fetchDog()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);