$(document).ready(function () {
    $('.slider').slick({
        arrows: false, //если не нужны по дизайну
        dots: false,
        adaptiveHeight: true,
        adaptiveWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: false,
                adaptiveWidth: true,
            }
        }]

    });
})