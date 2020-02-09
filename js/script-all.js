(function ($) {
	new WOW().init();
	// js Loading page 
	jQuery(window).load(function () {
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function () {
		$('.navbar-nav li a').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
/*== show loading 2s ==*/
setInterval(function () {
	$(".wr-loading").css('background-image', 'none');
	//clearInterval(interval)
}, 2000);
/* Owl Carousel
 ========================================================*/
;
(function ($) {
	var o = $('#owl-banner');
	var slutv = $('.out-box-sl')
	var slutvpro = $('.out-box-sl.pro');
	// include('js/owl.carousel.min.js');
	$(document).ready(function () {
		if (o.length > 0) {
			o.owlCarousel({
				//margin: 30,
				items: 1,
				merge: true,
				loop: true,
				//margin:10,
				video: true,
				lazyLoad: true,
				center: true,
				nav: true,
				dots: true,
				dotsEach: 1,
				navClass: ['owl-prev', 'owl-next'],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					980: {
						items: 1
					}
				}
			});

			slutv.owlCarousel({
				margin: 10,
				autoplay: false,
				autoplayTimeout: 5000,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed: 450,
				loop: true,
				dots: false,
				dotsEach: 1,
				nav: true,
				navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
				responsive: {
					0: {
						items: 1
					},
					320: {
						items: 1
					},
					460: {
						items: 2
					},
					570: {
						items: 3
					},
					840: {
						items: 4
					},
					1024: {
						items: 4
					},
					1280: {
						items: 4
					}
				}
			});

			slutvpro.owlCarousel({
				margin: 10,
				autoplay: false,
				autoplayTimeout: 5000,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed: 450,
				loop: true,
				dots: false,
				dotsEach: 1,
				nav: true,
				navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
				responsive: {
					0: {
						items: 1
					},
					320: {
						items: 1
					},
					460: {
						items: 1
					},
					570: {
						items: 2
					},
					840: {
						items: 3
					},
					1024: {
						items: 3
					},
					1280: {
						items: 3
					}
				}
			});

		}

	});

})(jQuery);
/*END  Owl Carousel
 ========================================================*/
/* JS click toTop btn
========================================*/
(function ($) {
	$.fn.UItoTop = function (options) {

		var defaults = {
			text: '',
			min: 100,
			scrollSpeed: 800,
			containerID: 'toTop',
			containerClass: 'toTop fa fa-chevron-up',
			easingType: 'linear'

		};

		var settings = $.extend(defaults, options);
		var containerIDhash = '#' + settings.containerID;
		var containerHoverIDHash = '#' + settings.containerHoverID;

		$('body').append('<a href="#" id="' + settings.containerID + '" class="' + settings.containerClass + '" >' + settings.text + '</a>');

		$(containerIDhash).hide().click(function () {
			$('html, body').stop().animate({
				scrollTop: 0
			}, settings.scrollSpeed, settings.easingType);
			$('#' + settings.containerHoverID, this).stop().animate({
				'opacity': 0
			}, settings.inDelay, settings.easingType);
			return false;
		})


		$(window).scroll(function () {
			var sd = $(window).scrollTop();
			if (typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': $(window).scrollTop() + $(window).height() - 50
				});
			}
			if (sd > settings.min)
				$(containerIDhash).stop(true, true).fadeIn(600);
			else
				$(containerIDhash).fadeOut(800);
		});
	};
})(jQuery);
$(document).ready(function () {
	$().UItoTop({
		easingType: 'easeOutQuart',
		containerClass: 'toTop glyphicon glyphicon-chevron-up'
	});
});
/* JS click toTop btn
========================================*/
/*== Atri new fix hover mobi ====
============================================================*/
$(document).ready(function () {
	var touch = window.ontouchstart ||
		(navigator.MaxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0);

	if (touch) { // remove all :hover stylesheets
		try { // prevent exception on browsers not supporting DOM styleSheets properly
			for (var si in document.styleSheets) {
				var styleSheet = document.styleSheets[si];
				if (!styleSheet.rules) continue;

				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
					if (!styleSheet.rules[ri].selectorText) continue;

					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						styleSheet.deleteRule(ri);
					}
				}
			}
		} catch (ex) {}
	}
	/**/
});

/*== Script For menu bottom ====
============================================================*/
$(document).ready(function () {
	$('.navF-item').has('ul').prepend('<span class="navF-click"><i class="navF-arrow"></i></span>');
	$('.navF-submenu-item').has('ul.navF-submenu2').prepend('<span class="navF-click"><i class="navF-arrow"></i></span>');
	// Click to reveal the nav
	$('.navF-item').click(function () {
		$(this).find('.navF-submenu').slideToggle();
		$(this).children('.navF-click').children('.navF-arrow').toggleClass('navF-rotate');
	});
});

/*=== NEW 30/10 ===*/
/*== Same height for element ====
============================================================*/
$(document).ready(function () {
	$(".more-hh").matchHeight();
	$(".utvalgte-produkter p").matchHeight();
});
