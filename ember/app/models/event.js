import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend(Ember.Validations.Mixin, {
  name: DS.attr('string'),
  slug: DS.attr('string'),

  comp: DS.belongsTo('comp'),
  discipline: DS.belongsTo('discipline'),
  rounds: DS.hasMany('round'),
  gender: DS.belongsTo('gender')//,

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
