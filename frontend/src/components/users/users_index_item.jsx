import React from 'react';
import languages from '../languages/languages'

const UsersIndexItem = ({ user }) => (
    <div>
        <br/>
        <h3>{user.handle}</h3>
        <p>{user.handle} wants to learn {languages[user.to_learn]} and can speak in {languages[user.to_share]}!!</p>
    </div>
)

export default UsersIndexItem