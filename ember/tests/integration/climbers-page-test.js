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
      ok(true);
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

test('new button works', function() {
  expect(3);

  visit('/climbers').then(function() {
    click('.new-button').then(function() {
      equal(currentRouteName(), 'climbers.new');
      equal(currentPath(), 'climbers.new');
      equal(currentURL(), '/climbers/new');
      visit('/climbers'); // To cancel new.
    });
  });
});

test('climber new renders', function() {
  expect(7);
  visit('/climbers/new').then(function() {
    equal(find('h3').text(), 'New Climber');
    equal(find('form#form-climber').length, 1);
    equal(find('input[name="firstName"]').val(), '');
    equal(find('input[name="lastName"]').val(), '');
    equal(find('input[name="gender"]').val(), '');
    equal(find('form#form-climber button.save-button').length, 1);
    equal(find('form#form-climber button.cancel-button').length, 1);
    visit('/climbers'); // To cancel new
  });
});

test('save button works', function() {
  expect(2);

  visit('/climbers/new').then(function() {
    fillIn('input[name="firstName"]', 'FirstName');
    fillIn('input[name="lastName"]', 'LastName');
    fillIn('input[name="gender"]', 'Gender');
    click('#form-climber .save-button').then(function() {
      equal(currentRouteName(), 'climbers.show');
      equal(currentPath(), 'climbers.show');
      // TODO - Fill this in once we know what the resulting page will look like
    });
  });
});

test('cancel button works', function() {
  expect(4);

  visit('climbers').then(function() {
    var climberCount = find('table#climbers-table tbody tr').length;
    visit('/climbers/new').then(function() {
      fillIn('input[name="firstName"]', 'FirstName');
      click('#form-climber .cancel-button').then(function() {
        equal(currentRouteName(), 'climbers.index');
        equal(currentPath(), 'climbers.index');
        equal(currentURL(), '/climbers');
        equal(find('table#climbers-table tbody tr').length, climberCount);
      });
    });
  });
});

test('navigating away rolls back changes', function() {
  expect(4);

  visit('climbers').then(function() {
    var climberCount = find('table#climbers-table tbody tr').length;
    visit('/climbers/new').then(function() {
      fillIn('input[name="firstName"]', 'FirstName');
      visit('climbers').then(function() {
        equal(currentRouteName(), 'climbers.index');
        equal(currentPath(), 'climbers.index');
        equal(currentURL(), 'climbers');
        equal(find('table#climbers-table tbody tr').length, climberCount);
      });
    });
  });
});

test('validator catches empty name field', function() {
  expect(3);

  visit('/climbers/new').then(function() {
    fillIn('input[name="firstName"]', '');
    click('#form-climber .save-button').then(function() {
      equal(currentRouteName(), 'climbers.new');
      equal(currentPath(), 'climbers.new');
      equal(currentURL(), '/climbers/new');
      visit('/climbers'); // To cancel new.
    });
  });
});
