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
            <div className={this.props.sameLang ? "chat-users-item2" : "chat-users-item"}
                onClick={(e) => this.handleClick(e)}>

                <div className="chat-users-name">
                    <div className="chat-users-profile-handle">
                        <div>{this.props.user.handle}</div>

                    </div>
                    
                    <img src={this.props.user.pic}
                        className="chat-users-profile-image" />
                    
                </div>

                <div className="chat-users-right">
                    <div className="chat-users-language-pref">
                        <div className="chat-users-learning">Learning <div className={this.props.sameLang ? "chat-users-tags2" : "chat-users-tags"}>{languages[this.props.user.to_learn]}</div></div>
                        <div className="chat-users-speaking">Speaks <div className={this.props.sameLang ? "chat-users-tags2" : "chat-users-tags"}>{languages[this.props.user.to_share]}</div></div>
                    </div>

                    {/* <button onClick={(e) => this.handleClick(e)} className={this.props.sameLang ? "chat-users-start-convo-button" : "chat-users-start-convo-button2"} >Talk To Me</button> */}

                </div>
            </div>
        )
    }
}


export default UsersIndexItem