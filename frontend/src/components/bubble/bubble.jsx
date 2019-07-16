
import React from 'react';

class Bubble extends React.Component {
  render() {
    return (
      <div style={{ color: 'white', background: '#005691', paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingTop: '0.25rem', paddingBottom: '0.25rem', borderRadius: '10px'}}>
            {this.props.text}
        </div>
    );
  }
}

export default Bubble;