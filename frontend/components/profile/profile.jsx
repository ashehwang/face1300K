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
        const { posts } = this.props;

        return (
            <div>
                <h1>THIS IS FROM PROFILE OF {this.props.user.first_name}</h1>
                {posts.map(post => <PostIndexItem post={post} key={post.id} />)}
            </div>
        )
    }
}

export default Profile;