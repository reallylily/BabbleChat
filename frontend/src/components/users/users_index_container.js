
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import UsersIndex from './users_index';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users.all,
    currentUser: state.session.user,
    // users: Object.values(state.entities.users.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);