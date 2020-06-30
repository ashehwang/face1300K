import FriendRequestShow from './friend_request_show';
import { connect } from 'react-redux';
import { deleteFriendRequest, createFriend } from '../../actions/friend_actions';
import { createMutualFriend } from '../../util/friend_api_util';


const mSTP = (state, ownProps) => {
    if(!ownProps.friendRequest) return {};

    return {
    friendRequest: ownProps.friendRequest,
    currentUser: state.entities.users[state.session.id],
    requestor: state.entities.users[ownProps.friendRequest.requestor_id]
}};

const mDTP = dispatch => ({
    deleteFriendRequest: friendRequestId => dispatch(deleteFriendRequest(friendRequestId)),
    createFriend: friend => dispatch(createFriend(friend)),
    createMutualFriend: friend => createMutualFriend(friend)
});

export default connect(mSTP, mDTP)(FriendRequestShow);