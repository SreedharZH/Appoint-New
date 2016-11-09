define('web-app/tests/routes/setup-wizard/1-binfo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/1-binfo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/setup-wizard/1-binfo.js should pass jshint.');
  });
});