import startApp from 'live-scoring/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Navbar', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should have the proper links', function() {
  visit('/').then(function() {
    ok('a:contains("Climbers")');
    ok('a:contains("Comps")');
    ok('a:contains("Login")');
    ok('a:contains("Comp Scoring")');
  });
});
