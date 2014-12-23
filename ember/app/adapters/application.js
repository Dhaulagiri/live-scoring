import DS from 'ember-data';
import config from '../config/environment';

var ApplicationAdapter;

if (config.environment === "test") {
  ApplicationAdapter = DS.ActiveModelAdapter.extend({
    namespace: 'api/v1'
  });
} else {
  ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new window.Firebase('https://' + config.firebase_instance + '.firebaseio.com')
  });
}

export default ApplicationAdapter;
