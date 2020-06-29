import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const usersReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        // case RECEIVE_ALL_USERS: //can get rid of
        //     return action.users;
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_ALL_POSTS:
            if(!action.payload.users) return state;
            Object.values(action.payload.users).forEach(user => {
                if (newState[user.id]) {
                    newState[user.id] = Object.assign(user, newState[user.id]);
                } else {
                    newState[user.id] = user;
                }
            });
            return newState;
        default:
            return state;
    }
};

export default usersReducer;