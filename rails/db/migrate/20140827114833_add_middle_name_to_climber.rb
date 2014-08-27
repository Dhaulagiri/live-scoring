class AddMiddleNameToClimber < ActiveRecord::Migration
  def change
    add_column :climbers, :middle_name, :string
  end
end
