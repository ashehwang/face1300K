import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER ="RECEIVE_USER";

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = payload => ({
    type: RECEIVE_USER,
    payload
});

export const fetchAllUsers = () => dispatch => (
    UserApiUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const editUser = (formData, userId) => dispatch => (
    UserApiUtil.editUser(formData, userId)
        .then(payload => dispatch(receiveUser(payload)))
);