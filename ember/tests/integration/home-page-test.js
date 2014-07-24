import startApp from 'live-scoring/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Home Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should work', function() {
  visit('/').then(function() {
    ok(true);
  });
});
