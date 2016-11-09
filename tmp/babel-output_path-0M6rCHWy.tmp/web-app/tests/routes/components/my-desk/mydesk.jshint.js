define('web-app/tests/routes/components/my-desk/mydesk.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/my-desk/mydesk.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/components/my-desk/mydesk.js should pass jshint.');
  });
});