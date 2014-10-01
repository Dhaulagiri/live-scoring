import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('gender', 'Gender', {
  // Specify the other units that are required for this test.
  needs: ['model:climber', 'model:event', 'model:registration', 'model:comp', 'model:discipline', 'model:round']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('event relationship', function() {
  var Gender = this.store().modelFor('gender');
  var relationship = Ember.get(Gender, 'relationshipsByName').get('event');

  equal(relationship.key, 'event');
  equal(relationship.kind, 'belongsTo');
});

test('climber relationship', function() {
  var Gender = this.store().modelFor('gender');
  var relationship = Ember.get(Gender, 'relationshipsByName').get('climber');

  equal(relationship.key, 'climber');
  equal(relationship.kind, 'belongsTo');
});
