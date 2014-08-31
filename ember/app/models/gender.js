import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sex: DS.attr('string'),
  climber: DS.belongsTo('climber')
  // ,
  // event: DS.belongsTo('event'),
});
