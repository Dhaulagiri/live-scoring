import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('climber');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('climbers.show', model);
      });
    },
    cancel: function() {
      this.transitionTo('climbers.index');
    }
  }
});