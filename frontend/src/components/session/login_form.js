
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
import { Link } from 'react-router-dom'; 

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: null, 
      passwordError: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile');
    }
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then(()=> this.props.history.push('/profile'))
  }


  render() {
    return (
      <>
      <div className="login-form-speech-bubble-container">
          <i className="fas fa-comments login-form-speech-bubble"></i>
      </div>
      <div className="login-form-container">
        <h1 className="login-form-title">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
              {this.state.email.length === 0 ? <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="login-form-text-input"
              />
              : 
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="login-form-text-input-done"
              />}
            <br/>
            {this.state.password.length === 0 ? 
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-form-text-input"
              />
              :
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-form-text-input-done"
              />
              }
            <br/>
            <input type="submit" value="Submit" className="login-form-submit" />

              <div className="login-links">
                Not a member yet? <Link to="/signup" className="login-link-to-signin">Sign Up</Link>
              </div>
          </div>
        </form>
        
      </div>
      <Footer/>
      </>
    );
  }
}

export default withRouter(LoginForm);