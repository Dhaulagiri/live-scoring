Rails.application.routes.draw do


  devise_for :users, controllers: { sessions: 'sessions' }

  namespace :api do
      namespace :v1 do
        resources :climbers, except: [:new, :edit]
        resources :comps, except: [:new, :edit]
        resources :genders, only: [:index]
        resources :disciplines, only: [:index]
        resources :rounds, only: [:index]
      end
    end
end
