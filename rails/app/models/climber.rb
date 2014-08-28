class Climber < ActiveRecord::Base
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  def slug_candidates
    [
      [:first_name, :last_name],
      [:first_name, :middle_name, :last_name]
    ]
  end

  validates_presence_of :first_name, :last_name, :gender
  belongs_to :gender
end
