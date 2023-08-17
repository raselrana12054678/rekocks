$(document).ready(function() {
    
    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToScroll: 1
      });



      // init Isotope
          var $grid = $('.portfolio-items').isotope({
      // options
          });
        // filter items on button click
        $('.portfolio-menu').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

});