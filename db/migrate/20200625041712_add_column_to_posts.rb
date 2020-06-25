class AddColumnToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :reference_id, :integer, default: 3, null: false
  end
end
