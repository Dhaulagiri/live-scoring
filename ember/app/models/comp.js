import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend(Ember.Validations.Mixin, {
  name: DS.attr('string'),
  date: DS.attr('date'),
  slug: DS.attr('string'),

  validations: {
      name: {
        presence: true
      },
      date: {
        presence: true
      }
    }
});
