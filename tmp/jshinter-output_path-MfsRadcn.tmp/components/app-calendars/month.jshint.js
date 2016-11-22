QUnit.module('JSHint | components/app-calendars/month.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/app-calendars/month.js should pass jshint.\ncomponents/app-calendars/month.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/app-calendars/month.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
