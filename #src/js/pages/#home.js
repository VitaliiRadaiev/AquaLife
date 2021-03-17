{
    let cardsPost = document.querySelectorAll('.card-post');
    if(cardsPost.length) {
        cardsPost.forEach(card => {
            let text = card.querySelector('.card-post__text');

            card.addEventListener('mouseenter', () => {
                
                if(document.documentElement.clientWidth > 991) {
                    if(text) {
                        _slideDown(text, 400);
                    }
                }
            })

            card.addEventListener('mouseleave', () => {

                if(document.documentElement.clientWidth > 991) {
                    if(text) {
                        _slideUp(text, 400);
                    }
                }
            })
        })
    }
}
