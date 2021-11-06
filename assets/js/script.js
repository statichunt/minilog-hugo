// Passive event listeners
jQuery.event.special.touchstart = {
	setup: function (_, ns, handle) {
		'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
	setup: function (_, ns, handle) {
		'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('.preloader').fadeOut(0);
});

// on ready state
$(document).ready(function () {
	'use strict';
  
	//  Search Form Open
	$('#searchOpen').on('click', function () {
		$('.search-wrapper').addClass('open');
		setTimeout(function () {
			$('.search-box').focus();
		}, 400);
	});
	$('#searchClose').on('click', function () {
		$('.search-wrapper').removeClass('open');
	});

	// tab
	$('.tab-content').find('.tab-pane').each(function (idx, item) {
		var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
			title = $(this).attr('title');
		navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
	});

	$('.code-tabs ul.nav-tabs').each(function () {
		$(this).find("li:first").addClass('active');
	})

	$('.code-tabs .tab-content').each(function () {
		$(this).find("div:first").addClass('active');
	});

	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		var tab = $(this).parent(),
			tabIndex = tab.index(),
			tabPanel = $(this).closest('.code-tabs'),
			tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
		tabPanel.find('.active').removeClass('active');
		tab.addClass('active');
		tabPane.addClass('active');
	});

	//banner slider
	$('.banner-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: true,
    speed: 1000,
    autoplayspeed: 1000,
    fade: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class="fas fa-arrow-left"></i><span class="ps-2">prev</span></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><span class="pe-2">next</span><i class="fas fa-arrow-right"></i></button>'
	});


  // post slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    dots: false,
    fade: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class="fas fa-arrow-left"></i><span class="ps-2">prev</span></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><span class="pe-2">next</span><i class="fas fa-arrow-right"></i></button>'
  });

  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    mode: 'vertical',
    asNavFor: '.slider-for',
    vertical: true,
  });
	
  // instafeed
  if (($('#instafeed').length) !== 0) {
		var accessToken = $('#instafeed').attr('data-accessToken');
		var userFeed = new Instafeed({
			get: 'user',
			resolution: 'low_resolution',
			accessToken: accessToken,
			template: '<div class="instagram-post"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div>'
		});
		userFeed.run();
	}
    setTimeout(function () {
      $('.instagram-slider').slick({
        dots: false,
        speed: 300,
        autoplay: true,
        arrows: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
        ]
      });
    }, 1000);

});