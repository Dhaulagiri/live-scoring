require 'rails_helper'

RSpec.describe Api::V1::CompsController, :type => :controller do

  # This should return the minimal set of attributes required to create a valid
  # Comp. As you add validations to Comp, be sure to
  # adjust the attributes here as well.

  let(:valid_attributes) {
     { name: "Test Comp", date: "2014-08-29" }
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # CompsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all comps as @comps" do
      comp = Comp.create! valid_attributes
      get :index, {}, valid_session
      expect(assigns(:comps)).to eq([comp])
    end
  end

  describe "GET show" do
    it "assigns the requested comp as @comp" do
      comp = Comp.create! valid_attributes
      get :show, {:id => comp.to_param}, valid_session
      expect(assigns(:comp)).to eq(comp)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new Comp" do
        expect {
          post :create, {:comp => valid_attributes}, valid_session
        }.to change(Comp, :count).by(1)
      end

      it "assigns a newly created comp as @comp" do
        post :create, {:comp => valid_attributes}, valid_session
        expect(assigns(:comp)).to be_a(Comp)
        expect(assigns(:comp)).to be_persisted
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved comp as @comp" do
        # Trigger the behavior that occurs when invalid params are submitted
        allow_any_instance_of(Comp).to receive(:save).and_return(false)
        post :create, {:comp => { "name" => "invalid value" }}, valid_session
        expect(assigns(:comp)).to be_a_new(Comp)
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested comp" do
        comp = Comp.create! valid_attributes
        # Assuming there are no other comps in the database, this
        # specifies that the Comp created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        allow_any_instance_of(Comp).to receive(:update).with({ "name" => "MyString" })
        put :update, {:id => comp.to_param, :comp => { "name" => "MyString" }}, valid_session
      end

      it "assigns the requested comp as @comp" do
        comp = Comp.create! valid_attributes
        put :update, {:id => comp.to_param, :comp => valid_attributes}, valid_session
        expect(assigns(:comp)).to eq(comp)
      end
    end

    describe "with invalid params" do
      it "assigns the comp as @comp" do
        comp = Comp.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        allow_any_instance_of(Comp).to receive(:save).and_return(false)
        put :update, {:id => comp.to_param, :comp => { "name" => "invalid value" }}, valid_session
        expect(assigns(:comp)).to eq(comp)
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested comp" do
      comp = Comp.create! valid_attributes
      expect {
        delete :destroy, {:id => comp.to_param}, valid_session
      }.to change(Comp, :count).by(-1)
    end
  end

end
