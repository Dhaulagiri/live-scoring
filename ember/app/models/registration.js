import DS from 'ember-data';

export default DS.Model.extend({
  climber: DS.belongsTo('climber'),
  event: DS.belongsTo('event')
});
