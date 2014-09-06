require 'rails_helper'

RSpec.describe Event, :type => :model do
  require 'spec_helper'

  before do
    @event = FactoryGirl.build(:event)
  end

  subject { @event }

  it { should respond_to(:name) }
  it { should respond_to(:slug) }
  it { should belong_to(:comp) }
  it { should belong_to(:gender) }
  it { should belong_to(:discipline) }
  it { should have_many(:rounds).through(:event_rounds) }
  it { should have_many(:event_rounds).dependent(:destroy) }

  it { should be_valid }

  describe "when name is not present" do
    before { @event.name = nil }
    it { should_not be_valid }
  end

  describe "when comp is not present" do
    before { @event.comp = nil }
    it { should_not be_valid }
  end

  describe "when discipline is not present" do
    before { @event.discipline = nil }
    it { should_not be_valid }
  end

  describe "when gender is not present" do
    before { @event.gender = nil }
    it { should_not be_valid }
  end

end
