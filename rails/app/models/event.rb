class Event < ActiveRecord::Base
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  def slug_candidates
    [
      [:name]
    ]
  end

  belongs_to :comp
  belongs_to :discipline
  belongs_to :gender
  has_many :rounds, through: :event_rounds
  has_many :event_rounds, dependent: :destroy
  has_many :registrations, dependent: :destroy

  validates_presence_of :comp, :discipline, :gender, :name
end
