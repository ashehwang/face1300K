import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const { posts, deletePost, openModal, currentUser } = this.props;

        return(
            <div className="post-index-box">
                <div className="trigger-create-post-box">
                    <div className="trigger-top">
                        <input type="text" placeholder={`What's on your mind, ${currentUser.first_name}?`}/>
                    </div>
                    <ul className="trigger-bottom">
                        <li><i className="fas fa-video"></i>Live Video</li>
                        <li><i className="fas fa-photo-video"></i>Photo/Video</li>
                        <li><i className="fas fa-laugh-wink"></i>Feeling/Activity</li>
                    </ul>
                </div>
                <div className="create-post-modal">
                    <button onClick={() => openModal('createpost')}>Create MODAL Post</button>
                </div>
                <ul> All my posts
                    {posts.map(post => <PostIndexItem key={post.id} post={post} deletePost={deletePost}/>)}
                </ul>
            </div>
        )
    }
}

export default PostIndex;