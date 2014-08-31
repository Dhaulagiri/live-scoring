import Ember from 'ember';

var Router = Ember.Router.extend({
  location: LiveScoringENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('protected');

  this.resource('climbers', function() {
    this.route('show', { path: ':slug' });
    this.route('edit', { path: '/:slug/edit' });
    this.route('new');
  });

  this.resource('comps', function() {
    this.route('show', { path: ':slug' });
    this.route('edit', { path: '/:slug/edit' });
    this.route('new');

    this.resource('events', { path: ':slug/events'}, function() {
      this.resource('event', { path: ':slug' });
      this.route('edit', { path: '/:slug/edit' });
      this.route('new');
    });
  });

});

export default Router;
