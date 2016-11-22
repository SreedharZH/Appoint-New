define('web-app/tests/components/app-calendars/day.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/app-calendars/day.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/app-calendars/day.js should pass jshint.\ncomponents/app-calendars/day.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/app-calendars/day.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});