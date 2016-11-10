define("web-app/components/setup-wizard/sw-staff", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    actions: {
      toggleCheckbox: function toggleCheckbox() {
        var self = this;
        var checkbox;
        var allCheckbox;
        if ($(event.target).attr("aria-checked") === undefined) {
          checkbox = $(event.target).parents(".checkbox.isChecked");
        } else {
          checkbox = event.target;
        }
        if ($(checkbox).parents("label").index() === 0) {
          allCheckbox = $(checkbox).parents("label").siblings().find("div[aria-checked]");
        }
        if (JSON.parse($(checkbox).attr("aria-checked"))) {
          $(checkbox).attr("aria-checked", false);
          $(allCheckbox).attr("aria-checked", false);
        } else {
          $(checkbox).attr("aria-checked", true);
          $(allCheckbox).attr("aria-checked", true);
        }
      }
    }
  });
});
/* $Id$ */