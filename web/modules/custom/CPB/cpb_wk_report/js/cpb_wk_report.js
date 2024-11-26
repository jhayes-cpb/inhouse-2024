/**
 * @file
 * For usage on node/add/cpb_weekly_reports to limit datepicker to Fridays only.
 */

/* (function ($, Drupal, Picker) {
  Drupal.behaviors.cpb_wk_report = {
    attach: function attach(context, settings) {
      $('input#edit-field-cpb-date-0-value-date').attr("type", "input");
      $('input#edit-field-cpb-date-0-value-date').pickadate({
        disable: [
          1, 2, 3, 4, 5, 7
       ]
      });
    }
  };
})(jQuery, Drupal, Picker); */

(function ($, Drupal) {
  Drupal.behaviors.cpb_wk_report = {
    attach: function (context, settings) {
      $('input#edit-field-cpb-date-0-value-date').attr("type", "text");
      picker.attach({
        target: "edit-field-cpb-date-0-value-date",
        disableday: [1, 2, 3, 4, 6, 7],
      });
    }
  };
})(jQuery, Drupal);
