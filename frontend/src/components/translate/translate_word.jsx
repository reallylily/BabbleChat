
import React from 'react';
import { setCORS } from "google-translate-api-browser";
// https://ancient-ocean-64465.herokuapp.com/ | https://git.heroku.com/ancient-ocean-64465.git

class TranslateWord extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props
        this.handleClick = this.handleClick.bind(this)
        this.translate = setCORS("http://cors-anywhere.herokuapp.com/");
        
    }
    handleClick() {
        // e.preventDefault();
        // this.translate = setCORS("http://cors-anywhere.herokuapp.com/");
        // console.log(this)
        console.log('button clicked')
        let text = this.props.text
        let to_learn = this.props.user.to_learn
        let to_share = this.props.user.to_share
        this.translate(text, { to: to_share })
          .then(res => {
            console.log(res.text)
            console.log(res)
          })
          .catch(err => {
            console.error(err);
          });
    }

    render() {
        console.log(this.props.user)
        /*
        // or
        import translate, { setCORS } from "google-translate-api-browser";
        setCORS("http://cors-anywhere.herokuapp.com/");
        */
        return (
            <div>
                <button onClick={()=>this.handleClick()}>{this.props.text}</button>
            </div>
        );
    }
}

export default TranslateWord;