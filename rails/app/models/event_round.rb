class EventRound < ActiveRecord::Base
  belongs_to :event
  belongs_to :round
end
