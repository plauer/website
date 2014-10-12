Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  root 'welcome#index'

  get '/posts', to: "posts#index"
  get '/posts/:id', to: "posts#show", as: "post"

  get '/photos', to: "photos#index"
  get '/photos/:id', to: "photos#show", as: "photo"

  get '/resume', to: "welcome#show_resume", as: "resume"
end
