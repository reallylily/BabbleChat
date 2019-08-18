
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.isAuthenticated, 
  currentUser: state.session.user,
  history: ownProps.history
});

export default withRouter(connect(
  mapStateToProps,
  { logout }
)(NavBar));