class Api::UsersController < ApplicationController

    before_action :require_login, only: [:update]

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show
        end
    end

    def index
        @users = User.all 
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    private

    def user_params
        params.require(:user).permit(:password, :email, :first_name, :last_name, :birthday, :gender, :bio, :home_town, :current_city)
    end
    
end
