import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const { posts, deletePost, openModal } = this.props;

        return(
            <div className="post-index-box">
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