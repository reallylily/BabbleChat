import React from 'react';
// import MessageItem from './message_item';
import TranslateMessageContainer from '../translate/translate_message_container';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.messages = this.props.messages;
        this.scrollToBottom = this.scrollToBottom.bind(this); 

    }

    componentDidMount() {
        this.scrollToBottom(); 
    }

    componentDidUpdate() {
        this.scrollToBottom(); 
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView(); 
    }

    render() {
        const messages = this.messages.map((message, idx)=>(
            <TranslateMessageContainer text={message} key={idx}/>
        ));


        return (
            <div className="chat-box-display-container">
                <div className="messages">
                    <ul>
                        {messages.map((message, idx) => 
                            <li key={idx} className={idx % 2 === 0 ? "chat-box-message" : "chat-box-message-opponent"}>
                                {message}
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