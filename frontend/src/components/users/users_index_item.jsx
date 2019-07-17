import React from 'react';
import languages from '../languages/languages'



const UsersIndexItem = ({ user, sameLang }) => (

    <div className={sameLang ? "chat-users-item2" : "chat-users-item"}>

        <div className="chat-users-name">
            <img height="55px"
                width="55px" 
                src={user.pic}
                className="chat-users-profile-image" />
            <span className="chat-users-profile-handle">{user.handle} </span>
        </div>
        <div className="chat-users-right">
            <div className="chat-users-language-pref">
                <div className="chat-users-learning">Learning <div className="chat-users-tags">{languages[user.to_learn]}</div></div>
                <div className="chat-users-speaking">Speaks <div className="chat-users-tags">{languages[user.to_share]}</div></div>
            </div>

            <button className={sameLang ? "chat-users-start-convo-button" : "chat-users-start-convo-button2"} >Talk To Me</button>
        </div>
    </div>
  
)

export default UsersIndexItem