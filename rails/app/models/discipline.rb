class Discipline < ActiveRecord::Base
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  def slug_candidates
    [
      [:name]
    ]
  end
  
  validates_presence_of :name
end
