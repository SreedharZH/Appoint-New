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

    this.route('components', { path: '/' }, function () {
      // No I18N
      this.route('my-desk', function () {
        // No I18N
        this.route('mydesk'); // No I18N
      });

      this.route('appointments', function () {
        // No I18N
        this.route('calendar'); // No I18N
      });

      this.route('customers', function () {
        // No I18N
        this.route('clist'); // No I18N
      });

      this.route('reports', function () {
        // No I18N
        this.route('report'); // No I18N
      });

      this.route('business-setup', function () {
        // No I18N
        this.route('binfo'); // No I18N
        this.route('service'); // No I18N
        this.route('staff'); // No I18N
        this.route('notification'); // No I18N
        this.route('pagedesign'); // No I18N
        this.route('bookingpreference'); // No I18N
        this.route('payment'); // No I18N
        this.route('integration'); // No I18N
        this.route('bsleftmenu'); // No I18N
      });
    });
  });

  exports['default'] = Router;
});
/* $Id$ */