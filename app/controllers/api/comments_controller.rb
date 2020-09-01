class Api::CommentsController < ApplicationController

    def index
        @post = Post.find(params[:post_id])
        @comments = @post.comments
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end 
    
    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def like
        @like = Like.new(user_id: params[:user_id], likeable_id: params[:id], likeable_type: 'Comment')
        if @like.save
        render :like
        else
        render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def unlike
        @like = Like.find_by(user_id: params[:user_id], likeable_id: params[:id], likeable_type: 'Comment')
        if @like.destroy
        render :like
        else
        render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id)
    end

end
