define('web-app/tests/routes/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/calendar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/calendar.js should pass jshint.\nroutes/calendar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/calendar.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});