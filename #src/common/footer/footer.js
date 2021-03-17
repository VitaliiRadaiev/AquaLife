{
    let formCode = document.querySelector('.form-footer__code');
    if(formCode) {
        let list = document.querySelector('.form-footer__code-list');
        let input = document.getElementById('phoneCode');
        document.addEventListener('click', (e) => {
            if(!e.target.closest('.form-footer__code')) {
                _slideUp(list, 200)
            }
        })

        formCode.addEventListener('click', (e) => {
			formCode.classList.toggle('_active');
			_slideToggle(list, 200)

			if(e.target.closest('.form-footer__code-item')) {
				e.target.classList.add('_active');
				let title = document.querySelector('.form-footer__code-title');
				title.innerHTML = e.target.innerHTML;
				input.value = e.target.innerText.trim();

				for(let el of list.children) {
					if(el == e.target) {
						continue
					}
					el.classList.remove('_active');
				}
				//selectLang()
			}
		});

        function selectLang() {
			let item = list.querySelector('.form-footer__code-item._active');
            let img = list.querySelector('.form-footer__code-item._active img');
			let title = document.querySelector('.form-footer__code-title');
            title.innerHTML = `<img class="form-footer__code-icon" src="${img.src}" alt="flag">${item.innerText.trim()}`;
            input.value = item.innerText.trim();

			for(let el of list.children) {
				if(el = item) {
					continue
				}
				el.classList.remove('_active');
			}

		}
		selectLang();
    }

}
