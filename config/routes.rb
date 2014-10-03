Rails.application.routes.draw do
  root 'welcome#index'

  get '/blogs', to: 'blogs#index'
  # resources :blogs
end
