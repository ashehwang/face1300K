class Addanothercolumn < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :reference_id, :integer, null: false
  end
end
