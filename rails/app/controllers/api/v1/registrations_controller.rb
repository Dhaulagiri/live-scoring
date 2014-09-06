class Api::V1::RegistrationsController < ApplicationController
  before_action :set_registration, only: [:show, :edit, :update, :destroy]
  before_action :set_event, :only => [:index, :create]

  # GET /registrations
  # GET /registrations.json
  def index
    @registrations = @event.registrations.to_a

    render json: @registrations
  end

  # GET /registrations/1
  # GET /registrations/1.json
  def show

    render json: @registration
  end

  # POST /registrations
  # POST /registrations.json
  def create
    @registration = @event.registrations.new(registration_params)
    if @registration.save
      render json: @registration, status: :created, location: @api_v1_registration
    else
      render json: @registration.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /registrations/1
  # PATCH/PUT /registrations/1.json
  def update

    if @registration.update(registration_params)
      head :no_content
    else
      render json: @registration.errors, status: :unprocessable_entity
    end
  end

  # DELETE /registrations/1
  # DELETE /registrations/1.json
  def destroy
    @registration.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:registration][:event_id])
    end

    def set_registration
      @registration = Registration.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def registration_params
      params.require(:registration).permit(:climber_id, :event_id)
    end
end
