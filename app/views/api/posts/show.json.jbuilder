json.extract! @post, :id, :user_id, :body, :created_at, :updated_at, :reference_id, :comment_ids, :liked_user_ids
json.photoUrl url_for(@post.photo) if @post.photo.attached?