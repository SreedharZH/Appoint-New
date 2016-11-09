define('web-app/tests/routes/setup-wizard/setupwizard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/setupwizard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/setupwizard.js should pass jshint.\nroutes/setup-wizard/setupwizard.js: line 19, col 14, Confusing use of \'!\'.\n\n1 error');
  });
});