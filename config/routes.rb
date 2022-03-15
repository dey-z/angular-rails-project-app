Rails.application.routes.draw do
  root 'angular_application#index'

  resources :targets, only: [:index]
  get 'projects', to: 'angular_application#index'
  get '/projects/add', to: 'angular_application#index'
end
