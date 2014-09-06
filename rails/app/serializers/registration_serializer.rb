class RegistrationSerializer < ActiveModel::Serializer
  embed :ids, include: true
  
  attributes :id
  has_one :climber
  has_one :event
end
