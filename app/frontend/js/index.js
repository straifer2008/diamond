$(document).ready(function(){
    $(".carusel-top").owlCarousel({
        items: 1,
        center: true,
        margin: 2,
        loop: true,
        stagePadding: 120,
        autoWidth: true,
        dots: true
    });

    $(".carusel-brands").owlCarousel({
        margin: 60,
        loop: true,
        autoWidth: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});