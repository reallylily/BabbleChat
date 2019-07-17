import React from 'react';
import languages from '../languages/languages'



const UsersIndexItem = ({ user, sameLang }) => (

    <div className={sameLang ? "chat-users-item2" : "chat-users-item"}>

        <div className="chat-users-name">
            <img width="55px" 
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png" 
                className="chat-users-profile-image" />
            {user.handle} 
        </div>
        <div className="chat-users-right">
            <div className="chat-users-language-pref">
                <div className="chat-users-learning">Learning <div className="chat-users-tags">{languages[user.to_learn]}</div></div>
                <div className="chat-users-speaking">Speaks <div className="chat-users-tags">{languages[user.to_share]}</div></div>
            </div>

            <button className="chat-users-start-convo-button">Talk To Me</button>
        </div>
    </div>
  
)

export default UsersIndexItem