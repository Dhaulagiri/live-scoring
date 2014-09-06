require 'rails_helper'

RSpec.describe Climber, :type => :model do
  require 'spec_helper'

  before do
    @climber = FactoryGirl.build(:climber)
  end

  subject { @climber }

  it { should respond_to(:first_name) }
  it { should respond_to(:middle_name) }
  it { should respond_to(:last_name) }
  it { should respond_to(:gender) }
  it { should respond_to(:dob) }
  it { should respond_to(:slug) }
  it { should have_many(:registrations) }

  it { should be_valid }

  describe "when first_name is not present" do
    before { @climber.first_name = nil }
    it { should_not be_valid }
  end

  describe "when last_name is not present" do
    before { @climber.last_name = nil }
    it { should_not be_valid }
  end

  describe "when gender is not present" do
    before { @climber.gender = nil }
    it { should_not be_valid }
  end

end
