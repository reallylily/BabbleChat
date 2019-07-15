
import React from 'react';
import { setCORS } from "google-translate-api-browser";


class TranslateMessage extends React.Component {
  render() {
    const translate = setCORS("http://cors-anywhere.herokuapp.com/");
    console.log(this.props)
    translate(this.props.text, { to: "en" })
      .then(res => {
        // I do not eat six days
        console.log(res.text)
      })
      .catch(err => {
        console.error(err);
      });
    return (
        <div>
            <h3>{this.props.text}</h3>
        </div>
    );
  }
}

export default TranslateMessage;