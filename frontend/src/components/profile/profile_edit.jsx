
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
import { Link } from 'react-router-dom'; 
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
    const languagesLearn = () => {
        const options = []
        for (var key in langs) {
            if (langs.hasOwnProperty(key)) options.push(<option value={key} selected={ key === this.state.to_learn } >{langs[key]}</option>)
        }
        return ( <>{options}</> )
    }

    const languagesShare = () => {
        const options = []
        for (var key in langs) {
            if (langs.hasOwnProperty(key)) options.push(<option value={key} selected={ key === this.state.to_share } >{langs[key]}</option>)
        }
        return ( <>{options}</> )
    }
    


    return (
      <>
        <div className="login-form-container2">
        <h1 className="login-form-title">Want to change your languages?</h1> 
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">

            <label className="login-form-text">
                <span className="login-form-language">I want to learn</span>
                <select name="to_learn"
                  onChange={this.update('to_learn')}
                  className="login-form-selector">
                  {languagesLearn()}
                </select>
            </label>
            <br/>
            <label className="login-form-text">
                <span className="login-form-language">I want to share</span>
                <select name="to_share"
                  onChange={this.update('to_share')}
                  className="login-form-selector">
                  {languagesShare()}
                </select>
            </label>
            <input type="submit" value="Submit" className="login-form-submit2" />

          </div>
        </form>
      </div>
      <Footer />
      </>
    );
  }
}

export default withRouter(ProfileEdit);