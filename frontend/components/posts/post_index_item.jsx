import React from 'react';

class PostIndexItem extends React.Component {

    constructor(props){
        super(props);
    }

    imgExists(){
        if(this.props.post.photoUrl){
            return (
            <div className="single-post-img">
                <img src={this.props.post.photoUrl} />
            </div>
            )
        } else {
            return null;
        }
    };

    render() {
        const {post, deletePost, author} = this.props;

    if (!post) {
        return null;
    }

    if (!author) {
        return null;
    }

    console.log(post)
    return (
        <div className="trigger-create-post-box">
            <div className="single-post-header">
                <div className="single-post-top">
                    <img src="" alt="prof" />
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
            {this.imgExists()}
            <div className="single-post-response">
                <div className="response-icon">
                    <a><i className="far fa-thumbs-up"></i>Like</a>
                </div>
                <div className="response-icon">
                    <a><i className="far fa-comment-alt"></i>Comment</a>
                </div>
            </div>        
        </div>)
    }
}

export default PostIndexItem;