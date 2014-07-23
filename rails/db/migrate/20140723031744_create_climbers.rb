class CreateClimbers < ActiveRecord::Migration
  def change
    create_table :climbers do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.date :dob

      t.timestamps
    end
  end
end
