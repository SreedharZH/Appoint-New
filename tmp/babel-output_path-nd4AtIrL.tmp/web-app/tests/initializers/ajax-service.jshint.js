define('web-app/tests/initializers/ajax-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/ajax-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/ajax-service.js should pass jshint.\ninitializers/ajax-service.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/ajax-service.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});