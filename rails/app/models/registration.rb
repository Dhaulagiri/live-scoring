class Registration < ActiveRecord::Base
  belongs_to :climber
  belongs_to :event

  validates_presence_of :climber, :event
end
