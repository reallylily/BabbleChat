
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../../index.css'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = {
      navbar1: false, 
      navbar2: false, 
      navbar3: true 
    }
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  handleClick1() {
    this.setState({
      navbar1: true, 
      navbar2: false, 
      navbar3: false 
    })
  }

  handleClick2() {
    this.setState({
      navbar1: false, 
      navbar2: true, 
      navbar3: false 
    })
  }

  handleClick3() {
    this.setState({
      navbar1: false,
      navbar2: false,
      navbar3: true
    })
  }
  // Selectively render links dependent on whether the user is logged in
  // <Link to={'/tweets'} className="navbar-header-link">All Tweets</Link>
  // <Link to={'/new_tweet'} className="navbar-header-link">Write a Tweet</Link>
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-fullscreen-tab">
          <Link to={'/users'} className={this.state.navbar1 ? "navbar-header-link-hover" : "navbar-header-link"}
            onClick={() => this.handleClick1()}>Find a Babble Buddy</Link>
          <Link to={'/profile'} className={this.state.navbar3 ? "navbar-header-link-hover" : "navbar-header-link"}
            onClick={() => this.handleClick3()}>Profile</Link>
           
          <span className="navbar-username">{this.props.currentUser.handle}  <img style={{transform: 'translateY(5px)', borderRadius: '5px'}} width="35px" height="35px" src={this.props.currentUser.pic} /></span>
          <button className="navbar-logout-button" onClick={this.logoutUser}>Logout</button>
        </div>
        )
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
    console.log(this.props.currentUser)
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