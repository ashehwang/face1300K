import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
});

export const signup = (user) => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
        err => {
            dispatch(receiveErrors(err.responseJSON))
        }
    )
);

export const login = (user) => dispatch => (
    APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
        err => dispatch(receiveErrors(err.responseJSON)))
); /*{email: "email already used", birthday: "need birthday"} */

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(user => dispatch(logoutCurrentUser()))
);

export const loginDemoUser = () => dispatch => (
    APIUtil.login({ email: "ahriteemo@aa.io", password: "12345678" })
        .then(user => dispatch(receiveCurrentUser(user)))
);