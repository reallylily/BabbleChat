
import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../footer/footer'; 
import { Link } from 'react-router-dom'; 

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      to_learn: 'en',
      to_share: 'en',
      errors: {}, 
      question1: false, 
      question2: false      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleHelp1 = this.toggleHelp1.bind(this); 
    this.toggleHelp2 = this.toggleHelp2.bind(this); 
    this.clearedErrors = false;
  }

  componentDidMount() {
    this.props.fetchDog();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/profile');
    }

    this.setState({errors: nextProps.errors})
  }

  toggleHelp1(e) {
    this.setState({
      question1: !this.state.question1, 
      question2: false 
    })
  }

  toggleHelp2(e) {
    this.setState({
      question1: false, 
      question2: !this.state.question2 
    })
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  learnDone(e) {
    this.setState({
      learn_done: true 
    })
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
      pic: this.props.pic
    };
    
    this.props.signup(user, this.props.history).then(()=>{
      let user = {
        email: this.state.email,
        password: this.state.password,
      }
      this.props.login(user).then(()=> this.props.history.push('/profile'));
    })

    
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
    const languages = () => (
      <>
        <option value="en">English</option>    
        <option value="sq">Albanian</option>
        <option value="af">Afrikaans</option>
        <option value="am">Amharic</option>
        <option value="ar">Arabic</option>
        <option value="hy">Armenian</option>
        <option value="az">Azerbaijani</option>
        <option value="eu">Basque</option>
        <option value="be">Belarusian</option>
        <option value="bn">Bengali</option>
        <option value="bs">Bosnian</option>
        <option value="bg">Bulgarian</option>
        <option value="ca">Catalan</option>
        <option value="ceb">Cebuano</option>
        <option value="zh">Chinese (Simplified)</option>
        <option value="zh-TW">Chinese (Traditional)</option>
        <option value="co">Corsican</option>
        <option value="hr">Croatian</option>
        <option value="cs">Czech</option>
        <option value="da">Danish</option>
        <option value="nl">Dutch</option>
        <option value="en">English</option>
        <option value="eo">Esperanto</option>
        <option value="et">Estonian</option>
        <option value="fi">Finnish</option>
        <option value="fr">French</option>
        <option value="fy">Frisian</option>
        <option value="gl">Galician</option>
        <option value="ka">Georgian</option>
        <option value="de">German</option>
        <option value="el">Greek</option>
        <option value="gu">Gujarati</option>
        <option value="ht">Haitian Creole</option>
        <option value="ha">Hausa</option>
        <option value="haw">Hawaiianw</option>
        <option value="he">Hebrew</option>
        <option value="hi">Hindi</option>
        <option value="hmn">Hmongn</option>
        <option value="hu">Hungarian</option>
        <option value="is">Icelandic</option>
        <option value="ig">Igbo</option>
        <option value="id">Indonesian</option>
        <option value="ga">Irish</option>
        <option value="it">Italian</option>
        <option value="ja">Japanese</option>
        <option value="jw">Javanese</option>
        <option value="kn">Kannada</option>
        <option value="kk">Kazakh</option>
        <option value="km">Khmer</option>
        <option value="ko">Korean</option>
        <option value="ku">Kurdish</option>
        <option value="ky">Kyrgyz</option>
        <option value="lo">Lao</option>
        <option value="la">Latin</option>
        <option value="lv">Latvian</option>
        <option value="lt">Lithuanian</option>
        <option value="lb">Luxembourgish</option>
        <option value="mk">Macedonian</option>
        <option value="mg">Malagasy</option>
        <option value="ms">Malay</option>
        <option value="ml">Malayalam</option>
        <option value="mt">Maltese</option>
        <option value="mi">Maori</option>
        <option value="mr">Marathi</option>
        <option value="mn">Mongolian</option>
        <option value="my">Myanmar (Burmese)</option>
        <option value="ne">Nepali</option>
        <option value="no">Norwegian</option>
        <option value="ny">Nyanja (Chichewa)</option>
        <option value="ps">Pashto</option>
        <option value="fa">Persian</option>
        <option value="pl">Polish</option>
        <option value="pt">Portuguese (Portugal, Brazil)</option>
        <option value="pa">Punjabi</option>
        <option value="eo">Romanian</option>
        <option value="ru">Russian</option>
        <option value="sm">Samoan</option>
        <option value="gd">Scots Gaelic</option>
        <option value="sr">Serbian</option>
        <option value="st">Sesotho</option>
        <option value="sn">Shona</option>
        <option value="sd">Sindhi</option>
        <option value="si">Sinhala (Sinhalese)</option>
        <option value="sk">Slovak</option>
        <option value="sl">Slovenian</option>
        <option value="so">Somali</option>
        <option value="es">Spanish</option>
        <option value="su">Sundanese</option>
        <option value="sw">Swahili</option>
        <option value="sv">Swedish</option>
        <option value="tl">Tagalog (Filipino)</option>
        <option value="tg">Tajik</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="th">Thai</option>
        <option value="tr">Turkish</option>
        <option value="uk">Ukrainian</option>
        <option value="ur">Urdu</option>
        <option value="uz">Uzbek</option>
        <option value="vi">Vietnamese</option>
        <option value="cy">Welsh</option>
        <option value="xh">Xhosa</option>
        <option value="yi">Yiddish</option>
        <option value="yo">Yoruba</option>
        <option value="zu">Zulu</option>
      </>
    );


    return (
      <>
      <div className="login-form-container">
        <h1 className="login-form-title">Sign Up</h1> 
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <div className="login-form-tagline">
                It's free and takes less than a minute
            </div>
            <br/>
              {this.state.email.length === 0 ? 
              <input type="text"
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
                />
              }
            <br/>
              {this.state.handle.length === 0 ? <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Username"
                className="login-form-text-input"
              />
              : 
                <input type="text"
                  value={this.state.handle}
                  onChange={this.update('handle')}
                  placeholder="Username"
                  className="login-form-text-input-done"
                />
              }
            <br/>
              {this.state.password.length === 0 ? <input type="password"
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
              {this.state.password2.length === 0 ? <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                className="login-form-text-input"
              />
              : 
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                  className="login-form-text-input-done"
                />
              }
            <br/>


            <div className="languages">Languages</div>
            <label className="login-form-text">
                {this.state.question2 ? <div className="popup-2">Pick a primary language to learn. You will be matched with a chat partner who is has at least basic conversational fluency in that language. </div> : null}

                <div className="login-form-language">
                  <div>I want to <span className="learn-emphasis">learn</span></div>
                  <div onClick={this.toggleHelp2}><i className="fas fa-question need-help-learn"></i></div>
                </div>
                <select name="to_learn"
                  onChange={this.update('to_learn')}
                  className="login-form-selector-language">
                  {languages()}
                </select>
            </label>
            <br/>
            <label className="login-form-text">
                
                {this.state.question1 ? <div className="popup-1">Pick a language to share with your partner. You don't necessarily need to be fluent, but you should have conversational fluency. </div>
                : null}

                <div className="login-form-language">
                  <div>I want to <span className="share-emphasis">share</span></div>
                  <div onClick={this.toggleHelp1}><i className="fas fa-question need-help-share"></i></div>
                </div>
                <select name="to_share"
                  onChange={this.update('to_share')}
                  className="login-form-selector-language">
                  {languages()}
                </select>
            </label>
            <input type="submit" value="Submit" className="signup-form-submit" />
            {this.renderErrors()}

            <div className="login-links">
              Already a member? <Link to="/login" className="login-link-to-signin">Login</Link>
            </div>
            <div className="login-form-agreement">
                By clicking the Sign Up button, you agree to our <span className="terms-conditions">Terms and Conditions</span> and <span className="terms-conditions">Privacy Policy</span>
            </div>

          </div>
        </form>
      </div>
      <Footer />
      </>
    );
  }
}

export default withRouter(SignupForm);