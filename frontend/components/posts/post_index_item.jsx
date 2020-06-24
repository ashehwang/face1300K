import React from 'react';

const PostIndexItem = ({post, deletePost}) => (
    <div className="trigger-create-post-box">
        {post.body}
        <img src={post.photoUrl} />
        <button onClick={() => deletePost(post.id)}>Delete Post</button>
    </div>
)

export default PostIndexItem;