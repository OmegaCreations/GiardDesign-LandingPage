// FADE ON SCROLL
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).outerHeight();
      $(".fade").each(function() {

        // Check the location of each desired element 
        var objectBottom = $(this).offset().top + $(this).innerHeight() + 100;
        var direction = $(this).attr('direction') == 'left' ? 'translateX(-10px)' : 'translateX(10px)'; //
        
        // If the element is completely within bounds of the window, fade it in 
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).css('opacity', '1').css('transform', 'translateX(0)');}
        } else { //=object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).css('opacity', '0').css('transform', direction);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
});