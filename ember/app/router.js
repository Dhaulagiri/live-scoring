import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LiveScoringENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('protected');

  this.resource('climbers', function() {
    this.route('show', { path: ':slug' });
    this.route('new');
  });

});

export default Router;
