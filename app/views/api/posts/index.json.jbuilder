@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :user_id, :body, :updated_at
        json.photoUrl url_for(post.photo) if post.photo.attached?
    end
end