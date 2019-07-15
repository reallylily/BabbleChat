
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      to_learn: 'english',
      to_share: 'english',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
      to_learn: this.state.to_learn,
      to_share: this.state.to_share,
    };
    console.log(user)
    this.props.signup(user, this.props.history); 
  }

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
      <div className="login-form-container">
        <h1 className="login-form-title">Sign Up</h1> 
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="login-form-text-input"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
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
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                className="login-form-text-input"
              />
            <br/>
<<<<<<< HEAD:frontend/src/components/session/signup_form.js
            <input type="submit" value="Submit" className="login-form-submit"/>
=======
            <label>I want to learn</label>
            <select name="to_learn"
                onChange={this.update('to_learn')}
              >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
            </select>
            <br/>
            <label>I want to share</label>
            <select name="to_share"
                onChange={this.update('to_share')}
              >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
            </select>

            <input type="submit" value="Submit" />
>>>>>>> 3e7139cb1eaf28b66f2d4355dc7646e5d2dc1d7e:frontend/src/components/session/signup_form.jsx
            {this.renderErrors()}
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default withRouter(SignupForm);