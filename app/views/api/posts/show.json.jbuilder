json.extract! @post, :id, :user_id, :body, :created_at, :reference_id
json.photoUrl url_for(@post.photo) if @post.photo.attached?