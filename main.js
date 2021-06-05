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

    /*Настройка блока цветных кнопок*/
    $(document).on('click', '.choose-your-color', function (e) {
        let dataColor = $(e.target).attr('data-color')
        $('.buttons-info a:first-child').css('backgroundColor', dataColor)
    })

    $(document).on('mouseover', '.choose-color', function () {
        $('.choose-color').css('backgroundColor', '#e1e')
    })
})