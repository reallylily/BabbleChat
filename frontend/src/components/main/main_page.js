
import React from 'react';
import Footer from '../footer/footer'; 

import '../../index.css'; 


class MainPage extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      name1: '', 
      name2: '', 
      image1: '', 
      image2: '' 
    }
  }

  componentDidMount() {
    const url = 'https://randomuser.me/api/'; 
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.results[0]))
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name1: data.results[0].name.first + " " + data.results[0].name.last, 
        image1: data.results[0].picture.large 
      }))
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name2: data.results[0].name.first + " " + data.results[0].name.last, 
        image2: data.results[0].picture.large
      }))
  }


  render() {
    return (
      <div className="splash">
        <h1 className="title">BabbleChat
          <i className="fas fa-comments title-speech-bubble"></i></h1>
        <div className="subtitle">Learning one word at a time with friends.</div>
        


        <div className="bar1">

          <div className="bar1-c1"></div>
    

            Our motive is <span className="bolded-words">simple</span>.
          <br />
            Make learning languages <span className="bolded-words">fun</span>.
          <br />
          <br />

          <div className="description-paragraph">
            At <span className="bolded-words2">BabbleChat</span>, we strive to make learning languages an enjoyable experience for all language learners, from the <span className="bolded-words2">conversational newbie</span> to the <span className="bolded-words2">linguistic expert</span>, to the <span className="bolded-words2">dabbling hobbyist</span> in between. Through our chat dynamic platform, connect with people from across the world. Master fluency in a language, one word a time, with exciting conversational partners along the way. 
          </div>
          </div>

        <div style={{height: '30px'}}></div>

        <div className="splash-image2">
          <div>{this.state.name2}</div>
          <img className="splash-image-photo" src={this.state.image2}></img>
        </div>


        <div className="splash-image1">
          
          <img className="splash-image-photo" src={this.state.image1}></img>
          <div>{this.state.name1}</div>
        </div>




        <div style={{
          float: 'right', width: '90%', height: '300px', border: '5px solid #005691', backgroundColor: 'transparent', 
            borderRadius: '30px 0px 0px 30px', marginTop: '25px', marginBottom: '25px'}}>
                   BabbleChat is a new, dynamic way to learn languages. Get matched with people all over the world, who are fluent speakers 
          </div>

        <div style={{
          float: 'right', width: '90%', height: '50px', backgroundColor: '#005691',
          borderRadius: '30px 0px 0px 30px', marginTop: '25px', marginBottom: '150px',
          padding: '2rem'
        }}>
          <span className="languages100">Over a 100 different languages to learn </span>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MainPage;