
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
// import { Link } from 'react-router-dom'; 
import langs from '../languages/languages';

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;

    this.state.displayEditForm = false;

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
        this.setState({displayEditForm: false})
        this.setState(user)
    })
  }


  renderEdit(e) {
    e.preventDefault(); 
    this.setState({
      displayEditForm: !this.state.displayEditForm
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



    const editLanguagesButton = () => {
      return (
        <>
        {this.state.displayEditForm ? 
          <button onClick={(e) => this.renderEdit(e)}
            className="edit-languages-button">
            X 
          </button>
          :
          <button onClick={(e) => this.renderEdit(e)}
              className="edit-languages-button">
              Change Language Preferences
          </button>
          }
        </>
      )
    }

    const editLanguagesForm = () => (
      <>
        <div className="login-form-container2">
        <h1 className="login-form-title">Want to change your languages?</h1> 
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">

            <label className="login-form-text">
                <span className="login-form-language">I want to learn</span>
                <select name="to_learn"
                  defaultValue={this.state.to_learn}
                  onChange={this.update('to_learn')}
                  className="login-form-selector2">
                  {languages()}
                </select>
            </label>
            <br/>
            <label className="login-form-text">
                <span className="login-form-language">I want to share</span>
                <select name="to_share"
                  defaultValue={this.state.to_share}
                  onChange={this.update('to_share')}
                  className="login-form-selector2">
                  {languages()}
                </select>
            </label>
            <input type="submit" value="Submit" className="login-form-submit2" />

          </div>
        </form>
        </div>
      </>
    )

    return (
      <>
        { this.state.displayEditForm ? editLanguagesForm() : null }
        {editLanguagesButton()}
      </>
    );
  }
}

export default withRouter(ProfileEdit);