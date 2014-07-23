require 'rails_helper'

RSpec.describe Api::V1::ClimbersController, :type => :controller do

  # This should return the minimal set of attributes required to create a valid
  # Climber. As you add validations to Climber, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
     { first_name: "Test", last_name: "Climber", gender: "M" }
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # ClimbersController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all climbers as @climbers" do
      climber = Climber.create! valid_attributes
      get :index, {}, valid_session
      assigns(:climbers).should eq([climber])
    end
  end

  describe "GET show" do
    it "assigns the requested climber as @climber" do
      climber = Climber.create! valid_attributes
      get :show, {:id => climber.to_param}, valid_session
      assigns(:climber).should eq(climber)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new Climber" do
        expect {
          post :create, {:climber => valid_attributes}, valid_session
        }.to change(Climber, :count).by(1)
      end

      it "assigns a newly created climber as @climber" do
        post :create, {:climber => valid_attributes}, valid_session
        assigns(:climber).should be_a(Climber)
        assigns(:climber).should be_persisted
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved climber as @climber" do
        # Trigger the behavior that occurs when invalid params are submitted
        Climber.any_instance.stub(:save).and_return(false)
        post :create, {:climber => { "first_name" => "invalid value" }}, valid_session
        assigns(:climber).should be_a_new(Climber)
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested climber" do
        climber = Climber.create! valid_attributes
        # Assuming there are no other climbers in the database, this
        # specifies that the Climber created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        Climber.any_instance.should_receive(:update).with({ "first_name" => "MyString" })
        put :update, {:id => climber.to_param, :climber => { "first_name" => "MyString" }}, valid_session
      end

      it "assigns the requested climber as @climber" do
        climber = Climber.create! valid_attributes
        put :update, {:id => climber.to_param, :climber => valid_attributes}, valid_session
        assigns(:climber).should eq(climber)
      end
    end

    describe "with invalid params" do
      it "assigns the climber as @climber" do
        climber = Climber.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Climber.any_instance.stub(:save).and_return(false)
        put :update, {:id => climber.to_param, :climber => { "first_name" => "invalid value" }}, valid_session
        assigns(:climber).should eq(climber)
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested climber" do
      climber = Climber.create! valid_attributes
      expect {
        delete :destroy, {:id => climber.to_param}, valid_session
      }.to change(Climber, :count).by(-1)
    end
  end

end
