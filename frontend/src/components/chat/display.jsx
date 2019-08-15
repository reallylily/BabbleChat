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
        

        return (
            <div className="chat-box-display-container">
                <div className="messages">
                    <ul>
                        {this.messages.map((message, idx) => 
                            <li key={idx} className={message.userId === this.currentUserId ? "chat-box-message" : "chat-box-message-opponent"}>
                                <TranslateMessageContainer text={message.message} key={idx} ownMessage={message.userId === this.currentUserId}/>
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