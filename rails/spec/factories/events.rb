# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :event do
    name "MyString"
    slug "MyString"
    comp
    discipline
    gender
  end
end
