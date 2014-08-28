class GenderSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :sex
end
