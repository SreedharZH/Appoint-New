define('web-app/tests/integration/components/my-desk/mydesk-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/my-desk/mydesk-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/my-desk/mydesk-test.js should pass jshint.');
  });
});