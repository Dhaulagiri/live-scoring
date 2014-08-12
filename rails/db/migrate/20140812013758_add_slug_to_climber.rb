class AddSlugToClimber < ActiveRecord::Migration
  def change
    add_column :climbers, :slug, :string
    add_index :climbers, :slug, unique: true
  end
end
