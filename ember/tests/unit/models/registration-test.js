import { test, moduleForModel } from 'ember-qunit';

moduleForModel('registration', 'Registration', {
  // Specify the other units that are required for this test.
  needs: ['model:climber', 'model:event']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
