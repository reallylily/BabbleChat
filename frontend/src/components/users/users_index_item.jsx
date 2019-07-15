import React from 'react';

const UsersIndexItem = ({ user }) => (
    <div>
        <br/>
        <h3>{user.handle}</h3>
        <p>{user.handle} wants to learn {user.to_learn} and can speak in {user.to_share}!!</p>
    </div>
)

export default UsersIndexItem