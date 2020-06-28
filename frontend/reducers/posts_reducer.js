import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT } from '../actions/comment_action';

const postsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_ALL_POSTS:
            if(!action.payload.posts) return {};
            return action.payload.posts;
        case RECEIVE_POST:
            newState[action.post.id] = action.post;
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_COMMENT: 
            newState[action.comment.post_id].comment_ids.push(action.comment.id);
            return newState;
        default:
            return state;
    }
};

export default postsReducer;