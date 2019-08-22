import React from 'react';
// import MessageItem from './message_item';
import TranslateMessageContainer from '../translate/translate_message_container';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.messages = this.props.messages;
        this.scrollToBottom = this.scrollToBottom.bind(this); 
        this.currentUserId = this.props.currentUserId;
    }

    componentDidMount() {
        this.scrollToBottom(); 
        console.log(this.currentUserId);
    }

    componentDidUpdate() {
        this.scrollToBottom(); 
        console.log(this.messages);
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView(); 
    }

    render() {
        // const messages = this.messages.map((message, idx)=>(
        //     <TranslateMessageContainer text={message.message} key={idx}/>
        // ));
        
        console.log(`Messages according to display component: ${this.messages}`);
        console.log(`Props received by display component: ${this.props.messages}`);
        if (!this.props.messages) {
            return (
                <></>
            )
        }
        return (
            
            <div className="chat-box-display-container">
                <div className="messages">
                    <ul>
                        {this.props.messages.map((message, idx) => 
                            <li key={idx} className={message.userId === this.currentUserId ? "chat-box-message" : "chat-box-message-opponent"}>
                                {message.gif ?


                                 message.userId === this.currentUserId ? 
                                    <div className="chat-box-image-text">
                                        <div>
                                            <img className="chat-box-gif-you" src={message.message}></img>
                                        </div>
                                        <div className="chat-box-profile-image-wrapper-you">
                                            <img className="chat-box-profile-image" src={this.props.yourPic}></img>
                                        </div>
                                    </div>
                                     :
                                    <div className="chat-box-image-text">
                                        <div className="chat-box-profile-image-wrapper-opp">
                                            <img className="chat-box-profile-image" src={this.props.oppPic}></img>
                                        </div>
                                        <div>
                                            <img id="chat-box-gif-opp" src={message.message}></img>
                                        </div>
                                    </div>
                                    
                                : 
                                <TranslateMessageContainer text={message.message} 
                                key={idx} 
                                ownMessage={message.userId === this.currentUserId}
                                yourPic={this.props.yourPic}
                                oppPic={this.props.oppPic} />
                                }
                            </li>)
                        }
                    </ul>
                </div>
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }
}

export default Display;