import React from 'react';


class FriendRequestShow extends React.Component {

    constructor(props){
        super(props);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
    }

    handleAccept(e){
        this.props.deleteFriendRequest(this.props.friendRequest.id);
        this.props.createFriend({ user_id: this.props.currentUser.id, friend_id: this.props.requestor.id });
        this.props.createMutualFriend({ user_id: this.props.requestor.id, friend_id: this.props.currentUser.id });
    }
    
    handleDecline(e){
        this.props.deleteFriendRequest(this.props.friendRequest.id);
    }

    render(){
        if (!this.props.requestor) return null;
        const { requestor } = this.props;
        const prpUrl = requestor.profilePhotoUrl ? requestor.profilePhotoUrl : "https://i.ibb.co/DRTq0KR/5cc28e190d41d2738de6.jpg";
        return(
            <div className="friend-request-show-container">
                <div className="friend-requestor">
                    <img src={prpUrl} className="small-profile-pic"/>
                    <p> <span>{requestor.first_name} {requestor.last_name}</span> wants to be your friend! </p>
                </div>
                <div className="friend-request-buttons">
                    <div onClick={this.handleAccept}>Accept</div>
                    <div onClick={this.handleDecline}>Decline</div>
                </div>
            </div>
        )
    }
}

export default FriendRequestShow;