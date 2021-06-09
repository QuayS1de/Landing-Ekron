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

    $(document).on('mouseover', '.block-box', function () {
        // $(this).addClass('block-box-adding');
        // $('.block-box-add').addClass('block-box-adding')

        function oversize() {
            // $('.block-box-adding').css('height', '250px')
            intervalOver = setInterval(function () {
                console.log($('.block-box-adding').innerWidth())
                if (($('.block-box-adding').innerWidth() < $('.block-box').innerWidth()) && ($('.block-box-adding').innerHeight() < $('.block-box').innerHeight())) {
                    let num = $('.block-box-adding').innerWidth()
                    num = num + 5
                    let numb = num + 'px'
                    $('.block-box-adding').css('width', numb)
                    $('.block-box-adding').css('height', numb)
                } else if ($('.block-box-adding').innerWidth() == $('.block-box').innerWidth() || $('.block-box-adding').innerWidth() > $('.block-box').innerWidth()) {
                    $('.block-box-adding').css('width', $('.block-box').innerWidth() + 'px')
                    $('.block-box-adding').css('height', $('.block-box').innerHeight() + 'px')
                }


                if ($('.block-box-adding').innerWidth() == $('.block-box').innerWidth()) {
                    clearInterval(intervalOver)
                }

            }, 10)


        }
        oversize()

    })

    $(document).on('mouseout', '.block-box', function (e) {
        // $(this).addClass('block-box-adding');
        // $('.block-box-add').addClass('block-box-adding')
        for (let elem of $('.block-box-adding')) {
            function downsize() {
                // $('.block-box-adding').css('height', '250px')
                setInterval(function () {
                    // console.log($('.block-box-adding').innerWidth())
                    if (($(elem).innerWidth() > 0) && ($(elem).innerHeight() > 0)) {
                        let num = $(elem).innerWidth()
                        num = num - 5
                        let numb = num - 'px'
                        $(elem).css('width', numb)
                        $(elem).css('height', numb)
                    } else if ($(elem).innerWidth() == 0) {
                        $(elem).css('width', $('.block-box').innerWidth() + 'px')
                        $(elem).css('height', $('.block-box').innerHeight() + 'px')
                    }
                }, 10)
            }
            downsize()
        }
    })

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