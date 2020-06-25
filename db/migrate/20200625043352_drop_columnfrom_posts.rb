class DropColumnfromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :reference_id
  end
end
