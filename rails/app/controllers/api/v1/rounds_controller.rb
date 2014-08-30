class Api::V1::RoundsController < ApplicationController
  before_action :set_round, only: [:show, :edit, :update, :destroy]

  # GET /rounds
  # GET /rounds.json
  def index
    @rounds = Round.all

    render json: @rounds
  end

  # GET /rounds/1
  # GET /rounds/1.json
  def show

    render json: @round
  end

  # POST /rounds
  # POST /rounds.json
  def create

    @round = Round.new(round_params)
    if @round.save
      render json: @round, status: :created, location: @api_v1_round
    else
      render json: @round.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rounds/1
  # PATCH/PUT /rounds/1.json
  def update

    if @round.update(round_params)
      head :no_content
    else
      render json: @round.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rounds/1
  # DELETE /rounds/1.json
  def destroy
    @round.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_round
      @round = Round.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def round_params
      params.require(:round).permit(:name)
    end
end
