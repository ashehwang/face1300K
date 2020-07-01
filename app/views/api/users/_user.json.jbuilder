json.users do 
    json.set! user.id do
        json.extract! user, :id, :first_name, :last_name, :birthday, :gender, :bio, :home_town, :current_city, :email, :friendship_ids, :friend_ids
        json.coverPhotoUrl url_for(user.cover_photo) if user.cover_photo.attached?
        json.profilePhotoUrl url_for(user.profile_photo) if user.profile_photo.attached?
        json.sentFriendRequests user.sent_friend_requests.pluck(:requestee_id)
        json.receivedFriendRequests user.received_friend_request_ids
    end

    user.received_friend_requests.each do |request|
        json.set! request.requestor_id do
            json.extract! request.requestor, :first_name, :last_name, :id
            json.profilePhotoUrl url_for(request.requestor.profile_photo) if request.requestor.profile_photo.attached?
        end
    end

    user.friendships.each do |friend|
        json.set! friend.id do
            json.extract! friend, :first_name, :last_name, :id
            json.profilePhotoUrl url_for(friend.profile_photo) if friend.profile_photo.attached?
        end
    end
end


json.friendRequests do
    user.received_friend_requests.each do |request|
        json.set! request.id do
            json.extract! request, :id, :requestor_id, :requestee_id
        end
    end
    
    user.sent_friend_requests.each do |request|
        json.set! request.id do
            json.extract! request, :id, :requestor_id, :requestee_id
        end
    end
end

json.session do 
    json.extract! user, :id
end