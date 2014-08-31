class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :slug
      t.references :comp, index: true
      t.references :discipline, index: true
      t.references :gender, index: true

      t.timestamps
    end
  end
end
