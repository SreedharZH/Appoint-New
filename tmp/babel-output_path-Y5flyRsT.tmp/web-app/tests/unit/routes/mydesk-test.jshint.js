define('web-app/tests/unit/routes/mydesk-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/mydesk-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/mydesk-test.js should pass jshint.');
  });
});