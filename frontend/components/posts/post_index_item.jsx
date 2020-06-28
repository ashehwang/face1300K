import React from 'react';
import CommentShowContainer from '../comments/comment_show_container';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {

    constructor(props){
        super(props);
        this.state = { user_id: this.props.currentUser.id, post_id: this.props.post.id, body: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
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

    updateBody(e){
        this.setState({ body: e.target.value });
    }

    handleSubmit(e){
        if (e.key === "Enter") {
            e.preventDefault();
            this.props.createComment(this.state);
            this.setState({ body: "" });
        }
    }

    render() {
        const {post, deletePost, author, currentUser} = this.props;

    if (!post) {
        return null;
    }

    if (!author) {
        return null;
    }

    const prpUrl = author.profilePhotoUrl ? author.profilePhotoUrl : "https://i.ibb.co/wzjv56z/5cc28e190d41d2738de6.jpg";
    const currentUserprpUrl = currentUser.profilePhotoUrl ? currentUser.profilePhotoUrl : "https://i.ibb.co/wzjv56z/5cc28e190d41d2738de6.jpg";

    return (
        <div className="trigger-create-post-box">
            <div className="single-post-header">
                <div className="single-post-top">
                    <img src={prpUrl} alt="prof" className="post-thumb" />
                    <div className="single-post-user">
                        <Link to={`/profile/${author.id}`}><h2 className="single-post-user-h2">{author.first_name} {author.last_name}</h2></Link>
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
            <div className="single-post-comments">
                {post.comment_ids.map(comment_id => <CommentShowContainer key={comment_id} commentId={comment_id}/>)} 
            </div>
            <div className="single-post-create-comments">
                <img src={currentUserprpUrl} className="small-profile-pic"/>
                <input type="text" placeholder="Write a comment" value={this.state.body} onChange={this.updateBody} onKeyDown={this.handleSubmit}/>
            </div>       
        </div>
        )
    }
}

export default PostIndexItem;