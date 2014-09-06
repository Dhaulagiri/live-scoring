class Round < ActiveRecord::Base
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  def slug_candidates
    [
      [:name]
    ]
  end

  has_many :events, through: :event_rounds
  has_many :event_rounds, :autosave => true
  
  validates_presence_of :name
end
