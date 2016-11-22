define('web-app/router', ['exports', 'ember', 'web-app/config/environment'], function (exports, _ember, _webAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _webAppConfigEnvironment['default'].locationType,
    rootURL: _webAppConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('setup-wizard', function () {
      // No I18N
      this.route('setupwizard'); // No I18N
    });

    this.route('calendar');
    this.route('mydesk');
  });

  exports['default'] = Router;
});
/* $Id$ */