import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend(Ember.Validations.Mixin, {
  name: DS.attr('string'),
  slug: DS.attr('string'),

  comp: DS.belongsTo('comp', { async: true }),
  discipline: DS.belongsTo('discipline', { async: true }),
  rounds: DS.hasMany('round', { async: true }),
  registrations: DS.hasMany('registration', { async: true }),
  gender: DS.belongsTo('gender', { async: true })//,

  // validations: {
  //     name: {
  //       presence: true
  //     },
  //     discipline: {
  //       presence: true
  //     },
  //     gender: {
  //       presence: true
  //     }
  //   }
});
