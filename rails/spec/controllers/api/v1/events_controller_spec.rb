require 'rails_helper'

RSpec.describe Api::V1::EventsController, :type => :controller do

  # This should return the minimal set of attributes required to create a valid
  # Event. As you add validations to Event, be sure to
  # adjust the attributes here as well.
  let(:gender) { FactoryGirl.create(:gender) }
  let(:discipline) { FactoryGirl.create(:discipline) }
  let(:comp) { FactoryGirl.build(:comp) }

  let(:valid_attributes) {
    {
      name: "Test Round", comp_id: comp.id, discipline_id: discipline.id,
      gender_id: gender.id
    }
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # EventsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all events as @events" do
      event = Event.create! valid_attributes
      get :index, { comp_id: 1 }, valid_session
      expect(assigns(:events)).to eq([event])
    end
  end

  describe "GET show" do
    it "assigns the requested event as @event" do
      event = Event.create! valid_attributes
      get :show, {:id => event.to_param}, valid_session
      expect(assigns(:event)).to eq(event)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new event" do
        expect {
          post :create, {:event => valid_attributes}, valid_session
        }.to change(Event, :count).by(1)
      end

      it "assigns a newly created event as @event" do
        post :create, {:event => valid_attributes}, valid_session
        expect(assigns(:event)).to be_a(event)
        expect(assigns(:event)).to be_persisted
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved event as @event" do
        # Trigger the behavior that occurs when invalid params are submitted
        allow_any_instance_of(Event).to receive(:save).and_return(false)
        post :create, {:event => { "name" => "invalid value" }}, valid_session
        expect(assigns(:event)).to be_a_new(Event)
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested Event" do
        Event = Event.create! valid_attributes
        # Assuming there are no other Events in the database, this
        # specifies that the Event created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        allow_any_instance_of(Event).to receive(:update).with({ "name" => "MyString" })
        put :update, {:id => Event.to_param, :Event => { "name" => "MyString" }}, valid_session
      end

      it "assigns the requested Event as @Event" do
        Event = Event.create! valid_attributes
        put :update, {:id => Event.to_param, :Event => valid_attributes}, valid_session
        expect(assigns(:Event)).to eq(Event)
      end
    end

    describe "with invalid params" do
      it "assigns the Event as @Event" do
        Event = Event.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        allow_any_instance_of(Event).to receive(:save).and_return(false)
        put :update, {:id => Event.to_param, :Event => { "name" => "invalid value" }}, valid_session
        expect(assigns(:Event)).to eq(Event)
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested event" do
      event = Event.create! valid_attributes
      expect {
        delete :destroy, {:id => event.to_param}, valid_session
      }.to change(Event, :count).by(-1)
    end
  end

end
