class ClimberSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :first_name, :last_name, :gender, :dob, :slug
end
