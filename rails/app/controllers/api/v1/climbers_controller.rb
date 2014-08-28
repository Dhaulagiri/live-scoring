class Api::V1::ClimbersController < ApplicationController
  before_action :set_climber, only: [:show, :edit, :update, :destroy]

  # GET /climbers
  # GET /climbers.json
  def index
    @climbers = Climber.all

    render json: @climbers
  end

  # GET /climbers/1
  # GET /climbers/1.json
  def show

    render json: @climber
  end

  # POST /climbers
  # POST /climbers.json
  def create

    @climber = Climber.new(climber_params)
    if @climber.save
      render json: @climber, status: :created, location: @api_v1_climber
    else
      render json: @climber.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /climbers/1
  # PATCH/PUT /climbers/1.json
  def update

    if @climber.update(climber_params)
      head :no_content
    else
      render json: @climber.errors, status: :unprocessable_entity
    end
  end

  # DELETE /climbers/1
  # DELETE /climbers/1.json
  def destroy
    @climber.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_climber
      @climber = Climber.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def climber_params
      params.require(:climber).permit(:first_name, :middle_name, :last_name, :dob, :gender_id)
    end
end
