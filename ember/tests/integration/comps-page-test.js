import startApp from 'live-scoring/tests/helpers/start-app';
import Ember from 'ember';

var App, server;

module('Integration - Comps Page', {
  setup: function() {
    App = startApp();
    var comps = [
      {
        id: 1,
        name: 'Portland Boulder Rally',
        date: '2014-09-01',
        slug: 'portland-boulder-rally-2014-09-01'
      },
      {
        id: 2,
        name: 'ABS Nationals',
        date: '2014-10-01',
        slug: 'abs-nationals-2014-10-01'
      },
      {
        id: 3,
        name: 'SCS Nationals',
        date: '2015-03-01',
        slug: 'scs-nationals-2015-03-01'
      }
    ];

    server = new Pretender(function() {
      this.get('/api/v1/comps', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({comps: comps})];
      });

      this.get('/api/v1/comps/:slug', function(request) {
        var comp = comps.find(function(comp) {
          if (comp.slug === request.params.slug) {
            return comp;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({comp: comp})];
      });

      this.post('/api/v1/comps', function(request) {
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

test('Should allow navigation to the comps page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Comps")').then(function() {
      equal(currentRouteName(), 'comps.index');
      equal(currentPath(), 'comps.index');
    });
  });
});

test('Should allow navigation to the create a comp page', function() {
  visit('/comps').then(function() {
    click('a:contains("New Comp")').then(function() {
      equal(currentRouteName(), 'comps.new');
      equal(currentPath(), 'comps.new');
    });
  });
});

test('Should list all comps', function() {
  visit('/comps').then(function() {
    equal(find('a:contains("Portland Boulder Rally")').length, 1);
    equal(find('a:contains("ABS Nationals")').length, 1);
    equal(find('a:contains("SCS Nationals")').length, 1);
  });
});

test('Should be able to navigate to a comp page', function() {
  expect(3);
  visit('/comps').then(function() {
    click('a:contains("Portland Boulder Rally")').then(function() {
      equal(find('h3').text(), 'Portland Boulder Rally');
      equal(currentRouteName(), 'comps.show');
      equal(currentPath(), 'comps.show');
    });
  });
});

test('Should be able visit a comp page', function() {
   visit('/comps/portland-boulder-rally-2014-09-01').then(function() {
     equal(find('h3').text(), 'Portland Boulder Rally');
   });
});

test('New button works', function() {
  expect(3);

  visit('/comps').then(function() {
    click('.new-button').then(function() {
      equal(currentRouteName(), 'comps.new');
      equal(currentPath(), 'comps.new');
      equal(currentURL(), '/comps/new');
      visit('/comps'); // To cancel new.
    });
  });
});

test('Comp new renders', function() {
  expect(4);
  visit('/comps/new').then(function() {
    equal(find('form#form-comp').length, 1);
    equal(find('input[name="name"]').val(), '');
    equal(find('form#form-comp button.save-button').length, 1);
    equal(find('form#form-comp button.cancel-button').length, 1);
    visit('/comps'); // To cancel new
  });
});

test('Edit button works', function() {
  expect(2);
  var compID = 1;

  visit('/comps/').then(function() {
    click('.edit-button').then(function() {
      equal(currentRouteName(), 'comps.edit');
      equal(currentPath(), 'comps.edit');
      //TODO - Figure out how to handle slugs
    //  equal(currentURL(), '/climbers/' + climberID + '/edit');
    });
  });
});

// TODO - Put back once dates work
// test('Save button works', function() {
//   expect(2);
//   visit('/comps/new')
//     .fillIn('input[name="name"]', 'New Comp')
//     .then(function() {
//       click('#form-comp .save-button').then(function() {
//         equal(currentRouteName(), 'comps.show');
//         equal(currentPath(), 'comps.show');
//         // TODO - Fill this in once we know what the resulting route will be
//       });
//     });
// });

test('Cancel button works', function() {
  expect(4);

  visit('comps').then(function() {
    var compCount = find('table#comps-table tbody tr').length;
    visit('/comps/new').then(function() {
      fillIn('input[name="name"]', 'Comp Nae');
      click('#form-comp .cancel-button').then(function() {
        equal(currentRouteName(), 'comps.index');
        equal(currentPath(), 'comps.index');
        equal(currentURL(), '/comps');
        equal(find('table#comps-table tbody tr').length, compCount);
      });
    });
  });
});

test('Navigating away rolls back changes', function() {
  expect(4);

  visit('comps').then(function() {
    var compCount = find('table#comps-table tbody tr').length;
    visit('/comps/new').then(function() {
      fillIn('input[name="name"]', 'Comp Name');
      visit('comps').then(function() {
        equal(currentRouteName(), 'comps.index');
        equal(currentPath(), 'comps.index');
        equal(currentURL(), 'comps');
        equal(find('table#comps-table tbody tr').length, compCount);
      });
    });
  });
});

// TODO - Put back once dates work
// test('Validator catches empty name field', function() {
//   expect(3);
//
//   visit('/comps/new').then(function() {
//     fillIn('input[name="name"]', '');
//     click('#form-comp .save-button').then(function() {
//       equal(currentRouteName(), 'comps.new');
//       equal(currentPath(), 'comps.new');
//       equal(currentURL(), '/comps/new');
//       visit('/comps'); // To cancel new.
//     });
//   });
// });
