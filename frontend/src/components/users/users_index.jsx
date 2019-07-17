
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
import UsersIndexItem from './users_index_item';
import languages from '../languages/languages'

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
        // const users = this.state.users.map(user => (
        //     <UsersIndexItem key={user._id} user={user} />
        // ))
        const same_lang_users = []
        const users = []
        this.state.users.forEach(user => {
          user.to_share === this.props.currentUser.to_learn ? 
            same_lang_users.unshift(<UsersIndexItem key={user._id} user={user} />) :
            users.push(<UsersIndexItem key={user._id} user={user} />)
        })
      return (
        <>
        <div className="chat-users-page">
            <h2 className="chat-users-number">{same_lang_users.length + users.length} <span style={{fontWeight: 'bold'}}>BabbleBuddies</span> online</h2>
            <h2 className="chat-users-number">{same_lang_users.length} <span style={{fontWeight: 'bold'}}>BabbleBuddies</span> who speak {languages[this.props.currentUser.to_learn]} online</h2>
          
          <ul>
              {same_lang_users}
          </ul>
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