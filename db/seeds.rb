# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    #USER SCHEMA
    # t.string "session_token", null: false
    # t.string "password_digest", null: false
    # t.string "email", null: false
    # t.string "first_name", null: false
    # t.string "last_name", null: false
    # t.date "birthday", null: false
    # t.string "gender", null: false
    # t.text "bio"
    # t.string "home_town"
    # t.string "current_city"

    # User.delete_all

    u1 = User.create!(
        email: "ashe@nyu.edu",
        password: "yuro0228",
        first_name: "Ashe",
        last_name: "Hwang",
        birthday: "1986-02-28",
        gender: "female"
    )