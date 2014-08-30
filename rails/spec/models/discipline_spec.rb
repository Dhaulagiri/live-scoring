require 'rails_helper'

RSpec.describe Discipline, :type => :model do
  require 'spec_helper'

  before do
    @discipline = FactoryGirl.build(:discipline)
  end

  subject { @discipline }

  it { should respond_to(:name) }
  it { should respond_to(:slug) }

  it { should be_valid }

  describe "when name is not present" do
    before { @discipline.name = nil }
    it { should_not be_valid }
  end

end
