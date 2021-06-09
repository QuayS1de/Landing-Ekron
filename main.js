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

    function oversize(classNameOut, classNameIn) {
        let nameclassOutside = '.' + classNameOut
        let nameclass = '.' + classNameIn

        $(document).on('mouseover', nameclassOutside, function () {
            intervalOver = setInterval(function () {
                console.log($(nameclass).innerWidth())
                if (($(nameclass).innerWidth() < $(nameclassOutside).innerWidth()) && ($(nameclass).innerHeight() < $(nameclassOutside).innerHeight())) {
                    let num = $(nameclass).innerWidth()
                    num = num + 5
                    let numb = num + 'px'
                    $(nameclass).css('width', numb)
                    $(nameclass).css('height', numb)
                } else if (($(nameclass).innerWidth() == $(nameclassOutside).innerWidth() || $(nameclass).innerWidth() > $(nameclassOutside).innerWidth()) && (($(nameclass).innerHeight() == $(nameclassOutside).innerHeight() || $(nameclass).innerHeight() > $(nameclassOutside).innerHeight()))) {
                    $(nameclass).css('width', $(nameclassOutside).innerWidth() + 'px')
                    $(nameclass).css('height', $(nameclassOutside).innerHeight() + 'px')
                }


                // if ($(nameclass).innerWidth() == $(nameclassOutside).innerWidth()) {
                //     clearInterval(intervalOver)
                // }

            }, 1)


        })
    }
    oversize('block-box-1', 'box-1')
    oversize('block-box-2', 'box-2')
    oversize('block-box-3', 'box-3')






    // $(document).on('mouseout', '.block-box-1', function (e) {
    //     $('.box-1').animate({
    //         width: 0,
    //         height: 0
    //     })
    // }, 1, )


    $(document).ready(function () {
        window.addEventListener('scroll', animOnScroll)
        let progressBar = document.querySelector('.progress-bar-start')

        function animOnScroll() {
            let progressBarHeight = progressBar.offsetHeight; //получаем высоту объекта
            let progressBarOffSet = offSet(progressBar).top //получаем позицию объекта, то на сколько объект находится ниже чем верх страницы
            let progressBarStart = 4; //коэффициент, который будет регулировать момент старта анимации. Начинает при достижении 1/4 высоты окна браузера

            let progressBarItemPoint = window.innerHeight - progressBarHeight / progressBarStart

            //бывают ситуации, когда анимированный объект выше по высоте окна браузера, тогда придется задать условие и немножко изменить формулу.
            if (progressBarHeight > window.innerHeight) {
                let progressBarItemPoint = window.innerHeight - window.innerHeight / progressBarStart
            }

            if ((pageYOffset > (progressBarOffSet - progressBarItemPoint)) && (pageYOffset < (progressBarOffSet + progressBarHeight))) {
                let progressNumber = $('.progress-done p');
                $(function () {

                    let progress = document.querySelectorAll('.progress-done');


                    for (let elem of progress) {
                        elem.style.width = elem.getAttribute('data-done') + '%';
                        elem.style.opacity = 1;
                    }


                    for (let elem of progressNumber) {

                        function setValue() {
                            setInterval(function () {
                                if (Number(elem.innerHTML) < Number(elem.getAttribute('data-done'))) {
                                    let numb = Number(elem.innerHTML) + 1;
                                    elem.innerHTML = numb;
                                }
                            }, 15)
                        }
                        setValue();
                    }

                })

            }
        }

        function offSet(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
    });
})