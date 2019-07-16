import React from 'react'; 

const ProfileSnippet = ({name, value}) => (
    <div className="profile-snippet">
        <span className="profile-snippet-name">{name}:</span> {value}
    </div>
)
export default ProfileSnippet; 