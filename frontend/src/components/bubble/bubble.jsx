
import React from 'react';

class Bubble extends React.Component {
  render() {
    return (
      <div className={this.props.ownMessage ? "popup-bubble" : "popup-bubble-opponent"}>
            {this.props.text}
        </div>
    );
  }
}

export default Bubble;