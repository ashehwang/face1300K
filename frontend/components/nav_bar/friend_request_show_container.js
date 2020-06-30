import FriendRequestShow from './friend_request_show';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    if(!ownProps.friendRequest) return {};
    
    return {
    friendRequest: ownProps.friendRequest,
    currentUser: state.entities.users[state.session.id],
    requestor: state.entities.users[ownProps.friendRequest.requestor_id]
}};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(FriendRequestShow);