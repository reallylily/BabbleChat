import React from 'react';
// import MessageItem from './message_item';
import TranslateMessageContainer from '../translate/translate_message_container';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.messages = this.props.messages;
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
                            <li key={idx} className="chat-box-message">
                                {message}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Display;