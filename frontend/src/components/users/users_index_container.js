
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { saveRoomId } from '../../actions/session_actions';

import UsersIndex from './users_index';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users.all,
    currentUserId: state.session.user.id
    // users: Object.values(state.entities.users.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    saveRoomId: (roomId) => dispatch(saveRoomId(roomId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);