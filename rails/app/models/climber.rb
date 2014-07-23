class Climber < ActiveRecord::Base

  validates_presence_of :first_name, :last_name, :gender

end
