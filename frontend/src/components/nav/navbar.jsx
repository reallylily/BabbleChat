
import React from 'react';
import { Link } from 'react-router-dom'
import '../../index.css'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/users'} className="navbar-header-link">Find a New Chat Partner</Link>
            <Link to={'/tweets'} className="navbar-header-link">All Tweets</Link>
            <Link to={'/profile'} className="navbar-header-link">Profile</Link>
            <Link to={'/new_tweet'} className="navbar-header-link">Write a Tweet</Link>
                <button className="navbar-logout-button" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'} className="navbar-signup-button">Signup</Link>
                <Link to={'/login'} className="navbar-signin-button">Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar">
            <h1 className="navbar-title">BabbleChat</h1>
            <div className="navbar-links">
              {this.getLinks()}
            </div>
        </div>
      );
  }
}

export default NavBar;