import DS from 'ember-data';

export default DS.Model.extend(Ember.Validations.Mixin, {
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  gender: DS.attr('string'),
  dob: DS.attr('date'),
  slug: DS.attr('string'),

  fullName: function() {
    // TODO - This seems necessary on new records
    // Try to figure out a different way of handling this
    var firstName = this.get('firstName') ? this.get('firstName') : '';
    var lastName = this.get('lastName') ? this.get('lastName') : '';

    return firstName + " " + lastName;
  }.property('firstName', 'lastName'),

  validations: {
      firstName: {
        presence: true
      },
      lastName: {
        presence: true
      }
    }
});
