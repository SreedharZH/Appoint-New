define('web-app/tests/routes/setup-wizard/3-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/3-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/setup-wizard/3-service.js should pass jshint.');
  });
});