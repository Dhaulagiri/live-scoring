import DS from 'ember-data';
import Ember from 'ember';
//import ic from 'ic-ajax';

var ClimberModel = DS.Model.extend(Ember.Validations.Mixin, {
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  gender: DS.attr('string'),
  dob: DS.attr('date'),
  slug: DS.attr('string'),

  // To identify html tag for a Climber.
  htmlID: function() {
    return 'climber' + this.get('id');
  }.property('id'),

  fullName: function() {
    // TODO - This seems necessary on new records
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

// ic.ajax.defineFixture('/climbers', {
//   response: {
//     colors:[
//       {
//         id: 1,
//         color: "red"
//       },
//       {
//         id: 2,
//         color: "green"
//       },
//       {
//         id: 3,
//         color: "blue"
//       }
//      ]
//   },
//   jqXHR: {},
//   textStatus: 'success'
// });
//
// ClimberModel.reopenClass({
//   FIXTURES: [
//     { id: 1, firstName: 'first', lastName: 'lastName', gender: 'M' },
//     { id: 2, firstName: 'first1', lastName: 'lastName1', gender: 'M' }
//   ]
// });

export default ClimberModel;

// App.resetFixtures = function() {
//   App.Product.FIXTURES = [
//     {
//       id: 1,
//       name: 'Ember.js in Action',
//       author: 'Joachim Haagen Skeie',
//       description: 'Ember.js in Action is a crisp tutorial that introduces the Ember.js framework and shows you how to build production-quality web applications.',
//       price: 44.99
//     },
//     {
//       id: 2,
//       name: 'Building Web Applications with Ember.js',
//       author: 'Jesse Cravens & Thomas Brady',
//       description: 'This guide provides example-driven instructions on how to develop applications using Ember, one of the most popular JavaScript frameworks available.',
//       price: 29.99
//     },
//     {
//       id: 3,
//       name: 'The Ember.js Way',
//       author: 'Brian Cardarella & Alex Navasardyan',
//       description: "Inspired by Addison-Wesley's classic The Rails Way series, The Ember.js Way crystallizes all that's been learned about Ember.js development into a start-to-finish approach that works.",
//       price: 39.99
//     },
//     {
//       id: 4,
//       name: 'Instant Ember.JS Application Development: How-to',
//       author: 'Marc Bodmer',
//       description: 'A practical guide that provides you with clear step-by-step examples. The in-depth examples take into account the key concepts and give you a solid foundation to expand your knowledge and your skills.',
//       price: 20.69
//     }
//   ];
// };
// });
// App.resetFixtures();
