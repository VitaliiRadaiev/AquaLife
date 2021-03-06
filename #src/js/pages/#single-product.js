
{
    let productSlider = document.querySelectorAll('.info-product__slider');
    if(productSlider.length) {
        productSlider.forEach(slider => {
            let dataSlider;
            let dataSliderThumb;
    
            dataSliderThumb = new Swiper(slider.querySelector('.info-product__slider-thumb .swiper-container'), {
                spaceBetween: 20,
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
    
            dataSlider = new Swiper(slider.querySelector('.info-product__slider-main .swiper-container'), {
                spaceBetween: 10,
                loop: true,
                navigation: {
                nextEl: slider.querySelector('.info-product__slider-btn-next'),
                prevEl: slider.querySelector('.info-product__slider-btn-prev'),
                },
                thumbs: {
                swiper: dataSliderThumb,
                }
            });
        })
    }

    let productSchema = document.querySelector('.popup .info-product__bottom');
    if(productSchema) {
        let icon = productSchema.querySelector('.info-product__bottom-icon');
        productSchema.addEventListener('scroll', () => {
            icon.style.display = 'none';
        })
    }


    let productText = document.querySelector('.info-product__text-wrap');
    if(productText) {
        if(document.documentElement.clientWidth < 768) {
            let arr = [...productText.querySelectorAll('p')];
            if(arr.length > 1) {
                arr = arr.slice(1, arr.length);
                let div = document.createElement('div');
                div.className = '_toggleWrap';
                div.append(...arr);
    
                //let container = textBlock.querySelector('.container')
                productText.firstElementChild.after(div);
    
                let btn = document.createElement('div');
                btn.className = "_toggleBtn";
                btn.innerText = 'read more';
    
                div.after(btn);
                
                btn.addEventListener('click', function() {
                    _slideToggle(this.previousElementSibling);
                    this.classList.toggle('_active');
    
                    if(this.classList.contains('_active')) {
                        this.innerText = "close";
                    } else {
                        this.innerText = "read more";
                    }
                })
            }
            
        }
    }





    let productRange = document.querySelector('.product-range');
    if(productRange) {
        let items = document.querySelectorAll('.product-range__item');
        if(items.length) {
            items.forEach(item => {
                let container = item.querySelector('.product-range__info');
                let allHr = container.querySelectorAll('hr');
                let btn = item.querySelector('.product-range__btn');
               
                if(!allHr.length) {
                    btn.style.display = 'none';
                    return
                } 
 

                if(allHr.length === 1) {
                    console.log(allHr[0].nextElementSibling);
                    
                    if(allHr[0].nextElementSibling === btn) {
                        btn.style.display = 'none';
                        return
                    }
                }

                let arr = Array.from(container.children)
                let lastHr = arr.findIndex((item, index) => {
                    if(item == allHr[allHr.length-1]) {
                        return index;
                    }
                })


                let textArr = arr.slice(lastHr+1, -1);
  
                let textWrapper = document.createElement('div');
                textWrapper.className = 'product-range__text-wrap';
                textWrapper.append(...textArr);
                allHr[allHr.length-1].after(textWrapper);

                let text = item.querySelector('.product-range__text-wrap');

                btn.addEventListener('click', () => {
                    btn.classList.toggle('_active');
                    item.classList.toggle('active');
                    _slideToggle(text);
                })
            })
        }
    }

    let relatedProductCardTextItems = document.querySelectorAll('.related-product-card__text');
    if(relatedProductCardTextItems.length) {
        relatedProductCardTextItems.forEach(item => {
            let btn = document.createElement('div');
            btn.className = 'product-range__btn';
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none" class="img-svg replaced-svg"><path d="M1 1L6 6L11 1" stroke="#598AFC"></path></svg>';
            item.append(btn);
        })

        relatedProductCardTextItems.forEach(item => {
            let container = item;
            let allHr = container.querySelectorAll('hr');
            let btn = item.querySelector('.product-range__btn');

            if(!allHr.length) {
                btn.style.display = 'none';
                return
            } 


            if(allHr.length === 1) {
                console.log(allHr[0].nextElementSibling);
                
                if(allHr[0].nextElementSibling === btn) {
                    btn.style.display = 'none';
                    return
                }
            }

            let arr = Array.from(container.children)
            let lastHr = arr.findIndex((item, index) => {
                if(item == allHr[allHr.length-1]) {
                    return index;
                }
            })


            let textArr = arr.slice(lastHr+1, -1);

            let textWrapper = document.createElement('div');
            textWrapper.className = 'product-range__text-wrap';
            textWrapper.append(...textArr);
            allHr[allHr.length-1].after(textWrapper);

            let text = item.querySelector('.product-range__text-wrap');

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.classList.toggle('_active');
                item.classList.toggle('active');
                _slideToggle(text);
            })
        })

    }


    // == product nav handler ===
    let productNav = document.querySelector('.product__nav-wrap');
    if(productNav) {
        let headerTop = document.querySelector('.header__top');
        let headerBottom = document.querySelector('.header__bottom');
        let productHead = document.querySelector('.product__head');

        window.addEventListener('scroll', () => {
            if(document.documentElement.clientWidth > 991) {
                if(productNav.getBoundingClientRect().top < headerTop.clientHeight) {
                    productNav.classList.add('_fixed');
                    productNav.style.top = headerTop.clientHeight + 'px';
                    productHead.style.paddingBottom = productNav.clientHeight + 'px';
                }else if(productHead.getBoundingClientRect().bottom >= (parseInt(getComputedStyle(productHead).marginBottom) + productNav.clientHeight)) {
                    productNav.classList.remove('_fixed');
                    productHead.style.paddingBottom = 0;
                }
            } else {
                if(productNav.getBoundingClientRect().top < headerBottom.clientHeight) {
                    productNav.classList.add('_fixed');
                    productNav.style.top = headerBottom.clientHeight + 'px';
                    productHead.style.paddingBottom = productNav.clientHeight + 'px';
                }else if(productHead.getBoundingClientRect().bottom >= (parseInt(getComputedStyle(productHead).marginBottom) + productNav.clientHeight)) {
                    productNav.classList.remove('_fixed');
                    productHead.style.paddingBottom = 0;
                }
            }
        
        })
    }
    // == // product nav handler ===
}