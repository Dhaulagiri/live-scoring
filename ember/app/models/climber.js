import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend(Ember.Validations.Mixin, {
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  gender: DS.belongsTo('gender'),
  dob: DS.attr('date'),
  slug: DS.attr('string'),
  registrations: DS.hasMany('registration'),

  // To identify html tag for a Climber.
  htmlID: function() {
    return 'climber' + this.get('id');
  }.property('id'),

  fullName: function() {
    // TODO - This seems necessary on new records since the fields are blank on creation
    // Try to figure out a different way of handling this
    var firstName = this.get('firstName') ? this.get('firstName') : '';
    var middleName = this.get('middleName') ? this.get('middleName') : '';
    var lastName = this.get('lastName') ? this.get('lastName') : '';

    if (middleName !== "") {
      return firstName + " " + middleName + " " + lastName;
    } else {
      return firstName + " " + lastName;
    }

  }.property('firstName', 'middleName', 'lastName'),

  validations: {
      firstName: {
        presence: true
      },
      lastName: {
        presence: true
      },
      gender: {
        presence: true
      }
    }
});
