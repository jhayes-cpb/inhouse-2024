jQuery( document ).ready(function() {
  // Store URL and anchor tag
  var url = document.location.toString();
  var aTag = '#'+url.split('#')[1];
  
  //If we receive an anchor tag in the URL Ex. #collapse24
  if (url.match('#') ) {



    //We expand the selected panel
    jQuery(aTag).collapse('show');
    //Slow animate to the selected span and scroll up a little bit to show the header.
    jQuery('html,body').animate({scrollTop: jQuery(aTag).offset().top -50},'slow');
  }
});
