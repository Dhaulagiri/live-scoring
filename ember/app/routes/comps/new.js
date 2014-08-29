import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('comp');
  },
  renderTemplate: function(controller) {
    this.render('comps.edit', {
      controller: controller
    });
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  }
});
