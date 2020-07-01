# json.users do 
#     json.set! @user.id do
#         json.extract! @user, :id, :first_name, :last_name, :birthday, :gender, :bio, :home_town, :current_city, :email, :friend_ids
#         json.coverPhotoUrl url_for(@user.cover_photo) if @user.cover_photo.attached?
#         json.profilePhotoUrl url_for(@user.profile_photo) if @user.profile_photo.attached?
#         json.sentFriendRequests @user.sent_friend_request_ids
#         json.receivedFriendRequests @user.received_friend_request_ids
#     end

#     @user.received_friend_requests.each do |request|
#         json.set! request.requestor_id do
#             json.extract! request.requestor, :first_name, :last_name, :id
#         end
#     end
# end


# json.friendRequests do
#     @user.received_friend_requests.each do |request|
#         json.set! request.id do
#             json.extract! request, :id, :requestor_id, :requestee_id
#         end
#     end
    
#     @user.sent_friend_requests.each do |request|
#         json.set! request.id do
#             json.extract! request, :id, :requestor_id, :requestee_id
#         end
#     end
# end

# json.session do 
#     json.extract! @user, :id
# end

json.partial! '/api/users/user', user: @user
json.partial! '/api/users/user', user: @current_user