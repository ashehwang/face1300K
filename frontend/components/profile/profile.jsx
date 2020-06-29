import React from 'react';
import PostIndexItem from '../posts/post_index_item';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.sendFriendRequest = this.sendFriendRequest.bind(this);
        this.state = { requested: false };
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUserPosts(this.props.match.params.userId);
    }

    coverPhotoExists() {
        if(this.props.user.coverPhotoUrl) {
            return(
                <img src={this.props.user.coverPhotoUrl} />
            )
        } else {
            return(
                <img src="https://i.ibb.co/986NN8b/1575017629323.jpg" />
            )
        }
    }

    isOwner(){
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className="profile-nav-right" onClick={() => this.props.openModal('edituser')}>
                    <i className="fas fa-pencil-alt"></i> Edit Profile
                </div>
            )
        } else {
            return(
                <div className="profile-nav-right" onClick={this.sendFriendRequest}>
                    <i className="fas fa-user-plus"></i> Add Friend
                </div>
            )
        }
    }

    sendFriendRequest(e){
        this.props.makeFriendRequest({ requestor_id: this.props.currentUser.id, requestee_id: this.props.user.id });
        this.setState({ requested: true })
    }

    profilePhotoExists() {
        if(this.props.user.profilePhotoUrl) {
            return(
                <img src={this.props.user.profilePhotoUrl} />
            )
        } else {
            return(
                <img src="https://i.ibb.co/DRTq0KR/5cc28e190d41d2738de6.jpg" />
            )
        }
    }

    render(){
        
        const { posts, user, currentUser } = this.props;

        if (!user) {
            return null;
        }

        if (!posts) {
            return null;
        }
    
        return (
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-container">
                        <div className="coverpicture">
                            {this.coverPhotoExists()}                    
                        </div>
                        <div className="profilepicture">
                            {this.profilePhotoExists()}
                        </div>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <p>{user.bio ? user.bio : "" }</p>
                        <a>Edit</a>
                    </div>
                    <div className="profile-nav">
                        <div className="profile-nav-l">
                            <div className="profile-nav-left">
                                Timeline
                            </div>
                            <div className="profile-nav-left">
                                About
                            </div>
                            <div className="profile-nav-left">
                                Friends
                            </div>
                            <div className="profile-nav-left">
                                Photos
                            </div>
                            <div className="profile-nav-left">
                                Archive
                            </div>
                            <div className="profile-nav-left">
                                More<i className="fas fa-sort-down"></i>
                            </div>
                        </div>
                        <div className="profile-nav-r">
                            {this.isOwner()}
                            <div className="profile-nav-right">
                                <i className="fas fa-eye"></i>
                            </div>
                            <div className="profile-nav-right">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="profile-nav-right">
                                <i className="fas fa-ellipsis-h"></i>
                            </div>   
                        </div>                                                                     
                    </div>
                </div>
                <div className="profile-post-index">
                    {posts.map(post => <PostIndexItem author={user} post={post} key={post.id} currentUser={currentUser}/>)}
                </div>
            </div>
        )
    }
}

export default Profile;