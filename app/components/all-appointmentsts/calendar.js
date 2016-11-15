import Ember from 'ember';

export default Ember.Component.extend({
  $('#datepicker').datepicker();
$('#datepicker').on("changeDate", function() {
    $('#my_hidden_input').val(
        $('#datepicker').datepicker('getFormattedDate')
    );
});
});
