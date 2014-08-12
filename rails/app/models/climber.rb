class Climber < ActiveRecord::Base
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  def slug_candidates
    [
      [:first_name, :last_name]
    ]
  end

  validates_presence_of :first_name, :last_name, :gender

end
