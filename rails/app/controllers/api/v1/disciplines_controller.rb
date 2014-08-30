class Api::V1::DisciplinesController < ApplicationController
  before_action :set_discipline, only: [:show, :edit, :update, :destroy]

  # GET /disciplines
  # GET /disciplines.json
  def index
    @disciplines = Discipline.all

    render json: @disciplines
  end

  # GET /disciplines/1
  # GET /disciplines/1.json
  def show

    render json: @discipline
  end

  # POST /disciplines
  # POST /disciplines.json
  def create

    @discipline = Discipline.new(discipline_params)
    if @discipline.save
      render json: @discipline, status: :created, location: @api_v1_discipline
    else
      render json: @discipline.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /disciplines/1
  # PATCH/PUT /disciplines/1.json
  def update

    if @discipline.update(discipline_params)
      head :no_content
    else
      render json: @discipline.errors, status: :unprocessable_entity
    end
  end

  # DELETE /disciplines/1
  # DELETE /disciplines/1.json
  def destroy
    @discipline.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_discipline
      @discipline = Discipline.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def discipline_params
      params.require(:discipline).permit(:name)
    end
end
