class Gender < ActiveRecord::Base
  validates_presence_of :name, :sex
  belongs_to :climber
end
