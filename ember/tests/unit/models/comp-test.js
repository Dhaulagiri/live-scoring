import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('comp', 'Comp', {
  // Specify the other units that are required for this test.
  needs: ['model:event']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('event relationship', function() {
  var Comp = this.store().modelFor('comp');
  var relationship = Ember.get(Comp, 'relationshipsByName').get('events');

  equal(relationship.key, 'events');
  equal(relationship.kind, 'hasMany');
});
