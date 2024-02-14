// JavaScript Document
// Bootstrap Parent Menu element fix
jQuery(function($) {
$('.navbar .dropdown').hover(function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

}, function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

});

$('.navbar .dropdown > a').click(function(){
location.href = this.href;
});

//Search
$('#search_link').click(function() {
       $('.search_main').slideToggle(300);
	   $('.search_main').css({"display": "block", "opacity": "1", "visibility": "visible"});
       $(this).toggleClass('close');
   });

	
//Login Drawer
$('#login p').click(function() {
       $('#login-form').slideToggle(100);
       $(this).toggleClass('close');
   });
});

//Back to Top
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click

       $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $('#back-to-top').tooltip('show');

});