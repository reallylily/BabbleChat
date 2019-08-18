
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../../index.css'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = {
      currentPathname: '/profile'
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname !== state.currentPathname) {
      return {
        currentPathname: props.location.pathname
      };
    }
    return null;
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  handleClick1() {
    this.setState({
      profile: false, 
    });
    console.log(this.props.history)
  }

  handleClick2() {
    this.setState({
      profile: true, 
    })
    console.log(this.props.history)
  }

  // Selectively render links dependent on whether the user is logged in
  // <Link to={'/tweets'} className="navbar-header-link">All Tweets</Link>
  // <Link to={'/new_tweet'} className="navbar-header-link">Write a Tweet</Link>
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-fullscreen-tab">
          <Link to={'/users'} className={this.state.currentPathname !== '/profile' ? "navbar-header-link-hover" : "navbar-header-link"}
            onClick={() => this.handleClick1()}><div style={{transform: 'translateY(10px)'}}>Babble</div></Link>
          <Link to={'/profile'} className={this.state.currentPathname === '/profile' ? "navbar-header-link-hover" : "navbar-header-link"}
            onClick={() => this.handleClick2()}><img style={{ borderRadius: '5px' }} width="35px" height="35px" src={this.props.currentUser.pic} /></Link>
            
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