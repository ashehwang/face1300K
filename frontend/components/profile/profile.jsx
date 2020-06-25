import React from 'react';
import PostIndexItem from '../posts/post_index_item';

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUserPosts(this.props.match.params.userId);
    }

    render(){
        const { posts, user } = this.props;
    
        return (
            <>
                <div className="profile-header">
                    <div className="profile-container">
                        <div className="coverpicture">
                            <img src="https://i.ibb.co/986NN8b/1575017629323.jpg" />                    
                        </div>
                        <div className="profilepicture">
                            <img src="https://i.ibb.co/DRTq0KR/5cc28e190d41d2738de6.jpg" />
                        </div>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <p>{user.bio ? user.bio : "" }</p>
                        <a>Edit</a>
                    </div>
                    <div className="profile-nav">
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
                            More<i className="fas fa-caret-down"></i>
                        </div>
                        <div className="profile-nav-right">
                            <i className="fas fa-pencil-alt"></i>Edit Profile
                        </div>
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
                        {posts.map(post => <PostIndexItem author={user} post={post} key={post.id} />)}
            </>
        )
    }
}

export default Profile;