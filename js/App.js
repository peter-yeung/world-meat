define(function (require,exports,module) {

    var $               = require('jquery');
    var CounterManager  = require('./CounterManager');
    var Sliders         = require('./Sliders');

    // JQUERY FOR SLIDING NAVIGATION
    $(document).ready(function() {
      $('a[href*=#]').each(scrollToLink);

      var counterManager = new CounterManager(document.querySelector('#slide4 .counter_container'))
      var sliders = new Sliders();

      update();

      function update() {
        counterManager.update();
      }

      function scrollToLink(){

          var isLocalLink = location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
              && location.hostname == this.hostname
              && this.hash.replace(/#/,'');

          if (isLocalLink) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
             if ($target) {
               var targetOffset = $target.offset().top;

              //JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV
               $(this).click(function() {
                  $("#nav li a").removeClass("active");
                  $(this).addClass('active');
                 $('html, body').animate({scrollTop: targetOffset}, 1000);
                 return false;
               });
            }
          }
        }

    });

});
