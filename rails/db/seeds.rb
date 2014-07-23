# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts 'DEFAULT USERS'
user_list = [
	['Brian Runnells', 'brian.runnells@gmail.com', 'climb514', 'admin'],
]
user_list.each do |name, email, password, role|
  user = User.find_or_create_by_name name: name, email: email, password: password, password_confirmation: password
  puts 'user: ' << user.name
  user.add_role role
end

puts 'Disciplines'
disciplines = ['Bouldering', 'Sport Climbing', 'Speed Climbing']
disciplines.each do |name|
  discipline = Discipline.create(name: name)
end
