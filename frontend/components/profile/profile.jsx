import React from 'react';
import PostIndexItem from '../posts/post_index_item';
import NavBarContainer from '../nav_bar/nav_bar_container';

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

    componentDidUpdate(prevProps) {
        if (this.props.user !== undefined && prevProps.user !== undefined) {
            if (this.props.user.id !== prevProps.user.id) {
                this.props.fetchUserPosts(this.props.match.params.userId);
            }
        }
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

    unfriend(){
        if (!this.props.currentUser || !this.props.user) return null;
        if (this.props.currentUser.friendship_ids.includes(this.props.user.id)) {

            let friendId;
            this.props.friends.forEach(ele => {
                if (ele.user_id === this.props.user.id) friendId = ele.id;
            });

            return (
                <div className="profile-nav-right" onClick={ () => this.props.deleteFriend(friendId)}>
                    <i className="fas fa-user-times"></i> Unfriend
                </div>
            )
        } else {
            return(
                <div className="profile-nav-right">
                    <i className="fas fa-ice-cream"></i>
                </div>
            )
        }
    }

    isOwner(){
        if (!this.props.currentUser || !this.props.user) return null;

        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className="profile-nav-right" onClick={() => this.props.openModal('edituser')}>
                    <i className="fas fa-pencil-alt"></i> Edit Profile
                </div>
            )
        } else if (this.props.currentUser.sentFriendRequests.includes(this.props.user.id)) {
            return(
                <div className="profile-nav-right" >
                    <i className="fas fa-hourglass-half"></i> Friend Request sent!
                </div>
            )
        } else if (this.props.currentUser.friendship_ids.includes(this.props.user.id)) {
            return(
                <div className="profile-nav-right">
                    <i className="fas fa-user-check"></i> Friend
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
        
        const { posts, user, currentUser, deletePost, users, createComment, openModal, likePost, unlikePost } = this.props;
        if (!user || !posts) return null;
        const prpUrl = currentUser.profilePhotoUrl ? currentUser.profilePhotoUrl : "https://i.ibb.co/wzjv56z/5cc28e190d41d2738de6.jpg";
        const placeHolder = currentUser.id === user.id ? `What's on your mind, ${currentUser.first_name}?` : `Write something to ${user.first_name}...`
    
        return (
            <>
                <NavBarContainer />
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
                                {this.unfriend()}
                                <div className="profile-nav-right">
                                    <i className="fas fa-search"></i>
                                </div>
                                <div className="profile-nav-right">
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>   
                            </div>                                                                     
                        </div>
                    </div>
                    <div className="profile-middle"> 
                        <div className="profile-details">
                            <div><h1>Intro</h1></div>
                            <div><i className="fas fa-house-user"></i><span>Home Town: </span> {user.home_town}</div>
                            <div><i className="fas fa-map-marker-alt"></i><span>Current City: </span> {user.current_city}</div>
                            <div className="trigger-edit-profile" onClick={() => this.props.openModal('edituser')} ><span>Edit</span></div>
                        </div>
                        <div className="profile-walls">
                            <div className="trigger-create-post-box" onClick={() => this.props.openModal('createpost', user.id)} >
                                <div className="trigger-top">
                                    <img src={prpUrl} className="post-thumb2" />
                                    <input type="text" placeholder={placeHolder} />
                                </div>
                                <ul className="trigger-bottom">
                                    <li className="wall"><i className="fas fa-video"></i>Live Video</li>
                                    <li className="wall"><i className="fas fa-photo-video"></i>Photo/Video</li>
                                    <li className="wall"><i className="fas fa-laugh-wink"></i>Feeling/Activity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="profile-post-index">
                        {posts.reverse().map(post => <PostIndexItem createComment={createComment} deletePost={deletePost} author={users[post.user_id]} post={post} key={post.id} currentUser={currentUser} openModal={openModal} likePost={likePost} unlikePost={unlikePost}/>)}
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;