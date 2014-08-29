# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :climber do
    first_name "MyString"
    last_name "MyString"
    dob "2014-07-22"
    slug "MyString"
    gender
  end
end
