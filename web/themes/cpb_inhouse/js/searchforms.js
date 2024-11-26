(function ($) {
//When we get an input in the search text field we hide what is not relevant from the list.

  function startSearch(){
    var value = $('#cpb-form-search').val().toLowerCase();
    $('.header').hide();
    $('#formList li').hide().each(function () {
      if ($(this).text().toLowerCase().search(value) > -1) {
        $(this).prevAll('.header').first().add(this).show();
      }
    });
  };

  //While we input with the keyboard something in the text field
  $('#cpb-form-search').on('keyup', function () {
    startSearch();
  });
//ver Parameter from the URL
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  //Exclude "Forms" and "Form" from the search because it would wiled no results.
  var searchQuery = getParameterByName('search_api_fulltext').toLowerCase();

  if (searchQuery != "forms" && searchQuery != "form") {
    $('#cpb-form-search').val(searchQuery);
    startSearch();
  }


})(jQuery);




