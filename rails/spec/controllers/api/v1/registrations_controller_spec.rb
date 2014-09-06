require 'rails_helper'

RSpec.describe Api::V1::RegistrationsController, :type => :controller do

  # This should return the minimal set of attributes required to create a valid
  # Registration. As you add validations to Registration, be sure to
  # adjust the attributes here as well.
  let(:event) { FactoryGirl.create(:event) }
  let(:climber) { FactoryGirl.create(:climber) }

  let(:valid_attributes) {
    {
      event_id: event.id, climber_id: climber.id
    }
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # RegistrationsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all registrations as @registrations" do
      registration = Registration.create! valid_attributes
      get :index, { :registration => valid_attributes }, valid_session
      expect(assigns(:registrations)).to eq([registration])
    end
  end

  describe "GET show" do
    it "assigns the requested registration as @registration" do
      registration = Registration.create! valid_attributes
      get :show, { event_id: registration.event.id, :id => registration.to_param }, valid_session
      expect(assigns(:registration)).to eq(registration)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new registration" do
        expect {
          post :create, { event_id: event.id, :registration => valid_attributes }, valid_session
        }.to change(Registration, :count).by(1)
      end

      it "assigns a newly created registration as @registration" do
        post :create, { event_id: event.id, :registration => valid_attributes }, valid_session
        expect(assigns(:registration)).to be_a(Registration)
        expect(assigns(:registration)).to be_persisted
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved registration as @registration" do
        # Trigger the behavior that occurs when invalid params are submitted
        allow_any_instance_of(Registration).to receive(:save).and_return(false)
        post :create, { :registration => { event_id: nil }}, valid_session
        expect(assigns(:registration)).to be_a_new(Registration)
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested Registration" do
        registration = Registration.create! valid_attributes
        # Assuming there are no other Registrations in the database, this
        # specifies that the Registration created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        allow_any_instance_of(Registration).to receive(:update).with({ "climber_id" => climber.id })
        put :update, {event_id: event.id, :id => registration.to_param, :registration => { "climber_id" => climber.id }}, valid_session
      end

      it "assigns the requested Registration as @Registration" do
        registration = Registration.create! valid_attributes
        put :update, { event_id: registration.event.id, :id => registration.to_param, :registration => valid_attributes }, valid_session
        expect(assigns(:registration)).to eq(registration)
      end
    end

    describe "with invalid params" do
      it "assigns the Registration as @Registration" do
        registration = Registration.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        allow_any_instance_of(Registration).to receive(:save).and_return(false)
        put :update, {event_id: registration.event.id, :id => registration.to_param, :registration => { ":climber_id" => nil }}, valid_session
        expect(assigns(:registration)).to eq(registration)
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested registration" do
      registration = Registration.create! valid_attributes
      expect {
        delete :destroy, {:id => registration.to_param, event_id: registration.event.id }, valid_session
      }.to change(Registration, :count).by(-1)
    end
  end

end
