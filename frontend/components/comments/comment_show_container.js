import { connect } from 'react-redux';
import CommentShow from './comment_show';
import { deleteComment, likeComment, unlikeComment } from '../../actions/comment_action';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: state.entities.comments[ownProps.commentId]
});

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    likeComment: commentLike => dispatch(likeComment(commentLike)),
    unlikeComment: commentLike => dispatch(unlikeComment(commentLike))
});

export default connect(mSTP, mDTP)(CommentShow);