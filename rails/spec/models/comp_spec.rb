require 'rails_helper'

RSpec.describe Comp, :type => :model do
  require 'spec_helper'

  before do
    @comp = FactoryGirl.build(:comp)
  end

  subject { @comp }

  it { should respond_to(:name) }
  it { should respond_to(:date) }
  it { should respond_to(:slug) }
  it { should have_many(:events).dependent(:destroy) }

  it { should be_valid }

  describe "when name is not present" do
    before { @comp.name = nil }
    it { should_not be_valid }
  end

  describe "when date is not present" do
    before { @comp.date = nil }
    it { should_not be_valid }
  end

end
