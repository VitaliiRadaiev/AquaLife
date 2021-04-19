window.dataallNewsSlider;
{
    let allNewsSlider = document.querySelector('.all-news__slider .swiper-container');
    if(allNewsSlider) {


        function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && allNewsSlider.dataset.mobile == 'false') {
				dataallNewsSlider = new Swiper(allNewsSlider, {
					slidesPerView: 1,
					speed: 600,
					spaceBetween: 20,
                    loop: true,
                    autoHeight: true,
                    navigation: {
                        nextEl: '.all-news__slider-btn-next',
                        prevEl: '.all-news__slider-btn-prev',
                    },
				});

				allNewsSlider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				allNewsSlider.dataset.mobile = 'false';

				if(allNewsSlider.classList.contains('swiper-container-initialized')) {
					dataallNewsSlider.destroy();
				}
			}
		}

        mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})

    }
}
