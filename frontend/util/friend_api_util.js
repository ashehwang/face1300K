export const createFriendRequest = (friendRequest) => (
    $.ajax({
        method: "POST",
        url: "/api/friend_requests",
        data: { friendRequest }
    })
);

export const deleteFriendRequest = (friendRequestId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/friend_requests/${friendRequestId}`
    })
);