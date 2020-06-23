import React from 'react';

const PostIndexItem = ({post, deletePost}) => (
    <li>
        {post.body}
        <img src={post.photoUrl} />
        <button onClick={() => deletePost(post.id)}>Delete Post</button>
    </li>
)

export default PostIndexItem;