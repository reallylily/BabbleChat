
import React from 'react';
// import { setCORS } from "google-translate-api-browser";
import TranslateWord from './translate_word'


class TranslateMessage extends React.Component {
  render() {
    const words = this.props.text.split(' ').map((word ,idx) =>(
      <TranslateWord text={word} key={idx} user={this.props.user}/>
    ))
    // console.log(this.props.user)
    // const translate = setCORS("http://cors-anywhere.herokuapp.com/");
    // /*
    // // or
    // import translate, { setCORS } from "google-translate-api-browser";
    // setCORS("http://cors-anywhere.herokuapp.com/");
    // */
    // translate(this.props.text, { to: this.props.user.to_learn })
    //   .then(res => {
    //     // I do not eat six days
    //     console.log(res.text)
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
    return (
        <div>
          {/* <TranslateWord text={this.props.text} user={this.props.user}/> */}

            <ul>
              {words}
            </ul>
        </div>
    );
  }
}

export default TranslateMessage;