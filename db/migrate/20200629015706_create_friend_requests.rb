class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :requestor_id, null: false
      t.integer :requestee_id, null: false
      t.timestamps
    end
    add_index :friend_requests, [:requestor_id, :requestee_id], unique: true
  end
end
