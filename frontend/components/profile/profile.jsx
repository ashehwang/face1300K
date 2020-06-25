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
            <div className="profile-container">
                <div className="coverpicture">
                    <img src="https://i.ibb.co/986NN8b/1575017629323.jpg"/>                    
                </div>
                <h1>THIS IS FROM PROFILE OF {user.first_name}</h1>
                {posts.map(post => <PostIndexItem author={user} post={post} key={post.id} />)}
            </div>
        )
    }
}

export default Profile;