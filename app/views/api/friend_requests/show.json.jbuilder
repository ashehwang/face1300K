
json.friendRequest do
    json.extract! @friend_request, :requestor_id, :requestee_id, :id
end

json.user do
    json.set! @friend_request.requestor.id do
        json.extract! @friend_request.requestor, :first_name, :last_name
    end
end