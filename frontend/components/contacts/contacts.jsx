import React from 'react';
import { Link } from 'react-router-dom';

class Contacts extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render (){
        const { currentUser, users } = this.props;
        if(!users) return null;
        return (
            <div className="contacts-container">
                <div className="contacts-container-inside">
                    <div className="contacts-label">
                        Friends
                    </div>
                    <ul className="contact-lists">
                        {currentUser.friendship_ids.map(friendId => {
                            if(!users[friendId]) return null;
                            const prpUrl = users[friendId].profilePhotoUrl ? users[friendId].profilePhotoUrl : "https://i.ibb.co/DRTq0KR/5cc28e190d41d2738de6.jpg";
                        return (
                        <Link to={`/profile/${friendId}`} key={friendId}><li key={friendId} className="contact-detail"><img src={prpUrl} className="smaller-profile-pic"/> {users[friendId].first_name} {users[friendId].last_name}</li></Link>
                        )})}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contacts;