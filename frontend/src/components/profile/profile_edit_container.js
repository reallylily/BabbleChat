
import { connect } from 'react-redux';
import { signup, login, edit } from '../../actions/session_actions';
// import SignupForm from '';
import ProfileEdit from './profile_edit'

const mapStateToProps = (state) => {
    // debugger
  return {
    // signedIn: state.session.isSignedIn,
    currentUser: state.session.user,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: user => dispatch(edit(user)),
    
    // signup: user => dispatch(signup(user)),
    // login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);