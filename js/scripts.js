/*==================================
 Template Name: Sophia - Personal Portfolio Template
 Description: Personal Portfolio and Resume Template for Web Designer and Developer.
 Version: 1.0
 Author: https://themeforest.net/user/htmllover
 ==================================== */

/*=========== TABLE OF CONTENTS ===========
 1. preloader
 2. back to top
 3. client testimonial slider
 4. video popup
 5. portfolio details slider
 6. lightbox popup
 7. Portfolio Isotope initialization
 8. blog slider
 9. Particles effect
 ===========*/

jQuery(function ($) {

    'use strict';

    //Preloader
    $(window).ready(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');

    });

    // jQuery for back to Top
    (function(){

        $('body').append('<div id="toTop"><span class="fa fa-angle-up"></span></div>');

        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());


    //Portfolio Isotope initialization
    $('#project-container').imagesLoaded( function() {
        var $portfolio = $('#project-container');
        $portfolio.isotope( function() {
            $portfolio.isotope({
                isOriginLeft: true
            });
            $portfolio.isotope();
        });

        // filter items
        $('.button-group').on( 'click', 'a', function(e) {
            e.preventDefault();
            var filterValue = $(this).attr('data-filter');
            $portfolio.isotope({ filter: filterValue });

            $('.button-group a').removeClass('active');
            $(this).closest('a').addClass('active');

        });
    });


    // Particles effect in the "background" class
    $(".particles-bg").particleground({
        density: 13000,
        lineWidth: 0.2,
        lineColor: "#1b2796",
        dotColor: "#fff",
        parallax: false,
        proximity: 230
    });

}); // JQuery end
