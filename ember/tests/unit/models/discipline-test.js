import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('discipline', 'Discipline', {
  // Specify the other units that are required for this test.
  needs: ['model:gender', 'model:event']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('event relationship', function() {
  var Discipline = this.store().modelFor('discipline');
  var relationship = Ember.get(Discipline, 'relationshipsByName').get('event');

  equal(relationship.key, 'event');
  equal(relationship.kind, 'belongsTo');
});
