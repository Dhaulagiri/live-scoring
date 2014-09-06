import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var e = this.modelFor('event');
    var comp = e.get('comp');
    return this.store.createRecord('event', { comp: comp });
  },
  renderTemplate: function(controller) {
    this.render('events.edit', {
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
