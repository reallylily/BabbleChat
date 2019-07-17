
import { connect } from 'react-redux';
import { edit } from '../../actions/session_actions';
import ProfileEdit from './profile_edit'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: user => dispatch(edit(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEdit);