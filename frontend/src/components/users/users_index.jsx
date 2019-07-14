
import React from 'react';
import { withRouter } from 'react-router-dom';
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
        <div>
          <h2>All Users</h2>
          <ul>
              {users}
          </ul>
          {console.log(this.props.users)}
        </div>
      );
    }
  }
}

export default withRouter(UsersIndex);