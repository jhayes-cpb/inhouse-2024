/**
 * @file
 * For usage on node/add/cpb_weekly_reports to limit datepicker there to Fridays only
 */
(function ($, Modernizr, Drupal) {

  "use strict";

  /**
   * https://stackoverflow.com/questions/501943/can-the-jquery-ui-datepicker-be-made-to-disable-saturdays-and-sundays-and-holid
   or
   https://drupal.stackexchange.com/questions/58968/customize-days-that-can-be-clicked-on-a-calendar-popup
   */
  $( "#requestShipDate" ).datepicker({
      beforeShowDay: function(date){
          show = true;
          if(date.getDay() == 0 || date.getDay() == 6){show = false;}//No Weekends
          for (var i = 0; i < holidays.length; i++) {
              if (new Date(holidays[i]).toString() == date.toString()) {show = false;}//No Holidays
          }
          var display = [show,'',(show)?'':'No Weekends or Holidays'];//With Fancy hover tooltip!
          return display;
      }
  });

})(jQuery, Modernizr, Drupal);
