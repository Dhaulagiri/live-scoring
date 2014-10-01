import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('event', 'Event', {
  // Specify the other units that are required for this test.
  needs: ['model:comp', 'model:discipline', 'model:gender', 'model:registration', 'model:round', 'model:climber']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('comp relationship', function() {
  var Event = this.store().modelFor('event');
  var relationship = Ember.get(Event, 'relationshipsByName').get('comp');

  equal(relationship.key, 'comp');
  equal(relationship.kind, 'belongsTo');
});

test('discipline relationship', function() {
  var Event = this.store().modelFor('event');
  var relationship = Ember.get(Event, 'relationshipsByName').get('discipline');

  equal(relationship.key, 'discipline');
  equal(relationship.kind, 'belongsTo');
});

test('gender relationship', function() {
  var Event = this.store().modelFor('event');
  var relationship = Ember.get(Event, 'relationshipsByName').get('gender');

  equal(relationship.key, 'gender');
  equal(relationship.kind, 'belongsTo');
});

test('registration relationship', function() {
  var Event = this.store().modelFor('event');
  var relationship = Ember.get(Event, 'relationshipsByName').get('registrations');

  equal(relationship.key, 'registrations');
  equal(relationship.kind, 'hasMany');
});
