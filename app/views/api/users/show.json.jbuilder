json.extract! @user, :id, :first_name, :last_name, :birthday, :gender, :bio, :home_town, :current_city, :email
json.coverPhotoUrl url_for(@user.cover_photo) if @user.cover_photo.attached?
json.profilePhotoUrl url_for(@user.profile_photo) if @user.profile_photo.attached?
json.sentFriendshipRequests @user.sent_friend_request_ids
json.receivedFriendshipRequests @user.received_friend_request_ids