import Ember from 'ember';

export default Ember.ObjectController.extend({
//  needs: "event",
  //event: Ember.computed.alias("controllers.event"),
  genders: function(){
    return this.store.find('gender');
  }.property(),
  disciplines: function(){
    return this.store.find('discipline');
  }.property()
});
