require 'rails_helper'

RSpec.describe Round, :type => :model do
  require 'spec_helper'

before do
  @round = FactoryGirl.build(:round)
end

subject { @round }

it { should respond_to(:name) }
it { should respond_to(:slug) }

it { should be_valid }

describe "when name is not present" do
  before { @round.name = nil }
  it { should_not be_valid }
end

end
