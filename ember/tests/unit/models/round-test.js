import { test, moduleForModel } from 'ember-qunit';

moduleForModel('round', 'Round', {
  // Specify the other units that are required for this test.
  needs: ['model:event', 'model:comp', 'model:discipline', 'model:registration', 'model:gender']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
