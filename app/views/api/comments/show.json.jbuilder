json.extract! @comment, :id, :post_id, :user_id, :body, :updated_at, :liked_user_ids
json.user do
    json.extract! @comment.user, :id, :first_name, :last_name
    json.profilePhotoUrl url_for(@comment.user.profile_photo) if @comment.user.profile_photo.attached?
end