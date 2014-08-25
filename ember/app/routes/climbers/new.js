import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('climber');
  },
  renderTemplate: function(controller) {
    this.render('climbers.edit', {
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
