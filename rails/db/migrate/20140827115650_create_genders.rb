class CreateGenders < ActiveRecord::Migration
  def change
    create_table :genders do |t|
      t.string :name
      t.string :sex

      t.timestamps
    end
  end
end
