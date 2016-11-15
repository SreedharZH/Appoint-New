define('web-app/tests/services/ajax-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/ajax-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/ajax-service.js should pass jshint.\nservices/ajax-service.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/ajax-service.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});