import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const { posts, deletePost } = this.props;
        return(
            <div className="post-index-box">
                <ul> All my posts
                    {posts.map(post => <PostIndexItem key={post.id} post={post} deletePost={deletePost}/>)}
                </ul>
            </div>
        )
    }
}

export default PostIndex;