/*------------------------------------------------------------------
Theme Name: 	Sweet Wedding - Responsive Wedding Template
Version:        1.0.0
Author:         Beeskip
URL:            http://themeforest.net/user/Beeskip
-------------------------------------------------------------------*/


(function($) {

	"use strict";




/*----------------------------------------------------
	People Slider
---------------------------------- --------------------------------*/

    //if (jQuery('body').hasClass('main-page')) {
    //   var peoplestack = new Photostack(document.getElementById('people-photostack'));

    //}


/*------------------------------------------
	Active current section
-------------------------------------------*/


    (function() {
        var navLinks = $("#navbar > ul > li > a");
        var section = $(".page-wrapper > section");

        navLinks.on("click", function() {
            var $this = $(this);
            var herf = $this.attr("href").substring(1);

            $this.parent("li").addClass("active").siblings().removeClass("active");

            section.each(function() {
                var currentSection = $(this);
                if (herf === currentSection.attr("id")) {
                    if (!currentSection.hasClass("current-section")) {
                        currentSection.addClass("current-section sectionSlideIn");


                    }

                    $(this).siblings().removeClass("current-section sectionSlideIn");
                }

            });

            return false;
        });

    }());


/*-------------------------------------------
	Function for Toggle mobile navigation
-----------------------------------------------------*/

    function toggleMobileNav() {
        var navbar = $("#navbar");
        var navLinks = $("#navbar > ul > li > a");
        var openBtn = $(".navbar-header .open-btn");
        var closeBtn = $("#navbar .close-navbar");

        openBtn.on("click", function() {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            return false;
        })

        navLinks.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            return false;
        })
    }

    toggleMobileNav();


/*----------------------------------------------------
	Function for hero slider bg image
-----------------------------------------------------------*/

    function heroSliderBgImg() {
        if ($(".hero-slider .slide").length) {
            $(".hero-slider .slide").each(function() {
                var $this = $(this);
                var img = $this.children(img);
                var imgSrc = img.attr("src");

                $this.css({
                    backgroundImage: "url("+ imgSrc +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }

    // Function for section bg image

    function sectionBg() {
        if ($(".section-bg").length) {
            $(".section-bg").each(function() {
                var $this = $(this);
                var img = $this.data("bg-image");

                $this.css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                });
            });
        }
    }


/*------------------------------------------
	PRELOADER
-------------------------------------------*/

    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {


                heroSliderBgImg();

                //Active hero slider
                if ($(".hero-slider").length) {
                    $(".hero-slider").owlCarousel({
                        items: 1,
                        autoplay: true,
                        loop: true,
                        animateOut: 'fadeOut'
                    });
                }

            });
        }
    }


/*-------------------------------------------
        WHEN DOCUMENT LOADING
 ------------------------------------------*/
    $(window).on('load', function() {
        preloader();

        heroSliderBgImg();

        sectionBg();


    });


/*-----------------------------------
	Counter event
-----------------------------------*/
    var today = new Date();

    var target = new Date(today);
    target.setDate(129); // Set no. of days from today
    target.setHours(0, 3, 50, 0);

    // Countdown start from yesterday
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Day counter will start from yesteday
    yesterday.setHours(0, 0, 0, 0);
    if ($.find('.countdown').length) {

        $('.countdown').final_countdown({
            'start': yesterday.getTime() / 1000,
            'end': target.getTime() / 1000,
            'now': today.getTime() / 1000
        }, function () {
            // Finish Callback
        });
    }

/*---------------------------------------------------
    rsvp
--------------------------------------*/
jQuery(document).ready(function(){

    knslider();
    var width = window.innerWidth || document.documentElement.clientWidth;
    $("#mainslider img").each(function() {
        var oldSrc = $(this).attr('src');
        if (width >= 768) {
            var newSrc = oldSrc.replace('_normal.','_bigger.');
            //var newWidth = 100;  var newHeight = 100;
        } else if ( width >= 480 ) {
            var newSrc = oldSrc.replace('_normal.','_big.');
           // var newWidth = 50;  var newHeight = 50;
        }
        $(this).attr('src',newSrc);
        //$(this).attr('width',newWidth);
        //$(this).attr('height',newHeight);
    });



	$('#cform').on( "submit", function() {

		var action = $(this).attr('action');

		$("#staticmessage").slideUp(750,function() {
		$('#staticmessage').hide();

 		$('#staticmessage')
			.before('<div class="text-center"><img src="images/ajax-loader.gif" class="contact-loader" /></div>')
			.attr('disabled','disabled');

            console.log($('#name').val());
            var myaccept = "true";
            if($('#rsvpselection').val() == "declinebtn"){
               myaccept = "false";
            }
            var datatosend = JSON.stringify({
			   name: $('#name').val(),
		      	email: $('#email').val(),
	      	   	accept: myaccept,
		      	foodchoice: $('#mealselection').val()
		    });
            console.log(datatosend);
        $.ajax({
            type: 'POST',
            data: datatosend,
            contentType: 'application/json',
            url: action,
            success: function(data){
				document.getElementById('staticmessage').innerHTML = data;
				$('#staticmessage').slideDown('slow');
				//$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
				$('.text-center').remove();
                $('#name').val("");
	//			$('#submit').removeAttr('disabled');
//				if(data.match('success') != null) $('#cform').slideUp('slow');
			}
		});

		});

		return false;

	});

});



})(window.jQuery);



