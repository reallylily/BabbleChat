
import React from 'react';
import { setCORS } from "google-translate-api-browser";
import Bubble from '../bubble/bubble'
// https://pure-headland-71945.herokuapp.com/ | https://git.heroku.com/pure-headland-71945.git

class TranslateWord extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props
        this.handleClick = this.handleClick.bind(this)
        this.translate = setCORS("https://pure-headland-71945.herokuapp.com/");
        this.bubble = null
        
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
              this.setState({ bubble : this.bubble = ()=>(<Bubble text={res.text} response={res}/> ) })
            console.log(res.text)
            console.log(res)
            // console.log(this)
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
                { this.bubble ? this.bubble() : null }
                <button onClick={()=>this.handleClick()}>{this.props.text}</button>
            </div>
        );
    }
}

export default TranslateWord;