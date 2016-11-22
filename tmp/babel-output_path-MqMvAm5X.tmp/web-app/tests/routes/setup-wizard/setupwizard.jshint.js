define('web-app/tests/routes/setup-wizard/setupwizard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/setupwizard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/setupwizard.js should pass jshint.\nroutes/setup-wizard/setupwizard.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/setupwizard.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/setupwizard.js: line 32, col 12, Confusing use of \'!\'.\nroutes/setup-wizard/setupwizard.js: line 57, col 41, Use \'!==\' to compare with \'\'.\nroutes/setup-wizard/setupwizard.js: line 61, col 41, Use \'!==\' to compare with \'\'.\n\n5 errors');
  });
});