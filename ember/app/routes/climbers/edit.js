import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('climber', params.slug);
  },

  // Roll back if the user transitions away by clicking a link, clicking the
  // browser's back button, or otherwise.
  deactivate: function() {
    var model = this.modelFor('climbers.edit');
    if (model && model.get('isDirty') && !model.get('isSaving')) {
      model.rollback();
    }
  }
});
