class Post < ApplicationRecord
    validates :user_id, presence: true
    validates :body, presence: true
    belongs_to :user
    has_one_attached :photo
end
