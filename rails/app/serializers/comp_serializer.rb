class CompSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name, :date, :slug

  has_many :events
end
