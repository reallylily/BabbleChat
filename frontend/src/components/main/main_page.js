
import React from 'react';
import Footer from '../footer/footer'; 

import '../../index.css'; 


class MainPage extends React.Component {

  render() {
    return (
      <div className="splash">
        <h1 className="title">BabbleChat
          <i className="fas fa-comments title-speech-bubble"></i></h1>
        <Footer />
      </div>
    );
  }
}

export default MainPage;