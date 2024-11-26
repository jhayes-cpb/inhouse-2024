//Somehow we need this to force menus to dropdown

(function ($) {

  $('.dropdown-toggle').dropdown();

  //Get current URl and add it to menus in documentation.

  var pathname = window.location.pathname;




 $.each($(".documentation-menu > li"), function(index, value){

   $(".caret-collapsed", value).click(function(){

     if($(this).hasClass("caret-collapsed")){
       $(this).removeClass("caret-collapsed");
       $(this).addClass("caret-expanded");
       $(value).children("ul").children("li").removeClass("item-hidden");


     }else if($(this).hasClass("caret-expanded")) {
       $(this).removeClass("caret-expanded");
       $(this).addClass("caret-collapsed");
       $(value).children("ul").children("li").addClass("item-hidden");
     }

   });

   if($(this).hasClass("active")){
     $(this).children("span").removeClass("caret-collapsed");
     $(this).children("span").addClass("caret-expanded");
     $(this).children("ul").children("li").removeClass("item-hidden");
   }

   if( $("a",value).attr("href") == pathname){

     $(value).addClass("current-page");
     console.log($(value));
   }

 });







})(jQuery);
