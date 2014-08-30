puts 'Users'
User.create([
    {email: 'brian.runnells@gmail.com',
     password: 'climb514', password_confirmation: 'climb514'}
])

puts 'Genders'
Gender.create([
  { name: 'Female', sex: 'F' },
  { name: 'Male', sex: 'M' }
])

puts 'Disciplines'
Discipline.create([
  { name: 'Bouldering' },
  { name: 'Sport Climbing' },
  { name: 'Speed Climbing' }
])

puts 'Rounds'
Round.create([
  { name: 'Qualifiers' },
  { name: 'Semi-finals' },
  { name: 'Finals' }
])
