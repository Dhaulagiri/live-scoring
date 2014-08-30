import Ember from 'ember';

export default Ember.ArrayController.extend({
  comps: function(){
    return this.store.find('comp');
  }.property('comps')
});
