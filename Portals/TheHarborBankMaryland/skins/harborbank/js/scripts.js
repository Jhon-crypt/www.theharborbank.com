$(document).ready(function () {

    /***************************************************
                Adopt scripts
    ***************************************************/
    /* Admin */
    $('a.dnnPrimaryAction').addClass('btn btn-primary btn-custom2 btn-rounded').removeClass("dnnPrimaryAction");
    $('a.dnnSecondaryAction').addClass('btn btn-inverse btn-custom2 btn-rounded').removeClass("dnnSecondaryAction");


    /* Structure */
    //$('#banner .wsc_pane:not(.DNNEmptyPane)').parents('#banner').css( {'display': 'block','height': 'auto' } );
    //$('#map .wsc_pane:not(.DNNEmptyPane)').parents('#map').css( {'display': 'block','height': 'auto' } );
    $('div[id*="sl-prev"].hide').css('display', 'none');
    $('div[id*="sl-next"].hide').css('display', 'none');
    //if ($(".wsc_generic_skin:not('.wsc_onepage') #main_content .wsc_pane:not('.DNNEmptyPane')").length) {
    //  $("#main_content").css("padding-top", "30px");
    //}
    if ($("#banner .wsc_pane.BannerPane.DNNEmptyPane").length) {
      $("#header").addClass('wsc-banner-empty');
    }

    /* New Labels */
    //$(".main_menu ul.nav > li.child-1 > ul a").append('&nbsp;&nbsp;<em class="label label-default">new</em>');
    //$(".main_menu ul.nav > li.child-2 > ul > li.child-1 > ul > li.child-1 > a").append('&nbsp;&nbsp;<em class="label label-default">new</em>');
    //$(".main_menu ul.nav > li.child-2 > ul > li.child-2 > a").append('&nbsp;&nbsp;<em class="label label-default">new</em>');
    //$(".main_menu ul.nav > li.child-2 > ul > li.child-3 > a").append('&nbsp;&nbsp;<em class="label label-default">new</em>');

    /* Scipt to hide the footer2 section when the alt_footer is not empty */ 
    $("#footer_alt .row .wsc_pane:not(.DNNEmptyPane)").parents("#footer_alt").addClass("full");

    if($("#footer_alt").hasClass("full")) {
        $(".wsc_generic_skin #footer2").css("display", "none");
        $(".wsc_generic_skin #footer_alt").css("display", "block");
     }

     /* Form and list */
     $('.dnnFormAndList table[id*="Default_List_grdData"]').addClass('table table-bordered'); 

     /* Testimonials grid same height */
     if( $('.wsc-testimonials-grid').length > 0 ) {
				var maxHeight = 0;
				$('.wsc-testimonials-grid').each( function(){
					$(this).find("li > .wsc-testimonial").each(function(){
						if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
					});
					$(this).find("li").height(maxHeight);
					maxHeight = 0;
				});
        }

    /* Initialise side menu equal height
    -------------------------------------------------------------------
    $('.wsc_generic_skin > div').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });*/

    
    // Check whether MegaMenu has 3rd level subs
    if ($('li.wsc_mega ul.submenu_wrap > li.category.sub').length) {
        $("li.wsc_mega ul.submenu_wrap > li.category.sub").parent().addClass("wsc_mega_with_sub");
    }
    /* Initialise bs3 tooltips
    -------------------------------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip()

    /* Counter
    -------------------------------------------------------------------*/
    if ($('.wsc-counter').length) {
        $('.wsc-counter span').appear(function() {
             $(this).each(function(){
		        $(this).countTo();
	        });
        });
    }

    /* Countdown
    -------------------------------------------------------------------*/
    if ($('.wsc-countdown').length) {
        $('.wsc-countdown').each(function () {
            var newDate = new Date($(this).attr('date'));
            $(this).countdown({ until: newDate });
        });
    }

    /* Magnific Popup
    -------------------------------------------------------------------*/
    $('.wsc-popup-inline').magnificPopup({
        type: 'inline',
        midClick: true
    });

    /* Animated Gradiend
    -------------------------------------------------------------------*/   
    if ($('.wsc-grad-overlay').length) {
        var colors = new Array(
          [62,35,255],
          [60,255,60],
          [255,35,98],
          [45,175,230],
          [255,0,255],
          [255,128,0]);

        var step = 0;
        //color table indices for: 
        // current color left
        // next color left
        // current color right
        // next color right
        var colorIndices = [0,1,2,3];

        //transition speed
        var gradientSpeed = 0.002;

        function updateGradient()
        {
  
          if ( $===undefined ) return;
  
            var c0_0 = colors[colorIndices[0]];
            var c0_1 = colors[colorIndices[1]];
            var c1_0 = colors[colorIndices[2]];
            var c1_1 = colors[colorIndices[3]];

            var istep = 1 - step;
            var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            var color1 = "rgb("+r1+","+g1+","+b1+")";

            var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            var color2 = "rgb("+r2+","+g2+","+b2+")";

         $('.wsc-grad-overlay').css({
           /*background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({*/
           background: "-webkit-linear-gradient(-45deg, "+color1+" 0%, "+color2+" 100%)"}).css({
            background: "-moz-linear-gradient(-45deg, "+color1+" 0%, "+color2+" 100%)"});
  
          step += gradientSpeed;
          if ( step >= 1 )
          {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
    
            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
          }
        }

        setInterval(updateGradient,100);
    }


    /***************************************************
                    Featured 
    ***************************************************/
    /* Main Navigation
    -------------------------------------------------------------------*/
    $('.main_menu ul > li:has(.active)').addClass('active');
    $('.menu_condensed .menu_wrap .nav .root.sub > a i, .wsc_sidebar_skin .menu_wrap .nav .root.sub > a i, .menu_classic .menu_wrap .nav .root.sub > a i, .menu_minimal .menu_wrap .nav .root.sub > a i').addClass('fa fa-angle-down');
    $('.menu_wrap .nav .root .submenu_wrap .sub > a i').addClass('icon-angle-right fa fa-angle-right');
    $('.menu_wrap .nav .root .submenu_wrap .sub ul .sub > a i').addClass('icon-angle-right fa fa-angle-right');

	$('nav.wsc_main .nav.sf-menu').superfish({
        delay: 800,        // the delay in milliseconds that the mouse can remain outside a submenu without it closing
        speed: 'fast',   // speed of the opening animation.
        speedOut: 'fast',   // speed of the closing animation.
        disableHI: true,
        onBeforeShow: function() {
            if($(this).parents("ul").length > 1){
                var w = $(window).width();  
                var ul_offset = $(this).parents("ul").offset();
                var ul_width = $(this).parents("ul").outerWidth();
                // Shouldn't be necessary, but just doing the straight math
                // on dimensions can still allow the menu to float off screen
                // by a little bit.
                ul_width = ul_width + 50;
                if((ul_offset.left+ul_width > w-(ul_width/2)) && (ul_offset.left-ul_width > 0)) {
                    $(this).addClass('open_left');
                }
                else {
                    $(this).removeClass('open_left');
                }
            };
        }
    });

    /* Side Navigation
    -------------------------------------------------------------------*/
    $('.wsc-sidebar .sf-menu').superfish({
        delay:       500,                           
        animation:   {opacity:'show'},
        speed:       'fast',
        speedOut:    'fast',                          
        autoArrows:  true,                           
        dropShadows: true,
        disableHI:   false,    
        onBeforeShow: function() {
            if($(this).parents("ul").length > 1){
                var w = $(window).width();  
                var ul_offset = $(this).parents("ul").offset();
                var ul_width = $(this).parents("ul").outerWidth();
                ul_width = ul_width + 50;
                if((ul_offset.left+ul_width > w-(ul_width/2)) && (ul_offset.left-ul_width > 0)) {
                    $(this).addClass('open_left');
                }
                else {
                    $(this).removeClass('open_left');
                }
            };
        },
        onBeforeHide:function() {
            setTimeout(function(){ $(this).show(); }, 500);       
        }
    });

    /* Side navigation headers */
    if ($('.wsc-sidebar .sf-menu').length) {
        $('.wsc-sidebar .sf-menu > li.root').each(function(){
            var menuItemName = $(this).find('>a').clone().children().remove().end().text();
            $(this).children('ul.submenu_wrap').prepend('<li class="wsc-sidebar-head">' + menuItemName + '<div class="wsc-line"></div></li>');
        });
    }

    /* sub arrow */
    (function ($) {
      $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
          this.trigger(ev);
          return el.apply(this, arguments);
        };
      });
    })(jQuery);

    var to2,to3,to4, hovered,subShown;

    var side = {
       endHover: function() {            
           $('.wsc-sidebar .nav.sf-menu li.root').removeClass("with-arrow").siblings('.active').addClass("with-arrow");
            },
        addCurrentActive: function() {
           $('.wsc-sidebar .nav.sf-menu li.root.active').addClass('current_active').removeClass("active");
        },
        addActive: function(){
           $('.wsc-sidebar .nav.sf-menu li.root.current_active').addClass("active").removeClass("current_active");
        }
    }
   
    $('.wsc-sidebar .nav.sf-menu li.root').removeClass("with-arrow").siblings(".active").addClass("with-arrow");


    $('.wsc-sidebar .nav.sf-menu li.root > .submenu_wrap').on('show', function() {
        subShown=true;
        clearTimeout(to3);
        $(this).parent('li.root').addClass("with-arrow").siblings().removeClass("with-arrow");
        side.addCurrentActive();
    });
 
    $('.wsc-sidebar .nav.sf-menu li.root > .submenu_wrap').on('hide', function() {
        item=$(this).parent('li.root');
        clearTimeout(to2);
        subShown=false;
       to3=setTimeout(function(){ if(!item.hasClass('current_active') && !item.hasClass('sfHover')){item.removeClass("with-arrow");}}, 0);
        $('.wsc-sidebar .nav.sf-menu').find(' li.root:hover').addClass('with-arrow');
    });

     $('.wsc-sidebar .nav.sf-menu li.root:not(.sub)').on('mouseenter', function() {
        item=$(this);
        if(!subShown){
        to2=setTimeout(function(){ 
            side.addCurrentActive();
            item.addClass("with-arrow").siblings().removeClass("with-arrow");
        }, 100);
        }
    });

    $('.wsc-sidebar  .nav.sf-menu').on('mouseleave', function() {
        item=$(this);
        clearTimeout(to2);  
        setTimeout(function(){ side.addActive();side.endHover(); }, 500);
    });



    /* OffScreen Side Navigation
    -------------------------------------------------------------------*/
    
    if($('.wsc-offscreen-container').length){
    	$('body').addClass('wsc-has-offscreen-nav');
    	$('.wsc_generic_inside_wrap').wrap('<div class="wsc-offscreen-wrap"></div>');
    	$(".wsc_generic_skin .wsc-offscreen-wrap").append('<div class="wsc-inside-overlay"></div>');
   
        $('.wsc-offscreen-toggle').click(function(){
    	    $('.wsc-offscreen-wrap').toggleClass('wsc-reveal-nav');
    	    $('.wsc-offscreen-container').toggleClass('wsc-reveal-nav');
        });

        $('.wsc-offscreen-container').click(function(){
    	    $('.wsc-offscreen-container').removeClass('wsc-reveal-nav');
    	    $('.wsc-offscreen-wrap').removeClass('wsc-reveal-nav');
        });

        $('#banner, #intro, #main_content, .footer_wrapper').click(function(){
    	    if($('.wsc-offscreen-wrap').hasClass('wsc-reveal-nav')){
    		    $('.wsc-offscreen-wrap').removeClass('wsc-reveal-nav');
    		    $('.wsc-offscreen-container').removeClass('wsc-reveal-nav');
    	    }
        });
    }
    else{
        $('body').removeClass('wsc-has-offscreen-nav');
    }
    



    /* Forms
    -------------------------------------------------------------------*/
    /* Search */
    $(".wsc_search_wrap .wsc_search_trigger").on("click", function(e){
	    e.preventDefault();
	    e.stopPropagation();
	    var $_this = $(this);
	    if($_this.hasClass("wsc_act")){
            if ($(".wsc_sidebar_skin .wsc-plus-zindex").length) {$(".wsc-content-wrap").removeClass("wsc-plus-zindex");}
            $_this.parent(".wsc_search_wrap").removeClass("full_size");
		    $_this.removeClass("wsc_act");
		    $_this.siblings("span[id*='SEARCH1']").fadeOut(200);
	    }else{
            if ($(".wsc_sidebar_skin").length) {$(".wsc-content-wrap").addClass("wsc-plus-zindex");}
            $_this.parent(".wsc_search_wrap").addClass("full_size");
		    $_this.addClass("wsc_act");
		    $_this.siblings("span[id*='SEARCH1']").fadeIn(250);
            $(".wsc-content-wrap").addClass("wsc-plus-zindex");
	    }
        /*var initial = "Search...";
        var empty = "";
        $(".wsc_search_wrap input[id*='txtSearch']").val(initial);
        $(".wsc_search_wrap input[id*='txtSearch']").focus(function () {
            if ($(this).val() == initial) {
                $(this).val("");
            }
        }).blur(function () {
            if ($(this).val() == empty) {
                $(this).val(initial);
            }
        });*/
    });

    //close search container
    if ($(".wsc_search_wrap .wsc_search_trigger").length) {
        $("body").click(function (e) {
            var _this = $(".wsc_search_wrap span[id*='SEARCH1']");
            if ((e.pageY < _this.offset().top) || (e.pageY > _this.offset().top + _this.height()) ||
            (e.pageX < _this.offset().left) || (e.pageX > _this.offset().left + _this.width())) {
                _this.siblings(".wsc_search_trigger").removeClass("wsc_act");
                _this.fadeOut(200);
                $(".wsc_search_wrap.full_size").removeClass("full_size");
                if ($(".wsc_sidebar_skin .wsc-plus-zindex").length) {$(".wsc-content-wrap").removeClass("wsc-plus-zindex");}
            }
        });
    }

    function setInitSettings(ob_sidebarStatus) {
        setCookie("coo_sidebarStatus", ob_sidebarStatus);
        return false;
    }

    function setCookie(name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
    }

    function getCookie(cookie_name) {
        var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
        if (results)
            return (unescape(results[2]));
        else
            return null;
    }
    
    if (getCookie("coo_sidebarStatus")) {
        $(".wsc-sidebar").addClass(getCookie("coo_sidebarStatus"));
    } 

    $(".wsc-sidebar-collapse-item a").on("click", function(e){
	    e.preventDefault();
	    e.stopPropagation();
	    var $_this = $(".wsc-sidebar");
	    if($_this.hasClass("wsc-mini-bar")){
		    $_this.removeClass("wsc-mini-bar");
            $_this.addClass("wsc-full-bar");
            setCookie("coo_sidebarStatus", "wsc-full-bar");
	    }else{
            $_this.removeClass("wsc-full-bar");
            $_this.addClass("wsc-mini-bar");
            setCookie("coo_sidebarStatus", "wsc-mini-bar");
	    }
    });

    /* --- Feedback --- */
    if ($('#footer_alt div.FeedbackForm, .dnnForm.FeedbackForm').length) {
        $('span.dnnFormRequired').each(function () {
            label = $(this).html();
            $(this).html(label + '<span class="wsc_required">*</span>');
        });
        var empty = "";
        $("#footer_alt .FeedbackForm .Feedback_Field .dnnFormItem").each(function () {
            if ($(this).children("label").html() == undefined) {
                var holder = $(this).children(".dnnLabel").children("label").text().trim();
            } else {
                var holder = $(this).children("label").html();
            }

            if ($(this).children("input, textarea").val() == empty) {
                $(this).children("input, textarea").val(holder);
            }
            $(this).children("input, textarea").focus(function () {
                if ($(this).val() == holder) {
                    $(this).val("");
                }
            }).blur(function () {
                if ($(this).val() == empty) {
                    $(this).val(holder);
                }
            });
        });
    }

    /* Iframe
    -------------------------------------------------------------------*/
   /* $("iframe").each(function(){
        var ifr_source = $(this).attr('src');
        var wmode = "wmode=transparent";
        if(ifr_source.indexOf('?') != -1) {
        var getQString = ifr_source.split('?');
        var oldString = getQString[1];
        var newString = getQString[0];
        $(this).attr('src',newString+'?'+wmode+'&'+oldString);
        }
        else $(this).attr('src',ifr_source+'?'+wmode);
    });
    */
    /* end Iframe*/

    /* Effects
    -------------------------------------------------------------------*/
    /* Tooltip & popover */
    $("[data-rel=popover]").hover(function(){
        $(this).popover('toggle');
    });

    $("[rel=tooltip]").tooltip();
    $("[data-rel=tooltip]").tooltip();

    /* Hovers */
    $(".hover_img, .hover_colour").on('mouseover',function(){
        var info=$(this).find("img");
            info.stop().animate({opacity:0.1},500);
        }
    );
    $(".hover_img, .hover_colour").on('mouseout',function(){
        var info=$(this).find("img");
            info.stop().animate({opacity:1},800);
        }
    );
	
    /* progress-bar animation */
    setTimeout(function () {
        $('.progress .bar, .progress-bar').each(function () {
            var me = $(this);
            var perc = me.attr("data-percentage");
            var current_perc = 0;
            var progress = setInterval(function () {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.css('width', (current_perc) + '%');
                }
                me.text((current_perc) + '%');
            }, 20);
        });
    }, 300);

    /* ANIMATIONS */
    /*$(function() { 	
    $('.welcome').show().addClass("animated fadeInDown");
    $('.welcome_index').show().addClass("animated fadeInDown");
    $('.intro_sections h6').show().addClass("animated fadeInUp");
    $('.fadeinup').show().addClass("animated fadeInUp");
    $('.fadeindown').show().addClass("animated fadeInDown");
    });*/

    /* end Effects*/

    /* BACK TO TOP LINK
    -------------------------------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
        });
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })

    /* Old IE notification */
    $('.browser-notification .close').click(function () {
        $(this).parent().hide();
    });

    /* Parallax
    -------------------------------------------------------------------*/
    if ( ($(".pt_back_parallax #pagetitle").length) && ($('body').hasClass('no-touch')) && (jQuery.browser.mobile == false) ) {
        $('#pagetitle').parallax("30%", 0.5);
    }
    // Add padding to not empty parallax panes
    $(".p-content .wsc_pane:not(.DNNEmptyPane)").parents(".p-content").addClass("p-not-empty");
    $(".p-parallax .wsc_pane:not(.DNNEmptyPane)").parents(".p-parallax").addClass("p-not-empty");

    /* Portfolio additional script
    -------------------------------------------------------------------
    $(window).on('resize', function(){
        $('.no_title.margin .item_description').css('width', $('.no_title.margin').width());
        $('.overlay:not(.type_masonry) .portfolio-overlay .item_description').css('padding-top', ($('.overlay.item_wrapper').height() / 2 - 40));
        $('.overlay.type_masonry .item_description').each(function () {
                var itemHeight = $(this).parents('.overlay.item_wrapper').outerHeight();
                $(this).css('padding-top', (itemHeight/ 2 - 40));
            });
        $('.slider-related-wrapper .portfolio-overlay .item_description').css('padding-top', ($('.slider-related-wrapper .slider-item').height() / 2 - 40));
    });*/

    /* DNN page management tree fix
    -------------------------------------------------------------------*/
    if ($(".dnnTabsModule .dnnTreeArea").length) {
        $("body").css("position", "static");
        $(".wsc_generic_skin").css("position", "static");
        $("#main_content").css("position", "static");
    }; 

    /* Smart Header
    -------------------------------------------------------------------*/
    if (($('body').innerWidth() > 991) && ($(".menu_classic.header_left .wsc-header-container .main_menu").length)) {
        scaleSmartHeader();
        $(window).on('resize', function () {
            if ($('body').innerWidth() > 991) {
                scaleSmartHeader();
            }
        });
    }

    function scaleSmartHeader() {
        var menuWidth = 0;
        $(".menu_classic.header_left .wsc-header-container .main_menu .nav > li").each(function () {
            menuWidth += $(this).width();
        });
        menuWidth += 15;
        var unitMenuWidth = parseInt(menuWidth) + 'px';
        $('.menu_classic.header_left .wsc-header-container .main_menu').css('width', unitMenuWidth);
    }

    /* Sticky Footer
    -------------------------------------------------------------------*/
    if ($(".wsc_fixed_footer .footer_wrapper").length) {
        scaleFixedFooter();
        $(window).on('resize', function() {
            scaleFixedFooter();
        });
    }

    function scaleFixedFooter() {
        var footerHeight = $('.footer_wrapper').height();
        var footerWidth = $('.wsc_generic_skin').width();
        var unitFooterHeight = parseInt(footerHeight) + 'px';
        var unitFooterWidth = parseInt(footerWidth) + 'px';
        $('#main_content').css('margin-bottom', unitFooterHeight);
        $('.footer_wrapper').css('width', unitFooterWidth);
    }

    /* Sidebar width
    -------------------------------------------------------------------*/
    if ($(".wsc_sidebar_skin").length) {
        scaleSideMenuContainer();

        $(window).on('resize', function() {
            scaleSideMenuContainer();
        });
 
        $(".wsc-sidebar-collapse-item a").on("click", function(e){
	        e.preventDefault();
	        e.stopPropagation();
            scaleSideMenuContainer();
        });

    }

    function scaleSideMenuContainer() {
        var width  = $(window).width();
        var noSideMenuWidth = $(window).width() - $('.wsc-sidebar').width();

        var unitWidth = parseInt(width) + 'px';
        var unitNoSideMenuWidth = parseInt(noSideMenuWidth) + 'px';

        if (noSideMenuWidth > 100) {
            $('.wsc_generic_inside_wrap').css('width',noSideMenuWidth);
        }
        else {
            $('.wsc_generic_inside_wrap').css('width','auto');
        }
    }


    /* Video header
    -------------------------------------------------------------------*/
    
//    if (($('body').hasClass('no-touch')) && (jQuery.browser.mobile == false)) {
//        if (($(".homepage-hero-module").length) || ($(".homepage-hero-noheader").length) || ($(".homepage-hero-nointro").length) || ($(".homepage-hero-noheaderintro").length)) {
            scaleVideoContainer();
            initBannerVideoSize('.video-container .poster img');
            initBannerVideoSize('.video-container .filter');
            initBannerVideoSize('.video-container video');

            $(window).on('resize', function() {
                scaleVideoContainer();
                scaleBannerVideoSize('.video-container .poster img');
                scaleBannerVideoSize('.video-container .filter');
                scaleBannerVideoSize('.video-container video');
            });
//        }
//    }

    function scaleVideoContainer() {
        var height = $(window).height() + 5;
        var noHeaderHeight = $(window).height() + 5 - $('#header').height();
        var noIntroHeight = $(window).height() + 5 - $('#intro').height();
        var noHeaderIntroHeight = $(window).height() + 5 - $('#intro').height() - $('#header').height();

        var unitHeight = parseInt(height) + 'px';
        var unitNoHeaderHeight = parseInt(noHeaderHeight) + 'px';
        var unitNoIntroHeight = parseInt(noIntroHeight) + 'px';
        var unitNoHeaderIntroHeight = parseInt(noHeaderIntroHeight) + 'px';

        $('.homepage-hero-module').css('height',unitHeight);
        $('.homepage-hero-noheader').css('height',unitNoHeaderHeight);
        $('.homepage-hero-nointro').css('height',unitNoIntroHeight);
        $('.homepage-hero-noheaderintro').css('height',unitNoHeaderIntroHeight);
    }

    function initBannerVideoSize(element){
        $(element).each(function(){
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });
        scaleBannerVideoSize(element);
    }

    function scaleBannerVideoSize(element){
        var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

        $(element).each(function(){
            var videoAspectRatio = $(this).data('height')/$(this).data('width');
            $(this).width(windowWidth);
            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
                $(this).width(videoWidth).height(videoHeight);
            }
            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        });
    }

/* PRETTYPHOTO
-------------------------------------------------------------------*/
    if($("[data-rel*='prettyPhoto']").length)
    {
        $('a[data-rel]').each(function() {
            $(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
        });
        $("a[rel^='prettyPhoto']").prettyPhoto();
	        jQuery("a[rel^='prettyPhoto'], a[rel^='lightbox']").prettyPhoto({
                overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
                social_tools: false, /* html code or false to disable */
                deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
                theme: 'pp_default',  /* light_rounded / dark_rounded / light_square / dark_square / facebook */
                slideshow: false, /* false OR interval time in ms */
		        autoplay_slideshow: false, /* true/false */
		        allow_resize: true, /* Resize the photos bigger than viewport. true/false */
	            default_width: 800,
                markup: '<div class="pp_pic_holder"> \
						<div class="ppt"></div> \
						<div class="pp_content_container"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
                                        <div class="pp_details"> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
									</div> \
								</div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
                changepicturecallback: function(){
                    var viewportWidth = $('body').innerWidth();
                    if (viewportWidth < 768) {
                        $(".pp_pic_holder.pp_default").css("top",window.pageYOffset+"px");
                    }
                    if ($('#pp_full_res > iframe').length) {
                        $('#pp_full_res > iframe').wrap("<div class='vendor'></div>");
                    }
                    if ($('#pp_full_res .vendor iframe').length && viewportWidth < 768) {
                        $('#pp_full_res').css("padding-top","50px");
                    }
                },
                autoplay: false /* Automatically start videos: True/False */
        });
        /*$('.hover_img a[rel*="prettyPhoto"]').parents('.hover_img').addClass( 'zoom' );
        $('.hover_colour a[rel*="prettyPhoto"]').parents('.hover_colour').addClass( 'zoom' );*/
    }

    /* OnePage navigation
    -------------------------------------------------------------------*/
    if ($('.wsc_onepage').length){
        $(".wsc_onepage .onePageNav").onePageNav({
            scrollOffset: 65
        });
    }

    /***************************************************
        Sticky Header
    ***************************************************/
    if(typeof(sticky_header) != "undefined" && sticky_header){
        /* Sticky header */
        if ($('#header').length) {
            var headerOffset = $('#header').offset().top;
        }
        if ($('.TopPane').length) {
            var topPaneOffset = $('.TopPane').offset().top;
        } else {
            var topPaneOffset = 0;
        }

        // Check on scroll event
        $(window).scroll(function () {
            if ($(window).scrollTop() > (headerOffset+topPaneOffset)) {
                $('#header').addClass('sticky_header');

                if ($('body form #ControlBar_ControlPanel').length) {
                    $(".wsc_generic_skin #header.sticky_header .header_inner").css("top", "54px");
                };
                if ($('body form #RibbonBar_ControlPanel').length) {
                    $(".wsc_generic_skin #header.sticky_header .header_inner").css("top", "38px");
                };
            } else {
                $('#header').removeClass('sticky_header');
                $(".wsc_generic_skin #header .header_inner").css("top", "0px");
                $(".wsc_generic_skin #header .header_inner").css("top", "0px");
            };
        });

       // Mobile menu smooth close after click
        $('.wsc_generic_skin #header .menu_wrap .nav li.root > a').click(function(){
            $(".wsc_generic_skin #header .main_menu.collapse.in").delay(500).queue(function(){
                $(this).removeClass("in").dequeue();
            });
            $('.wsc_generic_skin #header .navbar-toggle').addClass('collapsed');
        });
    }; // End IF
    /* end Sticky header */

}); /////////////////////////// - End document ready

/***************************************************
                Yepnope loading 
***************************************************/

/* Parallax
-------------------------------------------------------------------*/
    yepnope({
        test: ( ($(".parallax .wsc_pane:not('.DNNEmptyPane')").length) && ($('body').hasClass('no-touch')) && (jQuery.browser.mobile == false)  ) ,
        yep: { 
            'plugins': SkinPath + '/js/conditional/jquery.parallax-1.1.3.js'},
     callback:{ 
            'plugins': function () {
                //.parallax(xPosition, speedFactor, outerHeight) options:
                //xPosition - Horizontal position of the element
                //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
                //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
                  $('.parallax.ParallaxPanes1').parallax("50%", 0.5);
                  $('.parallax.ParallaxPanes2').parallax("50%", 0.5);
                  $('.parallax.ParallaxPanes3').parallax("50%", 0.5);
                  $('.parallax.ParallaxPanes4').parallax("50%", 0.5);
                  $('.parallax.ParallaxPanes5').parallax("50%", 0.5);
                  $('.parallax.ParallaxOnePanes1').parallax("50%", 0.5);
                  $('.parallax.ParallaxOnePanes2').parallax("50%", 0.5);
                  $('.parallax.ParallaxOnePanes3').parallax("50%", 0.5);
                  $('.parallax.ParallaxOnePanes4').parallax("50%", 0.5);
                  $('.parallax.ParallaxOnePanes5').parallax("50%", 0.5);
                  $('.parallax.ParallaxOnePanes6').parallax("50%", 0.5);
            }
        }
    });

/* Parallax
-------------------------------------------------------------------*/
    yepnope({
        test: (($(".wsc-use-parallax").length) && ($('body').hasClass('no-touch')) && (jQuery.browser.mobile == false)),
        yep: { 
            'plugins': SkinPath + '/js/conditional/jquery.parallax-1.1.3.js'},
     callback:{ 
            'plugins': function () {
                //.parallax(xPosition, speedFactor, outerHeight) options:
                //xPosition - Horizontal position of the element
                //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
                //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
                  $('.wsc-use-parallax').parallax("50%", 0.5, false);
            }
        }
    });

    yepnope({
        test: (($(".wsc-use-parallax2").length) && ($('body').hasClass('no-touch')) && (jQuery.browser.mobile == false)),
        yep: { 
            'plugins': SkinPath + '/js/conditional/jquery.parallax-1.1.3.js'},
     callback:{ 
            'plugins': function () {
                //.parallax(xPosition, speedFactor, outerHeight) options:
                //xPosition - Horizontal position of the element
                //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
                //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
                  $('.wsc-use-parallax2').parallax("50%", 0.1, false);
            }
        }
    });

/* Google Code Prettify
-------------------------------------------------------------------*/
    yepnope({
        test: ($(".prettyprint").length),
        yep: {'plugins': SkinPath + '/js/conditional/prettify.js'}
    });

/* Charts
-------------------------------------------------------------------*/
yepnope({
    test: ($("#polarChartCanvas, #pieChartCanvas, #lineChartCanvas, #doughnutChartCanvas, #barChartCanvas, #radarChartCanvas").length),
    yep: { 
        'plugins': SkinPath + '/js/conditional/Chart.min.js'},
    callback:{ 
        'plugins': function () {
            //Chart body start
            if ($('#polarChartCanvas').length) {
                var polarData=[{value:300,color:"#F7464A",highlight:"#FF5A5E",label:"Red"},{value:50,color:"#46BFBD",highlight:"#5AD3D1",label:"Green"},{value:100,color:"#FDB45C",highlight:"#FFC870",label:"Yellow"},{value:40,color:"#949FB1",highlight:"#A8B3C5",label:"Grey"},{value:120,color:"#4D5360",highlight:"#616774",label:"Dark Grey"}];
                window.myPolarArea=new Chart(document.getElementById("polarChartCanvas").getContext("2d")).PolarArea(polarData,{responsive:!0});
            }
            if ($('#pieChartCanvas').length) {
                var pieData=[{value:300,color:"#F7464A",highlight:"#FF5A5E",label:"Red"},{value:50,color:"#46BFBD",highlight:"#5AD3D1",label:"Green"},{value:100,color:"#FDB45C",highlight:"#FFC870",label:"Yellow"},{value:40,color:"#949FB1",highlight:"#A8B3C5",label:"Grey"},{value:120,color:"#4D5360",highlight:"#616774",label:"Dark Grey"}];
                window.myPie=new Chart(document.getElementById("pieChartCanvas").getContext("2d")).Pie(pieData,{responsive:!0});
            }
            if ($('#lineChartCanvas').length) {
                var randomScalingFactor=function(){return Math.round(100*Math.random())},lineChartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fillColor:"rgba(220,220,220,0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]},{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]}]};
                window.myLine=new Chart(document.getElementById("lineChartCanvas").getContext("2d")).Line(lineChartData,{responsive:!0});
            }
            if ($('#doughnutChartCanvas').length) {
                var doughnutData=[{value:300,color:"#F7464A",highlight:"#FF5A5E",label:"Red"},{value:50,color:"#46BFBD",highlight:"#5AD3D1",label:"Green"},{value:100,color:"#FDB45C",highlight:"#FFC870",label:"Yellow"},{value:40,color:"#949FB1",highlight:"#A8B3C5",label:"Grey"},{value:120,color:"#4D5360",highlight:"#616774",label:"Dark Grey"}];
                window.myDoughnut=new Chart(document.getElementById("doughnutChartCanvas").getContext("2d")).Doughnut(doughnutData,{responsive:!0});
            }
            if ($('#barChartCanvas').length) {
                var randomScalingFactor=function(){return Math.round(100*Math.random())},barChartData={labels:["January","February","March","April","May","June","July"],datasets:[{fillColor:"rgba(220,220,220,0.5)",strokeColor:"rgba(220,220,220,0.8)",highlightFill:"rgba(220,220,220,0.75)",highlightStroke:"rgba(220,220,220,1)",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]},{fillColor:"rgba(151,187,205,0.5)",strokeColor:"rgba(151,187,205,0.8)",highlightFill:"rgba(151,187,205,0.75)",highlightStroke:"rgba(151,187,205,1)",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]}]};
                window.myBar=new Chart(document.getElementById("barChartCanvas").getContext("2d")).Bar(barChartData,{responsive:!0});
            }
            if ($('#radarChartCanvas').length) {
                var radarChartData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",fillColor:"rgba(220,220,220,0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[28,48,40,19,96,27,100]}]};
                window.myRadar=new Chart(document.getElementById("radarChartCanvas").getContext("2d")).Radar(radarChartData,{responsive:!0});
            }
            //Chart body end
        }
    }
});

/* Form and List
-------------------------------------------------------------------*/
    yepnope({
        test: $(".dnnFormAndList").length,
        yep: SkinPath + '/js/conditional/dnn.jquery.js',
        callback: function () {
        }
    });

/* SLIDERS
-------------------------------------------------------------------*/
/* Nivo slider */
yepnope({
    test: $(".nivoSlider.wsc_call_html").length,
    yep: SkinPath + '/js/jquery.nivo.slider.pack.js',
    callback: function () {
        $('.nivoSlider.wsc_call_html').nivoSlider({
            effect: 'random',
            animSpeed: 500,
            pauseTime: 5000,
            directionNav: true,
            controlNav: true,
            pauseOnHover: false
        });
    }
});

/* Nerve slider & Video nerve slider*/
yepnope({
    test: $(".myslider.wsc_call_html, .myvideoslider").length,
    yep: SkinPath + '/js/jquery.nerveSlider.min.js',
    callback: function () {
        // simple nerve slider
        if($(".myslider.wsc_call_html").length) {
            $(".myslider.wsc_call_html").show();
            $(".myslider.wsc_call_html").startslider({
                sliderWidth: 1170,
                sliderHeight: 422,
                slideTransitionSpeed: 500,
                slideTransitionEasing: "easeOutExpo",
                slidesDraggable: true,
                sliderResizable: true
            });
        }
        // video nerve slider
        if($(".myslider.wsc_call_html").length) {
            $(".myvideoslider").show();
            $(".myvideoslider").startslider({
            showTimer:false,showArrows:false,showPause:false,
		        showLoadingOverlay:false,
		        sliderResizable: true, showDots:false
            });
        }
    }
});

/* Revolution slider */
yepnope({
    test: $(".fullwidthbanner.wsc_call_html, .rev_products").length,
    yep: { 
        'styling': SkinPath + '/css/revolution.css',
        'slider': SkinPath + '/js/jquery.themepunch.revolution.min.js',
        'plugins': SkinPath + '/js/jquery.themepunch.plugins.min.js'},
    callback:{ 
        'plugins': function () {
            // revolution slider
            if($(".fullwidthbanner.wsc_call_html").length) {
                if ($.fn.cssOriginal != undefined)
                    $.fn.css = $.fn.cssOriginal;
                $('.fullwidthbanner.wsc_call_html').revolution({
		            delay: 9000,
		            startwidth: 1170,
		            startheight: 370,
		            onHoverStop: "on",
		            navigationType: "none",
		            soloArrowLeftHOffset: 0,
		            soloArrowLeftVOffset: 0,
		            soloArrowRightHOffset: 0,
		            soloArrowRightVOffset: 0,
		            touchenabled: "on",
		            fullWidth: "on",
		            shadow: 0
                });
            }
            // Revolution slider for products
            if($(".rev_products").length) {
                if ($.fn.cssOriginal != undefined)
                    $.fn.css = $.fn.cssOriginal;
                $('.rev_products').revolution({
		            delay: 9000,
		            startwidth: 1170,
		            startheight: 350,
		            onHoverStop: "on",
		            navigationType: "none",
		            soloArrowLeftHOffset: 0,
		            soloArrowLeftVOffset: 0,
		            soloArrowRightHOffset: 0,
		            soloArrowRightVOffset: 0,
		            touchenabled: "on",
		            fullWidth: "on",
		            shadow: 0
                });
            }
        }
    }
});


/* Revolution slider new banner */
yepnope({
    test: $(".tp-banner.wsc_call_html").length,
    yep: { 
        'styling': SkinPath + '/rs-plugin/css/settings.css',
        'slider': SkinPath + '/rs-plugin/js/jquery.themepunch.revolution.min.js',
        'plugins': SkinPath + '/rs-plugin/js/jquery.themepunch.tools.min.js'},
    callback:{ 
        'plugins': function () {
			        jQuery('.tp-banner.wsc_call_html').show().revolution(
					{
					    dottedOverlay: "none",
					    delay: 16000,
					    startwidth: 1170,
					    startheight: 700,
					    hideThumbs: 200,

					    thumbWidth: 100,
					    thumbHeight: 50,
					    thumbAmount: 5,

					    navigationType: "bullet",
					    navigationArrows: "solo",
					    navigationStyle: "preview4",

					    touchenabled: "on",
					    onHoverStop: "on",

					    swipe_velocity: 0.7,
					    swipe_min_touches: 1,
					    swipe_max_touches: 1,
					    drag_block_vertical: false,

					    parallax: "mouse",
					    parallaxBgFreeze: "on",
					    parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

					    keyboardNavigation: "off",

					    navigationHAlign: "center",
					    navigationVAlign: "bottom",
					    navigationHOffset: 0,
					    navigationVOffset: 20,

					    soloArrowLeftHalign: "left",
					    soloArrowLeftValign: "center",
					    soloArrowLeftHOffset: 20,
					    soloArrowLeftVOffset: 0,

					    soloArrowRightHalign: "right",
					    soloArrowRightValign: "center",
					    soloArrowRightHOffset: 20,
					    soloArrowRightVOffset: 0,

					    shadow: 0,
					    fullWidth: "off",
					    fullScreen: "on",

					    spinner: "spinner4",

					    stopLoop: "off",
					    stopAfterLoops: -1,
					    stopAtSlide: -1,

					    shuffle: "off",

					    autoHeight: "off",
					    forceFullWidth: "off",



					    hideThumbsOnMobile: "off",
					    hideNavDelayOnMobile: 1500,
					    hideBulletsOnMobile: "off",
					    hideArrowsOnMobile: "off",
					    hideThumbsUnderResolution: 0,

					    hideSliderAtLimit: 0,
					    hideCaptionAtLimit: 0,
					    hideAllCaptionAtLilmit: 0,
					    startWithSlide: 0,
					    fullScreenOffsetContainer: ""
					});
        } //plugins
    }
});

/* Flexslider for testimonials */
if ($(".wsc-testimonial.wsc_call_html .flexslider").length) {
    $(".wsc-testimonial.wsc_call_html .flexslider").flexslider({
	    selector: ".slider-wrap > .slide",
	    animation: 'fade',
		easing: "swing",
		direction: 'horizontal',
		slideshow: true,
		slideshowSpeed: 5000,
		animationSpeed: 600,
		pauseOnHover: false,
		video: false,
		controlNav: true,
		directionNav: false
	});
};

/* Carousels
-------------------------------------------------------------------*/
$('.carousel').carousel({ interval: false});

/* Carousel */
yepnope({
    test: $("#slider_related.wsc_call_html, #slider_small.wsc_call_html, #slider_home.wsc_call_html").length,
    yep: SkinPath + '/js/jquery.carouFredSel-6.2.1-packed.js',
    callback: function () {

        /* Carousel */
        if($("#slider_related.wsc_call_html").length) {
            $('.slider-related-wrapper .show').parents('.slider-related-wrapper').css('padding', '40px 0 0');
            $('.slider-related-wrapper #slider_related.wsc_call_html').parents('.slider-related-wrapper').css('display', 'block');
            var portfolioCarousel = $("#slider_related.wsc_call_html");
            portfolioCarousel.carouFredSel({
                width: "100%", height: "auto", responsive: true,
                circular: true, /* Determines whether the carousel should be circular. "true"/"false" */
                infinite: false, /* Determines whether the carousel should be infinite. "true"/"false"
                                    Note: It is possible to create a non-circular, infinite carousel, 
                                    but it is not possible to create a circular, non-infinite carousel. */
                auto: {
                    play: true, /* Determines whether the carousel should scroll automatically or not. "true"/"false" */
                    timeoutDuration: 50000, /* The amount of milliseconds the carousel will pause. */
                    delay: 7000 /* Additional delay in milliseconds before the carousel starts scrolling the first time. */
                    },
                items: { 
                    width: 229, /* The width of the items. */
                    visible: { min: 1, max: 5} /* The number of visible items. */
                    },
                mousewheel: false, /* Scrolling via the mousewheel. "true"/"false" */
                scroll: {
                    easing: "swing", /* Indicates which easing function to use for the transition. "linear", "swing", "quadratic", "cubic" and "elastic". */
                    fx: "scroll", /* Indicates which effect to use for the transition. "scroll", "fade", "crossfade", "cover", "cover-fade", "uncover", "uncover-fade". */
                    pauseOnHover: true /* Determines whether the timeout between transitions should be paused "onMouseOver" 
                                          (only applies when the carousel scrolls automatically). "true"/"false" */
                    },
                swipe: {
                    onMouse: true, /* Determines whether the carousel should scroll via dragging (on non-touch-devices only). "true"/"false" */
                    onTouch: true /* Determines whether the carousel should scroll via swiping gestures (on touch-devices only). "true"/"false" */
                    },
                prev: { button: "#sl-prev2_related", key: "left" }, /* "#sl-prev2_related" - show control on right, "#sl-prev3_related" - show control on left */
                next: { button: "#sl-next2_related", key: "right" }, /* "#sl-next2_related" - show control on right, "#sl-next3_related" - show control on left */
                onCreate: function () {
                    $(window).on('resize', function () {
                        portfolioCarousel.parent().add(portfolioCarousel).css('height', portfolioCarousel.children().first().outerHeight() + 'px');
                    }).trigger('resize');
                }
            });
        }

        /* Carousel Single*/
        if($("#slider_small.wsc_call_html").length) {
            $('.slider-single-wrapper .show').parents('.slider-single-wrapper').css('padding', '24px 0 0');
            $('.slider-single-wrapper #slider_small.wsc_call_html').parents('.slider-single-wrapper').css('display', 'block');
            var portfolioCarousel = $("#slider_small.wsc_call_html");
            portfolioCarousel.carouFredSel({
                width: '100%', height: "auto", responsive: true,
                circular: false, /* Determines whether the carousel should be circular. "true"/"false" */
                infinite: false, /* Determines whether the carousel should be infinite. "true"/"false"
                                    Note: It is possible to create a non-circular, infinite carousel, 
                                    but it is not possible to create a circular, non-infinite carousel. */
                auto: {
                    play: false, /* Determines whether the carousel should scroll automatically or not. "true"/"false" */ 
                    timeoutDuration: 10000, /* The amount of milliseconds the carousel will pause. */
                    delay: 7000 /* Additional delay in milliseconds before the carousel starts scrolling the first time. */
                    },
                items: { 
                    width: 740, /* The width of the items. */
                    visible: { min: 1, max: 1} /* The number of visible items. */
                    },
                mousewheel: false, /* Scrolling via the mousewheel. "true"/"false" */
                scroll: {
                    easing: "swing", /* Indicates which easing function to use for the transition. "linear", "swing", "quadratic", "cubic" and "elastic". */
                    fx: "scroll", /* Indicates which effect to use for the transition. "scroll", "fade", "crossfade", "cover", "cover-fade", "uncover", "uncover-fade". */ 
                    pauseOnHover: true, /* Determines whether the timeout between transitions should be paused "onMouseOver" 
                                           (only applies when the carousel scrolls automatically). "true"/"false" */ 
                    },
                swipe: {
                    onMouse: true, /* Determines whether the carousel should scroll via dragging (on non-touch-devices only). "true"/"false" */
                    onTouch: true /* Determines whether the carousel should scroll via swiping gestures (on touch-devices only). "true"/"false" */
                },
                prev: { button: "#sl-prev3_single", key: "left" }, /* "#sl-prev2_single" - show control on right, "#sl-prev3_single" - show control on left */
                next: { button: "#sl-next3_single", key: "right" }, /* "#sl-next2_single" - show control on right, "#sl-next3_single" - show control on left */
                onCreate: function () {
                    $(window).on('resize', function () {
                        portfolioCarousel.parent().add(portfolioCarousel).css('height', portfolioCarousel.children().first().outerHeight() + 'px');
                    }).trigger('resize');
                }
            });
        }

        /* Carousel Extended*/
        if($("#slider_home.wsc_call_html").length) {
            $('.slider-home-wrapper .show').parents('.slider-home-wrapper').css('padding', '40px 0 0');
            $('.slider-home-wrapper #slider_home.wsc_call_html').parents('.slider-home-wrapper').css('display', 'block');
            $("#slider_home.wsc_call_html").carouFredSel({ 
                width: "100%", height: "variable", responsive: true,
                circular: false, /* Determines whether the carousel should be circular. "true"/"false" */
                infinite: false, /* Determines whether the carousel should be infinite. "true"/"false"
                                    Note: It is possible to create a non-circular, infinite carousel, 
                                    but it is not possible to create a circular, non-infinite carousel. */
                auto: {
                    play: false, /* Determines whether the carousel should scroll automatically or not. "true"/"false" */
                    timeoutDuration: 10000, /* The amount of milliseconds the carousel will pause. */
                    delay: 7000 /* Additional delay in milliseconds before the carousel starts scrolling the first time. */
                },
                items: { 
                    width: 231, /* Images width. */
                    visible: { min: 1, max: 3} /* The number of visible items. */
                },
                mousewheel: false, /* Scrolling via the mousewheel. "true"/"false" */
                scroll: {
                    easing: "swing", /* Indicates which easing function to use for the transition. "linear", "swing", "quadratic", "cubic" and "elastic". */
                    fx: "scroll", /* Indicates which effect to use for the transition. "scroll", "fade", "crossfade", "cover", "cover-fade", "uncover", "uncover-fade". */
                    pauseOnHover: true, /* Determines whether the timeout between transitions should be paused "onMouseOver" 
                                           (only applies when the carousel scrolls automatically). "true"/"false" */
                    items: 3 /* The number of visible items. */
                },
                swipe: {
                    onMouse: true, /* Determines whether the carousel should scroll via dragging (on non-touch-devices only). "true"/"false" */
                    onTouch: true /* Determines whether the carousel should scroll via swiping gestures (on touch-devices only). "true"/"false" */
                },
                prev: { button: "#sl-prev2_extended", key: "left" }, /* "#sl-prev2_extended" - show control on right, "#sl-prev3_extended" - show control on left */
                next: { button: "#sl-next2_extended", key: "right" } /* "#sl-next2_extended" - show control on right, "#sl-next3_extended" - show control on left */
            });
        }

        /* Clients carousel */
        if($("#slider_related.wsc_call_html.wsc_clients_carousel").length) {
            $('.slider-related-wrapper .show').parents('.slider-related-wrapper').css('padding', '40px 0 0');
            $('.slider-related-wrapper #slider_related.wsc_call_html.wsc_clients_carousel').parents('.slider-related-wrapper').css('display', 'block');
            var portfolioCarousel = $("#slider_related.wsc_call_html.wsc_clients_carousel");
            portfolioCarousel.carouFredSel({
                width: "100%", height: "auto", responsive: true,
                circular: true, /* Determines whether the carousel should be circular. "true"/"false" */
                infinite: true, /* Determines whether the carousel should be infinite. "true"/"false"
                                    Note: It is possible to create a non-circular, infinite carousel, 
                                    but it is not possible to create a circular, non-infinite carousel. */
                auto: {
                    play: true, /* Determines whether the carousel should scroll automatically or not. "true"/"false" */
                    timeoutDuration: 0 /* The amount of milliseconds the carousel will pause. */
                    },
                items: { 
                    width: 229, /* The width of the items. */
                    visible: { min: 1, max: 6} /* The number of visible items. */
                    },
                mousewheel: false, /* Scrolling via the mousewheel. "true"/"false" */
                scroll: {
                    easing: "linear", /* Indicates which easing function to use for the transition. "linear", "swing", "quadratic", "cubic" and "elastic". */
                    fx: "scroll", /* Indicates which effect to use for the transition. "scroll", "fade", "crossfade", "cover", "cover-fade", "uncover", "uncover-fade". */
                    pauseOnHover: false, /* Determines whether the timeout between transitions should be paused "onMouseOver" 
                                          (only applies when the carousel scrolls automatically). "true"/"false" */
                    items: 1,
                    duration: 11000
                    },
                swipe: {
                    onMouse: true, /* Determines whether the carousel should scroll via dragging (on non-touch-devices only). "true"/"false" */
                    onTouch: true /* Determines whether the carousel should scroll via swiping gestures (on touch-devices only). "true"/"false" */
                    },
                prev: { button: "#sl-prev2_related", key: "left" }, /* "#sl-prev2_related" - show control on right, "#sl-prev3_related" - show control on left */
                next: { button: "#sl-next2_related", key: "right" }, /* "#sl-next2_related" - show control on right, "#sl-next3_related" - show control on left */
                onCreate: function () {
                    $(window).on('resize', function () {
                        portfolioCarousel.parent().add(portfolioCarousel).css('height', portfolioCarousel.children().first().outerHeight() + 'px');
                    }).trigger('resize');
                }
            });
        }

    }
});

/* Owl Carousel
-------------------------------------------------------------------
yepnope({
    test: $(".nivoSlider.wsc_call_html").length,
    yep: SkinPath + '/js/jquery.nivo.slider.pack.js',
    callback: function () {

    }
});
*/

/* Portfolio
-------------------------------------------------------------------*/
yepnope({
    test: $(".wsc_portfolio_gal.portfolio_html").length,
    yep: SkinPath + '/js/jquery.isotope.min.js',
    callback: function(){
        var $container = $('.wsc_portfolio_gal.portfolio_html');
        $container.imagesLoaded( function(){	
	        $('.wsc_portfolio_gal.portfolio_html').isotope({
            });
        });
    }
});

/* Portfolio fade effect 
if ($(".isotope-item").length) {
    $(function () {
        $('div.isotope-item').hide();
    });
    var i = 0; //initialize
    var int = 0;
    $(window).bind("load", function () {
        var int = setInterval("doThis(i)", 100); //fade in speed in milliseconds
    });
    function doThis() {
        var imgs = $('div.isotope-item').length;
        if (i >= imgs) {
            clearInterval(int);
        }
        $('div.isotope-item:hidden').eq(0).fadeIn(100);
        i++; //add 1 to the count
    }
}*/

/* Paginated Gallery */
yepnope({
    test: $(".holder_html.images, .holder_html.video").length,
    yep: SkinPath + '/js/jPages.js',
    callback: function(){

        /* Paginated Gallery */
        if($(".holder_html.images").length) {
            $(".holder_html.images + .row").css("display", "block");
            $("div.holder_html.images").jPages({
                containerID  : "itemContainer",
                perPage      : 12, /* Number of items to be displayed per page */
		        keyBrowse   : true /* If you set keyBrowse to true you can browse the pages using your keyboard left and right keys. */
            });
        }

        /* Video Gallery */
        if($(".holder_html.video").length) {
            $(".holder_html.video + .row").css("display", "block");
            $("div.holder_html.video").jPages({
                containerID  : "itemContainer",
                perPage      : 4, /* Number of items to be displayed per page */
		        keyBrowse   : true /* If you set keyBrowse to true you can browse the pages using your keyboard left and right keys. */
            });
        }
    }
});

/*************************************************************
    SOCIAL WIDGETS    
**************************************************************/

/* FLICKR - add your id - find it here - http://idgettr.com/ */
if ($('.FlickrImages').length) {
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=00000000@N08&lang=en-us&format=json&jsoncallback=?", function(data){
		$.each(data.items, function(i,item){
			if(i<=9){ // <— change this number to display more or less images
				$("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul")
				.wrap("<li><a href='" + item.link + "' target='_blank' title='Flickr'></a></li>");
			}
		});			
    });
}	

/* DRIBBBLE - add your id */
if ($('#dribbbleContainer').length) {
    (function(e){"use strict";e.jribbble={};var t=function(t,s){e.ajax({type:"GET",url:"http://api.dribbble.com"+t,data:s[1]||{},dataType:"jsonp",success:function(e){e===undefined?s[0]({error:!0}):s[0](e)}})},s={getShotById:"/shots/$/",getReboundsOfShot:"/shots/$/rebounds/",getShotsByList:"/shots/$/",getShotsByPlayerId:"/players/$/shots/",getShotsThatPlayerFollows:"/players/$/shots/following/",getPlayerById:"/players/$/",getPlayerFollowers:"/players/$/followers/",getPlayerFollowing:"/players/$/following/",getPlayerDraftees:"/players/$/draftees/",getCommentsOfShot:"/shots/$/comments/",getShotsThatPlayerLikes:"/players/$/shots/likes/"},o=function(e){return function(){var s=[].slice.call(arguments),o=e.replace("$",s.shift());t(o,s)}};for(var r in s)e.jribbble[r]=o(s[r])})(jQuery,window,document);
}

/* Dribbble gallery */
if ($('#dribbbleContainer.gallery').length) {    
    var callback = function (playerShots) {
	var html = '';
		$.each(playerShots.shots, function (i, shot) {
           html += '<li>';
           html += '<div class="span4">'; /* "span4" - 3 images per row; "span3" - 4 images per row*/
           html += '<a href="' + shot.url + '">';
           html += '<img src="' + shot.image_url + '" ';
           html += '</a></div></li>';
        });
		$('#dribbbleContainer.gallery').html(html);
	};
	$.jribbble.getShotsByPlayerId('PASTE YOUR ID HERE', callback, {per_page: 12}); /* Add your ID and set the number of items to download */
}

yepnope({
    test: $(".holder.dribbble").length,
    yep: SkinPath + '/js/jPages.js',
    callback: function(){
        $(".holder.dribbble + .row").css("display", "block");
        $("div.holder.dribbble").jPages({
            containerID  : "dribbbleContainer",
            perPage      : 6, /* Number of items to be displayed per page */
	    keyBrowse   : true /* If you set keyBrowse to true you can browse the pages using your keyboard left and right keys. */
        });
    }
});

/* Dribbble feed */
if ($('#dribbbleContainer.feed').length) {    
    var callback = function (playerShots) {
    var feed = '';
		$.each(playerShots.shots, function (i, shot) {
           feed += '<li>';
           feed += '<div class="span4">'; /* "span4" - 3 images per row; "span3" - 4 images per row*/
           feed += '<a href="' + shot.url + '">';
           feed += '<img src="' + shot.image_teaser_url + '" ';
           feed += '</a></div></li>';
        });
		$('#dribbbleContainer.feed').html(feed);
	};
	$.jribbble.getShotsByPlayerId('PASTE YOUR ID HERE', callback, {per_page: 6}); /* Add your ID and set the number of items to download */
}

/* TWITTER - add your id */
yepnope({
    test: $(".widget-tweets").length,
    yep: SkinPath + '/js/conditional/jquery.twitter.feed.js',
    callback: function () {
        $.getJSON(SkinPath + "/CommonParts/TwitterHandler.ashx?screen_name=wscnews", function (yourRawJSONData) {
            $(".widget-tweets .tweets").twitterFeed({
                count: 2,
                rawData: yourRawJSONData,
                prepend: "<div class='tweetItem'>",
                append: "</div>",
                date: { prepend: "<div>", append: " - ", order: 3, cssClass: "tweet_time" },
                retweet: { show: false },
                favorite: { show: false }
            });
        });
    }
});

/* INSTAGRAM */
yepnope({
    test: $("#instafeed").length,
    yep: SkinPath + '/js/conditional/instafeed.min.js',
    callback: function () {
        var userFeed = new Instafeed({
            get: 'user',
            userId: 000000000, /* Unique id of a user (number) */
            accessToken: 'PASTE YOUR ACCESS TOKEN HERE',
            resolution: 'low_resolution', /* Possible values: 'thumbnail', 'low_resolution', 'standard_resolution' */
            limit: '6', /*  Maximum number of Images to add. Max of 60. */
   template: '<div class="element col-md-4"><a href="{{link}}"><img src="{{image}}" /></a></div>' /*Comment this line and uncomment the next one if you want to use instagram stream as a feed*/
            /*template: '<div class="element col-md-4 feed"><a href="{{link}}"><img src="{{image}}" /></a></div>'*/ 
        });
        userFeed.run();
    }
});

/* PARTICLES.JS */
yepnope({
    test: $("#particles-js.wsc-particles-def").length,
    yep: { 
    'main': SkinPath + '/js/conditional/particles.min.js',
    'data': SkinPath + '/js/conditional/particles.data.def.js'}
});
yepnope({
    test: $("#particles-js.wsc-particles-bbl").length,
    yep: { 
    'main': SkinPath + '/js/conditional/particles.min.js',
    'data': SkinPath + '/js/conditional/particles.data.bbl.js'}
});
yepnope({
    test: $("#particles-js.wsc-particles-star").length,
    yep: { 
    'main': SkinPath + '/js/conditional/particles.min.js',
    'data': SkinPath + '/js/conditional/particles.data.star.js'}
});
yepnope({
    test: $("#particles-js.wsc-particles-tria").length,
    yep: { 
    'main': SkinPath + '/js/conditional/particles.min.js',
    'data': SkinPath + '/js/conditional/particles.data.tria.js'}
});


/***************************************************
    Floating Header
***************************************************/
if($("#header").length){
    if(typeof(floating_header) != "undefined" && floating_header && !($(".wsc_onepage").length)){

        /* Floating header */
        var showHeight = $('#main_content').offset();
        var windowHeight= $(window).height();
        var docHeight=$(document).height();
        var floatLogo = $('#header .logo');
        var floatNav = $('.main_menu ul.sf-menu');
        // Build Floated header
        $("<div id='floating-header' class='header'>\
            <div class='container'>\
                <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.main_menu.floating'>\
				          <i class='fa fa-bars'></i>\
			          </button>\
                <div id='floating-logo'><div class='logo'>" + floatLogo.html() + "</div></div>\
                <div class='clearmob'></div>\
                <nav class='main_menu wsc_main collapse floating menu_classic'><div class='menu_wrap'><ul class='nav sf-menu'>" + floatNav.html() + "</ul></div></nav>\
            </div>\
        </div>").appendTo("body form .wsc_generic_skin");

        $('#floating-header').addClass("only-to-top hide-bar").removeClass("show-bar").css("display", "block");

        $(window).resize(function () {
            windowHeight= $(window).height();
            docHeight=$(document).height();
        });

        // Check on scroll event
        var lastScrollTop = $(window).scrollTop();
        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();
            if (currentScroll > lastScrollTop) {
                // downscroll code
              //  $('#floating-header').fadeIn();
                if((currentScroll < docHeight-windowHeight-120)) {
                   $('#floating-header.only-to-top').addClass("hide-bar").removeClass("show-bar");
                }
                else{
                   setTimeout(function () { $('#floating-header.only-to-top').addClass("show-bar").removeClass("hide-bar");},100);
                }

            } else {
                // upscroll code
                // $('#floating-header').fadeOut();
                if((currentScroll < windowHeight+120)) {
                    setTimeout(function () { $('#floating-header.only-to-top').addClass("hide-bar").removeClass("show-bar");},100);
                }
                else{
                    $('#floating-header.only-to-top').addClass("show-bar").removeClass("hide-bar");
                }
            }
            lastScrollTop = currentScroll;
        });

        if ($('body form #ControlBar_ControlPanel').length) {
            $(".wsc_generic_skin #floating-header").css("top", "54px");
        }

        if ($('body form #RibbonBar_ControlPanel').length) {
            $(".wsc_generic_skin #floating-header").css("top", "38px");
        }

    }; // End IF
}; // End IF

if($("#header.wsc-content-dark").length){
    $('#floating-header').addClass("wsc-content-dark")
}
if ($("#header.wsc-content-white").length) {
    $('#floating-header').addClass("wsc-content-white")
}

/*Transparent headers & TopPane additional styles */
if ($('.TopPane:not(.DNNEmptyPane)').length) {
    $(".wsc_generic_skin .header").addClass('wscTopFull');        
};    

//fading banner caption in hero module with parallax        
(function ($) {
  if ( ($(".wsc-caption-scrollable").length) && ($('body').hasClass('no-touch')) && (jQuery.browser.mobile == false) ){
    VerticalMiddleOffset();
    }
})(jQuery)


function VerticalMiddleOffset(){

var $verticalMiddleEl = $('.wsc-caption-scrollable'),
    verticalMiddleH = $verticalMiddleEl.outerHeight(),
    vmElementWrapper= $verticalMiddleEl.parents("#banner");

    limitBottom=vmElementWrapper.offset().top+vmElementWrapper.outerHeight(true)+120;
    defaultMargin=-verticalMiddleH/2;
    if (vmElementWrapper.hasClass("homepage-hero-noheader, homepage-hero-noheaderintro"))
    { 
        vmheaderHeight = $("#header").outerHeight(),
        defaultMargin= defaultMargin-vmheaderHeight/2;
    }
    
    $verticalMiddleEl.css({ position: 'relative', top: '50%', width: '100%', marginTop: defaultMargin +'px' });

    $(window).on("resize", function () {$verticalMiddleEl.css({ marginTop:defaultMargin +'px' }); });

    $(window).on( 'scroll', function(){
        vmTopOffset=  $(window).scrollTop();
        if(vmTopOffset <= (limitBottom+verticalMiddleH)) {
        $verticalMiddleEl.css({ marginTop: (defaultMargin+vmTopOffset/2) +'px', opacity:1.2-(vmTopOffset-100)/limitBottom});
        }
        
    } );
}

/***************************************************
    Fade out content. Preloader. Spinner.
***************************************************/
$(window).load(function () {
    //setTimeout(function () { 
    $(".wsc_generic_skin, .common_background").stop().animate({ opacity: 1 }, 700);
    $("#loading-spinner").css('display', 'none');
    //}, 2500);
});