
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
import UsersIndexItem from './users_index_item';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(newState) {
    this.setState({ users: newState.users });
  }

  render() {
    if (this.state.users.length === 0) {
      return (<div>There are no Users</div>)
    } else {
        const users = this.state.users.map(user => (
            <UsersIndexItem key={user._id} user={user} />
        ))
      return (
        <>
        <div className="chat-users-page">
            <h2 className="chat-users-number">{users.length} <span style={{fontWeight: 'bold'}}>BabbleBuddies</span> online</h2>
          <ul>
              {users}
          </ul>
        </div>
        <Footer />
        </>
      );
    }
  }
}

export default withRouter(UsersIndex);