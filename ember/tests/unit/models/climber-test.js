import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('climber', 'Climber', {
  // Specify the other units that are required for this test.
  needs: ['model:gender']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('fullName', function() {
  var climber = this.subject({ firstName: "Chris", lastName: "Sharma"});
  equal(climber.get('fullName'), "Chris Sharma");

  Ember.run(function(){
    climber.set('middleName','Freaking');
  });

  equal(climber.get('fullName'), "Chris Freaking Sharma");
});
test('gender relationship', function() {
  var Climber = this.store().modelFor('climber');
  var relationship = Ember.get(Climber, 'relationshipsByName').get('gender');

  equal(relationship.key, 'gender');
  equal(relationship.kind, 'belongsTo');

});
