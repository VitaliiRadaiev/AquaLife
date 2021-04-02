{
    let header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 300) {
                header.classList.add('_is-scroll');
            } else {
                header.classList.remove('_is-scroll');
            }
        })

        let menu = document.querySelector('.header__menu');
        let burgScroll = document.querySelector('.header__burger-scroll');
        burgScroll.addEventListener('click', () => {
            let headerBottom = document.querySelector('.header__bottom');
            headerBottom.classList.toggle('_open');

            let productNav = document.querySelector('.product__nav-wrap ');
            if(productNav) {
                productNav.classList.toggle('_z-index');
            }
        })

        let burger = document.querySelector('.header__burger');
        if(burger) {
            burger.addEventListener('click', () => {
               
                if(menu) {
                    document.body.classList.toggle('lock');
                    menu.classList.toggle('_open');
                    _slideToggle(menu);
                } 

                let productNav = document.querySelector('.product__nav-wrap ');
                if(productNav) {
                    productNav.classList.toggle('_z-index');
                }
            })
        }

        let menuBottom = document.querySelector('.menu__bottom');
        if(menuBottom) {
            menuBottom.addEventListener('click', () => {
                document.body.classList.remove('lock');
                    menu.classList.remove('_open');
                    burgerBtnAnimation();
                    _slideUp(menu);
            })

            menuBottom.addEventListener('swiped-up', function() {
                document.body.classList.remove('lock');
                menu.classList.remove('_open');
                burgerBtnAnimation();
                _slideUp(menu);
            });
        }
    }
}
