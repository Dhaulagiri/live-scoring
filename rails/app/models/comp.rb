class Comp < ActiveRecord::Base
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  def slug_candidates
    [
      [:name, :date]
    ]
  end

  validates_presence_of :name, :date
end
