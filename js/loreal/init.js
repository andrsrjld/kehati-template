/*
 * Copyright (c) 2017 ThemeMarket
 * Author: ThemeMarket
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	vavilon_tm_imgtosvg();
	vavilon_tm_hamburger();
	vavilon_tm_back_title();
	vavilon_tm_title_span();
	vavilon_tm_magnific_popup();
	vavilon_tm_owl_carousel();
	vavilon_tm_portfolio();
	vavilon_tm_jarallax();
	vavilon_tm_filter_menu();
	vavilon_tm_totop();
	vavilon_tm_totop_myhide();
	vavilon_tm_nav_bg_scroll();
	vavilon_tm_anchor();
	vavilon_tm_contact_form();

	jQuery(window).on('scroll',function(){
		vavilon_tm_title_animation();
		vavilon_tm_totop_myhide();
		vavilon_tm_nav_bg_scroll();
	});
	
	jQuery(window).on('resize',function(){
		vavilon_tm_back_title();
	});
	
	jQuery(window).on('load', function(e) {
		e.preventDefault();
	});
	
});

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function vavilon_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}
// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------
function vavilon_tm_hamburger(){
	
	"use strict";
	
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.vavilon_tm_mobile_menu_wrap');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}
// -----------------------------------------------------
// ---------------  BIG BACK TITLE  --------------------
// -----------------------------------------------------

function vavilon_tm_back_title(){

	"use strict";
	
	var div			= jQuery('.vavilon_tm_title_holder .back_title');
	
	div.each(function(){
		var element			= jQuery(this);
		var elementW		= element.outerWidth();
		var span		  	= element.find('.back_span');
		var spanW		  	= span.outerWidth();
		var qism		  	= elementW/spanW;
		
		if(spanW>elementW){
			span.css({transform:'scale('+qism+')'});
		}
	});
}
	
function vavilon_tm_title_span(){
	
	"use strict";
	
	var element		=jQuery('.vavilon_tm_title_holder .back_title .back_span');
	
	element.html(function (i, html) {
		var chars = jQuery.trim(html).split("");
		return '<span>' + chars.join('</span><span>') + '</span>';
	});	
}

function vavilon_tm_title_animation(){
	
	"use strict";
	
	var element			= jQuery('.vavilon_tm_title_holder .back_title .back_span');
	var windowScroll	= jQuery(window).scrollTop();
	var H				= jQuery(window).height();
	
	element.each(function(){
		var el = jQuery(this);
		var elH = el.height();
		var odd = el.find('span:nth-of-type(2n+1)');
		var even = el.find('span:nth-of-type(2n)');
		var lasttop = (elH/H);
		var elementTopOff	= el.offset().top;
		var lastscroll = (windowScroll - elementTopOff + H/2) * lasttop;
		var lastscroll2 = lastscroll * (-1);	
		
		if(windowScroll>elementTopOff-H){
			el.addClass('doit');
		}else{
			el.removeClass('doit');
		}

		if(el.hasClass('doit')){
			odd.css({top:lastscroll+'px'});
			even.css({top:lastscroll2+'px'});
		}
	});
	
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function vavilon_tm_magnific_popup(){
	
	"use strict";
	
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			type: 'iframe',
		});
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function vavilon_tm_owl_carousel(){
	
	"use strict";
	
	var carusel			= jQuery('.owl-carousel');
  	carusel.owlCarousel({
		loop:true,
		margin:0,
		autoplay:6000,
		autoWidth: false,
		nav: false,
		items:1,
		smartSpeed:2000
	});
	
	var	prev		= jQuery('.carousel_nav a.prev');
	var	next		= jQuery('.carousel_nav a.next');
	
	prev.on('click',function(){
		carusel.trigger('prev.owl.carousel');
		return false;
	});
	next.on('click',function(){
		carusel.trigger('next.owl.carousel');
		return false;
	});
}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.vavilon_tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 
function vavilon_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.vavilon_tm_portfolio_list');
		var filter		 = jQuery('.vavilon_tm_portfolio_wrap .vavilon_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

function vavilon_tm_filter_menu(){
	
	"use strict";
	
	var filterMenu			= jQuery('.vavilon_tm_portfolio_filter_wrap .filter_menu');
	var filterButton		= jQuery('.vavilon_tm_portfolio_filter_wrap .filter_box a');
	var filterHideButton	= jQuery('.vavilon_tm_portfolio_filter_wrap .filter_menu .close a');
	
	filterButton.on('click',function(){
		filterMenu.addClass('hide');
		return false;
	});
	filterHideButton.on('click',function(){
		filterMenu.removeClass('hide');
		return false;
	});
	
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function vavilon_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function vavilon_tm_totop(){
	
	"use strict";
	
	jQuery(".vavilon_tm_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}
function vavilon_tm_totop_myhide(){
	
	"use strict";
	
	var toTop		=jQuery(".vavilon_tm_totop");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;
		
		if(topOffSet > 1000){
			toTop.addClass('opened');	
		}else{
			toTop.removeClass('opened');
		}
	}
}

// -----------------------------------------------------
// ------------    NAV BACKGROUND  SCROLL    -----------
// -----------------------------------------------------

function vavilon_tm_nav_bg_scroll(){
	
	"use strict";
	
	var header 			= jQuery('.vavilon_tm_header');
	var headerOffsetTop	= header.offset().top;
	var windowScroll	= jQuery(window).scrollTop();
	
}
function vavilon_tm_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
	
	var section      = jQuery('.vavilon_tm_section').offset().top;
	var scrollOffset = 0;
	
	jQuery(".anchor > a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: scrollOffset-section},
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;	
	});
	
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function vavilon_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message,}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}