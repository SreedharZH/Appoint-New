define('web-app/tests/components/setup-wizard/sw-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/setup-wizard/sw-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/setup-wizard/sw-service.js should pass jshint.\ncomponents/setup-wizard/sw-service.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-service.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});