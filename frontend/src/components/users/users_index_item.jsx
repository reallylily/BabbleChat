import React from 'react';

const UsersIndexItem = ({ user }) => (
    <div className="chat-users-item">
        <div className="chat-users-name">
            {user.handle} 
        </div>
        <div className="chat-users-right">
            <div className="chat-users-language-pref">
                <div className="chat-users-learning">Learning: <div className="chat-users-tags">{user.to_learn}</div></div>
                <div className="chat-users-speaking">Speaks: <div className="chat-users-tags">{user.to_share}</div></div>
            </div>

            <button className="chat-users-start-convo-button">Talk To Me</button>
        </div>
    </div>
)

export default UsersIndexItem