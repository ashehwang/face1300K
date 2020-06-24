import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchAllUsers();
    }

    render() {
        const { posts, deletePost, openModal, currentUser, users } = this.props;

        return(
            <div className="post-index-box">
                <div className="trigger-create-post-box">
                    <div className="trigger-top">
                        <input onClick={() => openModal('createpost')} type="text" placeholder={`What's on your mind, ${currentUser.first_name}?`}/>
                    </div>
                    <ul className="trigger-bottom">
                        <li><i className="fas fa-video"></i>Live Video</li>
                        <li><i className="fas fa-photo-video"></i>Photo/Video</li>
                        <li><i className="fas fa-laugh-wink"></i>Feeling/Activity</li>
                    </ul>
                </div>
                <div> All my posts
                    {posts.map(post => <PostIndexItem author={users[post.user_id]} key={post.id} post={post} deletePost={deletePost}/>)}
                </div>
            </div>
        )
    }
}

export default PostIndex;