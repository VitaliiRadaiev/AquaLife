

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function () {
	document.body.classList.add('is-load');

	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});


	//==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('.wrapper');
		if (wrapper) {
			let header = document.querySelector('.header');
			if(header) {
				let headerHeight = header.clientHeight;
				wrapper.style.paddingTop = headerHeight + 'px';
			}
			
		}
	}
	//==== AND ADD PADDING-TOP ================================

	let wpAdminTopBar = document.querySelector('#wpadminbar');
	if(wpAdminTopBar) {
		let header = document.querySelector('.header');
		header.style.top = wpAdminTopBar.clientHeight + 'px';
	}

	//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================





$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});




//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if(spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================




if($('.anchor').length>0) {
	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href")
	  var destination = $(elementClick).offset().top - 125;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 600);
	  return false;
	});
}


;
	// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		//customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());;
	// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// function form_submit(e) {
// 	let btn = event.target;
// 	let form = btn.closest('form');
// 	let message = form.getAttribute('data-message');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		//SendForm
// 		form_clean(form);
// 		if (message) {
// 			popup_open('message-' + message);
// 			e.preventDefault();
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		event.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// let viewPass = document.querySelectorAll('.form__viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener("click", function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement.querySelector('input').setAttribute("type", "password");
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute("type", "text");
// 		}
// 		element.classList.toggle('_active');
// 	});
// }


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];

			if (input.classList.contains('_mask')) {
				//'+7(999) 999 9999'
				//'+38(999) 999 9999'
				//'+375(99)999-99-99'
				let maskValue = input.dataset.mask;
				if(!maskValue) {
					maskValue = '999 999 999 999';
				}
				input.classList.add('_mask');
				Inputmask(maskValue, {
					//"placeholder": '',
					clearIncomplete: true,
					clearMaskOnLostFocus: true,
					onincomplete: function () {
						//input_clear_mask(input, input_g_value);
					}
				}).mask(input);
			}
			if (input.classList.contains('_date')) {
				datepicker(input, {
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
			}

			//const input_g_value = input.getAttribute('data-value');
			//input_placeholder_add(input);
			// if (input.value != '' && input.value != input_g_value) {
			// 	input_focus_add(input);
			// }
			// input.addEventListener('focus', function (e) {
			// 	if (input.value == input_g_value) {
			// 		input_focus_add(input);
			// 		input.value = '';
			// 	}
			// 	if (input.getAttribute('data-type') === "pass") {
			// 		input.setAttribute('type', 'password');
			// 	}
			// 	if (input.classList.contains('_date')) {
			// 		/*
			// 		input.classList.add('_mask');
			// 		Inputmask("99.99.9999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 		*/
			// 	}
			// 	if (input.classList.contains('_phone')) {
			// 		//'+7(999) 999 9999'
			// 		//'+38(999) 999 9999'
			// 		//'+375(99)999-99-99'
			// 		input.classList.add('_mask');
			// 		Inputmask("+375 (99) 9999999", {
			// 			//"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	if (input.classList.contains('_digital')) {
			// 		input.classList.add('_mask');
			// 		Inputmask("9{1,}", {
			// 			"placeholder": '',
			// 			clearIncomplete: true,
			// 			clearMaskOnLostFocus: true,
			// 			onincomplete: function () {
			// 				input_clear_mask(input, input_g_value);
			// 			}
			// 		}).mask(input);
			// 	}
			// 	form_remove_error(input);
			// });
			// input.addEventListener('blur', function (e) {
			// 	if (input.value == '') {
			// 		input.value = input_g_value;
			// 		input_focus_remove(input);
			// 		if (input.classList.contains('_mask')) {
			// 			input_clear_mask(input, input_g_value);
			// 		}
			// 		if (input.getAttribute('data-type') === "pass") {
			// 			input.setAttribute('type', 'text');
			// 		}
			// 	}
			// });
			// if (input.classList.contains('_date')) {
			// 	datepicker(input, {
			// 		customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			// 		formatter: (input, date, instance) => {
			// 			const value = date.toLocaleDateString()
			// 			input.value = value
			// 		},
			// 		onSelect: function (input, instance, date) {
			// 			input_focus_add(input.el);
			// 		}
			// 	});
			// }
		}
	}
}
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// ==  QUANTITY =====================================================
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
// == // QUANTITY =====================================================

// == PRICE SLIDER =====================================================
let priceSlider = document.querySelector('.price-filter');

if(priceSlider) {
	let inputNumFrom = document.getElementById('priceStart');
	let inputNumTo = document.getElementById('priceEnd');
	let value = document.querySelector('.values-price-filter');

	let min = value.dataset.min;
	let max = value.dataset.max;
	let numStart = value.dataset.start;
	let numEnd = value.dataset.end;
	noUiSlider.create(priceSlider, {
		start: [+numStart, +numEnd],  
		connect: true,
		tooltips:[wNumb({decimals: 0, thousand: ','}) , wNumb({decimals: 0, thousand: ','})], 
		range: {
			'min': [+min],
			'1%': [100,100],
			'max': [+max],
		}
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];

	    if (handle) {
	        inputNumTo.value = Math.round(value);
	    } else {
	        inputNumFrom.value = Math.round(value);
	    }
	});

	inputNumTo.onchange = function() {
		setPriceValues()
	}

	inputNumFrom.onchange = function() {
		setPriceValues()
	}

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if(inputNumFrom.value != '') {
			priceStartValue = inputNumFrom.value;
		}

		if(inputNumTo.value != '') {
			priceEndValue = inputNumTo.value;
		}

		  priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
	}
}

// == // PRICE SLIDER =====================================================;
	// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	;
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
;
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
;
	// ==== Popup form handler====

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
	for(let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if(curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function(e) {
			if(!e.target.closest('.popup_content')) {
				popupClose(e.target.closest('.popup'));
			}
		});

	}
}

function popupClose(popupActive, doUnlock = true) {
	if(unlock) {
		popupActive.classList.remove('open');
		if(doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
	let targetPadding = document.querySelectorAll('._lp');
	if(targetPadding.length) {
		for (let index = 0; index < targetPadding.length; index++) {
			const el = targetPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	if(lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	let targetPadding = document.querySelectorAll('._lp');

	setTimeout(function() {
		if(targetPadding.length) {
			for (let index = 0; index < targetPadding.length; index++) {
				const el = targetPadding[index];
				el.style.paddingRight = '0px';
			}
		}

		for( let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() { 
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function(e) {
	if(e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

// === Polyfill ===
	(function() {
		if(!Element.prototype.closest) {
			Element.prototype.closest = function(css) {
				var node = this;
				while(node) {
					if(node.matches(css)) return node;
					else node == node.parentElement;
				}
				return null;
			};
		}
	})();

	(function() {
		if(!Element.prototype.matches) {
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.mozMatchesSelector;
		}
	})();
// === AND Polyfill ===



let downloadPopup = document.querySelector('#pdfPopup');
if(downloadPopup) {
	downloadPopup.addEventListener('click', (e) => {
		if(e.target.closest('._download-btn') || e.target.closest('._open-in-window')) {
			popupClose(downloadPopup);
		}
	})
};
	{
    let loadCards = document.querySelectorAll('.load-pdf__card');
    if(loadCards.length) {
        let popup = document.getElementById('pdfPopup');
        let downloadBtn = popup.querySelector('._download-btn');
        let openInWindowBtn = popup.querySelector('._open-in-window');

        loadCards.forEach(card => {
            card.addEventListener('click', () => {
                let pdfUrl = card.dataset.pdfurl;
                if(pdfUrl) {
                   downloadBtn.href = pdfUrl;
                   openInWindowBtn.href = pdfUrl;

                   popupOpen(popup);
                }

            })
        })
    }
}
;
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
;
	
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
;
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
;
	
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
};
	{
    let asideRelatedNews = document.querySelector('.related-news');
    if(asideRelatedNews) {
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
};

});

{


	let isMap = document.getElementById("map-1");
	if(isMap) {
		var map1;

        var map2;
        
		var center1 = {
			lat: 51.2375147549956,
			lng: 17.860102898232235,
		}
		var center2 = {
			lat: 26.977582962023323,
			lng: 17.717931632127538,
		}

		var markerPosition1 = {
            lat: 51.2375147549956,
			lng: 17.860102898232235,
		}

		
        var markers = [];



		function initMap() {

			map1 = new google.maps.Map(document.getElementById('map-1'), {

				center: {lat: globalMarkers['1'][0], lng: globalMarkers['1'][1]},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 4,
				//styles: 
			});

			map2 = new google.maps.Map(document.getElementById('map-2'), {

				center: {lat: globalMarkers['2'][0], lng: globalMarkers['2'][1]},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 4,


				//styles: 
			});

           // drop();

			var marker1 = new google.maps.Marker({

			
			    position: {lat: globalMarkers['1'][0], lng: globalMarkers['1'][1]},

		
			    map: map1,

			
			    title: '',
			    label: '',

		
			    icon: {
                    url: document.getElementById('map-1').dataset.src,
                    scaledSize: new google.maps.Size(20, 20),
                } 
			});

			var marker2 = new google.maps.Marker({

			
			    position: {lat: globalMarkers['2'][0], lng: globalMarkers['2'][1]},

		
			    map: map2,

			
			    title: '',
			    label: '',

		
			    icon: {
                    url: document.getElementById('map-2').dataset.src,
                    scaledSize: new google.maps.Size(20, 20),
                } 
			});


			map10 = new google.maps.Map(document.getElementById('map-10'), {

				center: {lat: 38.664121683223065, lng: 35.517221421873195},
				panControl: false,
				mapTypeControl: false,
				zoom: 2,


				//styles: 
			});
            drop();


		}

        function drop() {
			const createAray = () => {
				let arr = [];
	
				if(globalMarkers2) {
					for(let item in globalMarkers2) {
						arr.push(globalMarkers2[item]);
					}
				}
	
				return arr.map(obj => {
					return new google.maps.LatLng(obj[0], obj[1])
				})
				
			}

			var markersArr = createAray();

			for (let i = 0; i < markersArr.length; i++) 
			 {
			   markers.push(new google.maps.Marker({
			   position: markersArr[i],
			   map: map10,
               icon: {
                url: document.getElementById('map-10').dataset.src,
                scaledSize: new google.maps.Size(20, 20),
                } 
			   }));
			 }

		}
	}
}
;

