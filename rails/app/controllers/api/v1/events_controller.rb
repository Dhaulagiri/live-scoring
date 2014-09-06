class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :set_comp, :only => [:index, :create]

  # GET /events
  # GET /events.json
  def index
    @events = @comp.events.to_a

    render json: @events
  end

  # GET /events/1
  # GET /events/1.json
  def show

    render json: @event
  end

  # POST /events
  # POST /events.json
  def create
    @event = @comp.events.new(event_params)
    if @event.save
      render json: @event, status: :created, location: @api_v1_event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update

    if @event.update(event_params)
      head :no_content
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comp
      @comp = Comp.find(params[:event][:comp_id])
    end

    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      # TODO - Allow rounds through here for HABTM relationship
      params.require(:event).permit(:name, :comp_id, :discipline_id, :gender_id)
    end
end
