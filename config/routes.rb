Rails.application.routes.draw do
  root 'angular_application#index'

  get '/projects', to: 'angular_application#index'
end
