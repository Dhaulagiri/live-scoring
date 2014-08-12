import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  gender: DS.attr('string'),
  dob: DS.attr('date'),
  slug: DS.attr('string'),
  full_name: function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name')
});
