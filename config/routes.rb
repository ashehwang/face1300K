Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index, :show, :update]
    resources :posts, only: [:index, :create, :show, :destroy, :update]
  end

end


#   namespace :api, defaults: {format: :json} do
#     resources :benches, only: [:index, :show, :create]
#     resources :reviews, only: [:create]
#     resource :user, only: [:create]
#     resource :session, only: [:create, :destroy, :show]
#     resource :favorites, only: [:create, :destroy]
#   end

#   root "static_pages#root"
# end

