define('web-app/routes/setup-wizard/setupwizard', ['exports', 'ember'], function (exports, _ember) {

  _ember['default'].run.scheduleOnce('afterRender', this, function () {
    _ember['default'].$('.header').hide();
  });

  exports['default'] = _ember['default'].Route.extend({

    actions: {
      loader: function loader() {
        alert('ss');
        $(".stepstitle").fadeIn(300, function () {
          $(".setup-container").fadeIn(500);
        });
      },
      nextStep: function nextStep() {
        if (!($('.tabcontainer.active').last().index() == $('.tabcontainer').length - 1)) {
          $('.tabcontainer.active').removeClass('active').next().addClass('active');

          $('.steplinks li.active').removeClass('active').next().addClass('active');
          $('.steplinks li.active').prev().addClass('modified');
          if ($('.tabcontainer.active').last().index() == 3) {
            $('.steplinks li').addClass('modified');
          }
        }
      },

      urlGenerate: function urlGenerate(e) {
        // alert((e.keyCode));
      },

      pressed: function pressed() {
        $(".steplinks li.modified").click(function () {
          var findloc = $(this).data('tab');
          $('.steplinks li.modified').removeClass('active');
          $(this).addClass('active');
          $('.tabcontainer').removeClass('active');
          $("#" + findloc).addClass('active');
        });
      },
      addService: function addService() {
        var $serName = $("#serviceName").val();
        var $serTime = $("#serTime").val();
        var markup = "<div class='tables border-light'><div class='tablecell'><span>" + $serName + "</span></div><div class='tablecell'><span>" + $serTime + " Mins </span></div></div>";
        $("input[type=text], textarea").val("");
        $(".list-pages").append(markup);
        $(".addServiceEnable").css('display', 'none');
        $('.addplus').removeClass('hide-imp');
      },
      addAction: function addAction() {
        $('.addplus').addClass('hide-imp');
        $(".addServiceEnable").css('display', 'block');
        $(".cancelService").removeClass('hide-imp');
      },
      cancelService: function cancelService() {
        $("input[type=text], textarea").val("");
        $(".addServiceEnable").css('display', 'none');
        $('.addplus').removeClass('hide-imp');
      },
      switchbtn: function switchbtn() {
        var $mark = this.children('.swap').text();
        alert($mark);
        if ($mark.hasClass('showele')) {

          $(".swap.switcham").removeClass('showele');
          $(".swap.switchpm").addClass('showele');
        }
      }
    }

  });
});