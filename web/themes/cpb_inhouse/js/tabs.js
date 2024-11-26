
  /*
   Function elementlocation from:
   http://bibekshrestha.com.np/blogs/post/2009/04/20/jquery-code-get-x-y-coordinate-mouse-click-any-visible-element
   */
jQuery.fn.elementlocation = function() {
  var curleft = 0;
  var curtop = 0;
  var obj = this;
  do {
    curleft += obj.attr('offsetLeft');
    curtop += obj.attr('offsetTop');
    obj = obj.offsetParent();
  } while ( obj.attr('tagName') != 'BODY' );
  return ( {x:curleft, y:curtop} );
};


jQuery(document).ready(function() {

  /* ---------- BEGIN: Tabbed Nav -------- */
  jQuery('ul#tabbedNav li a').click(function(e) {
    e.preventDefault();
    // My associated div's ID:
    var theHref = jQuery(this).attr('href');
    // Hide all tab divs:
    jQuery('div.tabbedNavDiv').hide();
    // Hide all descriptive divs:
    jQuery('div.printerDesc').hide();
    // Clear my div's CSS:
    jQuery('div#'+theHref).css('clear','both');
    // Show just my div:
    jQuery('div#'+theHref).show();
    // Clear CSS of other tabs:
    jQuery('ul#tabbedNav li').removeAttr('class');
    // Make my tab 'current':
    jQuery(this).parent().attr('class','activeTab');
  });
  /* ---------- END: Tabbed Nav ---------- */


  /* ------- BEGIN: Printer clicks ------- */
  jQuery('area').click(function(e) {
    e.preventDefault();

    /*
     For debugging only in FF/Chrome (breaks IE, even though it didn't always):

     var location = jQuery(this).elementlocation();
     var x = e.pageX - location.x;
     var y = e.pageY - location.y;
     var whichFloor = jQuery(this).attr('alt');
     alert(x+ ' '+y);
     */

    var theHref = jQuery(this).attr('href');
    var theCoords = jQuery(this).attr('coords');
    var coordArr = theCoords.split(',');

    // Left Pos: arithmetic mean, which is the (SUM of two left coordinates) DIVIDED by two, then subtract 24px of margin and padding:
    var leftPos = ( (parseInt(coordArr[2])+parseInt(coordArr[0]))/2 ) - 24;
    // Top Pos: 186px minus bottom location of printer icon:
    var topPos = 186 - parseInt(coordArr[3]);
    // Height: Top Pos minus 4:
    var myHeight = topPos - 4;

    jQuery('div.descLine').attr('style','top: -'+topPos+'px; left: '+leftPos+'px; height: '+myHeight+'px;');

    if (theHref != '') {
      // Hide all descriptive divs:
      jQuery('div.printerDesc').hide();
      // Clear my div's CSS:
      jQuery('div#'+theHref).css('clear','both');
      // Show just my div:
      jQuery('div#'+theHref).show();
    }

  });
  /* -------- END: Printer clicks -------- */

});
