{
    let certificates = document.querySelector('.certificates');
    if(certificates) {
        let dataSlider = new Swiper(certificates.querySelector('.certificates__slider .swiper-container'), {
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
        
            // Arrows
            navigation: {
                nextEl: certificates.querySelector('.certificates__slider-btn_next'),
                prevEl: certificates.querySelector('.certificates__slider-btn_prev'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 44,
                   // freeMode: true,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 44,
                   // freeMode: false,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 44,
                   // freeMode: false,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 93,
                   // freeMode: false,
                },
            },
            
        });
    }
}
