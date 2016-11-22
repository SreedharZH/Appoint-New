define("web-app/routes/calendar", ["exports", "ember"], function (exports, _ember) {
   exports["default"] = _ember["default"].Route.extend({
      actions: {
         dayView: function dayView() {
            $(".calendar").addClass("hide");
            $(".calendar.day-wise").removeClass("hide");
            $(".header-secondary .view-style span").removeClass('active');
            $(".header-secondary .view-style span.day").addClass('active');
         },
         weekView: function weekView() {
            $(".calendar").addClass("hide");
            $(".calendar.week-wise").removeClass("hide");
            $(".header-secondary .view-style span").removeClass('active');
            $(".header-secondary .view-style span.week").addClass('active');
         },
         monthView: function monthView() {
            $(".calendar").addClass("hide");
            $(".calendar.month-wise").removeClass("hide");
            $(".header-secondary .view-style span").removeClass('active');
            $(".header-secondary .view-style span.month").addClass('active');
         },
         calendarPicker: function calendarPicker() {

            $(".datepicker-calendar").toggleClass('hide');
         }
      }
   });
});