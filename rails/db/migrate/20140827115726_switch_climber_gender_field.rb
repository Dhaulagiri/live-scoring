class SwitchClimberGenderField < ActiveRecord::Migration
  def change
    remove_column :climbers, :gender
    add_reference :climbers, :gender
  end
end
