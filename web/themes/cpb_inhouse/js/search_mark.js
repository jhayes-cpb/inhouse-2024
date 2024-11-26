/**
 * Created by Paul Silva on 4/6/2018.
 */

jquery = jQuery.noConflict();
var stickyOffset = "";

jquery(function( $ ) {
  //$("#cpbSearchField").on('input',function(){
  //  $(".content").unmark()
  //  inputText = $("#cpbSearchField").val();
  //  console.log(inputText);
  //  $(".content").mark(inputText, { "ignorePunctuation": [ ".", "," ], "ignoreJoiners": true });
  //});

  var searchPolicySelector = $(".cpbPolicySearch");
  if (searchPolicySelector.length){
    stickyOffset = searchPolicySelector.offset().top;
  }


  $(window).scroll(function(){
    var sticky = $('.cpbPolicySearch'),
      scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  // the input field
  var $input = $("input[type='search']"),
  // clear button
    $clearBtn = $("button[data-search='clear']"),
  // prev button
    $prevBtn = $("button[data-search='prev']"),
  // next button
    $nextBtn = $("button[data-search='next']"),
  // the context where to search
    $content = $(".policyContent"),
  // jQuery object to save <mark> elements
    $results,
  // the class that will be appended to the current
  // focused element
    currentClass = "current",
  // top offset for the jump (the search bar)
    offsetTop = 150,
  // the current index of the focused element
    currentIndex = 0;

  /**
   * Jumps to the element matching the currentIndex
   */
  function jumpTo() {
    if ($results.length) {
      var position,
        $current = $results.eq(currentIndex);
      $results.removeClass(currentClass);
      if ($current.length) {
        $current.addClass(currentClass);
        //expand parent container

        $current.closest(".panel-collapse").collapse('show');

        position = $current.offset().top - offsetTop;
        $('html, body').animate({
          scrollTop: position
        }, 200);

      }
    }
  }


  function searchHere(input){
    var searchVal = input.val();
    console.log(searchVal, input, $input);
    $content.unmark({
      done: function() {
        $content.mark(searchVal, {
          separateWordSearch: true,
          "ignorePunctuation": [ ".", "," ],
          "ignoreJoiners": true,
          done: function() {
            $results = $content.find("mark");
            currentIndex = 0;
            jumpTo();
          }
        });
      }
    });
  }

  /**
   * Searches for the entered keyword in the
   * specified context on input
   */
  $input.keypress(function(e) {
    if(e.which == 13) {
      searchHere($input);
    }
  });

  $("#submmitButton").on("click", function() {
    searchHere($input);
  });

  /**
   * Clears the search
   */
  $clearBtn.on("click", function() {
    $content.unmark();
    $input.val("").focus();
  });

  /**
   * Next and previous search jump to
   */
  $nextBtn.add($prevBtn).on("click", function() {
    if ($results.length) {
      currentIndex += $(this).is($prevBtn) ? -1 : 1;
      if (currentIndex < 0) {
        currentIndex = $results.length - 1;
      }
      if (currentIndex > $results.length - 1) {
        currentIndex = 0;
      }
      jumpTo();
    }
  });


});
