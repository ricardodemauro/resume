jQuery(document).ready(function($) {
    setTimeout(function() {
        $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	}, 100);

    /* Smooth Scrolling */
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


    /* Highlight the current section in the navigation bar */
	$("section").waypoint({
        handler: function(event, direction) {
            var active_section = $(this);
			if (direction === "up") {
                active_section = active_section.prev();
            } 
			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

            $("#nav-wrap a").parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});

/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

    $('header').css({ 'height': $(window).height() });
    $(window).on('resize', function() {
        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
    });


    /*	Fade In/Out Primary Navigation */
    $(window).on('scroll', function() {

        var h = $('header').height();
		var y = $(window).scrollTop();
        var nav = $('#nav-wrap');

	    if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
            nav.fadeOut('fast');
	    }
        else {
            if (y < h*.20) {
                nav.removeClass('opaque').fadeIn('fast');
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }

    });


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'
       
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    
    //tag cloud
    var cloud_words = [];
    $("#data-skills > li").each(function(){
         cloud_words.push({ text: $(this).text(), weight: $(this).data('weight') }) 
    });
    $("#data-skills").hide();
    
    $("div.skills-cloud").jQCloud(cloud_words, {
        autoResize: true,
        shape: 'elliptic',
        fontSize: {
    from: 0.1,
    to: 0.02
  }
    });
});








