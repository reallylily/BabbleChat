import React from 'react'; 
import Footer from '../footer/footer'; 

const About = () => (
    <div>
        <div className="about-title">
            Meet the <span style={{fontWeight: 'bold'}}>BabbleChat</span> Team
        </div>
        <div className="about-profiles">
            <div className="about-profile-1">
                <img className="about-profile-img"
                    src='images/helenyu.jpg'></img>
                <div style={{marginTop: '1.5rem'}}>Helen Yu</div>
                {/* <ul>
                    <li><a href="#">Website</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Linked In</a></li>
                    <li><a href="#">Angel List</a></li>
                </ul> */}
            </div> 

            <div className="about-profile-2">
                <img className="about-profile-img"
                    src='images/AdityaAgarwala.jpg'></img>
                <div style={{marginTop: '1.5rem'}}>Aditya Agarwala</div>
                {/* <div>
                    <a href="#">Portfolio</a>
                    <a href="#">Linked In</a>
                    <a href="#">Angel List</a>
                </div> */}
            </div>

            <div className="about-profile-3">
                <img className="about-profile-img"
                    src='images/JitsuMaeMaster1.jpg'></img>
                <div style={{marginTop: '1.5rem'}}>Jitsu MacMaster</div>
                {/* <div>
                    <a href="#">Portfolio</a>
                    <a href="#">Linked In</a>
                    <a href="#">Angel List</a>
                </div> */}
            </div>
        </div>
        <Footer />
    </div>
)
export default About;  