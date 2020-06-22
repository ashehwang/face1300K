class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birthday, null: false
      t.string :gender, null: false
      t.text :bio
      t.string :home_town
      t.string :current_city

      t.timestamps
    end

    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
