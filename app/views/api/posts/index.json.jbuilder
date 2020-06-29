json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.extract! post, :id, :user_id, :body, :updated_at, :reference_id, :comment_ids
            json.photoUrl url_for(post.photo) if post.photo.attached?
        end
    end
end

@posts.each do |post|
    json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do 
                json.extract! comment, :id, :user_id, :post_id, :body
                json.user do
                    json.extract! comment.user, :id, :first_name, :last_name
                    json.profilePhotoUrl url_for(comment.user.profile_photo) if comment.user.profile_photo.attached?
                end
            end
        end
    end
end

# payload {
#     posts: {1: {postid1}, 2: {post2}...},
#     comments: { 12: {} }
# }

# entities {posts: {}, comments: {} ...}

#  {
#      user: {} //users reducer

#      questions: {} // questions reducer

#      answers: {} //answers reducer
#  }

#  RECEIVE_USER :

#  {payload: {
#      user: 

#      questions:

#      answers:
#  }}