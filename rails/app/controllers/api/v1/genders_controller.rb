class Api::V1::GendersController < ApplicationController
  # GET /genders
  # GET /genders.json
  def index
    @genders = Gender.all

    render json: @genders
  end

end
