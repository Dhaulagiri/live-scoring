require 'rails_helper'

RSpec.describe Registration, :type => :model do
  require 'spec_helper'

  before do
    @registration = FactoryGirl.build(:registration)
  end

  subject { @registration }

  it { should belong_to(:event) }
  it { should belong_to(:climber) }

  it { should be_valid }

  describe "when event is not present" do
    before { @registration.event = nil }
    it { should_not be_valid }
  end

  describe "when climber is not present" do
    before { @registration.climber = nil }
    it { should_not be_valid }
  end

end
