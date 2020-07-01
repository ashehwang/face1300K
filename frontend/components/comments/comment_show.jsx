import React from 'react'
import { Link } from 'react-router-dom';

class CommentShow extends React.Component {

    constructor(props){
        super(props);
    }

    isAuthor(){
        if ( this.props.comment.user.id === this.props.currentUser.id ) {
            return (
                <span>&middot;<span className="comment-delete" onClick={() => this.props.deleteComment(this.props.comment.id)}> Delete</span></span>
            )
        } else {
            return null;
        }
    }

    render(){

        const { currentUser, comment } = this.props;
        const prpUrl = comment.user.profilePhotoUrl ? comment.user.profilePhotoUrl : "https://i.ibb.co/DRTq0KR/5cc28e190d41d2738de6.jpg";

        if (!comment || !currentUser) {
            return null;
        }

        return(
            <div className="comment-box-flex">
                <img src={prpUrl} className="small-profile-pic"/>
                <div className="comment-right">
                    <div className="comment-main">
                        <Link to={`/profile/${comment.user.id}`}><h1 className="comment-main-name">{comment.user.first_name} {comment.user.last_name}</h1></Link>
                        <p>{comment.body}</p>
                    </div>
                    <div className="comment-buttons">Like {this.isAuthor()}</div>
                </div>
            </div>
        )
    }
}

export default CommentShow;