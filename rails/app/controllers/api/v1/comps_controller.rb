class Api::V1::CompsController < ApplicationController
  before_action :set_comp, only: [:show, :edit, :update, :destroy]

  # GET /comps
  # GET /comps.json
  def index
    @comps = Comp.all

    render json: @comps
  end

  # GET /comps/1
  # GET /comps/1.json
  def show

    render json: @comp
  end

  # POST /comps
  # POST /comps.json
  def create

    @comp = Comp.new(comp_params)
    if @comp.save
      render json: @comp, status: :created, location: @api_v1_comp
    else
      render json: @comp.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comps/1
  # PATCH/PUT /comps/1.json
  def update

    if @comp.update(comp_params)
      head :no_content
    else
      render json: @comp.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comps/1
  # DELETE /comps/1.json
  def destroy
    @comp.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comp
      @comp = Comp.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comp_params
      params.require(:comp).permit(:name, :date)
    end
end
