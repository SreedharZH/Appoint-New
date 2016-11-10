define('web-app/components/setup-wizard/sw-service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      addService: function addService() {
        var self = this;
        self.sendAction("action");
      },

      addAction: function addAction() {
        $('.addplus').addClass('hide-imp');
        $(".addnew-container").css('display', 'block');
        $(".cancelService").removeClass('hide-imp');
      },

      cancelService: function cancelService() {
        $("input[type=text], textarea").val("");
        $(".addnew-container").css('display', 'none');
        $('.addplus').removeClass('hide-imp');
      }
    }
  });
});
/* $Id$ */