// WOW SCRIPT - CSS ANIMATIONS //

(function ($) {
  "use strict";
  var wow = new WOW({
    boxClass: "js_wow",
    animateClass: "animate animate_duration",
    offset: 0,
    mobile: true,
    live: false
  });








// FULLPAGE SCRIPT - FULL SCREEN WHEN SCROLLING //

  $ (".js_scroll").fullpage({
    sectionSelector: ".js_scroll",
    scrollBar: true,
    scrollingSpeed: 1e3,
    afterRender: function() {
      wow.init()
    }
  });



 VanillaTilt.init(document.querySelector(".tilt"), {
        max: 25,
        speed: 400
    });



// JQUERY //

  $(window).scroll(function() {
    var $window = $(window),
      $body = $(".js_body"),
    varscroll = $window.scrollTop() + $window.height() / 3;
  })
})
(jQuery);
