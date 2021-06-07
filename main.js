document.addEventListener('DOMContentLoaded', function () {


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
            autoplaySpeed: 3100,
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

        $('.slider2').slick({
            arrows: false, //если не нужны по дизайну
            dots: false,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
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
            $('.section').css('backgroundColor', dataColor)
            // $('.buttons-info a:first-child').addClass('hover-bg')
            function bgClassName(className) {
                let name = '.' + className;
                $(name).hover(function () {
                    $(this).css('backgroundColor', '#fff')
                }, function () {
                    $(this).css('backgroundColor', dataColor)
                })
            }
            bgClassName('buttons-info a:first-child')
        })


        $(document).on('click', '.choose-color-cog', function () {
            $('.choose-color-blocks').toggleClass('transform-color-blocks');
        })

        for (let elem of $('.counter')) {
            function setValue() {
                setInterval(function () {
                    if (Number(elem.innerHTML) < Number(elem.getAttribute('data-done'))) {
                        let numb = Number(elem.innerHTML) + 12;
                        elem.innerHTML = numb;
                    }
                }, 10)
            }
            setValue();
        }
    })
})