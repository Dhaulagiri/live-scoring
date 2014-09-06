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
    this.route('show', { path: ':slug' }, function () {
      this.resource('events', function() {
        this.route('show', { path: '/:event_id' });
        this.route('edit');
        this.route('new');
      });
    });
    this.route('edit', { path: '/:slug/edit' });
    this.route('new');
  });

  this.resource('registrations', function() {
    this.route('new');
  });
  this.route('events/show');
});

export default Router;
