import startApp from 'live-scoring/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Climbers Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should allow navigation to the climbers page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Climbers")').then(function() {
      equal(find('h3').text(), 'Climbers');
    });
  });
});

test('Should allow navigation to the create a climber page', function() {
  visit('/climbers').then(function() {
    click('a:contains("New Climber")').then(function() {
      ok(true);
    });
  });
});
