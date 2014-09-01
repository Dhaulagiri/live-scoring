import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    edit: function(model) {
      this.transitionTo('events.edit', model);
    },
    save: function(model) {
      var _this = this;
      model.validate().then(function() {
        model.save().then(function() {
          _this.transitionTo('event', model);
        });
      });
    },
    cancel: function() {
      this.transitionTo('events.index');
    },
    delete: function(model) {
      model.destroyRecord();
      this.transitionTo('events');
    }
  }
});
