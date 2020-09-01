Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index, :show, :update] do
      collection do
        get "search"
      end
    end
    resources :posts, only: [:index, :create, :show, :destroy, :update] do
      resources :comments, only: [:index]
      member do
        post :like, to: 'posts#like', as: 'like'
        post :unlike, to: 'posts#unlike', as: 'unlike'
      end
    end
    resources :comments, only: [:destroy, :update, :create] do
      member do 
        post :like, to: 'comments#like', as: 'like'
        post :unlike, to: 'comments#unlike', as: 'unlike'
      end
    end
    resources :friend_requests, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy]
    # get "users/search", to: "users#search" 
  end

end