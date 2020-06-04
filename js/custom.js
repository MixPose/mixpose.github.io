$(document).ready(function(){
    screenshotCarousel();
});

function screenshotCarousel() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:35,
        nav:true,
        // autoPlay: 5000, //Set AutoPlay to 5 seconds
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1.2
            },
            600:{
                items:2.2
            },
            1000:{
                items:3.5
            }
        }
    });
}