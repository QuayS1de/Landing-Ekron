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
            // autoplay: true,
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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },

            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }]

        });

        $('.slider3').slick({
            arrows: true, //если не нужны по дизайну
            dots: false,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
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
        $('.slider4').slick({
            arrows: false, //если не нужны по дизайну
            dots: false,
            adaptiveHeight: true,
            // adaptiveWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
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
            $('.buttons-info-helper').css('backgroundColor', dataColor)
            $('.pre-section2__blocks-placement >div i').css('color', dataColor)
            $('.describe-card ul li').css('backgroundColor', dataColor)
            $('.progress-done').css('backgroundColor', dataColor)
            $('.nav_logo').css('color', dataColor)
            $('.active').css('color', dataColor)
            $('.choose-color-cog').css('backgroundColor', dataColor)
            $('.pre-footer h1').css('color', dataColor)

            function bgClassName(className, parametr1, parametr2) {
                let name = '.' + className;
                $(name).hover(function () {
                    $(this).css(parametr1, parametr2)
                }, function () {
                    $(this).css(parametr1, dataColor)
                })
            }
            bgClassName('buttons-info a:first-child', 'backgroundColor', '#fff')
            bgClassName('buttons-info-helper', 'backgroundColor', '#000')
            bgClassName('nav_list li a', 'color', '#fff')
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


    new WOW().init();



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

    /*Плавная прокрутка страницы*/

    function anchorIntoView(idAnchor) {
        let link = 'li[href=' + idAnchor + ']'
        const anchor = document.querySelector(link);
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
    anchorIntoView('"#home"')
    anchorIntoView('"#about"')
    anchorIntoView('"#service"')
    anchorIntoView('"#portfolio"')
    anchorIntoView('"#team"')
    anchorIntoView('"#pricing"')
    anchorIntoView('"#blog"')
    anchorIntoView('"#testimonials"')
    anchorIntoView('"#contact"')
    /*----------------------------*/

    if (window.innerWidth < 860) {
        let contain = '<i class="fas fa-bars"></i>';
        let navClone = $('.nav_list').clone();
        navClone.appendTo('.content');
        navClone.addClass('cloneNavList')
        for (let elem of $('.cloneNavList li')) {
            $(elem).attr('href', $(elem).attr('href') + 1)
        }
        $('.nav .nav_list').remove()

        $('.nav').append(contain)
        $('.nav i').addClass('sidebar');
        $('.sidebar').css('margin', '5px')
        $('.sidebar').css('fontSize', '22px')
        $('.sidebar').css('color', '#2280e6')
        $('.sidebar').css('padding', '10px')
        $('.sidebar').css('border', '1px solid #f1f1f1')
        $('.sidebar').css('border-radius', '5px')
        $('.sidebar').css('cursor', 'pointer')
        $('.nav_logo').css('marginLeft', '15px')
        $('.cloneNavList').css('flex-wrap', 'wrap')
        $('.cloneNavList').css('marginLeft', '0')
        $('.cloneNavList').css('color', '#fff')

        $(document).on('click', '.sidebar', function () {
            $('.cloneNavList').toggleClass('list-visible')
        })
        $('#home').attr('id', 'home1')
        $('#about').attr('id', 'about1')
        $('#service').attr('id', 'service1')
        $('#portfolio').attr('id', 'portfolio1')
        $('#team').attr('id', 'team1')
        $('#pricing').attr('id', 'pricing1')
        $('#blog').attr('id', 'blog1')
        $('#testimonials').attr('id', 'testimonials1')
        $('#contact').attr('id', 'contact1')

        function anchorIntoView1(idAnchor) {
            let link = 'li[href=' + idAnchor + ']'
            const anchor = document.querySelector(link);
            anchor.addEventListener('click', function (event) {
                event.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            })
        }

        anchorIntoView1('"#home1"')
        anchorIntoView1('"#about1"')
        anchorIntoView1('"#service1"')
        anchorIntoView1('"#portfolio1"')
        anchorIntoView1('"#team1"')
        anchorIntoView1('"#pricing1"')
        anchorIntoView1('"#blog1"')
        anchorIntoView1('"#testimonials1"')
        anchorIntoView1('"#contact1"')

    }
})