
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
import UsersIndexItem from './users_index_item';
import io from "socket.io-client";

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
    this.possibleRoom = '';
    this.requestRoom = this.requestRoom.bind(this);
    this.socket = io();
  }

  requestRoom(other_user_id) {
    const room_ids = [];
    room_ids.push(this.props.currentUserId + other_user_id);
    room_ids.push(other_user_id + this.props.currentUserId);
    this.socket.emit('request_room', room_ids); 
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  componentDidMount() {
    this.socket.on('connect', () => {
      console.log('User index component is connected');
    }); 

    this.socket.on('possible_room', (room_id) => {
      this.possibleRoom = room_id;
      console.log('possibleRoom set');
    });

    this.socket.on('verified_room', (room_id) => {
      if (this.possibleRoom === room_id) {
        console.log('successfully matched to right room');
        this.props.saveRoomId(room_id);
      }
    });

    this.socket.on('disconnect', () => {
      console.log('user index socket has disconnected')
    });

  }

  componentWillUnmount() {
    this.socket.emit('off');

  }

  componentWillReceiveProps(newState) {
    this.setState({ users: newState.users });
  }

  render() {
    if (this.state.users.length === 0) {
      return (<div>There are no Users</div>)
    } else {
        const users = this.state.users.map(user => (
            <UsersIndexItem key={user._id} user={user} requestRoom={this.requestRoom}/>
        ))
      return (
        <>
        <div className="chat-users-page">
            <h2 className="chat-users-number">{users.length} <span style={{fontWeight: 'bold'}}>BabbleBuddies</span> online</h2>
          <ul>
              {users}
          </ul>
          {console.log(this.props.users)}
        </div>
        <Footer />
        </>
      );
    }
  }
}

export default withRouter(UsersIndex);