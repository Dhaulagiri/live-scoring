class ClimberSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :first_name, :middle_name, :last_name, :dob, :slug

  has_one :gender
  has_many :registrations
end
