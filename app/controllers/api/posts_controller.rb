class Api::PostsController < ApplicationController

    def index
        all_user_ids = User.all.pluck(:id)
        if params[:userId]
            @posts = Post.where(reference_id: params[:userId])
                        .includes(:user, comments: [:user])
            render :index
        else
            @posts = Post.includes(:user, comments: [:user]) #USED TO BE: POST.ALL
                        .where(user_id: all_user_ids)
                        .order(updated_at: :desc)
            render :index
        end
    end

    def show
        @post = Post.find_by(id: params[:id])
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if !@post.reference_id
            @post.reference_id = current_user.id
        end
        if @post.save
            render :show
        else
            render json: @post.errors, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post.destroy
            render :show
        else
            render json: @post.errors, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :photo, :reference_id)
    end

end
