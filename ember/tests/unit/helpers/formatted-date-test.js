import { formattedDate } from 'live-scoring/helpers/formatted-date';

module('FormattedDateHelper');

// Replace this with your real tests.
test('it works', function() {
  var result = formattedDate(42);
  ok(result);
});

test('it returns a formatted date', function() {
  var date = new Date("July 8, 2006");
  var result = formattedDate(date);
  var expected = "July 8, 2006";
  equal(result, expected);
});
