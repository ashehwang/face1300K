class Post < ApplicationRecord
    
    validates :user_id, :body, presence: true

    belongs_to :user
    has_one_attached :photo
    
    has_many :comments,
    dependent: :destroy
end
