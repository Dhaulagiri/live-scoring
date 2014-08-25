import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('climber');
  },
  actions: {
    edit: function(product) {
      this.transitionTo('climbers.edit', product);
    },
    save: function(model) {
      var _this = this;
      model.validate().then(function() {
        model.save().then(function() {
          _this.transitionTo('climbers.show', model);
        });
      });
    },
    cancel: function() {
      this.transitionTo('climbers.index');
    },
    delete: function(model) {
      model.destroyRecord();
      this.transitionTo('climbers');
    }
  }
});
