Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  root 'welcome#index'

  get '/posts', to: "posts#index"
  get '/posts/:id', to: "posts#show", as: "post"


end
