let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
jQuery(document).ready(function ($) {
    $("body").removeClass("preload"); 
});

var myLazyLoad = new LazyLoad();

const swiperArticle = new Swiper(".info-slider-wrapper", {
    navigation: {
      nextEl: ".info-slider-panel__next",
      prevEl: ".info-slider-panel__prev",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".info-slider-pagination",
        clickable: true,
    },
    breakpoints: {
        1210: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});

const swiperImportant = new Swiper(".important-slider", {
    navigation: {
      nextEl: ".important-slider-panel__next",
      prevEl: ".important-slider-panel__prev",
    },
    autoHeight: true,
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".important-slider-pagination",
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
});


// jQuery function
$(document).ready(function() {
    // слайдер о нас
    function slider() {
        const sliderAbout = document.querySelector('.slider');
        var hammertime = new Hammer(sliderAbout);
        hammertime.on('swipeleft', function(ev) {
            if(sliderAdd.find('.slider-pagination .current').next().length == 0) {
                sliderAdd.find('.slider-pagination .point').removeClass('current')
                sliderAdd.find('.slider-pagination .point').first().addClass('current')
            } else {
                sliderAdd.find('.slider-pagination .current').next().addClass('current')
                sliderAdd.find('.slider-pagination .current').prev().removeClass('current')
            }
            if(sliderAdd.find('.slider-item.next').next().length == 0) {
                //Переносим next на 1 слайд
                sliderAdd.find('.slider-item').first().addClass('next');
                sliderAdd.find('.slider-item').last().removeClass('next');
                // Переносим current на последний слайд
                sliderAdd.find('.slider-item.current').next().addClass('current');
                sliderAdd.find('.slider-item.current').prev().removeClass('current');
                // Переносим prev за current
                sliderAdd.find('.slider-item.prev').next().addClass('prev');
                sliderAdd.find('.slider-item.prev').prev().removeClass('prev');

            } else {
                sliderAdd.find('.slider-item.next').next().addClass('next');
                sliderAdd.find('.slider-item.next').prev().removeClass('next');

                //Если current последний переносим на 1 слайд
                if(sliderAdd.find('.slider-item.current').next().length == 0) {
                    sliderAdd.find('.slider-item').first().addClass('current');
                    sliderAdd.find('.slider-item').last().removeClass('current');
                } else {
                    sliderAdd.find('.slider-item.current').next().addClass('current');
                    sliderAdd.find('.slider-item.current').prev().removeClass('current');
                }
                //Если prev последний переносим на 1 слайд
                if(sliderAdd.find('.slider-item.prev').next().length == 0) {
                    sliderAdd.find('.slider-item').first().addClass('prev');
                    sliderAdd.find('.slider-item').last().removeClass('prev');
                } else {
                    sliderAdd.find('.slider-item.prev').next().addClass('prev');
                    sliderAdd.find('.slider-item.prev').prev().removeClass('prev');
                }
            }
            if(sliderAdd.find('.slider-item.next-next').next().length == 0) {
                //Переносим next на 1 слайд
                sliderAdd.find('.slider-item').first().addClass('next-next');
                sliderAdd.find('.slider-item').last().removeClass('next-next');
                // Переносим prev за current
                sliderAdd.find('.slider-item.prev-prev').next().addClass('prev-prev');
                sliderAdd.find('.slider-item.prev-prev').prev().removeClass('prev-prev');

            } else {
                sliderAdd.find('.slider-item.next-next').next().addClass('next-next');
                sliderAdd.find('.slider-item.next-next').prev().removeClass('next-next');
                //Если prev последний переносим на 1 слайд
                if(sliderAdd.find('.slider-item.prev-prev').next().length == 0) {
                    sliderAdd.find('.slider-item').first().addClass('prev-prev');
                    sliderAdd.find('.slider-item').last().removeClass('prev-prev');
                } else {
                    sliderAdd.find('.slider-item.prev-prev').next().addClass('prev-prev');
                    sliderAdd.find('.slider-item.prev-prev').prev().removeClass('prev-prev');
                }
            }
        });
        hammertime.on('swiperight', function(ev) {
            if(sliderAdd.find('.slider-pagination .current').prev().length == 0) {
                sliderAdd.find('.slider-pagination .point').removeClass('current')
                sliderAdd.find('.slider-pagination .point').last().addClass('current')
            } else {
                sliderAdd.find('.slider-pagination .current').prev().addClass('current')
                sliderAdd.find('.slider-pagination .current').next().removeClass('current')
            }
            if(sliderAdd.find('.slider-item.prev').prev().length == 0) {
                //Переносим prev на последний слайд
                sliderAdd.find('.slider-item').last().addClass('prev');
                sliderAdd.find('.slider-item').first().removeClass('prev');
                // Переносим current на 1 слайд
                sliderAdd.find('.slider-item.current').prev().addClass('current');
                sliderAdd.find('.slider-item.current').next().removeClass('current');
                // Переносим next за current
                sliderAdd.find('.slider-item.next').prev().addClass('next');
                sliderAdd.find('.slider-item.next').next().removeClass('next');

            } else {
                sliderAdd.find('.slider-item.prev').prev().addClass('prev');
                sliderAdd.find('.slider-item.prev').next().removeClass('prev');
                //Если current 1 переносим на последний слайд
                if(sliderAdd.find('.slider-item.current').prev().length == 0) {
                    sliderAdd.find('.slider-item').last().addClass('current');
                    sliderAdd.find('.slider-item').first().removeClass('current');
                } else {
                    sliderAdd.find('.slider-item.current').prev().addClass('current');
                    sliderAdd.find('.slider-item.current').next().removeClass('current');
                }

                if(sliderAdd.find('.slider-item.next').prev().length == 0) {
                    sliderAdd.find('.slider-item').last().addClass('next');
                    sliderAdd.find('.slider-item').first().removeClass('next');
                } else {
                    sliderAdd.find('.slider-item.next').prev().addClass('next');
                    sliderAdd.find('.slider-item.next').next().removeClass('next');
                }
            }
            if(sliderAdd.find('.slider-item.prev-prev').prev().length == 0) {
                //Переносим prev на последний слайд
                sliderAdd.find('.slider-item').last().addClass('prev-prev');
                sliderAdd.find('.slider-item').first().removeClass('prev-prev');
                // Переносим next за current
                sliderAdd.find('.slider-item.next-next').prev().addClass('next-next');
                sliderAdd.find('.slider-item.next-next').next().removeClass('next-next');

            } else {
                sliderAdd.find('.slider-item.prev-prev').prev().addClass('prev-prev');
                sliderAdd.find('.slider-item.prev-prev').next().removeClass('prev-prev');

                if(sliderAdd.find('.slider-item.next-next').prev().length == 0) {
                    sliderAdd.find('.slider-item').last().addClass('next-next');
                    sliderAdd.find('.slider-item').first().removeClass('next-next');
                } else {
                    sliderAdd.find('.slider-item.next-next').prev().addClass('next-next');
                    sliderAdd.find('.slider-item.next-next').next().removeClass('next-next');
                }
            }
        });
        
        const sliderAdd = $('.slider') // Слайдер
        const sliderPrevElem = sliderAdd.find('.slider-panel__prev') // Предыдущий слайд
        const sliderNextElem = sliderAdd.find('.slider-panel__next') // Следующий слайд
        if(sliderAdd.find('.slider-item').length <= 2) {
            sliderAdd.find('.slider-panel').remove();
            sliderAdd.find('.slider-item').removeClass('prev');
            sliderAdd.find('.slider-item').removeClass('next');
            sliderAdd.find('.slider-item').removeClass('current');
            sliderAdd.find('.slider-item').addClass('show')
        } if (sliderAdd.find('.slider-item').length >= 5) {
            sliderAdd.find('.slider-item').first().addClass('current');
            sliderAdd.find('.slider-item').eq(1).addClass('next');
            sliderAdd.find('.slider-item.next').next().addClass('next-next');
            sliderAdd.find('.slider-item').last().addClass('prev');
            sliderAdd.find('.slider-item.prev').prev().addClass('prev-prev');
            sliderNext();
            sliderPrev();
            sliderNextNext();
            sliderPrevPrev();
            sliderPagination();

        } else {
            sliderAdd.find('.slider-item').first().addClass('current');
            sliderAdd.find('.slider-item').eq(1).addClass('next');
            sliderAdd.find('.slider-item').last().addClass('prev');
            sliderNext();
            sliderPrev();
        }
        function dataAttributesItem() {
            sliderAdd.find('.slider-item').each(function(i, e) {
                e.setAttribute('data-number', i)
            })
        }
        dataAttributesItem()
        function sliderNext() {
            sliderNextElem.click(function() {
                if(sliderAdd.find('.slider-pagination .current').next().length == 0) {
                    sliderAdd.find('.slider-pagination .point').removeClass('current')
                    sliderAdd.find('.slider-pagination .point').first().addClass('current')
                } else {
                    sliderAdd.find('.slider-pagination .current').next().addClass('current')
                    sliderAdd.find('.slider-pagination .current').prev().removeClass('current')
                }
                if(sliderAdd.find('.slider-item.next').next().length == 0) {
                    //Переносим next на 1 слайд
                    sliderAdd.find('.slider-item').first().addClass('next');
                    sliderAdd.find('.slider-item').last().removeClass('next');
                    // Переносим current на последний слайд
                    sliderAdd.find('.slider-item.current').next().addClass('current');
                    sliderAdd.find('.slider-item.current').prev().removeClass('current');
                    // Переносим prev за current
                    sliderAdd.find('.slider-item.prev').next().addClass('prev');
                    sliderAdd.find('.slider-item.prev').prev().removeClass('prev');

                } else {
                    sliderAdd.find('.slider-item.next').next().addClass('next');
                    sliderAdd.find('.slider-item.next').prev().removeClass('next');
    
                    //Если current последний переносим на 1 слайд
                    if(sliderAdd.find('.slider-item.current').next().length == 0) {
                        sliderAdd.find('.slider-item').first().addClass('current');
                        sliderAdd.find('.slider-item').last().removeClass('current');
                    } else {
                        sliderAdd.find('.slider-item.current').next().addClass('current');
                        sliderAdd.find('.slider-item.current').prev().removeClass('current');
                    }
                    //Если prev последний переносим на 1 слайд
                    if(sliderAdd.find('.slider-item.prev').next().length == 0) {
                        sliderAdd.find('.slider-item').first().addClass('prev');
                        sliderAdd.find('.slider-item').last().removeClass('prev');
                    } else {
                        sliderAdd.find('.slider-item.prev').next().addClass('prev');
                        sliderAdd.find('.slider-item.prev').prev().removeClass('prev');
                    }
                }
            })
        }
        
        function sliderPrev() {
            sliderPrevElem.click(function() {
                if(sliderAdd.find('.slider-pagination .current').prev().length == 0) {
                    sliderAdd.find('.slider-pagination .point').removeClass('current')
                    sliderAdd.find('.slider-pagination .point').last().addClass('current')
                } else {
                    sliderAdd.find('.slider-pagination .current').prev().addClass('current')
                    sliderAdd.find('.slider-pagination .current').next().removeClass('current')
                }
                if(sliderAdd.find('.slider-item.prev').prev().length == 0) {
                    //Переносим prev на последний слайд
                    sliderAdd.find('.slider-item').last().addClass('prev');
                    sliderAdd.find('.slider-item').first().removeClass('prev');
                    // Переносим current на 1 слайд
                    sliderAdd.find('.slider-item.current').prev().addClass('current');
                    sliderAdd.find('.slider-item.current').next().removeClass('current');
                    // Переносим next за current
                    sliderAdd.find('.slider-item.next').prev().addClass('next');
                    sliderAdd.find('.slider-item.next').next().removeClass('next');

                } else {
                    sliderAdd.find('.slider-item.prev').prev().addClass('prev');
                    sliderAdd.find('.slider-item.prev').next().removeClass('prev');
                    //Если current 1 переносим на последний слайд
                    if(sliderAdd.find('.slider-item.current').prev().length == 0) {
                        sliderAdd.find('.slider-item').last().addClass('current');
                        sliderAdd.find('.slider-item').first().removeClass('current');
                    } else {
                        sliderAdd.find('.slider-item.current').prev().addClass('current');
                        sliderAdd.find('.slider-item.current').next().removeClass('current');
                    }

                    if(sliderAdd.find('.slider-item.next').prev().length == 0) {
                        sliderAdd.find('.slider-item').last().addClass('next');
                        sliderAdd.find('.slider-item').first().removeClass('next');
                    } else {
                        sliderAdd.find('.slider-item.next').prev().addClass('next');
                        sliderAdd.find('.slider-item.next').next().removeClass('next');
                    }
                }
            })
        }
        ///////
        function sliderNextNext() {
            sliderNextElem.click(function() {
                if(sliderAdd.find('.slider-item.next-next').next().length == 0) {
                    //Переносим next на 1 слайд
                    sliderAdd.find('.slider-item').first().addClass('next-next');
                    sliderAdd.find('.slider-item').last().removeClass('next-next');
                    // Переносим prev за current
                    sliderAdd.find('.slider-item.prev-prev').next().addClass('prev-prev');
                    sliderAdd.find('.slider-item.prev-prev').prev().removeClass('prev-prev');

                } else {
                    sliderAdd.find('.slider-item.next-next').next().addClass('next-next');
                    sliderAdd.find('.slider-item.next-next').prev().removeClass('next-next');
                    //Если prev последний переносим на 1 слайд
                    if(sliderAdd.find('.slider-item.prev-prev').next().length == 0) {
                        sliderAdd.find('.slider-item').first().addClass('prev-prev');
                        sliderAdd.find('.slider-item').last().removeClass('prev-prev');
                    } else {
                        sliderAdd.find('.slider-item.prev-prev').next().addClass('prev-prev');
                        sliderAdd.find('.slider-item.prev-prev').prev().removeClass('prev-prev');
                    }
                }
            })
        }
        function sliderPrevPrev() {
            sliderPrevElem.click(function() {
                if(sliderAdd.find('.slider-item.prev-prev').prev().length == 0) {
                    //Переносим prev на последний слайд
                    sliderAdd.find('.slider-item').last().addClass('prev-prev');
                    sliderAdd.find('.slider-item').first().removeClass('prev-prev');
                    // Переносим next за current
                    sliderAdd.find('.slider-item.next-next').prev().addClass('next-next');
                    sliderAdd.find('.slider-item.next-next').next().removeClass('next-next');

                } else {
                    sliderAdd.find('.slider-item.prev-prev').prev().addClass('prev-prev');
                    sliderAdd.find('.slider-item.prev-prev').next().removeClass('prev-prev');

                    if(sliderAdd.find('.slider-item.next-next').prev().length == 0) {
                        sliderAdd.find('.slider-item').last().addClass('next-next');
                        sliderAdd.find('.slider-item').first().removeClass('next-next');
                    } else {
                        sliderAdd.find('.slider-item.next-next').prev().addClass('next-next');
                        sliderAdd.find('.slider-item.next-next').next().removeClass('next-next');
                    }
                }
            })
        }
        function sliderPagination() {
            for(let i = 0; i < sliderAdd.find('.slider-item').length; i++) {
                sliderAdd.find('.slider-pagination').append('<button class="point"></button>');
            }
            sliderAdd.find('.slider-pagination .point').first().addClass('current')
            // Переберем элементы пагинации
            sliderAdd.find('.slider-pagination .point').each(function(index, elem) {
                // Выдаем каждому элементу пагинации его номер
                elem.setAttribute('data-number', index)
                // Кликаем
                $(this).click(function() {
                    // Удаляем у всех элементов current и даем его на который кликнули

                    // Проверяем схожество дата атрибута с пагинацией
                    let pagginationAttr = $(this).attr('data-number')
                    if ($(this).attr('data-number') !== sliderAdd.find('.slider-item.current').attr('data-number')) {
                        sliderAdd.find('.slider-item').removeClass('prev-prev')
                        sliderAdd.find('.slider-item').removeClass('prev')
                        sliderAdd.find('.slider-item').removeClass('current')
                        sliderAdd.find('.slider-item').removeClass('next')
                        sliderAdd.find('.slider-item').removeClass('next-next')
                        sliderAdd.find('.slider-wrapper').find("[data-number='" + pagginationAttr + "']").addClass('current')                        
                        
                        if(sliderAdd.find('.slider-item.current').prev().length == 0){
                            sliderAdd.find('.slider-item').last().addClass('prev');
                            sliderAdd.find('.slider-item.prev').prev().addClass('prev-prev');
                            sliderAdd.find('.slider-item.current').next().addClass('next');
                            sliderAdd.find('.slider-item.next').next().addClass('next-next');
                            console.log('11')
                        }
                        if (sliderAdd.find('.slider-item.current').next().length == 0) {
                            sliderAdd.find('.slider-item').first().addClass('next');
                            sliderAdd.find('.slider-item.next').next().addClass('next-next');
                            sliderAdd.find('.slider-item.current').prev().addClass('prev');
                            sliderAdd.find('.slider-item.prev').prev().addClass('prev-prev');
                            console.log('12')
                        }
                        
                        if (sliderAdd.find('.slider-item.prev').prev().length == 0) {
                            sliderAdd.find('.slider-item.current').prev().addClass('prev');
                            sliderAdd.find('.slider-item').last().addClass('prev-prev');
                            sliderAdd.find('.slider-item.current').next().addClass('next');
                            sliderAdd.find('.slider-item.next').next().addClass('next-next');
                            console.log('13')
                        }

                        if (sliderAdd.find('.slider-item.next').next().length == 0) {
                            sliderAdd.find('.slider-item.current').next().addClass('next');
                            sliderAdd.find('.slider-item').first().addClass('next-next');
                            sliderAdd.find('.slider-item.current').prev().addClass('prev');
                            sliderAdd.find('.slider-item.prev').prev().addClass('prev-prev');
                            console.log('14')
                        }

                        if (sliderAdd.find('.slider-item.current').index() !== 0 || sliderAdd.find('.slider-item.current').index() !== 1  || sliderAdd.find('.slider-item.current').index() !== sliderAdd.find('.slider-item.current').last().index() || sliderAdd.find('.slider-item.current').index() !== sliderAdd.find('.slider-item.current').last().index() - 1) {
                            sliderAdd.find('.slider-item.current').prev().addClass('prev');
                            sliderAdd.find('.slider-item.prev').prev().addClass('prev-prev');
                            sliderAdd.find('.slider-item.current').next().addClass('next');
                            sliderAdd.find('.slider-item.next').next().addClass('next-next');
                            console.log('15')
                        } 
                        /*
                         else {
                            sliderAdd.find('.slider-item.current').prev().addClass('prev');
                            sliderAdd.find('.slider-item.prev').prev().addClass('prev-prev');
                            sliderAdd.find('.slider-item.current').next().addClass('next');
                            sliderAdd.find('.slider-item.next').next().addClass('next-next');
                        }
                        */
                    }
                    
                    sliderAdd.find('.slider-pagination .point').removeClass('current')
                    $(this).addClass('current')
                })
            })
           /*  let point = 0
            sliderAdd.find('.slider-pagination .point').each(function(e, i) {   
                console.log($(this).index('.current') === i)
            })
            console.log(point)
            sliderAdd.find('.slider-item').each(function(e, i) {
                $(this).index('.current')
            })*/


        }
    }
    if($('.slider').length == 1) {
        slider()
    }
    //
    // Табы
    (function tabsAll() {
        $('.tabs-btn').click(function() {
            let id = $(this).attr('data-tab'), 
            content = $('.tabs-block[data-tab="'+ id +'"]');
            $('.tabs-btn').removeClass('active');
            $(this).addClass('active');
            $('.tabs-block').removeClass('show');
            content.addClass('show');
        });
    }());

    // До и после
    $(".work-item-image").twentytwenty({
        //orientation: 'vertical'
        before_label: 'До',
        after_label: 'После',
        default_offset_pct: 0.25,
    });
    
    function dentistCard() {
        $('.dentist-info').each(function() {
            $(this).css('transform', 'translateY(calc(' + $(this).find('.dentist-info-none').height() + 'px + 23px))');
        })
        /*$('.dentist-item').mouseover(function() {
            $(this).find('.dentist-info').css('transform', 'translateY(0)');
        })
        $('.dentist-item').mouseleave(function() {
            $(this).find('.dentist-info').css('transform', 'translateY(calc(' + $(this).find('.dentist-info-none').height() + 'px + 23px))');
        })*/
    };
    dentistCard()
    $(window).resize(function () {
        dentistCard()
    })

    //Бургер меню
    function headerBurger (){
        $('.header-burger, .header-logo svg').click(function () {
            $('.header').toggleClass('open');

            if($('.header').hasClass('open')) {
                $('html').addClass('hidden');
            } else {
                $('html').removeClass('hidden');
            }
        });
    };
    headerBurger();
    //closeModal
    function closeModal() {
        $('.popup-close').click(function() {
            $('html').removeClass('hidden');
            $('.duty').removeClass('open');
        });
        $(document).mouseup(function (e) {
            var container = $(".popup-wrapper, .header-main");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('html').removeClass('hidden');
                $(".popup").removeClass("open");
                $(".header").removeClass("open");
            }
        });
    }
    closeModal();

    //Открытие модалок
    function modalContact() {
        $(".modal-recall").click(function (e) {
            e.preventDefault();
            $(".popup-recall").addClass("open");
            setTimeout(() => {
                $('html').addClass('hidden');  
            }, 100);
        });
    };
    modalContact();

    // Адаптив
    function adaptiveFunc () {
        $(window).resize(function () {
            bgImageAdvantage();
            appendCircleDoctor();
            appendRecall();
            aboutPoints();
            doctorImage();
            newsDate();
            contactImage();
        })
        function bgImageAdvantage () {
            if($(window).width() <= 992) {
                $('.why-background__left').attr('src', 'assets/img/icon/points-green-white.svg')
            } else {
                $('.why-background__left').attr('src', 'assets/img/icon/points.svg')
            }
        }
        bgImageAdvantage();
        function appendCircleDoctor () {
            if($(window).width() <= 992) {
                $('.specialist-info').append($('.specialist-block'))
            } else {
                $('.specialist-wrapper').append($('.specialist-block'))
            }
        }
        appendCircleDoctor()
        function appendRecall () {
            if($(window).width() <= 1210) {
                $('.recall-block').append($('.recall__text'))
                
            } else {
                $('.recall-wrapper').prepend($('.recall__text'))
            }
            if($(window).width() <= 576) {
                $('.recall .container').append($('.recall__title'))
                
            } else {
                $('.recall-block').prepend($('.recall__title'))
            }
        }
        appendRecall()
        function aboutPoints () {
            if($(window).width() <= 992) {
                $('.about-image .points').attr('src', 'assets/img/icon/points-green-vert.svg')
                $('.about-info').append($('.about-image'))
            } else {
                $('.about-image .points').attr('src', 'assets/img/icon/points.svg')
                $('.about-block').append($('.about-image'))
            }
        }
        aboutPoints()
        function doctorImage () {
            if($(window).width() <= 768) {
                $('.doctor-block').append($('.doctor-image'))
            } else {
                $('.doctor-block').before($('.doctor-image'))
            }
        }
        doctorImage()
        function newsDate () {
            if($(window).width() <= 768) {
                $('.news-wrapper').before($('.news__date'))
            } else {
                $('.news-block').before($('.news__date'))
            }
        }
        newsDate()
        function contactImage () {
            if($(window).width() <= 992) {
                $('.contact-block').append($('.contact-image'))
            } else {
                //$('.contact-info').append($('.contact-image'))
            }
        }
        contactImage()
    }
    adaptiveFunc()
    
    //Валидации сайта
    function formValidate() {
        $('#popup-recall').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                phone: {
                    required: true,
                    minlength: 4
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 4 символa"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 4 символa"
                }
            }
        });
    };
    formValidate();   
});
