import Ember from 'ember';

function formattedDate(value) {
  return moment(value).format("LL");
}

export { formattedDate };

export default Ember.Handlebars.makeBoundHelper(formattedDate);
