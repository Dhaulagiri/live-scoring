require 'rails_helper'

RSpec.describe Gender, :type => :model do
  require 'spec_helper'

  before do
    @gender = FactoryGirl.build(:gender)
  end

  subject { @gender }

  it { should respond_to(:sex) }
  it { should respond_to(:name) }

  it { should be_valid }

  describe "when sex is not present" do
    before { @gender.sex = nil }
    it { should_not be_valid }
  end

  describe "when name is not present" do
    before { @gender.name = nil }
    it { should_not be_valid }
  end

end
