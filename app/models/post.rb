class Post < ApplicationRecord
    
    validates :user_id, :body, presence: true

    belongs_to :user
    has_one_attached :photo
    
    has_many :comments,
    dependent: :destroy

    has_many :likes,
    as: :likeable,
    dependent: :destroy
    
end