import React from 'react'; 
import Footer from '../footer/footer'; 

const About = () => (
    <div>
        <div className="about-title">
            Meet the Babble Chat Team
        </div>
        <div className="about-profiles">
            <div className="about-profile-1">
                <img className="about-profile-img"
                    src='images/helenyu.jpg'></img>
                <div>Helen</div>
                <div>
                    Hi! I'm Helen and I've  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                </div>
                <div>
                    <a href="#">Portfolio</a>
                    <a href="#">Linked In</a>
                    <a href="#">Angel List</a>
                </div>
            </div> 

            <div className="about-profile-2">
                <img className="about-profile-img"
                    src='images/AdityaAgarwala.jpg'></img>
                <div>Aditya</div>
                <div>
                    Hi! I'm Helen and I've  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                </div>
                <div>
                    <a href="#">Portfolio</a>
                    <a href="#">Linked In</a>
                    <a href="#">Angel List</a>
                </div>
            </div>

            <div className="about-profile-3">
                <img className="about-profile-img"
                    src='images/JitsuMaeMaster1.jpg'></img>
                <div>Jitsu</div>
                <div>
                    Hi! I'm Helen and I've  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                </div>
                <div>
                    <a href="#">Portfolio</a>
                    <a href="#">Linked In</a>
                    <a href="#">Angel List</a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
export default About;  