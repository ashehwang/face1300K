class Api::FriendRequestsController < ApplicationController

    def create
        @friend_request = FriendRequest.new(friend_request_params)
        if @friend_request.save
            render :show
        else
            render json: @friend_request.errors, status: 422
        end
    end

    def destroy
        @friend_request = FriendRequest.find(params[:id])
        if @friend_request.destroy
            render :show
        else
            render json: @friend_request.errors, status: 422
        end
    end

    private

    def friend_request_params
        params.require(:friendRequest).permit(:requestor_id, :requestee_id)
    end

end
