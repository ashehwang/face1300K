class Api::PostsController < ApplicationController

    def index
        if params[:userId]
            @posts = Post.where(reference_id: params[:userId])
        else
            @posts = Post.all
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
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :photo, :reference_id)
    end

end
