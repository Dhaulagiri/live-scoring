class EventSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name, :slug
  has_one :comp
  has_one :discipline
  has_one :gender
  has_many :rounds
end
