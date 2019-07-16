import React from 'react';
import MessageItem from './message_item';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.messages = this.props.messages;
    }

    render() {
        const messages = this.messages;
        // .map((message, idx) => {
        //     return (
        //         <MessageItem key={idx} message={message} />
        //     );
        // });
        console.log(messages)
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