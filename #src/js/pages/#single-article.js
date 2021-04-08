{
    let asideRelatedNews = document.querySelector('.related-news');
    if(asideRelatedNews) {
        let headerTop = document.querySelector('.header__top');
        let articleColumn2 = document.querySelector('.article__column-2');

        window.addEventListener('scroll', () => {
            if(document.documentElement.clientWidth > 991) {
                if(asideRelatedNews.getBoundingClientRect().top < 121) {
                    asideRelatedNews.classList.add('_fixed');
                    asideRelatedNews.style.top = '121px';
                    asideRelatedNews.style.maxWidth = (articleColumn2.clientWidth - 20) + 'px';
                }else if(articleColumn2.getBoundingClientRect().top >= 121) {
                    asideRelatedNews.classList.remove('_fixed');
                }

                console.log(articleColumn2.getBoundingClientRect().bottom);
                if(articleColumn2.getBoundingClientRect().bottom <= asideRelatedNews.clientHeight + 121) {
                    asideRelatedNews.classList.add('_static');
                    articleColumn2.classList.add('_flex-end');
                } else {
                    asideRelatedNews.classList.remove('_static');
                    articleColumn2.classList.remove('_flex-end');
                }
            }
        })
    }
}