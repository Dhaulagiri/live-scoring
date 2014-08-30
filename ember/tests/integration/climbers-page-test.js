import startApp from 'live-scoring/tests/helpers/start-app';
import Ember from 'ember';

var App, server;

module('Integration - Climbers Page', {
  setup: function() {
    App = startApp();
    var climbers = [
      {
        id: 1,
        firstName: 'Lynn',
        lastName: 'Hill',
        slug: 'lynn-hill',
        gender_id: 2
      },
      {
        id: 2,
        firstName: 'Chris',
        lastName: 'Sharma',
        slug: 'chris-sharma',
        gender_id: 1
      },
      {
        id: 3,
        firstName: 'Dave',
        middleName: 'Ethan',
        lastName: 'Graham',
        slug: 'dave-graham',
        gender_id: 1
      }
    ];

    var genders = [
      {
        id: 1,
        name: "Male",
        sex: "M"
      },
      {
        id: 2,
        name: "Female",
        sex: "F"
      }
    ];

    server = new Pretender(function() {
      this.get('/api/v1/climbers', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({climbers: climbers})];
      });

      this.get('/api/v1/genders', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({genders: genders})];
      });

      this.get('/api/v1/climbers/:slug', function(request) {
        var climber = climbers.find(function(climber) {
          if (climber.slug === request.params.slug) {
            return climber;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({climber: climber})];
      });

      this.post('/api/v1/climbers', function(request) {
        // TODO - figure out if this should actually try to return something?
        return [201, {"Content-Type": "application/json"}, "{}"];
      });
    });
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should allow navigation to the climbers page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Climbers")').then(function() {
      equal(currentRouteName(), 'climbers.index');
      equal(currentPath(), 'climbers.index');
    });
  });
});

test('Should allow navigation to the create a climber page', function() {
  visit('/climbers').then(function() {
    click('a:contains("New Climber")').then(function() {
      equal(currentRouteName(), 'climbers.new');
      equal(currentPath(), 'climbers.new');
    });
  });
});

test('Should list all climbers', function() {
  visit('/climbers').then(function() {
    equal(find('a:contains("Lynn Hill")').length, 1);
    equal(find('a:contains("Chris Sharma")').length, 1);
    equal(find('a:contains("Dave Ethan Graham")').length, 1);
  });
});

test('Should be able to navigate to a climber page', function() {
  expect(3);
  visit('/climbers').then(function() {
    click('a:contains("Lynn Hill")').then(function() {
      equal(find('h3').text(), 'Lynn Hill');
      equal(currentRouteName(), 'climbers.show');
      equal(currentPath(), 'climbers.show');
    });
  });
});

test('Should be able visit a climber page', function() {
  visit('/climbers/lynn-hill').then(function() {
    equal(find('h3').text(), 'Lynn Hill');
  });
});

test('New button works', function() {
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

test('Climber new renders', function() {
  expect(7);
  visit('/climbers/new').then(function() {
    equal(find('form#form-climber').length, 1);
    equal(find('input[name="firstName"]').val(), '');
    equal(find('input[name="middleName"]').val(), '');
    equal(find('input[name="lastName"]').val(), '');
    equal(find('select[name="gender"]').val(), '');
    equal(find('form#form-climber button.save-button').length, 1);
    equal(find('form#form-climber button.cancel-button').length, 1);
    visit('/climbers'); // To cancel new
  });
});

test('Edit button works', function() {
  expect(2);
  var climberID = 1;

  visit('/climbers/').then(function() {
    click('.edit-button').then(function() {
      equal(currentRouteName(), 'climbers.edit');
      equal(currentPath(), 'climbers.edit');
      //TODO - Figure out how to handle slugs
    //  equal(currentURL(), '/climbers/' + climberID + '/edit');
    });
  });
});

test('Save button works', function() {
  expect(2);
  visit('/climbers/new')
    .fillIn('input[name="firstName"]', 'FirstName')
    .fillIn('input[name="lastName"]', 'LastName')
    .fillIn('select[name="gender"]', 1)
    .then(function() {
      click('#form-climber .save-button').then(function() {
        equal(currentRouteName(), 'climbers.show');
        equal(currentPath(), 'climbers.show');
        // TODO - Fill this in once we know what the resulting route will be
      });
    });
});

test('Cancel button works', function() {
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

test('Navigating away rolls back changes', function() {
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

test('Validator catches empty first name field', function() {
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
