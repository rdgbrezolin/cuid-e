;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		var $header = $('.header');

		// Burger trigger button
		$('.nav-trigger').on('click', function(event) {
			event.preventDefault();

			$('.nav-trigger').toggleClass('active');

			$header.find('.header__aside').toggleClass('active');

			$header.toggleClass('header--solid');
		});

		// Header changing background on scroll
		$win.on('scroll', function() {
			$header.toggleClass('header--scrolled', $win.scrollTop() > 1);
		});

		// Slick Slider testimonials
		$('.slider-testimonials .slider__slides').slick({
			autoplay: true,
			autoplaySpeed: 7000,
			arrows: false,
			dots: true,
			dotsClass: 'slider__paging',
		});

		// Clients slider
		function changeClients(){
			if($win.width() < 768){
				return;
			}

			var $current = $('.list-clients .current');
			var $next = $current.next();

			if($next.length === 0) {
				$next = $('.list-clients ul:first-child');
			}

			$current.toggleClass('current leaving');
			$next.addClass('current');

			var clear = setTimeout(function(){
				$current.removeClass('leaving');
			}, 500);
		}

		setInterval(function(){
			changeClients();
		}, 5000);

		// Magnific popup
		$('.ajax-popup-link').magnificPopup({
			type: 'ajax',
			closeBtnInside: false,
			cursor: 'mfp-ajax-cur',
			focus: '#full-name',
			overflowY: 'auto',
			fixedContentPos: true,

			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($win.width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#full-name';
					}
				},
				 ajaxContentAdded: function() {
				 	closePopup();
				}
			}
		});

		function closePopup() {
			$('.js-close-popup').on('click', function(event){
				event.preventDefault();

				$.magnificPopup.close();
			});
		}
	});

})(jQuery, window, document);
