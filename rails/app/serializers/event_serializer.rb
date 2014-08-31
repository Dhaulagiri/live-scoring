class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :slug
  has_one :comp
  has_one :discipline
  has_one :gender
end
