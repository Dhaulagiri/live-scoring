import Ember from 'ember';

function formattedDate(value) {
  if (value === null || value === '') {
        return "None";
    } else {
      return moment(value).format("LL");
  }
}

export { formattedDate };

export default Ember.Handlebars.makeBoundHelper(formattedDate);
