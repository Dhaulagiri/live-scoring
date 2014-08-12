import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  gender: DS.attr('string'),
  dob: DS.attr('date'),
  slug: DS.attr('string')
});
