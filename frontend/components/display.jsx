import React from 'react';
import MessageItem from './message_item';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.messages = this.props.messages;
    }

    render() {
        const messages = this.messages.map((message, idx) => {
            return (
                <MessageItem key={idx} message={message} />
            );
        });

        return (
            <div className="display_container">
                <div className="messages">
                    <ul>
                        {messages}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Display;