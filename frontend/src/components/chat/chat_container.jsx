import {connect} from 'react-redux';
import Chat from './chat';
import {clearRoomId} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.user,
    roomId: state.session.roomId,
    currentUserId: state.session.user.id,
});

const mapDispatchToProps = dispatch => ({
    clearRoomId: () => dispatch(clearRoomId())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
