Rails.application.routes.draw do
  root 'angular_application#index'

  # routes for ajax/rest api calls from angular services
  namespace :ajax do
    resources :targets
  end

  # replicate angular routes here
  get 'projects', to: 'angular_application#index'
  get '/projects/add', to: 'angular_application#index'
end
