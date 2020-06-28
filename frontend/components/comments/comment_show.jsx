import React from 'react'
import { deleteComment } from '../../util/comment_api_util';

class CommentShow extends React.Component {

    constructor(props){
        super(props);
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
                        <h1>{comment.user.first_name} {comment.user.last_name}</h1>
                        <p>{comment.body}</p>
                    </div>
                    <div className="comment-buttons">Like &middot;<span onClick={()=> deleteComment(comment.id)}>Delete</span></div>
                </div>
            </div>
        )
    }
}

export default CommentShow;