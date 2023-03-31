$(document).ready(function () {

    $('.mod_nav_bar').hide();

    $('.menu_icon').click(function () {

        $('.mob_nav_bar').slideToggle();

    });


    $('.mob_sub_menu').hide();

    $('.mob_nav_bar > ul > li > a').click(function () {

        $(this).next('.mob_sub_menu').slideToggle();
    });



    $('#main_slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        mouseDrage: false,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    });



    $('#testi').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('#about_slider').owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: false,
        mouseDrage: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    

    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


});