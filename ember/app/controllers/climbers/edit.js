import Ember from 'ember';

export default Ember.ObjectController.extend({
  genders: function(){
    return this.store.find('gender');
  }.property()
});
