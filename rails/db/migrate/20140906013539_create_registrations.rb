class CreateRegistrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.references :climber, index: true
      t.references :event, index: true

      t.timestamps
    end
  end
end
