import * as FriendApiUtil from '../util/friend_api_util';

export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

const receiveFriendRequest = friendRequest => ({
    type: RECEIVE_FRIEND_REQUEST,
    friendRequest
});

const removeFriendRequest = friendRequestId => ({
    type: REMOVE_FRIEND_REQUEST,
    friendRequestId
});

export const makeFriendRequest = friendRequest => dispatch => (
    FriendApiUtil.createFriendRequest(friendRequest)
        .then(friendRequest => dispatch(receiveFriendRequest(friendRequest)))
);

export const deleteFriendRequest = friendRequestId => dispatch => (
    FriendApiUtil.deleteFriendRequest(friendRequestId)
        .then(friendRequestId => dispatch(removeFriendRequest(friendRequestId)))
);