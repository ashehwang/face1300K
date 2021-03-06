class User < ApplicationRecord

    validates :email, :first_name, :last_name, :gender, :birthday, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :posts
    has_many :comments
    has_one_attached :profile_photo
    has_one_attached :cover_photo

    has_many :sent_friend_requests,
    foreign_key: :requestor_id,
    class_name: :FriendRequest

    has_many :received_friend_requests,
    foreign_key: :requestee_id,
    class_name: :FriendRequest 

    has_many :friends,
    foreign_key: :friend_id,
    class_name: :Friend

    has_many :friendships,
    through: :friends,
    source: :friend

    has_many :likes

    has_many :liked_comments,
    through: :likes,
    source: :likeable,
    source_type: "Comment"

    has_many :liked_posts,
    through: :likes,
    source: :likeable,
    source_type: "Post"

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
