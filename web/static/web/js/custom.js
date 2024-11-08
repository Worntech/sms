/*-------------------------------------------------
Project:	TEXT-160 SMS
Author:     Webstrot
Copyright © 2019-20
----------------------------------------------------*/
/*=================== Custom Functions ====================*/
(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;
	

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });

			
 //---- on ready function ----//
    jQuery(document).ready(function($) {


// sidebar submenu menu js Start //

	$('#mynavi li.active').addClass('open').children('ul').show();
		$('#mynavi li.has-sub>a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp(200);
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown(200);
				element.siblings('li').children('ul').slideUp(200);
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp(200);
			}
		});

		
			//----- Main Slider Animation  -------//

				(function($) {

            //Function to animate slider captions 
            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic'),
                $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");

            //Initialize carousel 
            $myCarousel.carousel();

            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Pause carousel  
            $myCarousel.carousel('pause');


            //Other slides to be animated on carousel slide event 
            $myCarousel.on('click slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });


        })(jQuery);
		
		
        // ===== Scroll to Top ==== //
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
        $('#return-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });		
				
				
			//------ company_js -------//
			$(document).ready(function() {
            $('.company_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
               	navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 2,
                        nav: true
                    },
					500: {
                        items: 3,
                        nav: true
                    },
                    700: {
                        items: 4,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		//------ payment js -------//
			$(document).ready(function() {
            $('.payment_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
               	navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 3,
                        nav: true
                    },
					500: {
                        items: 4,
                        nav: true
                    },
                    700: {
                        items: 6,
                        nav: true
                    },
                    1000: {
                        items: 8,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		
		//------ related post js -------//
			$(document).ready(function() {
            $('.related_blog_post_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
               	navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		
		
		//------ Single page scroll js ----//
        $('.jp_faq_fix_header_content ul li a').on('click', function(e) {
            $('.jp_faq_fix_header_content ul li').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[data-scroll=' + $(this).attr('href') + ']');
            e.preventDefault();
            var targetHeight = target.offset().top - parseInt('0', 10);
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

		
		  $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            var target = $('.jp_faq_fix_header_content ul li');
            if (windscroll >= 0) {
                $('[data-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 90) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            } else {
                target.removeClass('active');
                $('.jp_faq_fix_header_content ul li:first').addClass('active');
            }

        });
		
		
		/*---- Password SHow Hide js ---- */
	$(".toggle-password,.toggle-password-send, .toggle-password-confirm").on("click", function() {
	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
		input.attr("type", "text");
	  } else {
		input.attr("type", "password");
	  }
	});
		
		
		//----- counter-section   ------//
    $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });	
		
	
	

 });


})(jQuery);	
/*=============== End Custom Functions  ================*/