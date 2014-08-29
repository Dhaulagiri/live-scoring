class CreateComps < ActiveRecord::Migration
  def change
    create_table :comps do |t|
      t.string :name
      t.date :date
      t.string :slug

      t.timestamps
    end
  end
end
