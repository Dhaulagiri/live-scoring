import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  gender: DS.belongsTo('gender'),
  event: DS.belongsTo('event')
});
