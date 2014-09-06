Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: 'sessions' }

  namespace :api do
      namespace :v1 do
        resources :genders, only: [:index]
        resources :disciplines, only: [:index]
        resources :rounds, only: [:index]

        resources :climbers, except: [:new, :edit]
        resources :events, except: [:new, :edit]
        resources :comps, except: [:new, :edit]

      end
    end
end
