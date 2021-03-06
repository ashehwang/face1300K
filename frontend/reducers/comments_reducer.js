import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const commentsReducer = (state = {} , action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_ALL_POSTS:
            if(!action.payload.comments) return {};
            return action.payload.comments;
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.comment.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default commentsReducer;