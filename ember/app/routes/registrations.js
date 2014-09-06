import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // edit: function(model) {
    //   this.transitionTo('comps.edit', model);
    // },
    // save: function(model) {
    //   var _this = this;
    //   model.validate().then(function() {
    //     model.save().then(function() {
    //       _this.transitionTo('comps.show', model);
    //     });
    //   });
    // },
    // cancel: function() {
    //   this.transitionTo('comps.index');
    // },
    delete: function(model) {
      debugger
      //model.destroyRecord();
      //this.transitionTo('comps');
    }
  }
});
