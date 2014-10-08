Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  
  root 'welcome#index'
  resources :posts 

  # get '/posts', to: 'posts#index'
  # get '/posts/new', to: 'posts#new'

end
