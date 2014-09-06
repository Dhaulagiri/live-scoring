class CreateEventRounds < ActiveRecord::Migration
  def change
    create_table :event_rounds, :id => false do |t|
        t.references :event
        t.references :round
        t.timestamps
    end
    add_index :event_rounds, [:event_id, :round_id]
    add_index :event_rounds, :round_id

  end
end
