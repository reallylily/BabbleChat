
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
// import { Link } from 'react-router-dom'; 
import langs from '../languages/languages';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.edit(this.state).then((user)=>{
        this.setState(user)
    })
  }

  render() {
    const languages = () => {
        const options = []
        for (var key in langs) {
            if (langs.hasOwnProperty(key)) options.push(<option key={key} value={key} >{langs[key]}</option>)
        }
        return ( 
          <>
            <option key='0' value='en' >English</option>
            {options}
          </> 
        )
    }

    return (
      <>
      <div className="login-form-container">
        <h1 className="login-form-title">Want to change your languages?</h1> 
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">

            <label className="login-form-text">
                <span className="login-form-language">I want to learn</span>
                <select name="to_learn"
                  defaultValue={this.state.to_learn}
                  onChange={this.update('to_learn')}
                  className="login-form-selector">
                  {languages()}
                </select>
            </label>
            <br/>
            <label className="login-form-text">
                <span className="login-form-language">I want to share</span>
                <select name="to_share"
                  defaultValue={this.state.to_share}
                  onChange={this.update('to_share')}
                  className="login-form-selector">
                  {languages()}
                </select>
            </label>
            <input type="submit" value="Submit" className="login-form-submit" />

          </div>
        </form>
      </div>
      <Footer />
      </>
    );
  }
}

export default withRouter(ProfileEdit);