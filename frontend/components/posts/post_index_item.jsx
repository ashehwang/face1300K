import React from 'react';

const PostIndexItem = ({post, deletePost, author}) => (
    <div className="trigger-create-post-box">
        <div className="single-post-header">
            <div className="single-post-top">
                <img src="" alt="prof" srcset=""/>
                <div className="single-post-user">
                    <h2>{author.first_name} {author.last_name}</h2>
                    {post.updated_at.slice(0, 10)} at {post.updated_at.slice(11, 19)} <i className="fas fa-user-friends"></i>
                </div>
            </div>
            <div className="single-post-alter"><i className="fas fa-ellipsis-h" onClick={() => deletePost(post.id)}></i></div>
        </div>
        <div className="single-post-body">
            {post.body}
        </div>
        <div className="single-post-img">
            <img src={post.photoUrl} />
        </div>
        <div className="single-post-response">
            <div className="response-icon">
                <a><i className="far fa-thumbs-up">Like</i></a>
            </div>
            <div className="response-icon">
                <a><i className="far fa-comment-alt">Comment</i></a>
            </div>
        </div>        
    </div>
)

export default PostIndexItem;