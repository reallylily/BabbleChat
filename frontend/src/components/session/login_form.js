
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
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

    // this.props.login(user); 
    this.props.login(user)
      .then(()=> this.props.history.push('/profile'));
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
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
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="login-form-text-input"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-form-text-input"
              />
            <br/>
            <input type="submit" value="Submit" className="login-form-submit" />
            {this.renderErrors()}
          </div>
        </form>
        
      </div>
      <Footer/>
      </>
    );
  }
}

export default withRouter(LoginForm);