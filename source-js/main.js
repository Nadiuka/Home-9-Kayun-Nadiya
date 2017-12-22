jQuery(window).load(function() {
  jQuery('.slider-members').flexslider({
    animation: "slide",
    minItems: 3,
    maxItems: 3,
    itemWidth: 300,
    itemMargin: 20,
    customDirectionNav: jQuery('#slider-members-controls a'),
    controlNav: false
  })

  jQuery('.slider-videos').flexslider({
    animation: "slide",
    customDirectionNav: jQuery('#slider-video-controls a'),
    controlNav: false
  })

  jQuery('.slider-header-fotos').flexslider({
    animation: "slide",
    controlsContainer: false,
    controlNav: false
  })
})