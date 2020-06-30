import { RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const friendsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FRIEND:
            newState[action.friend.id] = action.friend;
            return newState;
        case REMOVE_FRIEND:
            delete newState[action.friend.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default friendsReducer;