define('web-app/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 5, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 8, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 15, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('web-app/tests/components/all-appointmentsts/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/all-appointmentsts/calendar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/all-appointmentsts/calendar.js should pass jshint.\ncomponents/all-appointmentsts/calendar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/all-appointmentsts/calendar.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/all-appointmentsts/calendar.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/all-appointmentsts/calendar.js: line 4, col 5, Expected an identifier and instead saw \'#datepicker\'.\ncomponents/all-appointmentsts/calendar.js: line 4, col 18, \'function closure expressions\' is only available in Mozilla JavaScript extensions (use moz option).\ncomponents/all-appointmentsts/calendar.js: line 4, col 19, Expected an identifier and instead saw \'.\'.\ncomponents/all-appointmentsts/calendar.js: line 4, col 20, Expected \'}\' to match \'{\' from line 3 and instead saw \'datepicker\'.\ncomponents/all-appointmentsts/calendar.js: line 4, col 30, Bad invocation.\ncomponents/all-appointmentsts/calendar.js: line 4, col 32, Expected \')\' and instead saw \';\'.\ncomponents/all-appointmentsts/calendar.js: line 4, col 33, Missing semicolon.\ncomponents/all-appointmentsts/calendar.js: line 9, col 3, Unrecoverable syntax error. (81% scanned).\n\n12 errors');
  });
});
define('web-app/tests/components/my-desk/mydesk.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/my-desk/mydesk.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/my-desk/mydesk.js should pass jshint.\ncomponents/my-desk/mydesk.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/my-desk/mydesk.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/components/setup-wizard/sw-bhours.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/setup-wizard/sw-bhours.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/setup-wizard/sw-bhours.js should pass jshint.\ncomponents/setup-wizard/sw-bhours.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-bhours.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-bhours.js: line 14, col 21, \'selectedTag\' is already defined.\ncomponents/setup-wizard/sw-bhours.js: line 16, col 49, Missing semicolon.\ncomponents/setup-wizard/sw-bhours.js: line 16, col 14, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 17, col 18, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 18, col 15, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 20, col 18, \'selectedTag\' used out of scope.\ncomponents/setup-wizard/sw-bhours.js: line 21, col 15, \'selectedTag\' used out of scope.\n\n9 errors');
  });
});
define('web-app/tests/components/setup-wizard/sw-binfo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/setup-wizard/sw-binfo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/setup-wizard/sw-binfo.js should pass jshint.\ncomponents/setup-wizard/sw-binfo.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-binfo.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/components/setup-wizard/sw-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/setup-wizard/sw-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/setup-wizard/sw-service.js should pass jshint.\ncomponents/setup-wizard/sw-service.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-service.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/components/setup-wizard/sw-staff.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/setup-wizard/sw-staff.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/setup-wizard/sw-staff.js should pass jshint.\ncomponents/setup-wizard/sw-staff.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/setup-wizard/sw-staff.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('web-app/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('web-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'web-app/tests/helpers/start-app', 'web-app/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _webAppTestsHelpersStartApp, _webAppTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _webAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _webAppTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('web-app/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('web-app/tests/helpers/resolver', ['exports', 'web-app/resolver', 'web-app/config/environment'], function (exports, _webAppResolver, _webAppConfigEnvironment) {

  var resolver = _webAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _webAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _webAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('web-app/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('web-app/tests/helpers/start-app', ['exports', 'ember', 'web-app/app', 'web-app/config/environment'], function (exports, _ember, _webAppApp, _webAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _webAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _webAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('web-app/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('web-app/tests/initializers/ajax-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/ajax-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/ajax-service.js should pass jshint.\ninitializers/ajax-service.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ninitializers/ajax-service.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/integration/components/all-appointmentsts/calendar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('all-appointmentsts/calendar', 'Integration | Component | all appointmentsts/calendar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 31
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'all-appointmentsts/calendar', ['loc', [null, [1, 0], [1, 31]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'all-appointmentsts/calendar', [], [], 0, null, ['loc', [null, [2, 4], [4, 36]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('web-app/tests/integration/components/all-appointmentsts/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/all-appointmentsts/calendar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/all-appointmentsts/calendar-test.js should pass jshint.');
  });
});
define('web-app/tests/integration/components/my-desk/mydesk-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('my-desk/mydesk', 'Integration | Component | my desk/mydesk', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'my-desk/mydesk', ['loc', [null, [1, 0], [1, 18]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'my-desk/mydesk', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('web-app/tests/integration/components/my-desk/mydesk-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/my-desk/mydesk-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/my-desk/mydesk-test.js should pass jshint.');
  });
});
define('web-app/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 6, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 48, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('web-app/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/application.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/binfo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/binfo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/binfo.js should pass jshint.\nroutes/components/business-setup/binfo.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/binfo.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/bookingpreference.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/bookingpreference.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/bookingpreference.js should pass jshint.\nroutes/components/business-setup/bookingpreference.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/bookingpreference.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/bsleftmenu.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/bsleftmenu.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/bsleftmenu.js should pass jshint.\nroutes/components/business-setup/bsleftmenu.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/bsleftmenu.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/integration.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/integration.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/integration.js should pass jshint.\nroutes/components/business-setup/integration.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/integration.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/notification.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/notification.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/notification.js should pass jshint.\nroutes/components/business-setup/notification.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/notification.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/pagedesign.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/pagedesign.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/pagedesign.js should pass jshint.\nroutes/components/business-setup/pagedesign.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/pagedesign.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/payment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/payment.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/payment.js should pass jshint.\nroutes/components/business-setup/payment.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/payment.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/service.js should pass jshint.\nroutes/components/business-setup/service.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/service.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/business-setup/staff.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/business-setup/staff.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/business-setup/staff.js should pass jshint.\nroutes/components/business-setup/staff.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/business-setup/staff.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/customers/clist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/customers/clist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/customers/clist.js should pass jshint.\nroutes/components/customers/clist.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/customers/clist.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/my-desk/mydesk.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/my-desk/mydesk.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/my-desk/mydesk.js should pass jshint.\nroutes/components/my-desk/mydesk.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/my-desk/mydesk.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/components/reports/report.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/components/reports/report.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/components/reports/report.js should pass jshint.\nroutes/components/reports/report.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/components/reports/report.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/setup-wizard/1-binfo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/1-binfo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/1-binfo.js should pass jshint.\nroutes/setup-wizard/1-binfo.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/1-binfo.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/setup-wizard/2-bhours.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/2-bhours.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/2-bhours.js should pass jshint.\nroutes/setup-wizard/2-bhours.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/2-bhours.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/setup-wizard/3-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/3-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/3-service.js should pass jshint.\nroutes/setup-wizard/3-service.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/3-service.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/setup-wizard/4-staff.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/4-staff.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/4-staff.js should pass jshint.\nroutes/setup-wizard/4-staff.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/4-staff.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/routes/setup-wizard/setupwizard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/setup-wizard/setupwizard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/setup-wizard/setupwizard.js should pass jshint.\nroutes/setup-wizard/setupwizard.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/setupwizard.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/setup-wizard/setupwizard.js: line 32, col 12, Confusing use of \'!\'.\nroutes/setup-wizard/setupwizard.js: line 57, col 41, Use \'!==\' to compare with \'\'.\nroutes/setup-wizard/setupwizard.js: line 61, col 41, Use \'!==\' to compare with \'\'.\n\n5 errors');
  });
});
define('web-app/tests/services/ajax-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/ajax-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/ajax-service.js should pass jshint.\nservices/ajax-service.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/ajax-service.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('web-app/tests/test-helper', ['exports', 'web-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _webAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_webAppTestsHelpersResolver['default']);
});
define('web-app/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/bhours-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bhours', 'Unit | Route | bhours', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/bhours-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bhours-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bhours-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/appointments/calendar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/appointments/calendar', 'Unit | Route | components/appointments/calendar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/appointments/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/appointments/calendar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/appointments/calendar-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/binfo-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/binfo', 'Unit | Route | components/business setup/binfo', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/binfo-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/binfo-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/binfo-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/bookingpreference-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/bookingpreference', 'Unit | Route | components/business setup/bookingpreference', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/bookingpreference-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/bookingpreference-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/bookingpreference-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/bsleftmenu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/bsleftmenu', 'Unit | Route | components/business setup/bsleftmenu', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/bsleftmenu-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/bsleftmenu-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/bsleftmenu-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/integration-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/integration', 'Unit | Route | components/business setup/integration', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/integration-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/integration-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/integration-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/notification-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/notification', 'Unit | Route | components/business setup/notification', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/notification-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/notification-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/notification-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/pagedesign-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/pagedesign', 'Unit | Route | components/business setup/pagedesign', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/pagedesign-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/pagedesign-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/pagedesign-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/payment-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/payment', 'Unit | Route | components/business setup/payment', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/payment-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/payment-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/payment-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/service', 'Unit | Route | components/business setup/service', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/service-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/business-setup/staff-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/business-setup/staff', 'Unit | Route | components/business setup/staff', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/business-setup/staff-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/business-setup/staff-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/business-setup/staff-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/customers/clist-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/customers/clist', 'Unit | Route | components/customers/clist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/customers/clist-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/customers/clist-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/customers/clist-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/my-desk/mydesk-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/my-desk/mydesk', 'Unit | Route | components/my desk/mydesk', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/my-desk/mydesk-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/my-desk/mydesk-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/my-desk/mydesk-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/components/reports/report-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:components/reports/report', 'Unit | Route | components/reports/report', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/components/reports/report-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/components/reports/report-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/components/reports/report-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('web-app/tests/unit/routes/setup-wizard/setupwizard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:setup-wizard/setupwizard', 'Unit | Route | setup wizard/setupwizard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('web-app/tests/unit/routes/setup-wizard/setupwizard-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/setup-wizard/setupwizard-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/setup-wizard/setupwizard-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('web-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map