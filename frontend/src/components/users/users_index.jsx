
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
import UsersIndexItem from './users_index_item';
import languages from '../languages/languages'
import io from "socket.io-client";


class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], 
      showAdvanced: false 
    }

    
    this.possibleRoom = '';
    this.requestRoom = this.requestRoom.bind(this);
    this.socket = io();

    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e) {
    this.setState({
      users: this.props.users.filter(x => x.handle.toLowerCase().includes(e.target.value.toLowerCase()))
    })
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
        this.props.history.push('/chat')
      }
    });

    this.socket.on('disconnect', () => {
      console.log('user index socket has disconnected')
    });

  }

  componentWillUnmount() {
    this.socket.emit('off-users-index');

  }

  componentWillReceiveProps(newState) {
    this.setState({ users: newState.users });
  }

  render() {
    if (this.state.users.length === 0) {
      return (
        <>
          <div className="chat-users-page">

            <input className="chat-users-searchbar"
            onChange={(e) => this.handleChange(e)} 
            type="text"
            placeholder="Search for a user" />

            <div>
              Advanced 

            </div>

            <div className="chat-users-nousers">No users match your criteria.</div>
          </div>
        </>)
    } else {
        // const users = this.state.users.map(user => (
        //     <UsersIndexItem key={user._id} user={user} />
        // ))
        const same_lang_users = []
        const users = []
        this.state.users.forEach(user => {
          if (user.to_share === this.props.currentUser.to_learn) {
            same_lang_users.push(<UsersIndexItem key={user._id} user={user} sameLang={true} requestRoom={this.requestRoom}/>)
          } else {
            if (user.email !== this.props.currentUser.email) users.push(<UsersIndexItem key={user._id} user={user} sameLang={false} requestRoom={this.requestRoom} />)
          }
        })

        // Want to create search function 
        const all_users = users.concat(same_lang_users); 
        console.log(all_users.map(x => x.props.user))

        // console.log(all_users.map(x => x.props.user.date).sort())
      return (
        <>

        <div className="chat-users-page">
            <input className="chat-users-searchbar"
              onChange={(e) => this.handleChange(e)}
              type="text"
              placeholder="Search for a user"  />

            <div>
              Advanced

            </div>

            <h2 className="chat-users-number"><span className="chat-users-digit-default">{same_lang_users.length + users.length}</span> <span style={{ fontWeight: 'bold' }}>{same_lang_users.length + users.length === 1 ? "BabbleBuddy" : "BabbleBuddies"}</span> </h2>
            <h2 className="chat-users-number"><span className="chat-users-digit">{same_lang_users.length} </span><span style={{fontWeight: 'bold'}}>{same_lang_users.length === 1 ? "BabbleBuddy" : "BabbleBuddies"}</span> who {same_lang_users.length === 1 ? "speaks" : "speak"} <span className="chat-users-active-language">{languages[this.props.currentUser.to_learn]}</span> </h2>
          <div className="users-grid">
              {same_lang_users}
              {users}
          </div>
        </div>
        <Footer />
        </>
      );
    }
  }
}

export default withRouter(UsersIndex);