
import React from 'react';
import Footer from '../footer/footer'; 
import languages from '../languages/languages'; 

import '../../index.css'; 


class MainPage extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      name1: '', 
      name2: '',
      language1_learns: '', 
      language1_speaks: '', 
      language2_learns: '',  
      language2_speaks: '', 
      image1: '', 
      image2: '' 
    }
  }

  getRandomLanguage = num => {
    return Object.values(languages)[Math.floor(Math.random() * num)]
  }

  componentDidMount() {
    const numLang = Object.values(languages).length; 
    const lang1 = this.getRandomLanguage(numLang); 
    const lang2 = this.getRandomLanguage(numLang); 

    const url = 'https://randomuser.me/api/'; 
    
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.results[0]))
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name1: data.results[0].name.first[0].toUpperCase() + data.results[0].name.first.slice(1) + " " + data.results[0].name.last[0].toUpperCase() + data.results[0].name.last.slice(1),
        language1_learns: lang1, 
        language1_speaks: lang2,  
        image1: data.results[0].picture.large 
      }))
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        name2: data.results[0].name.first[0].toUpperCase() + data.results[0].name.first.slice(1) + " " + data.results[0].name.last[0].toUpperCase() +  
        data.results[0].name.last.slice(1), 
        language2_learns: lang2,
        language2_speaks: lang1, 
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


        <div className="splash-minutes-ago">
          <span style={{ fontWeight: 'bold', color: '#005691' }}>{this.state.name1} </span> and 
          <span style={{ fontWeight: 'bold', color: '#a40000' }}> {this.state.name2}</span> have matched together {Math.floor(Math.random()*50)} minutes ago. 
        </div>

        <div className="splash-image1">
          <div className="splash-mock-description">
            <div>
              Hi folks! I'm {this.state.name1.split(' ')[0]} and I'm going to a study abroad program in a few months (so would like to brush up on {this.state.language1_learns} as much as possible before I go). I like cooking a ton and enjoy learning recipes. 
              <br/> 
              <br/>
              In my spare time, I dabble in improv comedy, and enjoy checking out the comedy shows in the downtown Chicago area. On a particularly energetic Friday I like going bar-hopping and exploring the downtown area, and catching up with good friends. 
            </div>
          </div>

          <div className="splash-image-photo-wrapper">
            <img className="splash-image-photo" src={this.state.image1}></img>
            <div className="splash-image-attributes">
              <div className="splash-image-full-name">{this.state.name1}</div>
              <div>Learning: {this.state.language1_learns}</div>
              <div>Speaks: {this.state.language1_speaks}</div>
            </div>
           
          </div>

        </div>


        <div className="splash-image2">
          
          <div className="splash-image-photo-wrapper">
            <img className="splash-image-photo" src={this.state.image2}></img>
            <div className="splash-image-attributes">
              <div className="splash-image-full-name">{this.state.name2}</div>
              <div>Learning: {this.state.language2_learns}</div>
              <div>Speaks: {this.state.language2_speaks}</div>
            </div>

          </div>

          <div className="splash-mock-description">
            <div>
            Hello! I've been learning {this.state.language2_learns} for the past few months. I'm still a beginner, and I'm proud of the progress I've made so far!
            <br/>
            <br/>
            A little about me - I've lived in San Francisco for the past 8 years and love it here. I'm an avid hiker and enjoy taking long walks along the beach boardwalk. My idea of a perfect afternoon is scouring the city for little coffee shops (enjoy a good cup of Joe!), and reading a nice book (recently I've started really enjoying Agatha Christie works). 
            </div>
          </div>
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