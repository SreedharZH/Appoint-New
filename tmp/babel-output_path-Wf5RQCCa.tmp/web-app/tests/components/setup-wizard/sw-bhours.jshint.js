define('web-app/tests/components/setup-wizard/sw-bhours.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/setup-wizard/sw-bhours.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/setup-wizard/sw-bhours.js should pass jshint.\ncomponents/setup-wizard/sw-bhours.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-bhours.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-bhours.js: line 14, col 21, \'selectedTag\' is already defined.\ncomponents/setup-wizard/sw-bhours.js: line 16, col 49, Missing semicolon.\ncomponents/setup-wizard/sw-bhours.js: line 16, col 14, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 17, col 18, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 18, col 15, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 20, col 18, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 21, col 15, \'selectedTag\' used out of scope.\n\n9 errors');
  });
});