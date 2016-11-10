define('web-app/routes/setup-wizard/2-bhours', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      clickevt: function clickevt() {
        alert('ss'); // No I18N
      }
    }
  });
});
/* $Id$ */