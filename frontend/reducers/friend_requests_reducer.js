import { RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from '../actions/friend_actions';

const friendRequestsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_FRIEND_REQUEST:
            newState[action.friendRequest.id] = action.friendRequest;
            return newState;
        case REMOVE_FRIEND_REQUEST:
            delete newState[action.friendRequestId];
            return newState;
        default:
            return state;
    }
};

export default friendRequestsReducer;