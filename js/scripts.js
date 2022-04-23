$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.main_slider .swiper').length) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: true,
			on: {
				init: swiper => {
					setTimeout(() => {
						let totalSlides = swiper.slides.length - 2

						totalSlides < 10
							? $('.main_slider .count .total').text('0' + totalSlides)
							: $('.main_slider .count .total').text(totalSlides)
					})
				},
				activeIndexChange: swiper => {
					setTimeout(() => {
						(swiper.realIndex + 1) < 10
							? $('.main_slider .count .current').text('0' + (swiper.realIndex + 1))
							: $('.main_slider .count .current').text((swiper.realIndex + 1))
					})
				}
			}
		})
	}


	// Карусель товаров
	const productsSliders = []

	$('.products .carousel').each(function (i) {
		$(this).addClass('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(this), $(swiper.$el).find('.product').length)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						productHeight($(this), $(swiper.$el).find('.product').length)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Карусель изображений в товаре
	const productsThumnsSliders = []

	$('.products .product .swiper').each(function (i) {
		$(this).addClass('thumbs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 0,
			nested: true,
			simulateTouch: false,
			allowTouchMove: true,
			noSwiping: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			slidesPerView: 1,
			preloadImages: false,
			lazy: true
		}

		productsThumnsSliders.push(new Swiper('.thumbs_s' + i, options))

		$(this).find('.swiper-pagination-bullet').mouseenter(function () {
			productsThumnsSliders[i].slideTo($(this).index())
		})
	})


	// Карусель статей
	const articlesSliders = []

	$('.articles .swiper').each(function (i) {
		$(this).addClass('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				},
				1600: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						articleHeight($(this), $(swiper.$el).find('.article').length)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						articleHeight($(this), $(swiper.$el).find('.article').length)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Карусель работа (портфолио)
	const portfolioSliders = []

	$('.portfolio .swiper').each(function (i) {
		$(this).addClass('portfolio_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			preloadImages: false,
			lazy: true,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				},
				1600: {
					slidesPerView: 4
				}
			}
		}

		portfolioSliders.push(new Swiper('.portfolio_s' + i, options))
	})


	// Как мы работаем
	const stepsSliders = []

	$('.steps .swiper').each(function (i) {
		$(this).addClass('steps_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			preloadImages: false,
			lazy: true,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			}
		}

		stepsSliders.push(new Swiper('.steps_s' + i, options))
	})


	// Преимущества
	const advantagesSliders = []

	$('.advantages .swiper').each(function (i) {
		$(this).addClass('advantages_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			preloadImages: false,
			lazy: true,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			}
		}

		advantagesSliders.push(new Swiper('.advantages_s' + i, options))
	})


	// Сравнение товаров
	if ($('.compare_info .products > .swiper').length) {
		new Swiper('.compare_info .products > .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(this), $(swiper.$el).find('.product').length)

						compareHeight()
					})
				},
				resize: swiper => {
					if (typeof WW !== 'undefined' && WW != $(window).width()) {
						setTimeout(() => {
							productHeight($(this), $(swiper.$el).find('.product').length)

							compareHeight()
						})
					}
				}
			}
		})
	}


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			spaceBetween: 20,
			navigation: {
				nextEl: '.thumbs-swiper-button-next',
				prevEl: '.thumbs-.swiper-button-prev'
			},
			preloadImages: false,
			lazy: true,
			direction: 'vertical'
		})

		const productSlider = new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: true,
			thumbs: {
				swiper: productThumbs
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true
			}
		})
	}


	// Моб. блок с категориями
	if ($(window).width() < 768) {
		$('.categories_block .block_head .title').click(function (e) {
			e.preventDefault()

			$(this).toggleClass('active')
			$('.categories_block .data').slideToggle(300)
		})
	}


	// Моб. сполер в тексте
	$('.text_block .mob_spoler_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').prev('.mob_hide').slideToggle(300)
	})


	// Поиск
	$('.search .input').keydown(function () {
		let _self = $(this),
			parent = _self.closest('.search')

		setTimeout(() => {
			_self.val().length > 2
				? parent.find('.tips').fadeIn(300)
				: parent.find('.tips').fadeOut(200)
		})
	})


	// Товар в избранное/сравнение
	$('.products .product .btns .btn, .product_info .btns .btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Каталог в шапке
	$('header .catalog_btn').click((e) => {
		e.preventDefault()

		!$('header .catalog_btn').hasClass('active')
			? $('header .bottom').slideDown(300)
			: $('header .bottom').slideUp(200)

		$('header .catalog_btn').toggleClass('active')
	})


	// Моб. подвал
	$('footer .mob_links_btn').click((e) => {
		e.preventDefault()

		!$('footer .mob_links_btn').hasClass('active')
			? $('footer .links').slideDown(300)
			: $('footer .links').slideUp(200)

		$('footer .mob_links_btn').toggleClass('active')
	})

	if ($(window).width() < 768) {
		$('footer .links .main a').click(function (e) {
			e.preventDefault()

			$(this).toggleClass('active')
			$(this).closest('.main').next().slideToggle(300)
		})
	}

	$('footer .mob_menu_btn').click((e) => {
		e.preventDefault()

		!$('footer .mob_menu_btn').hasClass('active')
			? $('footer .menu').slideDown(300)
			: $('footer .menu').slideUp(200)

		$('footer .mob_menu_btn').toggleClass('active')
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')
	$('input.time').inputmask('99:99')

	// Кастомный select
	$('select').niceSelect()

	// Календарь
	new AirDatepicker('input.date', {
		container: '.calendar_wrap',
		dateFormat: 'dd.MM.yyyy',
		minDate: new Date(),
		autoClose: true,
		prevHtml: '<svg><use xlink:href="images/sprite.svg#ic_arr_down"></use></svg>',
		nextHtml: '<svg><use xlink:href="images/sprite.svg#ic_arr_down"></use></svg>',
		navTitles: {
			days: 'MMMM, yyyy'
		}
	})


	// Отправка форм
	$('body').on('submit', '.form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})

	$('body').on('submit', '#quike_buy_modal .form, .checkout_info form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#order_success_modal',
			type: 'inline'
		}])
	})

	$('body').on('submit', '#add_reply_modal .form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#reply_success_modal',
			type: 'inline'
		}])
	})

	$('body').on('submit', '#add_question_modal .form', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#question_success_modal',
			type: 'inline'
		}])
	})


	// Товар в корзину
	$('.product .buy_btn').click(function (e) {
		e.preventDefault()

		Fancybox.close()

		setTimeout(() => {
			Fancybox.show([{
				src: '#cart_modal',
				type: 'inline'
			}])
		}, 200)
	})


	// Товар в сравнение
	$('.product .compare_btn').click(function (e) {
		e.preventDefault()

		Fancybox.close()

		setTimeout(() => {
			Fancybox.show([{
				src: '#compare_modal',
				type: 'inline'
			}])
		}, 200)
	})


	// Товар в избранное
	$('.product .favorite_btn').click(function (e) {
		e.preventDefault()

		Fancybox.close()

		setTimeout(() => {
			Fancybox.show([{
				src: '#favorite_modal',
				type: 'inline'
			}])
		}, 200)
	})


	// Боковая колонка - Фильтр
	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$('aside .filter .name').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')
		parent.find('.data').slideToggle(300)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 5500,
		from: 220,
		to: 5200,
		step: 10,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from)
			$('.filter .price_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from)
			$('.filter .price_range input.to').val(data.to)
		}
	}).data("ionRangeSlider")

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseFloat($('.filter .price_range input.from').val()),
			to: parseFloat($('.filter .price_range input.to').val())
		})
	})


	// Корзина - смена цвета
	$('.cart_info table td.color label').click(function () {
		let parent = $(this).closest('.color'),
			color = $(this).data('color')

		parent.find('.btn span').css('background-color', color)
	})


	// Корзина - смена размера
	$('.cart_info table td.size label').click(function () {
		let parent = $(this).closest('.size'),
			text = $(this).text()

		parent.find('.btn span').text(text)
	})


	// Оформление заказа
	$('.checkout_info .delivery_methods label').click(function () {
		let info = $(this).data('info')

		$('.checkout_info .delivery_method').hide()
		$('.checkout_info').find(info).fadeIn(300)
	})


	// Моб. FAQ
	$('.faq .mob_tab_btn').click(function (e) {
		e.preventDefault()

		if ($(this).hasClass('active')) {
			$(this).toggleClass('active').next().slideToggle(300)
			return false
		}

		$('.faq .mob_tab_btn').removeClass('active')
		$('.faq .tab_content').slideUp(300)

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
	}

	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})

	$('body').on('click', '.modal .close_btn', function (e) {
		e.preventDefault()

		Fancybox.close()
	})

	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Плавная прокрутка к якорю
	// Работает и при прокрутке к табу
	$('.scroll_btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 100

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		if ($('.tabs button[data-content="' + href + '"]').length) {
			const $activeTab = $('.tabs button[data-content="' + href + '"]'),
				$parent = $activeTab.closest('.tabs_container'),
				level = $activeTab.data('level')

			$parent.find('.tabs:first button, .tab_content.' + level).removeClass('active')

			$activeTab.addClass('active')
			$(href).addClass('active')
		}

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function (e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	if (is_touch_device()) {
		// Подменю на тач скрине
		$('header .categories > div > a.sub_link, header .categories .sub > div > a').addClass('touch_link')

		$('header .categories > div > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('header .categories .sub.level1').removeClass('show')
				$dropdown.addClass('show')

				$('body').css('cursor', 'pointer')
			}
		})

		$('header .categories .sub > div > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('header .categories .sub.level2').removeClass('show')
				$dropdown.addClass('show')

				$('body').css('cursor', 'pointer')
			}
		})

		// Закрываем под. меню при клике за её пределами
		$(document).click((e) => {
			if ($(e.target).closest('.categories').length === 0) {
				$('header .categories .sub').removeClass('show')

				$('body').css('cursor', 'default')
			}
		})


		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
				$('.mob_header .mob_menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('header').removeClass('show')
				$('.overlay').fadeOut(300)
			} else if (ts < te - 50) {
				// Свайп слева на право
			}
		})
	}
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})

	$('.articles .row').each(function () {
		articleHeight($(this), parseInt($(this).css('--articles_count')))
	})

	setHeight($('footer .links .col > .item:first-child'))


	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Моб. фикс. шапка
	mobHeaderInit = true,
		mobHeaderHeight = $('.mob_header').outerHeight()

	$('.mob_header').wrap('<div class="mob_header_wrap"></div>')
	$('.mob_header_wrap').height(mobHeaderHeight)

	mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Выравнивание элементов в сетке
		$('.products .row').each(function () {
			productHeight($(this), parseInt($(this).css('--products_count')))
		})

		$('.articles .row').each(function () {
			articleHeight($(this), parseInt($(this).css('--articles_count')))
		})

		$('footer .links .col > .item:first-child').height('auto')
		setHeight($('footer .links .col > .item:first-child'))


		// Фикс. шапка
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Моб. фикс. шапка
		mobHeaderInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			mobHeaderInit = true
			mobHeaderHeight = $('.mob_header').outerHeight()

			$('.mob_header_wrap').height(mobHeaderHeight)

			mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
				? $('.mob_header').addClass('fixed')
				: $('.mob_header').removeClass('fixed')
		}, 100)


		// Перезапись ширины окна
		WW = $(window).width()
	}
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Моб. фикс. шапка
	typeof mobHeaderInit !== 'undefined' && mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')
})



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.product_name, .features, .buy').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.product_name'))
		setHeight($products.slice(start, finish).find('.features'))
		setHeight($products.slice(start, finish).find('.buy'))

		start = start + step
		finish = finish + step
	})
}


// Выравнивание статей
function articleHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.article')

	$products.find('.name, .desc').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.name'))
		setHeight($products.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}


// Карта
function initMap() {
	ymaps.ready(() => {
		let myMap = new ymaps.Map('map', {
			center: [55.582324, 36.491166],
			zoom: 14,
			controls: []
		})

		// Кастомный маркер
		let myPlacemark = new ymaps.Placemark([55.582324, 36.491166], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'images/ic_map_marker.svg',
			iconImageSize: [113, 139],
			iconImageOffset: [-57, -139],
		})

		myMap.geoObjects.add(myPlacemark)

		myMap.controls.add('zoomControl', {
			position: {
				right: '20px',
				top: '20px'
			}
		})

		myMap.behaviors.disable('scrollZoom')
	})
}



// Выравнивание в сравнении
function compareHeight() {
	$('.compare_info .compare_features .items > *, .compare_info .product_features > *, .compare_info .product_price, .compare_info .product_params, .compare_info .compare_price, .compare_info .compare_params').height('auto')

	let productFeatures = $('.compare_info .product_features'),
		productPrice = $('.compare_info .product_price'),
		productParams = $('.compare_info .product_params'),
		compareFeatures = $('.compare_info .compare_features .items'),
		comparePrice = $('.compare_info .compare_price'),
		compareParams = $('.compare_info .compare_params'),
		featuresSizes = new Object(),
		priceSize = new Object(),
		paramsSizes = new Object()


	// Цена
	priceSize = comparePrice.outerHeight()

	if ($(productPrice).outerHeight() > comparePrice.outerHeight()) {
		priceSize = productPrice.outerHeight()
	}

	productPrice.outerHeight(priceSize)
	comparePrice.outerHeight(priceSize)


	// Характеристики
	productFeatures.each(function () {
		$(this).find('> *').each(function () {
			if (featuresSizes[$(this).index()]) {
				if ($(this).outerHeight() > featuresSizes[$(this).index()]) {
					featuresSizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				featuresSizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	compareFeatures.each(function () {
		$(this).find('> *').each(function () {
			if (featuresSizes[$(this).index()]) {
				if ($(this).outerHeight() > featuresSizes[$(this).index()]) {
					featuresSizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				featuresSizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	$.each(featuresSizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('> *:eq(' + key + ')').innerHeight(data)
		})

		compareFeatures.find('> *:eq(' + key + ')').innerHeight(data)
	})


	// Параметры
	productParams.each(function () {
		$(this).find('> *').each(function () {
			if (paramsSizes[$(this).index()]) {
				if ($(this).outerHeight() > paramsSizes[$(this).index()]) {
					paramsSizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				paramsSizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	compareParams.each(function () {
		$(this).find('> *').each(function () {
			if (paramsSizes[$(this).index()]) {
				if ($(this).outerHeight() > paramsSizes[$(this).index()]) {
					paramsSizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				paramsSizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	$.each(paramsSizes, (key, data) => {
		productParams.each(function () {
			$(this).find('> *:eq(' + key + ')').innerHeight(data)
		})

		compareParams.find('> *:eq(' + key + ')').innerHeight(data)
	})


	$('.compare_info .swiper-scrollbar').css('top', $('.compare_info .products .product').outerHeight())
}