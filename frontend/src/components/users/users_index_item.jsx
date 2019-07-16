import React from 'react';
import languages from '../languages/languages'

class UsersIndexItem extends React.Component {
    
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.requestRoom(this.props.user._id);
    }

    render() {
        return (
    <div className="chat-users-item">
        <div className="chat-users-name">
            {this.props.user.handle} 
        </div>
        <div className="chat-users-right">
            <div className="chat-users-language-pref">
                <div className="chat-users-learning">Learning: <div className="chat-users-tags">{languages[this.props.user.to_learn]}</div></div>
                <div className="chat-users-speaking">Speaks: <div className="chat-users-tags">{languages[this.props.user.to_share]}</div></div>
            </div>

            <button onClick={(e) => this.handleClick(e)}className="chat-users-start-convo-button">Talk To Me</button>
        </div>
    </div>
        )
    }
}


export default UsersIndexItem