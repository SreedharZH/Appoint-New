import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    dayView : function(){
       $(".calendar").addClass("hide");
       $(".calendar.day-wise").removeClass("hide");
       $(".header-secondary .view-style span").removeClass('active');
       $(".header-secondary .view-style span.day").addClass('active');
    },
    weekView : function(){
       $(".calendar").addClass("hide");
       $(".calendar.week-wise").removeClass("hide");
       $(".header-secondary .view-style span").removeClass('active');
       $(".header-secondary .view-style span.week").addClass('active');
    },
    monthView : function(){
       $(".calendar").addClass("hide");
       $(".calendar.month-wise").removeClass("hide");
       $(".header-secondary .view-style span").removeClass('active');
       $(".header-secondary .view-style span.month").addClass('active');
    },
    calendarPicker : function(){

      $(".datepicker-calendar").toggleClass('hide');
    }
  }
});
